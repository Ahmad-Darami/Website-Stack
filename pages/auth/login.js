import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import {login, isEmailInUse} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import {SignIn} from '/backend/Auth'
import {auth} from '/backend/firebase'


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

    // Display the error message in an alert
    
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
    
    <Section>
    <InputTitle>Password</InputTitle>
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <MainButton onClick={handleLogin}>Login</MainButton>
    </Section>
    </Section>
    </LogInSection>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 
  height: 70px;
  width: 400px;
  justify-content: center;
`;

const LogInSection = styled.div`
  display: flex;
  height: 100vh;
  overflow: none;
  justify-content: center;
  
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  padding: 2px;
`;

const Input = styled.input`
  font-size: 16px;

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
  color: #666;
`;

const MainButton = styled.button`
  background-color: #007bff;
  margin-left: 5px;
  &:hover {
    background-color: #0056b3;
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