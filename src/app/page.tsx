import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection/>
      <ExperienceSection/>
      <ContactSection/>
    </>
  );
}
