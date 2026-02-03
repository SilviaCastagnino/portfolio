// ===== TRADUZIONI SEMPLIFICATE =====
const translations = {
  it: {
    "nav-home": "Home",
    "nav-skills": "Competenze",
    "nav-projects": "Progetti",
    "nav-education": "Formazione",
    "nav-contact": "Contatti",
    "theme-dark": "Scuro",
    "theme-light": "Chiaro",
    "all-projects-title": "Tutti i progetti",
    "projects-intro": "Qui trovi una raccolta di alcuni miei progetti.",
    "btn-visita": "Visita",
    "btn-codice": "Codice",
    "back-home": "Torna alla Home",
    "footer-copyright": "© 2023 Silvia. Tutti i diritti riservati.",
    "footer-home": "Home",
    "footer-projects": "Progetti",
    "footer-education": "Formazione",
    "footer-contact": "Contatti"
  },
  en: {
    "nav-home": "Home",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-education": "Education",
    "nav-contact": "Contact",
    "theme-dark": "Dark",
    "theme-light": "Light",
    "all-projects-title": "All Projects",
    "projects-intro": "Here you'll find a collection of some of my projects.",
    "btn-visita": "View",
    "btn-codice": "Code",
    "back-home": "Back to Home",
    "footer-copyright": "© 2023 Silvia. All rights reserved.",
    "footer-home": "Home",
    "footer-projects": "Projects",
    "footer-education": "Education",
    "footer-contact": "Contact"
  }
};

