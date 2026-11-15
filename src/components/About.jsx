import React, { useState } from 'react';
import Icon from './Icon.jsx';

export const About = ({ personal, stats }) => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `# Lingeswaran Developer Blueprint
class LingeswaranAI:
    def __init__(self):
        self.name = "${personal.name}"
        self.focus = ["Artificial Intelligence", "Machine Learning", "Python"]
        self.mindset = "Curious student & relentless problem solver"
        self.mission = "Transform innovative AI ideas into real-world applications"
        self.favorite_stack = ["Python", "PyTorch/TF", "React", "Prompt Engineering"]
    
    def current_status(self):
        return "Building intelligent solutions & ready for opportunities!"`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="Brain" size={14} />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 relative group">
              
              <div className="absolute -top-3 right-8 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-md">
                Profile Statement
              </div>

              {/* Exact required text emphasized */}
              <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed">
                "{personal.aboutExtended}"
              </p>

              <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  As an aspiring AI &amp; Machine Learning Engineer, my ambition is grounded in combining mathematical rigor with modern software engineering. Whether designing neural networks for computer vision, fine-tuning LLMs with chain-of-thought prompt engineering, or architecting intuitive frontend interfaces, I strive for clean, modular, and impactful engineering.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-cyan-300">
                    <Icon name="CheckCircle2" size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>Applied AI &amp; Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-purple-300">
                    <Icon name="CheckCircle2" size={16} className="text-purple-400 flex-shrink-0" />
                    <span>Microgravity &amp; Space Research</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-blue-300">
                    <Icon name="CheckCircle2" size={16} className="text-blue-400 flex-shrink-0" />
                    <span>Python &amp; Full-Stack Logic</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-pink-300">
                    <Icon name="CheckCircle2" size={16} className="text-pink-400 flex-shrink-0" />
                    <span>Generative AI &amp; LLM Tuning</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 backdrop-blur-md text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
                >
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon name={stat.icon} size={16} />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#080d1e]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Icon name="Terminal" size={13} className="text-cyan-400" />
                    lingeswaran_ai.py
                  </span>
                </div>

                <button
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                  title="Copy Code"
                >
                  <Icon name={copied ? 'Check' : 'Copy'} size={13} className={copied ? 'text-emerald-400' : 'text-slate-400'} />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 select-all">
                <pre>
                  <code>
                    <span className="text-purple-400 font-bold">class</span>{" "}
                    <span className="text-yellow-300 font-semibold">LingeswaranAI</span>:
                    {"\n"}    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">__init__</span>(self):
                    {"\n"}        self.name = <span className="text-emerald-300">"{personal.name}"</span>
                    {"\n"}        self.role = <span className="text-emerald-300">"AI &amp; ML Engineer"</span>
                    {"\n"}        self.education = <span className="text-cyan-300">"B.E. AI &amp; ML"</span>
                    {"\n"}        self.focus = [
                    {"\n"}            <span className="text-emerald-300">"Artificial Intelligence"</span>,
                    {"\n"}            <span className="text-emerald-300">"Machine Learning"</span>,
                    {"\n"}            <span className="text-emerald-300">"Generative AI"</span>,
                    {"\n"}            <span className="text-emerald-300">"Python Development"</span>
                    {"\n"}        ]
                    {"\n"}        self.mindset = <span className="text-emerald-300">"Passionate, Curious, Adaptive"</span>
                    {"\n"}
                    {"\n"}    <span className="text-purple-400">def</span>{" "}
                    <span className="text-blue-400">execute_mission</span>(self):
                    {"\n"}        <span className="text-slate-500"># Transform ideas into real-world applications</span>
                    {"\n"}        <span className="text-purple-400">return</span> self.solve_problems_with_ai()
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div className="px-5 py-2.5 bg-black/30 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  UTF-8 | Python 3.12+ Ready
                </span>
                <span className="text-slate-500">Lingeswaran D &bull; Portfolio Core</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
