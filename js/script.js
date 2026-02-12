// ===== VARIABILI GLOBALI =====
const translations = {
  it: {
    // Navbar
    "nav-home": "Home",
    "nav-skills": "Competenze",
    "nav-projects": "Progetti",
    "nav-education": "Formazione",
    "nav-contact": "Contatti",

    // Tema
    "theme-dark": "Scuro",
    "theme-light": "Chiaro",

    // Hero
    "hero-title": "Ciao, sono Silvia",
    "hero-subtitle": "Full Stack Developer & UI/UX Designer",
    "hero-btn-projects": "Vedi i miei progetti",
    "hero-btn-contact": "Contattami",

    // Skills
    "skills-title": "Le mie competenze",
    "skills-show-more": "Mostra tutte le competenze",
    "skills-show-less": "Mostra meno competenze",

    // Projects
    "projects-title": "I miei progetti",
    "project1-desc": "Un gioco di memoria classico con effetti visivi moderni e suoni interattivi.",
    "project2-desc": "Una batteria virtuale interattiva che risponde ai tasti della tastiera e al click.",
    "project3-desc": "Sito di incontri per cani con design responsive e interfaccia utente.",
    "projects-view-all": "Vedi tutti i progetti",

    // Education
    "education-title": "La mia formazione",
    "education-bachelor": "Laurea Triennale in Sviluppo Software",
    "education-university": "Brigham Young University",
    "education-period-bachelor": "Marzo 2025 - Giugno 2026",
    "education-desc-bachelor": "Enfasi: Sviluppo Software<br>Minore: Sviluppo Software<br>Voto: 110/110 con Lode<br>Borsa di Studio Accademica 2025-2026",
    "education-associate": "Diploma Associato in Sviluppo Web",
    "education-period-associate": "2025 - 2026",
    "education-desc-associate": "Focus sulle tecnologie web moderne, sviluppo front-end e back-end. Progetti completati in HTML, CSS, JavaScript e gestione database.",
    "education-certificate": "Certificato Web & Computer Programming",
    "education-institution-cert": "Brigham Young University - Idaho",
    "education-period-cert": "Completato: Agosto 2025",
    "education-desc-cert": "Certificazione completa di programmazione che copre tecnologie web, fondamenti di informatica e competenze di codifica pratiche.",
    "education-linkedin": "Guarda tutte le mie certificazioni su LinkedIn",

    // Contact
    "contact-title": "Contattami ora",
    "contact-name": "Nome",
    "contact-email": "Email",
    "contact-message": "Messaggio",
    "contact-submit": "Invia Messaggio",
    "contact-email-title": "Email",
    "contact-phone-title": "Telefono",
    "contact-location-title": "Località",
    "contact-location": "Italia",

    // Footer
    "footer-copyright": "© 2023 Silvia. Tutti i diritti riservati.",
    "footer-home": "Home",
    "footer-projects": "Progetti",
    "footer-education": "Formazione",
    "footer-contact": "Contatti",
    "footer-privacy": "Privacy"
  },
  en: {
    // Navbar
    "nav-home": "Home",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-education": "Education",
    "nav-contact": "Contact",

    // Tema
    "theme-dark": "Dark",
    "theme-light": "Light",

    // Hero
    "hero-title": "Hi, I'm Silvia",
    "hero-subtitle": "Full Stack Developer & UI/UX Designer",
    "hero-btn-projects": "See my projects",
    "hero-btn-contact": "Contact me",

    // Skills
    "skills-title": "My skills",
    "skills-show-more": "Show all skills",
    "skills-show-less": "Show fewer skills",

    // Projects
    "projects-title": "My projects",
    "project1-desc": "A classic memory game with modern visual effects and interactive sounds.",
    "project2-desc": "An interactive virtual drum kit that responds to keyboard keys and clicks.",
    "project3-desc": "Dating site for dogs with responsive design and modern user interface.",
    "projects-view-all": "View all projects",

    // Education
    "education-title": "My Education",
    "education-bachelor": "Bachelor's Degree in Software Development",
    "education-university": "Brigham Young University",
    "education-period-bachelor": "March 2025 - June 2026",
    "education-desc-bachelor": "Emphasis: Software Development<br>Minor: Software Development<br>GPA: 4.0/4.0<br>Academic Scholarship Spring 2026 & Summer 2026",
    "education-associate": "Associate Degree in Web Development",
    "education-period-associate": "2023 - 2025",
    "education-desc-associate": "Focus on modern web technologies, front-end and back-end development. Completed projects in HTML, CSS, JavaScript, and database management.",
    "education-certificate": "Web & Computer Programming Certificate",
    "education-institution-cert": "Brigham Young University - Idaho",
    "education-period-cert": "Completed: August 2025",
    "education-desc-cert": "Comprehensive programming certification covering web technologies, computer science fundamentals, and practical coding skills.",
    "education-linkedin": "View all my certifications on LinkedIn",

    // Contact
    "contact-title": "Contact me now",
    "contact-name": "Name",
    "contact-email": "Email",
    "contact-message": "Message",
    "contact-submit": "Send Message",
    "contact-email-title": "Email",
    "contact-phone-title": "Phone",
    "contact-location-title": "Location",
    "contact-location": "Italy",

    // Footer
    "footer-copyright": "© 2023 Silvia. All rights reserved.",
    "footer-home": "Home",
    "footer-projects": "Projects",
    "footer-education": "Education",
    "footer-contact": "Contact",
    "footer-privacy": "Privacy"
  }
};

