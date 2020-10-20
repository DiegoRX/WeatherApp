import React, {useState, useEffect, useReducer} from 'react';
import { connect } from 'react-redux';
import MainImg from '../container/MainImg';
import Search from '../container/Search';
import Grid from '../container/Grid';
import styled from 'styled-components';
import { reducer } from '../reducer';




const ImgContainer = styled.div`
    width: 600px;
    margin: auto;
    // color: black;
    text-align: center;
    // display: flex;
    // flex-direction: column;
`;
const Img= styled.img`
    width: 300px;
    height: 300px;
    margin: auto;
`;

const Main = () => {

    //States
    const [localWeather, setLocalWeather] = useState([]);
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState();

    //API KEY
    const apiKey = '97f30f910fef1ef5f595997f5097cee6';

    //SET DATE
    const SetDate = (index) => {
      const today = Date.now();
      const ms = 86400000 * (index);
      return today + ms
    }

    //DATA Fetch
    const getWeatherOfCity = async (city)  => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        setCity(data)
        const weather = data.weather
        const weatherIcon = (weather[0].icon);
        setIcon(weatherIcon);
        const LAT = (data?.coord?.lat); 
        const LON = (data?.coord?.lon);
        getWeatherOfCity7Days(LAT, LON);
        const week = await getWeatherOfCity7Days(LAT, LON);
        setLocalWeather(week.slice(0,7));
             
        return;
    }

    const getWeatherOfCity7Days = async (lat, lon)  => {
 
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        const dailyData = []
        const {temp} = data.current;
        const {daily} = data;
      
        daily.map((item, index) => dailyData.push({
          temp: item.temp.day,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
          day: SetDate(index),
          dayN: new Date(SetDate(index)).getDay(),
        }))
        

        return dailyData;
    }
  
    //Handling Search
      const handleSearch = (keyWord) => {
          getWeatherOfCity(keyWord);
          sessionStorage.setItem('key', 'value');

      };

    //MAIN DATA
       const KELVIN = 273.15;

       const maxTemp = (city?.main?.temp_max) - KELVIN; 
       const minTemp = (city?.main?.temp_min) - KELVIN; 
       const humidity = (city?.main?.humidity); 
       const windSpeed = (city?.wind?.speed);

    //WEEK DATA
       const temp = (localWeather?.hourly?.temp) - KELVIN; 

    //BEFORE SEARCH
   useEffect(() => {
       if (city.id > 0) {
         setLoading(false);
       }
     }, [city]);

    return(
    <section>
        <div>
            <Search onClick={handleSearch}/>
        </div>                
      {loading ? (
        <ImgContainer className='center'>
          <h3>DATA WILL APEAR ON THIS SCREEN</h3>
          <Img src={`http://openweathermap.org/img/wn/02d@2x.png`} alt=''/>
          <h5>Search for any city</h5>
        </ImgContainer>
      ) :
        ( <>
            <MainImg 
              iconUrl={icon}
              city={city.name}
              maxTemp={maxTemp}
              minTemp={minTemp}
              humidity={humidity}
              windSpeed={windSpeed}
            />
            <div>
            <Grid
             localWeather={localWeather}
            /> 
         </div>
         </>
        )}

    </section>)
};


export default Main;