// ===== DATI DEI PROGETTI AGGIORNATI =====
const projectsData = [
  {
    title: "Simon Game",
    description: {
      it: "Un gioco di memoria classico con effetti visivi moderni e suoni interattivi.",
      en: "A classic memory game with modern visual effects and interactive sounds."
    },
    image: "https://as1.ftcdn.net/v2/jpg/00/29/36/10/1000_F_29361048_BZDkzv3FYKg6uOcbtGQPpSu56wOvhvsi.jpg",
    demoUrl: "https://silviacastagnino.github.io/Simon-Game/",
    codeUrl: "https://github.com/sylvia19976/Simon-Game",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Drum Kit",
    description: {
      it: "Una batteria virtuale interattiva che risponde ai tasti della tastiera e al click.",
      en: "An interactive virtual drum kit that responds to keyboard keys and clicks."
    },
    image: "https://cdn.milleniumdrums.com/app/uploads/2021/09/HD-120_IMG_01_FULL.jpg",
    demoUrl: "https://silviacastagnino.github.io/Drum-Kit/",
    codeUrl: "https://github.com/sylvia19976/Drum-Kit",
    technologies: ["JavaScript", "CSS3", "Web Audio API"]
  },
  {
    title: "Tin Dog",
    description: {
      it: "Sito di incontri per cani con design responsive e interfaccia utente moderna.",
      en: "Dog dating website with responsive design and modern user interface."
    },
    image: "https://w0.peakpx.com/wallpaper/891/195/HD-wallpaper-cookie-tin-puppy-cookie-tin-puppy-dog.jpg",
    demoUrl: "https://silviacastagnino.github.io/Tin-Dog-Project/",
    codeUrl: "https://github.com/sylvia19976/Tin-Dog-Project",
    technologies: ["Bootstrap", "HTML5", "CSS3"]
  },
  {
    title: "White Water Rafting",
    description: {
      it: "Sito web per un'azienda di rafting con prenotazioni online e informazioni sui tour.",
      en: "Website for a rafting company with online bookings and tour information."
    },
    image: "https://grandecampania.it/wp-content/uploads/2021/07/rafting.png",
    demoUrl: "https://silviacastagnino.github.io/wdd130/wwr/index.html",
    codeUrl: "https://github.com/silviacastagnino/wdd130/tree/main/wwr",
    technologies: ["HTML5", "CSS3", "Responsive"]
  },
  {
    title: "Travels Website",
    description: {
      it: "Sito web per un'azienda di viaggi locali con focus su esperienze autentiche e sostenibili.",
      en: "Website for a local travel company focusing on authentic and sustainable experiences."
    },
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://silviacastagnino.github.io/wdd131/project/travels.html",
    codeUrl: "https://github.com/SilviaCastagnino/wdd131/tree/main/project",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"]
  },
  {
    title: "Course Presentation Website",
    description: {
      it: "Sito web di presentazione personale e del percorso di studi per il corso WDD231. Presenta un design pulito e strutturato, con una chiara organizzazione delle informazioni in sezioni e una tabella visiva del certificato di programmazione.",
      en: "Personal and course presentation website for WDD231. Features a clean, structured design with clear information organization into sections and a visual table for the programming certificate coursework."
    },
    image: "images/imagewdd.png",
    demoUrl: "https://silviacastagnino.github.io/wdd231/",
    codeUrl: "https://github.com/SilviaCastagnino/wdd231",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Content Layout"]
  },
  {
    title: "CodeLearnWise - Learning Platform",
    description: {
      it: "Sito promozionale per una piattaforma immaginaria di apprendimento web development. Presenta un design moderno e strutturato con hero section, griglia di servizi, card interattive e una chiara call-to-action, dimostrando capacità di progettazione UX/UI e layout complessi.",
      en: "Promotional website for an imaginary web development learning platform. Features a modern, structured design with a hero section, service grid, interactive concept cards, and clear calls-to-action, showcasing skills in complex layout design and UX/UI for a product."
    },
    image: "images/imagecodelearnwise.png", // Immagine coerente con "apprendimento/coding"
    demoUrl: "https://silviacastagnino.github.io/wdd231/finalproject/index.html",
    codeUrl: "https://github.com/SilviaCastagnino/wdd231/tree/main/finalproject", // Nota: il link GitHub non è stato analizzabile, ma va bene come riferimento.
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UX/UI Layout"]
  },
  {
    title: "Chamber of Commerce Website",
    description: {
      it: "Sito web completo per una Camera di Commercio locale. Presenta un design istituzionale con colori caldi, un layout strutturato per eventi, meteo e aziende in evidenza, e integra componenti dinamici aggiornati via JavaScript, simulando un progetto per un cliente reale.",
      en: "Complete website for a local Chamber of Commerce. Features an institutional design with warm colors, a structured layout for events, weather, and business spotlights, and integrates dynamic components updated via JavaScript, simulating a real-world client project."
    },
    image: "images/imagechamber.png",
    demoUrl: "https://silviacastagnino.github.io/wdd231/chamber/index.html",
    codeUrl: "https://github.com/SilviaCastagnino/wdd231/tree/main/chamber",
    technologies: ["HTML5", "CSS3", "JavaScript", "Dynamic Content", "Responsive Design", "Business Layout"]
  },
  {
    title: "SkyCast - Weather Forecast App",
    description: {
      it: "Applicazione web meteorologica (WDD330 Final Project). Mostra previsioni meteo dettagliate per la località corrente e permette la ricerca per altre città. Presenta una dashboard pulita con dati in tempo reale, previsioni orarie e un'interfaccia utente intuitiva.",
      en: "Weather forecasting web application (WDD330 Final Project). Displays detailed weather forecasts for the current location and allows searching for other cities. Features a clean dashboard with real-time data, hourly forecasts, and an intuitive user interface."
    },
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://silviacastagnino.github.io/wdd330-final-project/",
    codeUrl: "https://github.com/SilviaCastagnino/wdd330-final-project",
    technologies: ["JavaScript", "APIs", "Async/Await", "Dynamic UI", "CSS3", "HTML5", "Weather Data"]
  },
  {
    title: "C# Programming",
    description: {
      it: "Collezione di progetti C# che dimostrano programmazione orientata agli oggetti e concetti avanzati.",
      en: "Collection of C# projects demonstrating object-oriented programming and advanced concepts."
    },
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    demoUrl: "https://github.com/SilviaCastagnino/cse210-hw",
    codeUrl: "https://github.com/SilviaCastagnino/cse210-hw",
    technologies: ["C#", "OOP", ".NET", "Algorithms"]
  },
  {
    title: "SleepOutside - E-commerce App (WDD330)",
    description: {
      it: "Applicazione e-commerce per attrezzatura da campeggio, sviluppata come progetto del corso di Frontend Avanzato. Il repository mostra l'implementazione di funzionalità lato client, l'utilizzo di tool moderni come Vite, ESLint e Prettier, e il lavoro con codice starter strutturato in team.",
      en: "E-commerce web application for camping gear, developed as an Advanced Frontend course project. The repository showcases client-side feature implementation, use of modern tooling like Vite, ESLint, and Prettier, and working with structured starter code in a team setting."
    },
    // Scegli un'immagine che rappresenti il codice, un diagramma, o il concetto del progetto
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://github.com/SilviaCastagnino/wdd330-sleepoutside",
    codeUrl: "https://github.com/SilviaCastagnino/wdd330-sleepoutside",
    technologies: ["JavaScript", "HTML5", "CSS3", "Vite", "ESLint", "Prettier", "Team Project", "E-commerce Logic"]
  },
  {
    title: "CSE340 - Backend Application",
    description: {
      it: "Applicazione web completa con backend Node.js, database PostgreSQL e architettura MVC. Il progetto include un server Express, gestione di route, controller, modelli per i dati, viste EJS e una struttura di cartelle professionale. Dimostra competenze full-stack di base. (Progetto eseguito in locale)",
      en: "Complete web application with Node.js backend, PostgreSQL database, and MVC architecture. The project features an Express server, route handling, controllers, data models, EJS views, and a professional folder structure. Demonstrates foundational full-stack skills. (Locally run project)"
    },
    // Immagine che suggerisce backend/server/database
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://github.com/SilviaCastagnino/cse340", // Nessuna demo pubblica
    codeUrl: "https://github.com/SilviaCastagnino/cse340",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "MVC Architecture", "Backend", "REST API", "pnpm"]
  },
  {
    title: "CSE212 - Data Structures & Algorithms in C#",
    description: {
      it: "Raccolta di esercizi e implementazioni in C# per il corso di Strutture Dati e Algoritmi (CSE212). Include codici divisi per settimana, dimostrando competenze nella logica di programmazione, problem-solving e comprensione di algoritmi fondamentali. (Repository di esercizi)",
      en: "Collection of C# exercises and implementations for the Data Structures & Algorithms course (CSE212). Includes code organized by week, demonstrating skills in programming logic, problem-solving, and understanding of fundamental algorithms. (Exercise repository)"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Immagine generica coding/algorithms
    demoUrl: "https://github.com/SilviaCastagnino/cse212", // Nessuna demo web
    codeUrl: "https://github.com/SilviaCastagnino/cse212",
    technologies: ["C#", "Algorithms", "Data Structures", ".NET", "Problem Solving"]
  },
  {
    title: "Todo List App with React",
    description: {
      it: "Applicazione moderna per la gestione di una lista delle cose da fare (to-do list), sviluppata con React. Include funzionalità per aggiungere, completare, filtrare e cancellare attività. Dimostra competenze nello sviluppo di interfacce utente dinamiche e reattive utilizzando componenti React, stato locale e gestione degli eventi.",
      en: "Modern to-do list management application built with React. Includes features to add, complete, filter, and delete tasks. Demonstrates skills in building dynamic and reactive user interfaces using React components, local state, and event handling."
    },
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://silviacastagnino.github.io/react-todo-list/", // Nota: questa demo funziona!
    codeUrl: "https://github.com/SilviaCastagnino/react-todo-list",
    technologies: ["React", "JavaScript", "Components", "State Management", "CSS", "Frontend"]
  },
  {
    title: "CSE341 - Backend API with MongoDB & Swagger",
    description: {
      it: "API RESTful backend sviluppata con Node.js, Express e MongoDB per il corso CSE341. Il progetto implementa operazioni CRUD complete, connessione a database NoSQL, validazione dei dati e documentazione interattiva delle API generata automaticamente con Swagger. Include autenticazione JWT e gestione degli errori.",
      en: "RESTful backend API built with Node.js, Express, and MongoDB for the CSE341 course. The project implements full CRUD operations, NoSQL database integration, data validation, and interactive API documentation auto-generated with Swagger. Includes JWT authentication and error handling."
    },
    image: "images/image341.png", // Immagine backend/API
    demoUrl: "https://github.com/SilviaCastagnino/cse341-project2", // Nessuna demo frontend pubblica
    codeUrl: "https://github.com/SilviaCastagnino/cse341-project2",
    technologies: ["Node.js", "Express", "MongoDB", "REST API", "Swagger", "JWT", "Mongoose", "Backend"]
  }
];

