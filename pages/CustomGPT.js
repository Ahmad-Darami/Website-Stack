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
import dotenv from "dotenv";

dotenv.config()

console.log(`${dotenv.config()}`)

console.log("API Key:", process.env.OPENAI_API_KEY)

const openai = new OpenAI({
    apiKey : 'null',
    dangerouslyAllowBrowser: true,
});

const CustomGPT = () => {
    const [GPTInput, setGPTInput] = useState(""); // Track input state
    const [GPTOutput, setGPTResponse] = useState("");
    const [loading,setLoading] = useState(false);

    return (
        <BodyDiv>
        <Section>
        <Navbar/>
        <input 
                    type="text" 
                    value={GPTInput} 
                    onChange={(e) => setGPTInput(e.target.value)}  
                    placeholder="Enter text here..."
                />
                 
                <button onClick={async () => {
                    const response = await openai.chat.completions.create({
                        model: "gpt-4o",
                        messages: [
                            { "role": "system", "content": "Summarize content you are provided with for a high-school student. Be Simple, be Concise." },
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

                    </Section>
        </BodyDiv>



    );







};

export default CustomGPT;

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