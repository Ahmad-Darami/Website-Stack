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
    {/* Left-aligned buttons */}
    <div style={{ display: "flex", gap: "0.rem", alignItems: "center" }}>
          <Home />
          <ButtonLink href="">Custom GPT!</ButtonLink>
          <ButtonLink href="">Contact Me!</ButtonLink>
        </div> 

    {/* Right-aligned buttons */}
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SSOLink href="/auth/signup">Sign Up</SSOLink>
          <SSOLink href="/auth/login">Login</SSOLink>
    </div>
        
    
    </Nav>
    </>
  );
};

const ButtonLink = styled(Link)`
padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight:bold;
color: grey;
align-items:left;
`;

const Nav = styled.nav`
background-color: navy;
display: flex;
align-items:center;
justify-content: space-between;
gap: 25px;
height: 40px;
flex:flex-shrink;
`;

const Logo = styled(Link)`
align-items:left;
`;

const NavLinks = styled.div`
display:flex;
align-items:left;

`;

const SSOLink = styled(Link)`

padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight:bold;
color: Grey;
align-items:right;
`;

export default Navbar;
