import React, { useState } from 'react';
import Icon from './Icon.jsx';

export const Achievements = ({ data }) => {
  const [activeTab, setActiveTab] = useState('all');

  const { certifications = [], workshops = [], activities = [] } = data || {};

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="Award" size={14} />
            <span>CREDENTIALS &amp; LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Technical milestones, specialized domain certifications, hands-on workshops, and community ambassador activities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Highlights', icon: 'Award' },
            { id: 'certs', label: 'Certifications', icon: 'ShieldCheck' },
            { id: 'workshops', label: 'Technical Workshops', icon: 'Cpu' },
            { id: 'activities', label: 'Ambassador & Activities', icon: 'Rocket' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <Icon name={tab.icon} size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div className="space-y-12">
          
          {/* 1. Certifications Section */}
          {(activeTab === 'all' || activeTab === 'certs') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-wider font-semibold">
                <Icon name="ShieldCheck" size={18} />
                <span>Verified Certifications</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                          {cert.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {cert.title}
                      </h3>

                      <p className="text-xs font-mono text-cyan-400/90 mb-3">
                        {cert.issuer}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Status: Completed</span>
                      <span className="text-cyan-400 flex items-center gap-1 group-hover:underline">
                        <span>Editable Details</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Technical Workshops Section */}
          {(activeTab === 'all' || activeTab === 'workshops') && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-sm uppercase tracking-wider font-semibold">
                <Icon name="Cpu" size={18} />
                <span>Technical Workshops &amp; Bootcamps</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workshops.map((ws, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                          Hands-on Workshop
                        </span>
                        <span className="text-xs font-mono text-slate-400">{ws.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                        {ws.title}
                      </h3>

                      <p className="text-xs font-mono text-purple-400 mb-3">
                        {ws.organizer}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {ws.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Icon name="CheckCircle2" size={14} />
                      <span>Practical Implementation Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Ambassador Activities & Leadership Section */}
          {(activeTab === 'all' || activeTab === 'activities') && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-pink-400 font-mono text-sm uppercase tracking-wider font-semibold">
                <Icon name="Rocket" size={18} />
                <span>Ambassador Activities &amp; Community</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-pink-500/10 text-pink-300 border border-pink-500/30">
                          Community Leadership
                        </span>
                        <span className="text-xs font-mono text-slate-400">{act.period}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition-colors mb-2">
                        {act.role}
                      </h3>

                      <p className="text-xs font-mono text-pink-400 mb-3">
                        {act.organization}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {act.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <Icon name="Sparkles" size={14} />
                      <span>Active Engagement &amp; Peer Mentorship</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
export default Achievements;
