import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CityItem from '../CityItem';

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    width: 800px;
    margin: auto;
    border: 0.5px solid grey;
    padding: 40px;
    
`;

const Grid = ({ localWeather=[] }) => {

     const dayW = (n) => {
        
        switch(n){
            case n = 0:
                return <p>Monday</p>;
                break;
            case 1:
                return <p>Tuesday</p>;
                break;			
            case 2:
                return <p>Wednesday</p>;
                break;			
            case 3:
                return <p>Thursday</p>;
                break;			
            case 4:
                return <p>Friday</p>;
                break;			
            case 5:
                return <p>Saturday</p>;
                break;			
            case 6:	
                return <p>Sunday</p>;
                break;	
            // default:
            //     return 'erroor';					
        }
        
     }
    const toFixed = (n) => n.toFixed(1)

    return(
        <GridBox>
        {localWeather.map((day, i) => (
            <CityItem key={i}  
             date={new Date(day.day).getDate()}  
             day={dayW(day.dayN)}
             src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
             alt={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
             temp={toFixed((day.temp)-273)}
             description={day.description}
            />
            ))}
    </GridBox>
    )
};

export default Grid;
