import React, { useState } from 'react';
import Icon from './Icon.jsx';

export const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Core AI & Programming', 'Modern AI & LLMs', 'Web Development', 'Tools & DevOps'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="Cpu" size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A specialized arsenal spanning Artificial Intelligence, Machine Learning algorithms, modern web technologies, and developer tooling.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(6,182,212,0.18)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all"></div>

              <div>
                {/* Header: Icon, Name & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
                      <Icon name={skill.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wide bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {skill.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-800/80 p-0.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.accent} transition-all duration-1000 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Subtle hover corner mark */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 text-xs font-mono">
                +
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Skills;
