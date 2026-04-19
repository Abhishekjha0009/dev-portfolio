import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



import { personalInfo, aboutText, skills, projects, socialLinks } from "./data/portfolioData";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-[#e8e8f0] font-body">
      <Navbar name={personalInfo.name} />
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        resumeLink={personalInfo.resumeLink}
      />
      <About text={aboutText} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact email={personalInfo.email} socialLinks={socialLinks} />
      <Footer
        name={personalInfo.name}
        github={personalInfo.github}
        linkedin={personalInfo.linkedin}
      />
    </div>
  );
}
