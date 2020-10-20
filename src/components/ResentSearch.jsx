import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions';
import CityItem from '../container/CityItem';
import styled from 'styled-components';

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    width: 800px;
    margin: auto;
    border: 0.5px solid grey;
    padding: 40px;
    
`;

const ResentSearch = ({ myList }) => {

    const toFixed = (n) => n.toFixed(1)
    console.log(myList.iconUrl)
    return(
        <>
            <h3>Your Recent Searches will appear on this screen</h3>
            <GridBox>
                 {myList.map((day, i) => (
            <CityItem key={i}  
             src={`http://openweathermap.org/img/wn/${day.iconUrl}@2x.png`}
             alt={`http://openweathermap.org/img/wn/${day.iconUrl}@2x.png`}
             temp={toFixed(day.maxTemp)}
             description={day.city}
            />
            ))}
            </GridBox>
           
        </>
    );
}

const mapStateToProps = state =>{
    return {
        myList: state.myList,
    }
}

export default  connect(mapStateToProps, null)(ResentSearch);
