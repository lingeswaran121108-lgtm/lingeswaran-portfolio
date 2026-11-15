import React, { useEffect } from 'react';
import Icon from './Icon.jsx';

export const ResumeModal = ({ personal, socials, education, skills, projects, achievements, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0a0f24] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-white p-6 sm:p-10 space-y-8 print:max-h-none print:shadow-none print:border-none print:bg-white print:text-black print:rounded-none">
        
        {/* Top Control Bar (Hidden during print) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <Icon name="FileText" size={16} />
            <span>RESUME PREVIEW &bull; LINGESWARAN D</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md"
            >
              <Icon name="Download" size={14} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Printable format) */}
        <div className="space-y-6 print:space-y-4 print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              {personal.name}
            </h1>
            <p className="text-base sm:text-lg text-cyan-400 print:text-blue-700 font-medium mt-1">
              Aspiring AI &amp; Machine Learning Engineer | Python Developer
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mt-3 text-xs font-mono text-slate-300 print:text-black">
              <span>Email: {socials.email}</span>
              <span>GitHub: {socials.github}</span>
              <span>LinkedIn: {socials.linkedin}</span>
              <span>Location: {personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-blue-700 font-bold border-b border-cyan-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 print:text-gray-800 leading-relaxed">
              {personal.aboutExtended}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-blue-700 font-bold border-b border-cyan-500/20 pb-1">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline font-semibold text-sm text-white print:text-black">
                  <span>{edu.degree} – {edu.department}</span>
                  <span className="text-xs font-mono text-cyan-300 print:text-black">{edu.graduationYear}</span>
                </div>
                <div className="text-xs text-slate-300 print:text-gray-700 font-mono">
                  {edu.institution} | {edu.location}
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600 pt-1">
                  <span className="font-semibold text-slate-300 print:text-black">Coursework: </span>
                  {edu.coursework.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-blue-700 font-bold border-b border-cyan-500/20 pb-1">
              Technical Core Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="text-slate-200 print:text-gray-800">
                <span className="font-bold text-cyan-300 print:text-black">AI &amp; Machine Learning: </span>
                Python, Artificial Intelligence, Machine Learning, Generative AI, Prompt Engineering
              </div>
              <div className="text-slate-200 print:text-gray-800">
                <span className="font-bold text-cyan-300 print:text-black">Web &amp; Tools: </span>
                HTML, CSS, JavaScript, Git &amp; GitHub, REST APIs
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-blue-700 font-bold border-b border-cyan-500/20 pb-1">
              Key Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline font-bold text-white print:text-black text-sm">
                  <span>{proj.title}</span>
                  <span className="font-mono text-[11px] text-purple-300 print:text-gray-600">{proj.tags.join(' | ')}</span>
                </div>
                <p className="text-slate-300 print:text-gray-800">
                  {proj.description}
                </p>
                <ul className="list-disc list-inside text-slate-400 print:text-gray-600 pl-2 space-y-0.5">
                  {proj.features.slice(0, 2).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Workshops */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 print:text-blue-700 font-bold border-b border-cyan-500/20 pb-1">
              Certifications &amp; Hands-on Workshops
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
              {achievements.certifications.slice(0, 2).map((c, i) => (
                <div key={i}>
                  <div className="font-semibold text-white print:text-black">&bull; {c.title}</div>
                  <div className="text-slate-400 print:text-gray-600 font-mono text-[11px]">{c.issuer} ({c.date})</div>
                </div>
              ))}
              {achievements.workshops.slice(0, 2).map((w, i) => (
                <div key={i}>
                  <div className="font-semibold text-white print:text-black">&bull; {w.title}</div>
                  <div className="text-slate-400 print:text-gray-600 font-mono text-[11px]">{w.organizer} ({w.date})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default ResumeModal;
