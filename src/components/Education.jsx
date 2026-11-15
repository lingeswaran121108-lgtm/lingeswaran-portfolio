import React from 'react';
import Icon from './Icon.jsx';

export const Education = ({ education }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="GraduationCap" size={14} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Background</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Formal engineering rigor and algorithmic fundamentals specialized in Artificial Intelligence &amp; Data Science.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group"
            >
              {/* Futuristic Neon Accent Left Bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"></div>

              <div className="pl-4 sm:pl-6 space-y-6">
                
                {/* Degree & Year Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 inline-block mb-2">
                      {item.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20 self-start sm:self-auto">
                    <Icon name="Calendar" size={14} />
                    <span>{item.graduationYear}</span>
                  </div>
                </div>

                {/* College / Institution Details */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 font-mono">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <Icon name="BookOpen" size={16} className="text-cyan-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Icon name="MapPin" size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <Icon name="CheckCircle2" size={14} />
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Edit tip badge for Lingeswaran */}
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between text-xs text-cyan-300 font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    Editable fields: College Name, Degree, Department, Year &amp; Coursework in <code>src/data/portfolioData.js</code>
                  </span>
                </div>

                {/* Coursework Section */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Engineering Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Focus Note */}
                <p className="text-xs sm:text-sm text-slate-400 italic pt-1 border-t border-white/5">
                  &ldquo;{item.notes}&rdquo;
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Education;
