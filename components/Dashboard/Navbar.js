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
  


  
  console.log(loggedIn);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        setLoggedIn(true);
      } else {
        console.log("User not logged in.");
        setLoggedIn(false);
      }
    });

  return () => unsubscribe(); // ✅ Cleanup listener to prevent memory leaks
  }, []); // ✅ Empty dependency array ensures it runs only once

  return (
    <GlobalNavbar>
    <FontStyles />
    <Nav>
    {/* Left-aligned buttons */}
    {loggedIn ? ( <>
      <div style={{ display: "flex", gap: "0.rem", alignItems: "center" }}>
                <Home/>
                <ButtonLink href="/CustomGPT">Custom GPT!</ButtonLink>
                <ButtonLink href="/contact">Contact Me!</ButtonLink>
              </div> 

          
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                
              
                <LogOutButton        
                onClick={ () => {
                  signOut(auth);
                  window.location.reload();
                  }}>  
                  Log Out 
                </LogOutButton>
                
          </div>
          </>
) : ( <>
    <div style={{ display: "flex", gap: "0.rem", alignItems: "center" }}>
      <Home />
      <ButtonLink href="/CustomGPT">Custom GPT!</ButtonLink>
      {/* <ButtonLink href="/contact">Contact Me!</ButtonLink> */}
    </div> 

    
    <div style={{ display: "flex", gap: "0rem", alignItems: "center" }}>
      <SSOLink href="/auth/signup">Sign Up</SSOLink>
      <SSOLink href="/auth/login">Login</SSOLink>
    </div>
    </>
    )}
    </Nav>
    </GlobalNavbar>
  );
};

const GlobalNavbar = styled.div`
background color:rgb(31, 106, 160);

`

const LogOutButton = styled.button`
font-family: 'Geist Sans', sans-serif;
padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight:;
color:#3D3D3D;
align-items:left;
border:none;
outline:none;
background-color: transparent;
;
`;

const ButtonLink = styled(Link)`
font-family: 'Geist Sans', sans-serif;
padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight:;
color:#3D3D3D;
align-items:left;
;
`;

// const Nav = styled.nav`
//   font-family: 'Geist Sans', sans-serif;
//   background-color: #AFA29D;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 25px;
//   height: 40px;
//   z-index: 1000;
//   border-radius: 15px;
//   border: none;
//   box-shadow: none;
//   margin: 2px;
//   padding: 10px; /* ✅ Padding will now be transparent */
//   background-clip: padding-box; /* ✅ Prevents background from spreading into padding */
// `;


const Nav = styled.nav`
font-family: 'Geist Sans', sans-serif;
background-color:#AFA29D;
display: flex;
align-items:center;
justify-content: space-between;
gap: 25px;
height: 40px;
flex:flex-shrink;
overflow: hidden;
z-index: 1000;
border-radius: 15px;
border:none;
box-shadow:none;
margin: 2px;
padding: 2px;
background-clip: padding-box;
`;

const Logo = styled(Link)`
align-items:left;

`;

const NavLinks = styled.div`
display:flex;
align-items:left;


`;

const SSOLink = styled(Link)`
font-family: 'Geist Sans', sans-serif;
padding: 10px 20px; /* Adds padding */
text-decoration: none; /* Optional: Remove underline */
display: inline-block; /* Ensures padding works properly */
font-family: "Inter",sans-serif;
font-size: 15px;
font-weight: 700;
color: #3D3D3D;
align-items:right;

`;


export default Navbar;
