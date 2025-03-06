import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
        </LeftContainer>
        <CenterContainer>
        </CenterContainer>
        <RightContainer>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`

`;

const FooterContainer = styled.div`

`;

const LeftContainer = styled.div``;

const CenterContainer = styled.div``;

const RightContainer = styled.div`

`;

const Link = styled.a`

`;

const SocialIcon = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

export default Footer;
