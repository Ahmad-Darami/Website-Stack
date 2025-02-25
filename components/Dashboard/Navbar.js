import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import FontStyles from '@/Styles/GlobalStyles';

const Navbar = () => {
  const { setUser } = useStateContext()
  

  return (
    <>
    <FontStyles />
    <Nav>
      <Home> </Home>
      <NavLinks>
        
        <ButtonLink  href="/auth/signup">Sign Up</ButtonLink>
        <ButtonLink  href="/auth/login">Login</ButtonLink>
        
        
      </NavLinks>
    </Nav>
    </>
  );
};

const Nav = styled.nav`
background-color: navy;
display: flex;
align-items:center;
justify-content: space-between;
gap: 25px;
height: 40px;
`;

const Logo = styled(Link)`
align-items:left;
`;

const NavLinks = styled.div`

`;

const ButtonLink = styled(Link)`

padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight:bold;
color: Purple;
`;

export default Navbar;
