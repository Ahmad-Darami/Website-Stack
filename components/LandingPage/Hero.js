import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";


const fonts = [
  "Arial", "Verdana", "Courier New", "Georgia",
  "Tahoma", "Times New Roman", "Trebuchet MS", "Comic Sans MS"
];

const FontChanger = () => {
  const [font, setFont] = useState(fonts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFont((prevFont) => {
        const nextIndex = (fonts.indexOf(prevFont) + 1) % fonts.length;
        return fonts[nextIndex];
      });
    }, 500); 

    return () => clearInterval(interval); 
  }, []);

  return <Highlight style={{ fontFamily: font, fontSize: '30px',}} >Ahmad Darami</Highlight>;
};



const Hero = () => {
  const [advice, setAdvice] = useState(""); 
  const [loading, setLoading] = useState(false); 




  const fetchAdvice = async () => {
    setLoading(true);
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice); 
    } catch (error) {
        console.error("Error fetching advice:", error);
        setAdvice("Failed to fetch advice. Try again!");
    } finally {
        setLoading(false);
    }
};

  return (
    <>
    <Section>
     
      <Overlay>
      
            <Header>
              
            <Div2>
            
                <FontChanger style={{
                  fontSize:"100px",
                }}/>
            
              <HeroTextColumn style={{padding: '10px', fontSize: '10pt', width:'90%',}} >
                I'm a passionate developer, esports enthusiast, and tech tinkerer studying hardware engineering. <br /> <br />I love diving into coding, problem-solving, and developing my soft skills.
              </HeroTextColumn>
            </Div2>
              

            </Header>
      <ProfileImg src="https://media.licdn.com/dms/image/v2/D4E03AQHBETyDd264Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726078206706?e=1746057600&v=beta&t=tFu6a51hN_f0qclYkfnLZMYkjnKEQ481lzWBmvPDb_Y" />

      </Overlay>
      <Achievements>
          
          <HeroTextColumn>
          Currently, I’m expanding my knowledge in JavaScript, React, and Styled Components, bringing my engineering mindset into software development. 
          </HeroTextColumn>
          <h1 style={{fontSize: '15pt', margin: '15px', fontWeight: '99999',}}>Notable Things I've done this Year:</h1>
          
          
          <AchieveTitle>Content Team - TEDxPSU</AchieveTitle>
          <HeroTextColumn>
          Facilitated communication between TEDx management and speaker, ensuring smooth coordination and alignment with event goals.
          </HeroTextColumn>
          
          <AchieveTitle>Stream Team - SOC 119</AchieveTitle>
          <HeroTextColumn>
          Directed Live Steam operations, facilitating live discussions on key societal topics; fostering open communication.
          </HeroTextColumn>
          
          <AchieveTitle>Food Service Worker</AchieveTitle>
          <HeroTextColumn>
          Assembled customer orders quickly and accurately, maintaining efficiency in a fast-paced food service environment.
          </HeroTextColumn>
          
       </Achievements>
      
       <Stacked>
            <AdviceButton 
                onClick={fetchAdvice} 
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#AFA29D",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                {loading ? "Loading..." : "Random Advice Button"}
            </AdviceButton>

            {advice && (
                <div 
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        backgroundColor: "#f1f1f1",
                        borderRadius: "10px",
                        display: "inline-block",
                        maxWidth: "300px",
                        fontSize: "18px",
                        fontStyle: "italic",
                        border: "2px solid #ccc"
                    }}
                >
                    "{advice}"
                </div>
            )}
            </Stacked>
            
    </Section>
    </>
  );
};

const AdviceButton = styled.button`
height: 40px;
width: 215px;
`

const Stacked = styled.div`
text-align: center;
align-items: center;
width: 100%;
display: flex;
flex-direction:column;
margin:10px;
justify-content: center;

`;
const Div2 = styled.div`
width: 250px;
height: 75%;
display:flex;
flex-direction:column;
align-items:center;
`;

const AchieveTitle = styled.h2`
padding: 5px;
`;

const Achievements = styled.div`
display: grid;
gap: 4px;
padding: 0px;
`


const ProfileImg = styled.img`
height: 150px;
width: 150px;
text-align: right;
border: 1px solid #ccc;
margin: -25px;

`;

const Section = styled.div`
text-align: center;
width: 100%;
display: flex;
flex-direction:column;

justify-content: center;
flex-wrap:wrap;



`;


const Overlay = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
width: ;
height: auto;
gap: %;
margin: px;
padding: 30px;

`;

const Container = styled.div`
`;

const HeroTextColumn = styled.div`
font-size: 10px;
width: 350px;
taxt-align: center;
width: 100%;

`;

const Header = styled.h1`
`;

const Highlight = styled.span`
text-align: center;
font-style: ;
width: 100%;
font-size: 50px;
font-weight: 500;
transition: font-family 0.3s ease-in-out;
`;

const SubHeader = styled.h2`

`;

const SubheaderAndStarsColumn = styled.div`

`;

const CTAButton = styled.button`

`;


export default Hero;
