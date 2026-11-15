import React from 'react';
import Icon from './Icon.jsx';

export const Projects = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="Rocket" size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Intelligent architectures combining deep learning, modern Python frameworks, and clean user experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(6,182,212,0.22)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e] via-[#080d1e]/40 to-transparent"></div>

                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Index Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs flex items-center justify-center font-bold">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
                {/* View Details Modal Trigger */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5"
                >
                  <Icon name="FileText" size={14} className="text-cyan-400" />
                  <span>Explore Specs</span>
                </button>

                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Icon name="Github" size={14} />
                  <span>GitHub</span>
                  <Icon name="ExternalLink" size={12} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;
