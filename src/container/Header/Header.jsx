import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const HeaderDiv = styled.div`
height: 60px;
background-color: #1D99C6;
align-items: center;

`;
const H2 = styled.h2`
color: white;
padding-left: 100px;
font-size: 30px;
margin: 12px;
`;
const HeaderIMG = styled.div`
  display:block;
  width:255px;
  height: 65px;
  background-color: white;
  @media (max-width: 1024px) {
    margin: auto;
  }
`;
const LogOut = styled.button`
position: fixed;
top: 12px;
right: 15px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv className='header'>
        <Burger />
        <Link to='/' style={{ textDecoration: 'none' }}><H2>WEATHER APP</H2></Link>
      </HeaderDiv>
    );
  }
}

export default Header;
