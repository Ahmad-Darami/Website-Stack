import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import FontStyles from '@/Styles/GlobalStyles';
import { useState, useEffect } from "react";
import Navbar from '@/components/Dashboard/Navbar';
import {CreateData} from '/backend/database';
import {collection} from "firebase/firestore"
import {db} from "/backend/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '/backend/firebase';
import { useRouter } from 'next/router'

const ContactMessages = collection(db, "contact-messages"); // ✅ Ensure correct reference

const ContactMe = () => {
    const [MessageBody,setMessageBody] = useState('')
    const [loggedIn, setLoggedIn] = useState(false); 
    const router = useRouter()  

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        setLoggedIn(true);
      } else {
        console.log("User not logged in.");
        setLoggedIn(false);
        alert('you are not logged in! Log in first! Returning to dashboard')
        router.push('/')
        
      }
    });

  return () => unsubscribe(); // ✅ Cleanup listener to prevent memory leaks
  }, []); // ✅ Empty dependency array ensures it runs only once




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
              console.log("Message is empty, not sending."); // Debugging log
              return; // Stop execution if the message is empty
            }
            console.log("Button clicked, sending message:", MessageBody);
            await CreateData(ContactMessages,{message:MessageBody});
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
