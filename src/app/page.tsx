import AboutUsSection from './components/client/AboutUsSection';
import DemoSection from './components/client/DemoSection';
import HeroSection from './components/client/HeroSection';
import MeetTheTeamSection from './components/client/MeetTheTeamSection';
import OurMission from './components/client/OurMission';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurMission />
      <DemoSection />
      <MeetTheTeamSection />
    </>
  );
}
