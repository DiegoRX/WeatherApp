import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionAside = styled.section`
    top: 60px;
    flex: 1 0 auto;
    height: 100%;
    width: 255px;
    display: flex;
    outline: 0;
    z-index: 1200;
    position: fixed;
    overflow-y: auto;
    flex-direction: column;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    flex-flow: column nowrap;
    background-color: white;
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
    top: 60px;
    left: 0;
    height: 100vh;
    width: 255px;
    padding-top: 0px;
    transition: transform 0.3s ease-in-out;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 50px;
  background-color: #91BBE2;
  text-align: center;
  justify-content: center;
  color: black;
  `;

const Aside = ({ open }) => {
  return (
    <SectionAside className='aside' open={open}>
      <Link to='resentSearch' style={{ textDecoration: 'none' }}>
      <SearchContainer>
        <p>Recent searches</p>
      </SearchContainer>
      </Link>      
    </SectionAside>
  );
};

export default Aside;
