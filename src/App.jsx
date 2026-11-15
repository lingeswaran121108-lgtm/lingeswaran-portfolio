import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import CustomCursor from './components/CustomCursor.jsx';

export const App = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark');
    }
  };

  // ScrollSpy to track active navigation section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${theme === 'dark' ? 'bg-[#050814] text-slate-100' : 'bg-slate-900 text-slate-100'}`}>
      
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Sticky Top Navigation */}
      <Navbar
        personal={portfolioData.personal}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 space-y-4">
        <Hero
          personal={portfolioData.personal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About
          personal={portfolioData.personal}
          stats={portfolioData.stats}
        />

        <Skills
          skills={portfolioData.skills}
        />

        <Projects
          projects={portfolioData.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Education
          education={portfolioData.education}
        />

        <Achievements
          data={portfolioData.achievementsSection}
        />

        <Contact
          personal={portfolioData.personal}
          socials={portfolioData.socials}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        socials={portfolioData.socials}
      />

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive / Printable Resume Modal */}
      {isResumeOpen && (
        <ResumeModal
          personal={portfolioData.personal}
          socials={portfolioData.socials}
          education={portfolioData.education}
          skills={portfolioData.skills}
          projects={portfolioData.projects}
          achievements={portfolioData.achievementsSection}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

    </div>
  );
};
export default App;
