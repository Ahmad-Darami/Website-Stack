import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import FontStyles from '@/Styles/GlobalStyles';
import { useState, useEffect } from "react";
import Navbar from '@/components/Dashboard/Navbar';
import {CreateData} from '../backend/Database';
import {collection} from "firebase/firestore"
import {db , auth} from "../backend/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router'

const ContactMessages = collection(db, "contact-messages"); 

const ContactMe = () => {
    const [MessageBody,setMessageBody] = useState('')
    const [loggedIn, setLoggedIn] = useState(false); 
    const [User, setUser] = useState(null);
    const router = useRouter()  

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        setLoggedIn(true);
        setUser(user)
      } else {
        console.log("User not logged in.");
        setLoggedIn(false);
        alert('you are not logged in! Log in first! Returning to dashboard')
        router.push('/')
        
      }
    });

  return () => unsubscribe(); 
  }, []); 




    return (
        <>
        <Navbar/>
        <ContactDiv>
        <Suggestions>Want to contact me? </Suggestions>
        <ContactInput 
            placeholder='Write your message here and let me know!'
            value = {MessageBody} 
            onChange={(e) => setMessageBody(e.target.value)}/>
        <SubmitMessage 
            onClick={async () =>{
            if (!MessageBody.trim()) {
              console.log("Message is empty, not sending."); 
              return; 
            }
            console.log("Button clicked, sending message:", MessageBody);
            await CreateData(ContactMessages,{message:`${User.email} says: ${MessageBody}`});
            setMessageBody('')
        }}>
            Submit Contact
        </SubmitMessage>
        </ContactDiv>
        </>



    );







};

const SubmitMessage = styled.button`
margin: 5px;

`

const Suggestions = styled.p`
margin: 20px;
font-size: 30px;
text-align: center;
`


const ContactDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
`

const ContactInput = styled.textarea`
resize:none;
height: 30%;
width: 50%;
text-align: center;

`

export default ContactMe;
