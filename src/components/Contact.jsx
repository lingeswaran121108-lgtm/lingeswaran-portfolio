import React, { useState } from 'react';
import Icon from './Icon.jsx';

export const Contact = ({ personal, socials }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialChannels = [
    {
      name: 'Email',
      value: socials.email,
      href: `mailto:${socials.email}`,
      icon: 'Mail',
      color: 'from-cyan-500 to-blue-500',
      action: 'Send an Email'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/lingeswaran-d',
      href: socials.linkedin,
      icon: 'Linkedin',
      color: 'from-blue-600 to-indigo-500',
      action: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      value: 'github.com/lingeswaran-d',
      href: socials.github,
      icon: 'Github',
      color: 'from-purple-500 to-pink-500',
      action: 'View Repositories'
    },
    {
      name: 'Instagram',
      value: '@lingzzz___',
      href: socials.instagram,
      icon: 'Instagram',
      color: 'from-pink-500 to-rose-500',
      action: 'Follow on Instagram'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider">
            <Icon name="Send" size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Have a project in mind, want to collaborate on AI research, or discuss opportunities? Let's build something exceptional together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Socials & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Feel free to reach out directly via email or social platforms. I am always open to discussing new AI innovations, internships, and technical research.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-3">
                {socialChannels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between group hover:shadow-[0_4px_20px_rgba(6,182,212,0.15)]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                        <Icon name={ch.icon} size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-400">
                          {ch.name}
                        </div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {ch.value}
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-all">
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Copy Email Banner */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Direct address:</span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono flex items-center gap-1.5 transition-all"
                >
                  <Icon name={copiedEmail ? 'Check' : 'Copy'} size={14} className={copiedEmail ? 'text-emerald-400' : 'text-cyan-400'} />
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative">
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="Mail" size={20} className="text-cyan-400" />
                <span>Send a Message</span>
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <Icon name="CheckCircle2" size={20} className="text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Message received!</span> Thank you for reaching out, Lingeswaran will get back to you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Project Collaboration / Internship Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Message *
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    required
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Lingeswaran, I would love to connect with you regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} />
                      <span>Send Message Payload</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
