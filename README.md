# LINGESWARAN D — Portfolio Website

> Modern, futuristic, premium personal portfolio website for **LINGESWARAN D**, an aspiring Artificial Intelligence and Machine Learning Engineer, Python Developer, and Tech Enthusiast.

---

## 🌟 Key Features

1. **Futuristic Cyber Theme**:
   - Deep dark space palette (`#040711`), neon cyan (`#00f5ff`), and violet accents (`#a855f7`).
   - Dynamic interactive particle canvas with neural node connections and mouse repulsion.
   - Frosted glassmorphism cards with subtle glowing borders and micro-interactions.
   - Dark & Cyber-Light dynamic theme toggle.

2. **Hero Section**:
   - Highlighting name: **LINGESWARAN D**.
   - Subtitle: *Aspiring AI & Machine Learning Engineer | Python Developer | Tech Enthusiast*.
   - Animated typewriter cycling through core technical identities.
   - Holographic futuristic profile card with HUD telemetry indicators.
   - Direct CTA buttons: **View My Projects**, **Contact Me**, and **Download Resume**.

3. **About Me**:
   - Highlights the core vision:
     > *"I'm a passionate student interested in Artificial Intelligence, Machine Learning, and software development. I enjoy exploring new technologies, building innovative projects, and solving real-world problems using AI."*
   - Interactive code terminal showcasing the developer's blueprint in Python.
   - Key engineering pillars and quantitative stats.

4. **Skills Matrix (All 9 Core Competencies)**:
   - **Python** (Algorithms, NumPy, Pandas, Scikit-learn)
   - **Artificial Intelligence** (Search, Heuristic modeling, Intelligent Agents)
   - **Machine Learning** (Supervised/Unsupervised, Regression, Evaluation)
   - **HTML** (Semantic web, Accessibility)
   - **CSS** (Modern layout, Grid/Flexbox, Animations)
   - **JavaScript** (ES6+, DOM, State management)
   - **Git & GitHub** (Version control, Collaboration)
   - **Prompt Engineering** (Chain-of-thought, Few-shot prompting, LLM tuning)
   - **Generative AI** (Foundation models, Multimodal, RAG)
   - Interactive category filtering: *All*, *Core AI & Programming*, *Modern AI & LLMs*, *Web Development*, *Tools & DevOps*.

5. **Featured Projects**:
   - **AI Resume Analyzer**: Intelligent NLP application analyzing resumes and scoring ATS compatibility.
   - **Flame in Freefall**: Deep learning computer vision concept analyzing microgravity combustion telemetry for space fire safety.
   - **Personal Portfolio**: Modern responsive portfolio with glassmorphism, React, and Tailwind CSS.
   - Interactive **Explore Specs** modal showing detailed system architecture and features.

6. **Academic Foundation & Education**:
   - Degree: B.E. / B.Tech in Artificial Intelligence & Machine Learning.
   - Clearly labeled editable placeholders for college name, graduation year (2022 – 2026), and coursework.

7. **Achievements, Workshops & Ambassador Roles**:
   - Categorized into Certifications, Hands-on Technical Workshops, and Campus Tech Ambassador activities without fabricated data.

8. **Contact Section & Functional Form**:
   - Direct links for **Email**, **LinkedIn**, **GitHub**, and **Instagram**.
   - Interactive contact form with input validation, character count, and confirmation feedback.

9. **Extra Features**:
   - Custom futuristic neon cursor follower (auto-disabled on touch devices).
   - Sticky navigation bar with blur and active section tracking.
   - Download / Printable Resume Modal with Print to PDF functionality.
   - SEO-friendly meta tags and semantic HTML.

---

## 🚀 How to Run the Website

You have multiple zero-friction ways to run and view the website:

### Method 1: Instant Browser View (Zero Install)
Simply double-click `index.html` in your Windows File Explorer! It opens directly in Chrome, Edge, or Firefox.

### Method 2: Local Web Server (Recommended)
Run using Python in PowerShell:
```powershell
py serve.py
```
Or run using PowerShell's built-in web listener:
```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```
The server will start at: `http://localhost:3000`

---

## 🛠️ How to Customize Your Personal Details

All portfolio content is centralized in **`src/data/portfolioData.js`** (and mirrored in `index.html`).

To personalize:
1. Open `src/data/portfolioData.js` or `index.html` in any editor.
2. Edit your college name, links, or contact details:
   - `personal.name` &rarr; Your display name
   - `education.institution` &rarr; Your college / university name
   - `socials.email` &rarr; Your actual email address
   - `socials.linkedin` &rarr; Your LinkedIn handle
   - `socials.github` &rarr; Your GitHub username
   - `socials.instagram` &rarr; Your Instagram username
3. Refresh the browser to see updates instantly!

---

## 📦 Directory Structure

```
lingeswaran-portfolio/
├── index.html                   # Master single-page app (zero-dependency, instant run)
├── serve.py                     # One-click Python web server
├── serve.ps1                    # One-click Windows PowerShell web server
├── package.json                 # Project configuration
├── README.md                    # Documentation & customization guide
└── src/
    ├── data/
    │   └── portfolioData.js     # Centralized editable data store
    ├── components/
    │   ├── Icon.jsx             # Lucide SVG icon system
    │   ├── Navbar.jsx           # Sticky frosted navigation & drawer
    │   ├── Hero.jsx             # Futuristic Hero with canvas particles
    │   ├── About.jsx            # About section & Python terminal
    │   ├── Skills.jsx           # Filterable animated skill cards
    │   ├── Projects.jsx         # Project showcase cards
    │   ├── Education.jsx        # Academic background & coursework
    │   ├── Achievements.jsx     # Certifications, workshops & activities
    │   ├── Contact.jsx          # Contact channels & interactive form
    │   ├── Footer.jsx           # Footer & back-to-top button
    │   ├── ProjectModal.jsx     # Detailed project specification modal
    │   ├── ResumeModal.jsx      # Printable resume preview modal
    │   └── CustomCursor.jsx     # Futuristic precision mouse glow
    └── App.jsx                  # Root React component
```

---

## 🌐 Deployment

This website can be deployed in 30 seconds to:
- **GitHub Pages**: Push this repository to GitHub, go to *Settings > Pages*, select `main` branch root, and click *Save*.
- **Vercel / Netlify**: Drag-and-drop the project folder onto Netlify Drop or import via Vercel.
