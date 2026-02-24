// ===== ROADMAP DATA =====
const roadmapData = {
  "web-dev": {
    title: "Web Development",
    icon: "🌐",
    color: "#5b6af8",
    description: "Master the art of building modern, responsive websites and web applications.",
    steps: [
      {
        title: "Foundations: HTML & CSS",
        duration: "4–6 weeks",
        level: "Beginner",
        description: "Learn the building blocks of the web — structure with HTML and styling with CSS.",
        topics: ["HTML5 Semantics", "CSS Flexbox", "CSS Grid", "Responsive Design", "CSS Variables", "Forms & Validation"]
      },
      {
        title: "JavaScript Essentials",
        duration: "6–8 weeks",
        level: "Beginner",
        description: "Understand core programming concepts and how JavaScript powers interactivity on the web.",
        topics: ["Variables & Types", "Functions", "DOM Manipulation", "Events", "Fetch API", "ES6+ Features"]
      },
      {
        title: "Version Control with Git",
        duration: "1–2 weeks",
        level: "Beginner",
        description: "Track your code changes and collaborate with others using Git and GitHub.",
        topics: ["Git Basics", "Branching", "Merging", "Pull Requests", "GitHub Pages"]
      },
      {
        title: "Modern Frontend Frameworks",
        duration: "8–10 weeks",
        level: "Intermediate",
        description: "Learn React or Vue to build dynamic, component-based user interfaces.",
        topics: ["React or Vue", "Components", "State Management", "Hooks", "Router", "Context API"]
      },
      {
        title: "Backend & Node.js",
        duration: "6–8 weeks",
        level: "Intermediate",
        description: "Build server-side applications and REST APIs using Node.js and Express.",
        topics: ["Node.js", "Express.js", "REST APIs", "Middleware", "Authentication", "JWT"]
      },
      {
        title: "Databases",
        duration: "4–6 weeks",
        level: "Intermediate",
        description: "Store and manage data using relational and non-relational databases.",
        topics: ["SQL Basics", "PostgreSQL", "MongoDB", "ORM/ODM", "CRUD Operations", "Indexing"]
      },
      {
        title: "Deployment & DevOps Basics",
        duration: "2–4 weeks",
        level: "Advanced",
        description: "Deploy your applications to the cloud and learn CI/CD fundamentals.",
        topics: ["Vercel / Netlify", "AWS / GCP Basics", "Docker Intro", "CI/CD Pipelines", "Environment Variables"]
      }
    ]
  },
  "data-science": {
    title: "Data Science",
    icon: "📊",
    color: "#8b5cf6",
    description: "Extract insights from data using statistics, visualization, and machine learning.",
    steps: [
      {
        title: "Python Programming",
        duration: "4–6 weeks",
        level: "Beginner",
        description: "Learn Python, the primary language of data science.",
        topics: ["Python Basics", "Data Structures", "OOP", "File I/O", "Virtual Environments", "pip"]
      },
      {
        title: "Mathematics & Statistics",
        duration: "4–8 weeks",
        level: "Beginner",
        description: "Build the mathematical foundation required for data analysis and ML.",
        topics: ["Linear Algebra", "Probability", "Statistics", "Calculus Intro", "Hypothesis Testing", "Distributions"]
      },
      {
        title: "Data Manipulation",
        duration: "3–4 weeks",
        level: "Beginner",
        description: "Use Pandas and NumPy to clean, transform, and analyze datasets.",
        topics: ["NumPy", "Pandas", "Data Cleaning", "Aggregations", "Merging Datasets", "Time Series"]
      },
      {
        title: "Data Visualization",
        duration: "2–3 weeks",
        level: "Intermediate",
        description: "Communicate insights through compelling charts and dashboards.",
        topics: ["Matplotlib", "Seaborn", "Plotly", "Tableau Basics", "Dashboard Design", "Storytelling with Data"]
      },
      {
        title: "Machine Learning",
        duration: "8–12 weeks",
        level: "Intermediate",
        description: "Build predictive models using supervised and unsupervised learning techniques.",
        topics: ["Scikit-learn", "Linear Regression", "Decision Trees", "Clustering", "Model Evaluation", "Cross-Validation"]
      },
      {
        title: "SQL & Databases",
        duration: "3–4 weeks",
        level: "Intermediate",
        description: "Query and analyze data stored in relational databases.",
        topics: ["SQL Queries", "Joins", "Aggregations", "Window Functions", "PostgreSQL", "BigQuery"]
      },
      {
        title: "Big Data & Cloud",
        duration: "4–6 weeks",
        level: "Advanced",
        description: "Work with large-scale data pipelines and cloud data platforms.",
        topics: ["Apache Spark", "Hadoop Basics", "AWS S3", "Google BigQuery", "Data Pipelines", "ETL"]
      }
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    icon: "🤖",
    color: "#06d6a0",
    description: "Build intelligent systems that learn from data to make predictions and decisions.",
    steps: [
      {
        title: "Math Prerequisites",
        duration: "4–6 weeks",
        level: "Beginner",
        description: "Solidify the mathematical concepts essential to understanding ML algorithms.",
        topics: ["Linear Algebra", "Matrices", "Calculus", "Gradient Descent", "Probability", "Bayesian Thinking"]
      },
      {
        title: "Python for ML",
        duration: "3–4 weeks",
        level: "Beginner",
        description: "Master Python libraries essential to machine learning development.",
        topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter Notebooks", "Conda"]
      },
      {
        title: "Classical Machine Learning",
        duration: "6–8 weeks",
        level: "Intermediate",
        description: "Learn and implement fundamental ML algorithms from scratch.",
        topics: ["Linear/Logistic Regression", "SVM", "Decision Trees", "Random Forest", "KNN", "Naive Bayes"]
      },
      {
        title: "Deep Learning",
        duration: "8–10 weeks",
        level: "Intermediate",
        description: "Understand neural networks and build deep learning models with TensorFlow or PyTorch.",
        topics: ["Neural Networks", "Backpropagation", "CNNs", "RNNs", "TensorFlow", "PyTorch"]
      },
      {
        title: "Natural Language Processing",
        duration: "4–6 weeks",
        level: "Advanced",
        description: "Build models that understand and generate human language.",
        topics: ["Text Preprocessing", "Word Embeddings", "Transformers", "BERT", "GPT Architecture", "HuggingFace"]
      },
      {
        title: "Computer Vision",
        duration: "4–6 weeks",
        level: "Advanced",
        description: "Train models to understand and interpret images and video.",
        topics: ["Image Processing", "Object Detection", "YOLO", "Image Segmentation", "OpenCV", "Transfer Learning"]
      },
      {
        title: "MLOps & Deployment",
        duration: "3–4 weeks",
        level: "Advanced",
        description: "Deploy and maintain ML models in production environments.",
        topics: ["Model Serving", "Flask/FastAPI", "Docker", "MLflow", "AWS SageMaker", "Monitoring"]
      }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    icon: "🔐",
    color: "#f59e0b",
    description: "Protect systems and networks from digital attacks, breaches, and vulnerabilities.",
    steps: [
      {
        title: "Networking Fundamentals",
        duration: "4–6 weeks",
        level: "Beginner",
        description: "Understand how networks function — the backbone of all cybersecurity work.",
        topics: ["OSI Model", "TCP/IP", "DNS", "HTTP/HTTPS", "Firewalls", "VPNs"]
      },
      {
        title: "Operating Systems & Linux",
        duration: "3–4 weeks",
        level: "Beginner",
        description: "Get comfortable with Linux — the OS used in most security tools and servers.",
        topics: ["Linux CLI", "File Permissions", "Processes", "Bash Scripting", "Package Management", "SSH"]
      },
      {
        title: "Security Fundamentals",
        duration: "3–4 weeks",
        level: "Beginner",
        description: "Learn core security concepts, principles, and frameworks.",
        topics: ["CIA Triad", "Authentication", "Encryption", "PKI", "OWASP Top 10", "Security Frameworks"]
      },
      {
        title: "Ethical Hacking & Penetration Testing",
        duration: "8–10 weeks",
        level: "Intermediate",
        description: "Learn to think like a hacker to identify and exploit vulnerabilities legally.",
        topics: ["Kali Linux", "Reconnaissance", "Scanning", "Exploitation", "Metasploit", "Burp Suite"]
      },
      {
        title: "Web Application Security",
        duration: "4–6 weeks",
        level: "Intermediate",
        description: "Identify and remediate common web vulnerabilities and attack vectors.",
        topics: ["SQL Injection", "XSS", "CSRF", "IDOR", "API Security", "Authentication Flaws"]
      },
      {
        title: "Incident Response & Forensics",
        duration: "3–4 weeks",
        level: "Advanced",
        description: "Detect, respond to, and investigate cybersecurity incidents.",
        topics: ["SIEM Tools", "Log Analysis", "Digital Forensics", "Malware Analysis", "IR Playbooks"]
      },
      {
        title: "Cloud Security & Certifications",
        duration: "4–6 weeks",
        level: "Advanced",
        description: "Secure cloud environments and prepare for industry certifications.",
        topics: ["AWS Security", "Zero Trust", "CompTIA Security+", "CEH", "OSCP", "CISSP Intro"]
      }
    ]
  },
  "mobile-dev": {
    title: "Mobile App Development",
    icon: "📱",
    color: "#ec4899",
    description: "Build native and cross-platform mobile apps for iOS and Android.",
    steps: [
      {
        title: "Programming Basics",
        duration: "4–6 weeks",
        level: "Beginner",
        description: "Learn the fundamentals of programming using JavaScript or Dart.",
        topics: ["Variables & Types", "Functions", "OOP Concepts", "Async Programming", "Error Handling"]
      },
      {
        title: "React Native or Flutter",
        duration: "6–8 weeks",
        level: "Beginner",
        description: "Choose a cross-platform framework and learn its core concepts and architecture.",
        topics: ["Components/Widgets", "State Management", "Navigation", "Styling", "Platform APIs", "Hot Reload"]
      },
      {
        title: "UI/UX for Mobile",
        duration: "2–3 weeks",
        level: "Beginner",
        description: "Design intuitive and beautiful mobile interfaces following platform guidelines.",
        topics: ["Material Design", "iOS HIG", "Accessibility", "Touch Interactions", "Animations", "Responsive Layouts"]
      },
      {
        title: "Data & State Management",
        duration: "4–5 weeks",
        level: "Intermediate",
        description: "Manage complex application state and persist data locally.",
        topics: ["Redux / Riverpod", "Context API", "AsyncStorage", "SQLite", "Shared Preferences"]
      },
      {
        title: "Networking & APIs",
        duration: "3–4 weeks",
        level: "Intermediate",
        description: "Connect your app to remote APIs and handle real-time data.",
        topics: ["REST APIs", "GraphQL", "WebSockets", "Authentication", "Error Handling", "Caching"]
      },
      {
        title: "Native Features",
        duration: "3–4 weeks",
        level: "Intermediate",
        description: "Integrate device hardware and platform-specific capabilities.",
        topics: ["Camera", "GPS/Location", "Push Notifications", "Biometrics", "Background Tasks"]
      },
      {
        title: "Publishing & Monetization",
        duration: "2–3 weeks",
        level: "Advanced",
        description: "Ship your app to the App Store and Google Play and explore monetization.",
        topics: ["App Store Guidelines", "Play Store Submission", "In-App Purchases", "Analytics", "Crash Reporting"]
      }
    ]
  }
};

// ===== UTILITY FUNCTIONS =====
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light', saved === 'light');
  updateThemeIcon();
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== HOME PAGE =====
function initHomePage() {
  const form = document.getElementById('hero-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const select = document.getElementById('career-select');
    const value = select.value;
    if (!value) {
      select.style.borderColor = '#f87171';
      select.style.boxShadow = '0 0 0 3px rgba(248,113,113,0.2)';
      return;
    }
    localStorage.setItem('selectedCareer', value);
    window.location.href = `roadmap.html?career=${value}`;
  });

  // Reset error on change
  const sel = document.getElementById('career-select');
  if (sel) sel.addEventListener('change', () => {
    sel.style.borderColor = '';
    sel.style.boxShadow = '';
  });
}

// ===== ROADMAP PAGE =====
function initRoadmapPage() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const career = params.get('career') || localStorage.getItem('selectedCareer') || 'web-dev';
  const data = roadmapData[career];

  if (!data) {
    container.innerHTML = '<p style="text-align:center;padding:4rem;">Roadmap not found. Please go back and select a career.</p>';
    return;
  }

  // Update page header
  const titleEl = document.getElementById('roadmap-title');
  const badgeEl = document.getElementById('career-badge');
  const descEl = document.getElementById('roadmap-desc');
  if (titleEl) titleEl.textContent = data.title + ' Roadmap';
  if (badgeEl) badgeEl.innerHTML = `${data.icon} ${data.title}`;
  if (descEl) descEl.textContent = data.description;

  // Load saved progress
  const savedProgress = JSON.parse(localStorage.getItem(`progress_${career}`) || '[]');

  // Generate timeline
  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  data.steps.forEach((step, i) => {
    const isDone = savedProgress.includes(i);
    const item = document.createElement('div');
    item.className = `timeline-item reveal${isDone ? ' done' : ''}`;
    item.style.animationDelay = `${i * 0.08}s`;

    item.innerHTML = `
      <div class="timeline-marker">
        <div class="timeline-dot ${isDone ? 'completed' : ''}">${i + 1}</div>
      </div>
      <div class="timeline-card">
        <div class="step-header">
          <div class="step-title">${step.title}</div>
          <div class="step-meta">
            <span class="badge badge-duration">⏱ ${step.duration}</span>
            <span class="badge badge-level">${step.level}</span>
          </div>
        </div>
        <p class="step-desc">${step.description}</p>
        <div class="step-topics">
          ${step.topics.map(t => `<span class="topic-chip">${t}</span>`).join('')}
        </div>
        <div class="step-footer">
          <label class="step-check">
            <input type="checkbox" data-index="${i}" ${isDone ? 'checked' : ''}>
            <span class="check-custom"></span>
            Mark as complete
          </label>
          <span style="font-size:0.8rem;color:var(--text-muted)">Step ${i + 1} of ${data.steps.length}</span>
        </div>
      </div>
    `;
    timeline.appendChild(item);
  });

  container.appendChild(timeline);

  // Update progress bar
  updateProgressBar(career, data.steps.length, savedProgress);

  // Checkbox events
  container.addEventListener('change', (e) => {
    if (e.target.type !== 'checkbox') return;
    const idx = parseInt(e.target.dataset.index);
    const progress = JSON.parse(localStorage.getItem(`progress_${career}`) || '[]');
    const newProgress = e.target.checked
      ? [...new Set([...progress, idx])]
      : progress.filter(i => i !== idx);

    localStorage.setItem(`progress_${career}`, JSON.stringify(newProgress));
    const item = e.target.closest('.timeline-item');
    item.classList.toggle('done', e.target.checked);
    item.querySelector('.timeline-dot').classList.toggle('completed', e.target.checked);
    updateProgressBar(career, data.steps.length, newProgress);
  });

  // Search
  const searchInput = document.getElementById('step-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.timeline-item').forEach((item, i) => {
        const step = data.steps[i];
        const match = step.title.toLowerCase().includes(q) ||
          step.description.toLowerCase().includes(q) ||
          step.topics.some(t => t.toLowerCase().includes(q));
        item.style.display = match ? '' : 'none';
      });
    });
  }

  // Populate dropdown
  const selector = document.getElementById('career-switch');
  if (selector) {
    Object.entries(roadmapData).forEach(([key, val]) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${val.icon} ${val.title}`;
      if (key === career) opt.selected = true;
      selector.appendChild(opt);
    });

    selector.addEventListener('change', () => {
      const newCareer = selector.value;
      localStorage.setItem('selectedCareer', newCareer);
      window.location.href = `roadmap.html?career=${newCareer}`;
    });
  }

  // Download button
  const dlBtn = document.getElementById('download-btn');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => downloadRoadmap(career, data));
  }

  // Reveal after DOM settles
  setTimeout(initScrollReveal, 100);
}

function updateProgressBar(career, total, progress) {
  const pct = Math.round((progress.length / total) * 100);
  const fill = document.getElementById('progress-fill');
  const pctEl = document.getElementById('progress-pct');
  const countEl = document.getElementById('progress-count');

  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (countEl) countEl.textContent = `${progress.length} / ${total} steps completed`;
}

function downloadRoadmap(career, data) {
  const progress = JSON.parse(localStorage.getItem(`progress_${career}`) || '[]');
  let content = `╔══════════════════════════════════════════════════════╗\n`;
  content += `║  ${data.icon} ${data.title.toUpperCase()} LEARNING ROADMAP\n`;
  content += `╚══════════════════════════════════════════════════════╝\n\n`;
  content += `${data.description}\n\n`;
  content += `Generated: ${new Date().toLocaleDateString()}\n`;
  content += `Progress: ${progress.length}/${data.steps.length} steps completed\n\n`;
  content += '═'.repeat(56) + '\n\n';

  data.steps.forEach((step, i) => {
    const done = progress.includes(i) ? '✅' : '⬜';
    content += `${done} STEP ${i + 1}: ${step.title}\n`;
    content += `   📅 Duration: ${step.duration}  |  📈 Level: ${step.level}\n`;
    content += `   ${step.description}\n`;
    content += `   Topics: ${step.topics.join(' · ')}\n\n`;
  });

  content += '═'.repeat(56) + '\n';
  content += `Generated by Roadmap Generator | roadmapgenerator.dev\n`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${career}-roadmap.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== CONTACT PAGE =====
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Validate each field
    const fields = [
      { id: 'name', test: v => v.trim().length >= 2, msg: 'Please enter your full name (at least 2 characters).' },
      { id: 'email', test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email address.' },
      { id: 'message', test: v => v.trim().length >= 10, msg: 'Message must be at least 10 characters long.' }
    ];

    fields.forEach(({ id, test, msg }) => {
      const group = document.getElementById(id).closest('.form-group');
      const error = group.querySelector('.form-error');
      const val = document.getElementById(id).value;

      if (!test(val)) {
        group.classList.add('invalid');
        if (error) error.textContent = msg;
        valid = false;
      } else {
        group.classList.remove('invalid');
      }
    });

    if (!valid) return;

    // Simulate submission
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('success-message').classList.add('show');
    }, 1200);
  });

  // Live validation
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.remove('invalid');
    });
  });
}

// ===== FAQ PAGE =====
function initFaqPage() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== COUNTERS (About page) =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + (el.dataset.suffix || '');
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setActiveNav();
  initHamburger();
  initScrollReveal();
  initHomePage();
  initRoadmapPage();
  initContactPage();
  initFaqPage();
  initCounters();

  // Theme toggle buttons
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});
