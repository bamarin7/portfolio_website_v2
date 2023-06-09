import Acomplishments from '../components/Acomplishments/Acomplishments';
// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { ImageContainer, Img2 } from '../components/Projects/ProjectsStyles';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <ImageContainer>
          <Img2 src="/images/avatar.png" alt='avater picture' />
        </ImageContainer>
        {/* <BgAnimation /> */}
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
