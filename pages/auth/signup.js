import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { IsEmailInUse, register} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {SignUpUser} from '/backend/Auth'
import {auth} from '../../backend/Firebase'

const Signup = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()

  async function validateEmail(){
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(emailRegex.test(email) == false ){
        return false;
    }
    console.log('so far so good...')
    const emailResponse = await IsEmailInUse(email)
    console.log('email response', emailResponse)
    
    if(emailResponse.length == 0 ){
        return false;
    }

    return true;
}

  async function handleSignup(){
    const isValidEmail = await validateEmail()
    console.log('isValidEmail', isValidEmail)
    
    if(!isValidEmail){ return; }
    
    try{
        await SignUpUser(auth,email,password) 
        router.push('/')
    }catch(err){
        console.log('Error Signing Up', err)
    }
  }


  return (
    <>
    
    <Navbar/>
    
    <SignUpSection>
    <Section>
      <Header>Signup</Header>
      <InputTitle> Email: </InputTitle>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      
    
      <InputTitle>
      Password: 
      </InputTitle>
    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <MainButton onClick={handleSignup}>Signup</MainButton>
    </Section>
    
    
    
    </SignUpSection>
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

const SignUpSection = styled.div`
  display: flex;
  height: 100vh;
  width:100vw;
  justify-content: center;
  padding: 5px;
  align-items:center;
  
  
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  text-align:;
  padding-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
`;

const MainButton = styled.button`
  font-size: 16px;
  width:105px;
  justify-content:center;
  margin-top:10px;
  height:90px;
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
`;

const UserAgreementSpan = styled(Link)` 
  color: #007bff;

`;


export default Signup