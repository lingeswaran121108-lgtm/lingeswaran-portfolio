import React from 'react';
import Icon from './Icon.jsx';

export const Footer = ({ personal, socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-mono font-bold text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300">
                {personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Aspiring Artificial Intelligence &amp; Machine Learning Engineer. Building intelligent systems for tomorrow.
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
            >
              <Icon name="Instagram" size={18} />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              title="Return to top"
            >
              <Icon name="ArrowUp" size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React.js &bull; Tailwind CSS &bull; Lucide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
