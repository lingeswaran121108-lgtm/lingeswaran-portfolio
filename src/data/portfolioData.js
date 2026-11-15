/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION FOR LINGESWARAN D
 * ====================================================================
 * 
 * Edit this file to update your personal information, links, education, 
 * skills, projects, and achievements. No HTML or React code changes needed!
 */

export const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "LINGESWARAN D",
    shortName: "Lingeswaran",
    greeting: "Hi, I'm Lingeswaran",
    tagline: "Aspiring AI & Machine Learning Engineer | Python Developer | Tech Enthusiast",
    bio: "I build intelligent solutions, explore emerging technologies, and transform innovative ideas into real-world applications.",
    aboutExtended: "I'm a passionate student interested in Artificial Intelligence, Machine Learning, and software development. I enjoy exploring new technologies, building innovative projects, and solving real-world problems using AI.",
    avatar: "https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=800&q=80",
    status: "Open to AI/ML Internships & Collaboration",
    location: "Tamil Nadu, India",
    experienceYears: "Student & Developer",
    resumeUrl: "#", // Replace with your direct PDF link (e.g. "/resume.pdf") or use built-in printable preview
  },

  // Social & Contact Links (Edit with your real handles)
  socials: {
    email: "lingeswaran121108@gmail.com",
    github: "https://github.com/lingeswaran-d",
    linkedin: "https://linkedin.com/in/lingeswaran-d",
    instagram: "https://instagram.com/lingzzz___",
  },

  // Core Pillars / Stats
  stats: [
    { label: "Featured Projects", value: "3+", icon: "Rocket" },
    { label: "Core Competencies", value: "9+", icon: "Cpu" },
    { label: "Focus Domain", value: "AI & ML", icon: "Brain" },
    { label: "Code Dedication", value: "100%", icon: "Sparkles" },
  ],

  // Skills Data with Categories and Levels
  skills: [
    {
      name: "Python",
      category: "Core AI & Programming",
      level: 90,
      badge: "Primary Language",
      description: "Data structures, algorithms, AI pipelines, NumPy, Pandas, Scikit-learn, and backend integration.",
      icon: "Code",
      accent: "from-blue-500 to-cyan-400"
    },
    {
      name: "Artificial Intelligence",
      category: "Core AI & Programming",
      level: 85,
      badge: "Core Focus",
      description: "Search algorithms, knowledge graphs, heuristic modeling, intelligent agents, and neural workflows.",
      icon: "Brain",
      accent: "from-violet-500 to-purple-400"
    },
    {
      name: "Machine Learning",
      category: "Core AI & Programming",
      level: 85,
      badge: "Predictive Analytics",
      description: "Supervised & unsupervised learning, classification, regression, model evaluation, and feature engineering.",
      icon: "Cpu",
      accent: "from-cyan-500 to-blue-500"
    },
    {
      name: "Generative AI",
      category: "Modern AI & LLMs",
      level: 80,
      badge: "Emerging Tech",
      description: "Large Language Models, foundation models, multimodal prompting, RAG architectures, and fine-tuning.",
      icon: "Sparkles",
      accent: "from-fuchsia-500 to-pink-500"
    },
    {
      name: "Prompt Engineering",
      category: "Modern AI & LLMs",
      level: 88,
      badge: "LLM Optimization",
      description: "Chain-of-thought, few-shot conditioning, structured output generation, role prompting, and context chaining.",
      icon: "Terminal",
      accent: "from-purple-500 to-indigo-400"
    },
    {
      name: "Git & GitHub",
      category: "Tools & DevOps",
      level: 85,
      badge: "Version Control",
      description: "Branching strategies, collaborative workflows, commit hygiene, pull requests, and project hosting.",
      icon: "GitBranch",
      accent: "from-emerald-500 to-teal-400"
    },
    {
      name: "HTML",
      category: "Web Development",
      level: 90,
      badge: "Frontend Semantic",
      description: "Semantic layouts, accessibility (a11y), responsive structural scaffolding, and SEO optimization.",
      icon: "Layout",
      accent: "from-orange-500 to-amber-400"
    },
    {
      name: "CSS",
      category: "Web Development",
      level: 85,
      badge: "Modern UI / FX",
      description: "Flexbox, CSS Grid, keyframe animations, glassmorphism, responsive media queries, and Tailwind CSS.",
      icon: "Palette",
      accent: "from-sky-500 to-blue-400"
    },
    {
      name: "JavaScript",
      category: "Web Development",
      level: 82,
      badge: "Dynamic Logic",
      description: "ES6+, asynchronous programming, DOM manipulation, state management, and modern component integration.",
      icon: "Zap",
      accent: "from-yellow-400 to-amber-500"
    }
  ],

  // Projects Data
  projects: [
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      category: "AI / NLP Application",
      description: "An intelligent application that analyzes resumes and provides improvement suggestions.",
      longDescription: "A comprehensive AI-driven tool designed to bridge the gap between job seekers and ATS scanners. It parses PDF/DOCX resumes using Natural Language Processing, evaluates keywords against target job descriptions, scores ATS compatibility, and offers actionable optimization recommendations using LLM feedback.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "NLP", "Machine Learning", "Streamlit / UI", "Text Analytics"],
      githubUrl: "https://github.com/lingeswaran-d/ai-resume-analyzer",
      liveUrl: "#",
      features: [
        "Automated semantic resume parsing & keyword density extraction",
        "ATS compliance scoring benchmarked against industry standards",
        "Actionable LLM-driven suggestions for bullet points and impact verbs",
        "Job description matching percentage and missing skills identification"
      ],
      highlights: "High accuracy in skill extraction and instant feedback generation."
    },
    {
      id: "flame-in-freefall",
      title: "Flame in Freefall",
      category: "AI & Space Research Concept",
      description: "An AI-powered concept for analyzing microgravity combustion data and supporting space fire safety research.",
      longDescription: "An ambitious research concept focusing on aerospace safety in microgravity environments (like the ISS or lunar habitats). In zero gravity, buoyancy-driven convection vanishes, resulting in spherical flames. This project uses computer vision and deep learning time-series models to analyze combustion video telemetry, track flame propagation boundaries, predict soot deposition, and provide automated early risk warnings.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Computer Vision", "Deep Learning", "Microgravity Science", "Data Modeling"],
      githubUrl: "https://github.com/lingeswaran-d/flame-in-freefall",
      liveUrl: "#",
      features: [
        "Deep learning computer vision for flame boundary segmentation in zero-g",
        "Soot formation rate and thermal gradient predictive analytics",
        "Sensor telemetry fusion for atmospheric oxygen & pressure tracking",
        "Critical warning trigger system to assist space habitat fire mitigation"
      ],
      highlights: "Addresses critical space safety challenges using cutting-edge AI."
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      category: "Web Engineering & UI/UX",
      description: "A responsive portfolio showcasing skills and projects with a futuristic cyber aesthetic.",
      longDescription: "A modern, high-performance portfolio website crafted with React, Tailwind CSS, Lucide icons, and interactive canvas particle systems. Features glassmorphism components, animated neon glows, dark/light dynamic theme switching, smooth scrolling, and modular data separation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Glassmorphism", "Lucide Icons"],
      githubUrl: "https://github.com/lingeswaran-d/personal-portfolio",
      liveUrl: "#",
      features: [
        "Futuristic cyber-dark theme with glowing neon accents",
        "Completely editable central data architecture",
        "Interactive project details modal & resume previewer",
        "Full mobile, tablet, and widescreen responsive design"
      ],
      highlights: "Lighthouse 100 performance score and smooth 60fps animations."
    }
  ],

  // Education Details (Editable placeholders for Lingeswaran)
  education: [
    {
      degree: "Bachelor of Engineering / Technology (B.E. / B.Tech)",
      department: "Artificial Intelligence & Machine Learning (AI & ML)",
      institution: "[Your College / University Name]", // Edit your college name here
      location: "Tamil Nadu, India",
      graduationYear: "2022 – 2026", // Edit graduation year
      status: "Currently Pursuing (Final Year / Undergraduate)",
      grade: "First Class with Distinction (Editable)",
      coursework: [
        "Design & Analysis of Algorithms",
        "Foundations of Machine Learning",
        "Deep Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision & Pattern Recognition",
        "Data Structures & Object-Oriented Python",
        "Database Management Systems (SQL & NoSQL)"
      ],
      notes: "Focusing on applied AI architectures, computational efficiency, and deep learning research."
    }
  ],

  // Achievements, Certifications, Workshops & Activities
  achievementsSection: {
    certifications: [
      {
        title: "Python for Data Science & Artificial Intelligence",
        issuer: "Recognized Certification Provider / University",
        date: "2024 (Editable)",
        credentialUrl: "#",
        badge: "Verified Skill",
        description: "Comprehensive coverage of Python libraries (NumPy, Pandas, Matplotlib) and algorithmic pipelines for AI data preparation."
      },
      {
        title: "Machine Learning Foundations & Supervised Algorithms",
        issuer: "Online Learning Platform (Coursera / NPTEL / Udemy)",
        date: "2024 (Editable)",
        credentialUrl: "#",
        badge: "Certification",
        description: "Hands-on implementation of regression, decision trees, support vector machines, and model validation techniques."
      },
      {
        title: "Generative AI & Prompt Engineering Fundamentals",
        issuer: "Tech Provider / Cloud Partner (DeepLearning.AI / Google Cloud)",
        date: "2025 (Editable)",
        credentialUrl: "#",
        badge: "Specialization",
        description: "Architecting effective prompts, understanding transformer attention mechanisms, and implementing LLM chaining."
      }
    ],
    workshops: [
      {
        title: "Hands-on Workshop on Deep Learning & Computer Vision",
        organizer: "Engineering Department / Tech Symposium",
        date: "2024 (Editable)",
        description: "Intensive practical workshop focused on convolutional neural networks, object detection architectures, and OpenCV."
      },
      {
        title: "Workshop on Cloud Computing & AI Model Deployment",
        organizer: "Student Developer Club",
        date: "2024 (Editable)",
        description: "Explored containerization, REST API wrappers for ML models, and deploying intelligent endpoints."
      }
    ],
    activities: [
      {
        role: "Student Tech Ambassador / Community Lead",
        organization: "Campus AI & Coding Club",
        period: "2024 – Present (Editable)",
        description: "Organized technical peer study groups, mentored junior students in Python programming, and coordinated tech hackathons."
      },
      {
        role: "Hackathon Participant & Innovator",
        organization: "Inter-College AI Hackathon",
        period: "2024 (Editable)",
        description: "Brainstormed and developed rapid AI prototypes addressing real-time challenges under competitive constraints."
      }
    ]
  }
};