// ===== FUNZIONI DI UTILITÀ =====
function initTypingText() {
  const texts = ['Silvia', 'Developer', 'Designer'];
  const typingElement = document.getElementById('typingText');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isEnd = true;
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      const delay = isEnd ? 2000 : typingSpeed;
      setTimeout(type, delay);
    }

    isEnd = false;
  }

  setTimeout(type, 1000);
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.dataset.theme = newTheme;
  themeToggle.innerHTML = newTheme === 'dark'
    ? '<i class="fas fa-moon"></i><span data-key="theme-dark">Scuro</span>'
    : '<i class="fas fa-sun"></i><span data-key="theme-light">Chiaro</span>';

  // Salva nel localStorage
  localStorage.setItem('portfolio-theme', newTheme);

  // Aggiorna le traduzioni per il testo del tema
  updateTranslations();
}

function changeLanguage(lang) {
  document.body.dataset.lang = lang;
  languageToggle.querySelector('span').textContent = lang.toUpperCase();

  // Aggiorna tutti i testi
  updateTranslations();

  // Aggiorna la lingua del form
  updateFormLanguage();

  // Salva nel localStorage
  localStorage.setItem('portfolio-language', lang);
}

function updateTranslations() {
  const currentLang = document.body.dataset.lang;
  const currentTranslations = translations[currentLang];

  // Aggiorna tutti gli elementi con data-key
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.dataset.key;
    if (currentTranslations[key]) {
      // Per elementi che contengono HTML (come <br>)
      if (key.includes('education-desc')) {
        element.innerHTML = currentTranslations[key];
      } else {
        element.textContent = currentTranslations[key];
      }
    }
  });
}

// Aggiorna la lingua del form Formspree
function updateFormLanguage() {
  const currentLang = document.body.dataset.lang;
  const formLanguageField = document.getElementById('formLanguage');
  const formSubjectField = document.querySelector('input[name="_subject"]');

  if (formLanguageField) {
    formLanguageField.value = currentLang;
  }

  // Cambia anche il soggetto dell'email in base alla lingua
  if (formSubjectField) {
    if (currentLang === 'en') {
      formSubjectField.value = 'New message from Silvia portfolio!';
    } else {
      formSubjectField.value = 'Nuovo messaggio dal portfolio di Silvia!';
    }
  }
}

function loadPreferences() {
  // Carica tema
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    themeToggle.innerHTML = savedTheme === 'dark'
      ? '<i class="fas fa-moon"></i><span data-key="theme-dark">Scuro</span>'
      : '<i class="fas fa-sun"></i><span data-key="theme-light">Chiaro</span>';
  }

  // Carica lingua
  const savedLang = localStorage.getItem('portfolio-language') || 'it';
  document.body.dataset.lang = savedLang;
  languageToggle.querySelector('span').textContent = savedLang.toUpperCase();

  // Aggiorna traduzioni
  updateTranslations();

  // Imposta la lingua iniziale del form
  updateFormLanguage();
}

function handleContactForm(e) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  // Cambia testo pulsante durante l'invio
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
  submitBtn.disabled = true;

  // Invia il form normalmente a Formspree
  setTimeout(() => {
    e.target.submit();
  }, 1000);
}

function initSkillAnimations() {
  document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 0 20px var(--accent-color)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
}

function toggleAdditionalSkills() {
  const additionalSkills = document.getElementById('additionalSkills');
  const toggleButton = document.getElementById('toggleSkills');
  const isShowing = additionalSkills.classList.contains('show');

  if (isShowing) {
    additionalSkills.classList.remove('show');
    toggleButton.classList.remove('show-all');
    toggleButton.querySelector('span').setAttribute('data-key', 'skills-show-more');
    toggleButton.querySelector('i').className = 'fas fa-chevron-down';
  } else {
    additionalSkills.classList.add('show');
    toggleButton.classList.add('show-all');
    toggleButton.querySelector('span').setAttribute('data-key', 'skills-show-less');
    toggleButton.querySelector('i').className = 'fas fa-chevron-up';
  }

  updateTranslations();
}

// ===== INIZIALIZZAZIONE =====
document.addEventListener('DOMContentLoaded', () => {
  // Controlli tema e lingua
  const themeToggle = document.getElementById('themeToggle');
  const languageToggle = document.getElementById('languageToggle');
  const languageOptions = document.getElementById('languageOptions');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  const contactForm = document.getElementById('contactForm');
  const toggleSkillsBtn = document.getElementById('toggleSkills');

  // Inizializza il testo della digitazione
  initTypingText();

  // Carica le preferenze
  loadPreferences();

  // Inizializza animazioni
  initSkillAnimations();

  // ===== EVENT LISTENERS =====

  // Toggle tema
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Toggle lingua
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
      languageOptions.classList.remove('active');
    });
  });

  // Toggle skills aggiuntive
  if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener('click', toggleAdditionalSkills);
  }

  // Menu mobile
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // Chiudi menu mobile al click su link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });

  // Gestione form di contatto
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

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
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});