// ===== FUNZIONI BASE =====
function updateTranslations() {
  const currentLang = document.body.dataset.lang;
  const currentTranslations = translations[currentLang];

  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.dataset.key;
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }
  });
}

function changeLanguage(lang) {
  document.body.dataset.lang = lang;
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.querySelector('span').textContent = lang.toUpperCase();
  }

  updateTranslations();
  renderProjects();
  localStorage.setItem('portfolio-language', lang);
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = newTheme;

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.innerHTML = newTheme === 'dark'
      ? '<i class="fas fa-moon"></i><span data-key="theme-dark">Scuro</span>'
      : '<i class="fas fa-sun"></i><span data-key="theme-light">Chiaro</span>';
  }

  updateTranslations();
  localStorage.setItem('portfolio-theme', newTheme);
}

function loadPreferences() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.innerHTML = savedTheme === 'dark'
        ? '<i class="fas fa-moon"></i><span data-key="theme-dark">Scuro</span>'
        : '<i class="fas fa-sun"></i><span data-key="theme-light">Chiaro</span>';
    }
  }

  const savedLang = localStorage.getItem('portfolio-language') || 'it';
  document.body.dataset.lang = savedLang;
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.querySelector('span').textContent = savedLang.toUpperCase();
  }

  updateTranslations();
}

