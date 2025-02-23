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
        <Container>
          <HeroTextColumn>
            <Header>
              <Highlight>
                Ahmad Darami
              {/* <FontChanger/> */}
              </Highlight>
              
            </Header>
          </HeroTextColumn>
        </Container>
      </Overlay>
    </Section>
  );
};

const Section = styled.section`
text-align: center;
font-style:italic;
width: 100%;
height: 10vh;
display: inline-block;
`;

const Overlay = styled.div`
`;

const Container = styled.div`
`;

const HeroTextColumn = styled.div`
`;

const Header = styled.h1`
`;

const Highlight = styled.span`
text-align: center;
font-style:italic;
width: 100%;
;
font-size: 100px;
font-weight: 600;
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
