import React from 'react';
import Link  from 'next/link';
import { FaReact } from "react-icons/fa"; // Importing a home icon from react-icons
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
  background-color: #AFA29D; /* ✅ Set background color properly */
  border-radius: 4px; /* Adjust for rounded edges */
  text-decoration: none;

  
  svg {
    width: 22px;
    height: 22px;
    fill: white; /* ✅ Explicitly set SVG color */
  }

  // &:hover {
  //   background-color: #0056b3; // Adjust hover effect as needed
  }
`;

export default Home;
