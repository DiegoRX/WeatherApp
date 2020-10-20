import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addCity } from '../../actions';

const ImgContainer = styled.div`
    width: 600px;
    margin: auto;
    color: black;
    justify-content: center;
    display: flex;
`;
const Img= styled.img`
    width: 300px;
    height: 300px;
    margin: auto;
`;
const Hr = styled.hr`
    width: 600px;
    margin: auto;
    color: black;
`;
const UlContainer = styled.div`
    width: 800px;
    margin: auto;
    align-items: center;
`;
const Ul = styled.ul`
    list-style: none;
    display: inline-flex;
    margin: 15px auto;
    padding-left: 99px;
    align-items: center;
`;
const Li = styled.li`
    padding: 5px;
`;
const BlueLabel = styled.label`
background-color: blue;
color: white;
border-radius: 20%;
`;
const GreyLabel = styled.label`
    background-color: grey;
    color: white;
    border-radius: 20%;
`;

const MainImg = (props) => {
    const { iconUrl, city, maxTemp, minTemp, humidity, windSpeed } = props;
    const handleSetFavorites = () => {
        props.addCity({ iconUrl, city, maxTemp, minTemp, humidity, windSpeed })
    }
    handleSetFavorites()

    return(
            <div>
                <ImgContainer>
                    <Img src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`} alt=""/>
                </ImgContainer>
                <Hr />
                <UlContainer>
                <Ul>
                        <Li>{city}</Li>
                        <Li><BlueLabel>{maxTemp.toFixed(1)}°C</BlueLabel></Li>
                        <Li><GreyLabel>{minTemp.toFixed(1)}°C</GreyLabel></Li>
                        <Li>Humidity: {humidity}%</Li>
                        <Li>|</Li>
                        <Li>Wind Speed: {windSpeed} m/s</Li>
                    </Ul>
                </UlContainer>
            </div>
    )
};

const mapDispatchToProps = {
    addCity,
  }
  
  export default connect(null, mapDispatchToProps)(MainImg);
