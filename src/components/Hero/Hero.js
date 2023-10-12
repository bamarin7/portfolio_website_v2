import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
// import useWindowSize from '../../hooks/useWindowSize';
import { Img2 } from '../Projects/ProjectsStyles';


const Hero = (props) => {
  // const { width } = useWindowSize();
  // const smBreakpoint = 640;

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br /> My Portfolio! 👋🏼
        </SectionTitle>
        <SectionText>
          My name is Brian Marin Silva and I'm a Full Stack Software Developer working on the MERN stack <br /><br /> I have a past in the Design/Advertising industry and I love building next-gen tools for the web
        </SectionText>
        <Button onClick={() => (window.location = '#projects')}>Learn More</Button>
      </LeftSection>
      <RightSection>
        <Img2 src="/images/avatar.png" alt="avatar picture" />
      </RightSection>
    </Section>
  );
};

export default Hero;
