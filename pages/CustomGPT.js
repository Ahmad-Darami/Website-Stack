import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import FontStyles from '@/Styles/GlobalStyles';
import { useState, useEffect } from "react";
import Navbar from '@/components/Dashboard/Navbar';
import OpenAI from "openai";
import {collection} from "firebase/firestore"
import {db} from "../backend/Firebase";
import {CreateData} from '../backend/Database';

const ContactMessages = collection(db, "GPT-messages"); 


const openai = new OpenAI({
    apiKey : process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});



export const maxDuration = 30;



const CustomGPT = () => {
    const [GPTInput, setGPTInput] = useState("");
    const [GPTOutput, setGPTResponse] = useState("");
    const [generation, setGeneration] = useState('');
    const [loading,setLoading] = useState(false);

    return (
        <div>
        <Section>
        <Navbar/>
        <MiddleDiv>
        <NewDiv>
            <GPTTitle>My Custom GPT made with a custom prompt, enjoy!</GPTTitle>
        </NewDiv>
        <GPTinput 
                    type="text" 
                    value={GPTInput} 
                    onChange={(e) => setGPTInput(e.target.value)}  
                    placeholder="Enter text here..."
                />
                 
                <button onClick={async () => {
                    const response = await openai.chat.completions.create({
                        model: "gpt-4o",
                        messages: [
                            { "role": "system", "content": "Summarize content you are provided with for a high-school student. Be Simple and Concise. Less than 100 words ideally. Make sure to add a metaphor to aid understanding" },
                            { "role": "user", "content": GPTInput } 
                        ],
                        temperature: 1,
                        max_tokens: 256,
                        top_p: 1,
                    
                    });


                    setGPTResponse(response.choices[0].message.content)
                    console.log(response.choices[0].message.content); 
                    const storevalue = await CreateData(ContactMessages, { message: `Input: ${GPTInput} Output: ${response.choices[0].message.content || ""} `});
                    
                }}>
                    Get Response
                    
                    
                    </button>
                    {GPTOutput && (
                    <ResponseBox>
                        <strong>GPT-4o Response:</strong>
                        <p>{GPTOutput}</p>
                    </ResponseBox>
)}
    </MiddleDiv>
                    </Section>
        
        </div>
    );
};

export default CustomGPT;

const NewDiv = styled.div`
width:50%
`;

const GPTTitle = styled.h1`
font-size: 20px;
text-align:center;
margin-bottom:15px;
`;

const GPTinput = styled.textarea`
width: 50%;
height: 20%;
padding: 5px;
line-height: 1.5;
margin-bottom: 15px;

`;

const MiddleDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
`;

const BodyDiv = styled.div`



`;

const Section = styled.section`
  
`;

const ResponseBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #e3f2fd;
  border-radius: 5px;
  text-align: left;
  width: 80%;
`;