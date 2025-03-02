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



const openai = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

'use client';


import { generate } from './api/CustomGPTAPI';
import { readStreamableValue } from 'ai/rsc';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;



const CustomGPT = () => {
    const [GPTInput, setGPTInput] = useState(""); // Track input state
    const [GPTOutput, setGPTResponse] = useState("");
    const [generation, setGeneration] = useState('');
    const [loading,setLoading] = useState(false);

    return (
        <div>
        <Section>
        <Navbar/>
        <MiddleDiv>
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
                            { "role": "system", "content": "Summarize content you are provided with for a high-school student. Be Simple and Concise. Less than 100 words ideally." },
                            { "role": "user", "content": GPTInput } // Correctly passing GPTInput
                        ],
                        temperature: 1,
                        max_tokens: 256,
                        top_p: 1,
                    });

                    setGPTResponse(response.choices[0].message.content)
                    console.log(response.choices[0].message.content); // Handle the response
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

const GPTinput = styled.textarea`
width: 50%;
height: 20%;
padding:;
line-height: 1.5;

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