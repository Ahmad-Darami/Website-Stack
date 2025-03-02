import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { LogOut } from '/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import { useState, useEffect } from "react";
import Home from '@/components/Dashboard/Home'
import FontStyles from '@/Styles/GlobalStyles';
import {auth} from '/backend/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router'



const Navbar = () => {
  const { setUser } = useStateContext()
  const [loggedIn, setLoggedIn] = useState(false); 

  const router = useRouter()
  


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in:", user.email)
      setLoggedIn(true)
    } else {
      console.log("user not logged in.")
    }
  })
  console.log(loggedIn);

  


  
  
  return (
    <>
    <FontStyles />
    <Nav>
    {/* Left-aligned buttons */}
    {loggedIn ? ( <>
      <div style={{ display: "flex", gap: "0.rem", alignItems: "center" }}>
                <Home />
                <ButtonLink href="/CustomGPT">Custom GPT!</ButtonLink>
                <ButtonLink href="/contact">Contact Me!</ButtonLink>
              </div> 

          
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                
                <SSOLink href="/auth/login">Login</SSOLink>
                <button        
                onClick={ () => {
                  signOut(auth);
                  window.location.reload();
                  }}>  
                  log out 
                </button>
                
          </div>
          </>
) : ( <>
    <div style={{ display: "flex", gap: "0.rem", alignItems: "center" }}>
      <Home />
      <ButtonLink href="/CustomGPT">Custom GPT!</ButtonLink>
      <ButtonLink href="/contact">Contact Me!</ButtonLink>
    </div> 

    
    <div style={{ display: "flex", gap: "0rem", alignItems: "center" }}>
      <SSOLink href="/auth/signup">Sign Up</SSOLink>
      <SSOLink href="/auth/login">Login</SSOLink>
    </div>
    </>
    )}
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
overflow: hidden;
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
