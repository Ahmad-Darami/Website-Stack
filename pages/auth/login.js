import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import {SignIn} from '/backend/Auth'
import {auth} from '../../backend/Firebase'


const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const router = useRouter()


  async function handleLogin(){
    try {
      const user = await SignIn(auth, email, password);
      console.log(user)
    if (user) {
      console.log('Login successful', user);
      router.push('/')
      }
  } catch (error) {
    console.error('Login failed:', error.message);
    const firebaseError = error.code ? error.code : error.message;
    
    window.alert('Login failed: ' + firebaseError);
    
}
}


  return (
    <>
    <Navbar/>
    <LogInSection>
    <Section>
    <Header>
      Login
    </Header>
      <InputTitle>Email: </InputTitle>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
    <InputTitle>Password</InputTitle>
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <MainButton onClick={handleLogin}>Login</MainButton>
    </Section>
    
    </LogInSection>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: px ;
  height: 70px;
  width: 400px;
  justify-content: center;
`;

const LogInSection = styled.div`
  display: flex;
  height: 100vh;
  width:100vw;
  justify-content: center;
  padding: 5px;
  align-items:center;
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  padding-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
  color: #666;
`;

const MainButton = styled.button`
  font-size: 16px;
  width:105px;
  justify-content:center;
  margin-top:10px;
  height:90px;

  /* Modern Styling */
  display: flex;
  align-items: center;
  padding: 9px;
  background: linear-gradient(135deg, #007bff, #0056b3); /* Gradient for a modern effect */
  color: white;
  border: none;
  border-radius: 8px; /* Smooth, rounded edges */
  font-weight: bold;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003f80);
    transform: translateY(-2px); /* Slight lift effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98); /* Subtle press effect */
  }
`;

const UserAgreementText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

const UserAgreementSpan = styled(Link)`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-of-type)::after {
    content: ', '; /* Adds comma between links */
  }
`;


export default Login