import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

export const Hero = ({ personal, onOpenResume }) => {
  const dynamicTitles = [
    "Aspiring AI & Machine Learning Engineer",
    "Python Developer",
    "Tech Enthusiast & Student Innovator",
    "Prompt & Generative AI Builder"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = dynamicTitles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // Interactive Futuristic Tech Canvas (Neural Network / Cyber Grid background)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#06b6d4' : '#a855f7'
      });
    }

    let mouse = { x: null, y: null, maxDist: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.maxDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 * (1 - dist / mouse.maxDist)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
      />

      {/* Futuristic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-purple-600/15 blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none -z-10"></div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-bounce-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-300">
                {personal.status}
              </span>
            </div>

            {/* Name and Heading */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                {personal.name}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  {personal.shortName}
                </span>
              </h1>
            </div>

            {/* Subtitle with dynamic typewriter */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-200">
                Aspiring AI & Machine Learning Engineer | Python Developer | Tech Enthusiast
              </h2>
              <div className="h-7 flex items-center justify-center lg:justify-start">
                <span className="font-mono text-sm sm:text-base text-cyan-400 font-medium">
                  &gt; {displayText}
                  <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Primary Button: View My Projects */}
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <span>View My Projects</span>
                  <Icon name="Rocket" size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Secondary Button: Contact Me */}
              <a
                href="#contact"
                className="group px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center gap-2"
              >
                <span>Contact Me</span>
                <Icon name="Send" size={15} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
              </a>

              {/* Tertiary Button: Download Resume */}
              <button
                onClick={onOpenResume}
                className="group px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-cyan-300 border border-transparent hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Icon name="Download" size={16} className="text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                Python 3.x
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300">
                Deep Learning
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-pink-300">
                Generative AI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300">
                Microgravity AI
              </span>
            </div>

          </div>

          {/* Right Column: Holographic Futuristic Profile Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
              
              {/* Outer Neon Glow Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-2xl animate-pulse"></div>
              
              {/* Rotating Sci-Fi Ring */}
              <div className="absolute -inset-2 rounded-3xl border border-dashed border-cyan-500/40 animate-[spin_25s_linear_infinite] pointer-events-none"></div>

              {/* Main Glass Card */}
              <div className="relative w-full h-full rounded-3xl bg-[#090e1f]/85 backdrop-blur-2xl border border-cyan-500/30 p-4 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col justify-between overflow-hidden group">
                
                {/* Tech HUD Top Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/80 border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>AI_CORE::V2.4</span>
                  </div>
                  <span className="text-slate-400">STATUS: ONLINE</span>
                </div>

                {/* Profile Avatar / Futuristic Developer Visualization */}
                <div className="relative my-auto flex flex-col items-center justify-center py-4">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.35)] group-hover:scale-102 transition-transform duration-500">
                    <img
                      src={personal.avatar}
                      alt={personal.name}
                      className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:contrast-115 transition-all duration-500"
                    />
                    
                    {/* Futuristic Grid & Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060a17] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
                    
                    {/* Hologram scanline */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.25)_51%)] bg-[size:100%_4px] pointer-events-none opacity-40"></div>
                  </div>

                  {/* Floating floating telemetry tags */}
                  <div className="absolute -bottom-2 -left-2 bg-[#090d1e]/90 border border-cyan-500/40 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-cyan-300 shadow-lg">
                    Neural Net Architect
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#090d1e]/90 border border-purple-500/40 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono text-purple-300 shadow-lg">
                    Python &amp; ML
                  </div>
                </div>

                {/* Card Footer HUD */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Icon name="Brain" size={14} className="text-cyan-400" />
                    <span>LINGESWARAN D</span>
                  </div>
                  <span className="text-purple-400 text-[11px]">B.E. AI &amp; ML</span>
                </div>

                {/* Futuristic Decorative Corner Crosshairs */}
                <div className="absolute top-1.5 left-1.5 text-cyan-400 text-[9px] font-mono select-none pointer-events-none">+</div>
                <div className="absolute top-1.5 right-1.5 text-cyan-400 text-[9px] font-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-1.5 left-1.5 text-cyan-400 text-[9px] font-mono select-none pointer-events-none">+</div>
                <div className="absolute bottom-1.5 right-1.5 text-cyan-400 text-[9px] font-mono select-none pointer-events-none">+</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
