import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(1000/7)px;
    margin: auto;
    border-rigth:0.5px solid grey;
    text-align: center;
`;
const DateBox = styled.div`
    display: inline-flex;
    width
`;
const P = styled.p`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const CityItem = ({ i, date, day, src, alt, temp, description }) => {

    return(
            <Box key={i}>
                <DateBox><P>{date}</P><P>{day}</P></DateBox>                
                <img src={src} alt={alt}/>
                <div>{temp}°C</div>
                <div>{description}</div>
            </Box>
    )
};

export default CityItem;