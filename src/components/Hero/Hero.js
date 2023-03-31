import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Portfolio!
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Software Developer working on the MERN stack with a past in the Design/Advertising industry building next-gen tools for the web.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;