import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";

const fonts = [
  "Arial", "Verdana", "Courier New", "Georgia",
  "Tahoma", "Times New Roman", "Trebuchet MS", "Comic Sans MS"
];

const Hero = () => {
  return (
    <Section>
     
      <Overlay>
      
            <Header>
              <Highlight>
                Ahmad Darami
              </Highlight>
              
              {/* <FontChanger/> */}
            </Header>
      <ProfileImg src="https://media.licdn.com/dms/image/v2/D4E03AQHBETyDd264Zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726078206706?e=1746057600&v=beta&t=tFu6a51hN_f0qclYkfnLZMYkjnKEQ481lzWBmvPDb_Y" />

      </Overlay>
      <HeroTextColumn>
         Hi, I'm Ahmad Darami, a passionate developer, esports enthusiast, and tech tinkerer with a background in hardware engineering, networking, and telecommunications. I love diving into coding, problem-solving, and creative projects, whether it's building interactive web apps, experimenting with Arduino, or strategizing in FIFA esports.
         Currently, I’m expanding my knowledge in JavaScript, React, and Styled Components, bringing my engineering mindset into software development. I recently started using GitHub and am actively learning how to manage repositories and collaborate effectively.
         Beyond coding, I lead my FIFA esports division, exploring ways to make the fantasy football experience more engaging. I enjoy crafting unique challenges for my 1v1 player-pick game, pushing creativity and strategy in team-building.
         I believe in continuous learning, hands-on experimentation, and making tech both functional and fun. Whether it's debugging a Node.js app, deploying a project to Vercel, or optimizing network setups, I always strive for efficiency and innovation.
         🚀 Always building, always learning.
         Let’s connect and create something amazing! 😃🔥
       </HeroTextColumn>
     
    </Section>
    
  );
};



const ProfileImg = styled.img`
height: 100px;
width: 100px;
text-align: right;
border: 5px solid #ccc;
`;

const Section = styled.section`
text-align: center;
font-style:italic;
width: 100%;
height: 10vh;
display: inline-block;

`;

const Overlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ;
height: 150px;
border: 1px solid #ccc;
gap: 50px;

`;

const Container = styled.div`
`;

const HeroTextColumn = styled.div`
font-size: 10px;

`;

const Header = styled.h1`
`;

const Highlight = styled.span`
text-align: center;
font-style:italic;
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
// const FontChanger = () => {
//   const [font, setFont] = useState(fonts[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFont((prevFont) => {
//         const nextIndex = (fonts.indexOf(prevFont) + 1) % fonts.length;
//         return fonts[nextIndex];
//       });
//     }, 300); // Changes font every 300ms

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return <Highlight style={{ fontFamily: font }} >Ahmad Darami</Highlight>;
// };



export default Hero;
