import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Portfolio! 👋🏼
      </SectionTitle>
      <SectionText>
        My name is Brian Marin Silva and I'm a Full Stack Software Developer working on the MERN stack <br /><br /> I have a past in the Design/Advertising industry and I love building next-gen tools for the web
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;