// ===== RENDER PROGETTI SEMPLICE =====
function renderProjects() {
  const currentLang = document.body.dataset.lang;
  const projectsGrid = document.getElementById('allProjectsGrid');

  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData.map(project => {
    const visitText = translations[currentLang]['btn-visita'];
    const codeText = translations[currentLang]['btn-codice'];

    return `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description[currentLang]}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.demoUrl}" ${project.demoUrl === '#' ? '' : 'target="_blank"'} class="btn-demo">
              <i class="fas fa-external-link-alt"></i> ${visitText}
            </a>
            <a href="${project.codeUrl}" target="_blank" class="btn-code">
              <i class="fab fa-github"></i> ${codeText}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== INIZIALIZZAZIONE =====
document.addEventListener('DOMContentLoaded', () => {
  // Carica preferenze
  loadPreferences();

  // Renderizza progetti
  renderProjects();

  // Controlli tema
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Controlli lingua
  const languageToggle = document.getElementById('languageToggle');
  const languageOptions = document.getElementById('languageOptions');

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      languageOptions.classList.toggle('active');
    });
  }

  // Seleziona lingua
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.dataset.lang;
      changeLanguage(lang);
      if (languageOptions) {
        languageOptions.classList.remove('active');
      }
    });
  });

  // Menu mobile
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // Chiudi menu mobile al click su link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList) {
        navList.classList.remove('active');
      }
    });
  });

  // Chiudi dropdown lingua al click fuori
  document.addEventListener('click', (e) => {
    if (languageToggle && languageOptions &&
      !languageToggle.contains(e.target) &&
      !languageOptions.contains(e.target)) {
      languageOptions.classList.remove('active');
    }
  });

  // Animazione scroll per header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header && window.scrollY > 50) {
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else if (header) {
      header.style.boxShadow = 'none';
    }
  });
});