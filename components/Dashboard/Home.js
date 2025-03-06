import React from 'react';
import Link  from 'next/link';
import { FaReact } from "react-icons/fa"; 
import styled from 'styled-components';

const Home = () => {
  return (
    <Square href="/dashboard">
      <FaReact />
    </Square>
  );
};

const Square = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #AFA29D; 
  border-radius: 4px; 
  text-decoration: none;

  
  svg {
    width: 22px;
    height: 22px;
    fill: white; 
  }

  // &:hover {
  //   background-color: #0056b3; 
  }
`;

export default Home;
