import React, { useEffect } from 'react';
import Icon from './Icon.jsx';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090e1f] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-white p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-purple-400">
              {project.highlights}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
        </div>

        {/* Project Image Banner */}
        <div className="relative h-60 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090e1f] via-transparent to-transparent"></div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            System Overview &amp; Architecture
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Engineering Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
            Key Capabilities &amp; Pipeline Highlights
          </h3>
          <ul className="space-y-2.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <Icon name="CheckCircle2" size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
          >
            <Icon name="Github" size={16} />
            <span>Explore Source Code</span>
            <Icon name="ExternalLink" size={14} />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
export default ProjectModal;
