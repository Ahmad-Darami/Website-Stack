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
    }, 500); // Changes font every 300ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <Highlight style={{ fontFamily: font, fontSize: '30px',}} >Ahmad Darami</Highlight>;
};



const Hero = () => {
  const [advice, setAdvice] = useState(""); // Stores the fetched advice
  const [loading, setLoading] = useState(false); // Tracks loading state




  const fetchAdvice = async () => {
    setLoading(true);
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice); // Extracts advice from API response
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
              {/* <Highlight>
                Ahmad Darami
              </Highlight> */}

              <Div2>
                <FontChanger style={{
                  fontSize:"100px",
                }}/>
              </Div2>

            </Header>
      <ProfileImg src="https://media.licdn.com/dms/image/v2/D4E03AQHBETyDd264Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726078206706?e=1746057600&v=beta&t=tFu6a51hN_f0qclYkfnLZMYkjnKEQ481lzWBmvPDb_Y" />

      </Overlay>
      <Achievements>
          <div>
          <HeroTextColumn style={{padding: '20px', fontSize: '10pt',}} >
          
          Hi, I'm Ahmad Darami, a passionate developer, esports enthusiast, and tech tinkerer with a background in hardware engineering, networking, and telecommunications. I love diving into coding, problem-solving, and creative projects.<br /><br />
          Currently, I’m expanding my knowledge in JavaScript, React, and Styled Components, bringing my engineering mindset into software development. <br /><br />I recently started using GitHub and am actively learning how to manage repositories and collaborate effectively.
          </HeroTextColumn>
          <h1 style={{fontSize: '15pt', margin: '15px', fontWeight: '99999',}}>Notable Things I've done!</h1>

          
          <AchieveTitle>Bachelor of Science in Computer Engineering - Pennsylvania State University</AchieveTitle>
          
          </div>

          <div>
          <AchieveTitle></AchieveTitle>
          <HeroTextColumn>
          Hi, I'm Ahmad Darami, a passionate developer, esports enthusiast, and tech tinkerer with a background in hardware engineering, networking, and telecommunications. I love diving into coding, problem-solving, and creative projects, whether it's building interactive web apps, experimenting with Arduino, or strategizing in FIFA esports.
          Currently, I’m expanding my knowledge in JavaScript, React, and Styled Components, bringing my engineering mindset into software development. I recently started using GitHub and am actively learning how to manage repositories and collaborate effectively.
          </HeroTextColumn>
          </div>

          <div>
          <AchieveTitle></AchieveTitle>
          <HeroTextColumn>
          Hi, I'm Ahmad Darami, a passionate developer, esports enthusiast, and tech tinkerer with a background in hardware engineering, networking, and telecommunications. I love diving into coding, problem-solving, and creative projects, whether it's building interactive web apps, experimenting with Arduino, or strategizing in FIFA esports.
          Currently, I’m expanding my knowledge in JavaScript, React, and Styled Components, bringing my engineering mindset into software development. I recently started using GitHub and am actively learning how to manage repositories and collaborate effectively.
          </HeroTextColumn>
          </div>
       </Achievements>
      
       <Stacked>
            <AdviceButton 
                onClick={fetchAdvice} 
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                {loading ? "Fetching..." : "Get Advice"}
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
width: 150px;
`

const Stacked = styled.div`
text-align: center;
align-items: center;
width: 100%;
display: flex;
flex-direction:column;

justify-content: center;


`;
const Div2 = styled.div`
width: 250px;
height: 75%;
`;

const AchieveTitle = styled.h2`
padding: 5px;
`;

const Achievements = styled.div`
display: grid;
gap: 20px;
padding: 20px;
`


const ProfileImg = styled.img`
height: 125px;
width: 125px;
text-align: right;
border: 1px solid #ccc;
margin: -25px;

`;

const Section = styled.div`
text-align: center;

width: 100%;
display: inline-block;

overflow-y: auto;
justify-content: center;


`;

const Overlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ;
height: 150px;

gap: 30%;
margin: px;

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
