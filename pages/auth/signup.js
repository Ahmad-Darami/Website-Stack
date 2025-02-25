import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
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
    const emailResponse = await isEmailInUse(email)
    console.log('email response', emailResponse)
    if(emailResponse.length == 0 ){
        return false;
    }

    return true;
}

  async function handleSignup(){
    const isValidEmail = await validateEmail()
    // console.log('isValidEmail', isValidEmail)
    // if(!isValidEmail){ return; }
    
    try{
        await register(email, password, setUser)
        router.push('/dashboard')
    }catch(err){
        console.log('Error Signing Up', err)
    }
  }


  return (
    <>
    
    <Navbar/>
    
    <Header>Signup</Header>
    <Section>
        
      <InputTitle> Email: </InputTitle>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      
      

    <Section>
      <InputTitle>
      Password: 
      </InputTitle>
    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <MainButton onClick={handleSignup}>Signup</MainButton>
    </Section>
    <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='https://www.youtube.com/watch?v=gjvOMoDf4-4' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>

    
    </Section>
    
    </>
  )
}



const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 70px;
  // width: 400px;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  text-align:;
  padding: 5px;
`;

const Input = styled.input`
  font-size: 16px;

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
`;

const MainButton = styled.button`
  font-size: 16px;
  margin-left: 5px;

`;

const UserAgreementText = styled.p`
  font-size: 12px;
`;

const UserAgreementSpan = styled(Link)` 
  color: #007bff;

`;


export default Signup