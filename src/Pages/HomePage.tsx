import HeroSection from "../Components/HeroSection";
import MySkill from "../Components/MySkill";
import Experience from "../Components/Experience";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import ContactForm from "../Components/ContactForm";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <MySkill />
      <Experience />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}
