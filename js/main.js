/**
 * ===================================================================
 *  FLUTTER DEVELOPER PORTFOLIO - MAIN SCRIPT (main.js)
 * ===================================================================
 *  Dynamically loads data from data.js, handles phone simulator,
 *  project filter tabs, modals, theme switcher, and interactions.
 * ===================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check if portfolioData is loaded
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData is not defined. Ensure data.js is loaded first.");
    return;
  }

  // Initialize all modules
  initTheme();
  initNavigation();
  renderHeroAndPersonal();
  renderMetrics();
  initHeroPhoneSimulator();
  renderProjects("all");
  initProjectFilters();
  renderSkills();
  renderServices();
  renderExperience();
  renderEducationAndHonors();
  renderTestimonials();
  renderCertifications();
  renderContactSection();
  initContactForm();
  initLucideIcons();
});

// Helper for Lucide icons rendering if available
function initLucideIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}

/* ===================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   =================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", storedTheme);

  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "light" 
    ? '<i data-lucide="moon"></i>' 
    : '<i data-lucide="sun"></i>';
  initLucideIcons();
}

/* ===================================================================
   2. NAVBAR & NAVIGATION
   =================================================================== */
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      mobileMenuBtn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      initLucideIcons();
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        initLucideIcons();
      });
    });
  }
}

function highlightActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href*="#${sectionId}"]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

/* ===================================================================
   3. HERO & PERSONAL INFORMATION
   =================================================================== */
function renderHeroAndPersonal() {
  const { personal } = portfolioData;

  // Title & Names
  document.title = `${personal.name} | ${personal.title}`;
  
  const heroBadge = document.getElementById("heroBadgeText");
  if (heroBadge) heroBadge.textContent = personal.badge;

  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = personal.name;

  const heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle) heroSubtitle.textContent = personal.title;

  const heroBio = document.getElementById("heroBio");
  if (heroBio) heroBio.textContent = personal.shortBio;

  const brandName = document.getElementById("brandName");
  if (brandName) brandName.textContent = personal.name.split(" ")[0] + ".dev";

  // Action links
  const heroResumeBtn = document.getElementById("heroResumeBtn");
  if (heroResumeBtn && personal.resumeUrl) {
    heroResumeBtn.href = personal.resumeUrl;
    heroResumeBtn.setAttribute("target", "_blank");
  }

  // Social Links
  const socialsContainer = document.getElementById("heroSocials");
  if (socialsContainer) {
    socialsContainer.innerHTML = `
      ${personal.github ? `<a href="${personal.github}" target="_blank" class="social-link" title="GitHub: ${personal.name}" aria-label="GitHub"><i data-lucide="github"></i></a>` : ""}
      ${personal.linkedin ? `<a href="${personal.linkedin}" target="_blank" class="social-link" title="LinkedIn: ${personal.name}" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>` : ""}
      ${personal.codeforces ? `<a href="${personal.codeforces}" target="_blank" class="social-link" title="Codeforces: Mohamed_ShahaT" aria-label="Codeforces"><i data-lucide="code-2"></i></a>` : ""}
      ${personal.whatsapp ? `<a href="https://wa.me/${personal.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent('Hello ' + personal.name + ', I saw your portfolio and would like to connect!')}" target="_blank" class="social-link" title="WhatsApp Chat" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>` : ""}
      ${personal.email ? `<a href="mailto:${personal.email}" class="social-link" title="Email: ${personal.email}" aria-label="Email"><i data-lucide="mail"></i></a>` : ""}
    `;
  }
}

/* ===================================================================
   4. METRICS / STATS
   =================================================================== */
function renderMetrics() {
  const container = document.getElementById("metricsGrid");
  if (!container || !portfolioData.metrics) return;

  container.innerHTML = portfolioData.metrics.map(metric => `
    <div class="metric-card">
      <div class="metric-value">${metric.value}</div>
      <div class="metric-label">${metric.label}</div>
    </div>
  `).join("");
}

/* ===================================================================
   5. HERO PHONE SIMULATOR
   =================================================================== */
let currentPhoneProjectIndex = 0;
let phoneTimer = null;

function initHeroPhoneSimulator() {
  const { projects } = portfolioData;
  if (!projects || projects.length === 0) return;

  updateHeroPhone(0);

  const prevBtn = document.getElementById("phonePrevBtn");
  const nextBtn = document.getElementById("phoneNextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentPhoneProjectIndex = (currentPhoneProjectIndex - 1 + projects.length) % projects.length;
      updateHeroPhone(currentPhoneProjectIndex);
      restartPhoneTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentPhoneProjectIndex = (currentPhoneProjectIndex + 1) % projects.length;
      updateHeroPhone(currentPhoneProjectIndex);
      restartPhoneTimer();
    });
  }

  // Auto rotate every 6 seconds
  restartPhoneTimer();
}

function updateHeroPhone(index) {
  const project = portfolioData.projects[index];
  if (!project) return;

  const phoneImg = document.getElementById("heroPhoneImg");
  const phoneBadge = document.getElementById("heroPhoneBadge");
  const phoneTitle = document.getElementById("heroPhoneTitle");
  const phoneSubtitle = document.getElementById("heroPhoneSubtitle");

  if (phoneImg) {
    phoneImg.style.opacity = "0.3";
    setTimeout(() => {
      phoneImg.src = (project.mockupScreens && project.mockupScreens[0]) || project.image;
      phoneImg.alt = project.title;
      phoneImg.style.opacity = "1";
    }, 200);
  }

  if (phoneBadge) phoneBadge.textContent = project.badge || "Flutter Mobile App";
  if (phoneTitle) phoneTitle.textContent = project.title;
  if (phoneSubtitle) phoneSubtitle.textContent = project.tagline;
}

function restartPhoneTimer() {
  if (phoneTimer) clearInterval(phoneTimer);
  phoneTimer = setInterval(() => {
    currentPhoneProjectIndex = (currentPhoneProjectIndex + 1) % portfolioData.projects.length;
    updateHeroPhone(currentPhoneProjectIndex);
  }, 6000);
}

/* ===================================================================
   6. PROJECTS SHOWCASE & MODAL
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

function renderProjects(category = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !portfolioData.projects) return;

  const filteredProjects = category === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === category);

  if (filteredProjects.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No projects found in this category.</div>`;
    return;
  }

  grid.innerHTML = filteredProjects.map(project => `
    <article class="project-card" data-id="${project.id}">
      <div class="project-thumbnail-wrapper" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">
        <span class="project-badge-pill">${project.badge}</span>
        <img src="${project.image}" alt="${project.title}" class="project-thumbnail" loading="lazy">
        <button class="project-quick-preview-btn">
          <i data-lucide="maximize-2" style="width: 14px; height: 14px;"></i> Preview App
        </button>
      </div>

      <div class="project-content">
        <h3 class="project-title" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <p class="project-description">${project.description}</p>

        <div class="project-tech-tags">
          ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>

        <div class="project-links">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${project.id}')">
            Details & Screens <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
          </button>
          
          <div class="project-action-group">
            ${project.links.playStore ? `<a href="${project.links.playStore}" target="_blank" class="store-badge-icon" title="Google Play Store"><i data-lucide="play"></i></a>` : ""}
            ${project.links.appStore ? `<a href="${project.links.appStore}" target="_blank" class="store-badge-icon" title="Apple App Store"><i data-lucide="apple"></i></a>` : ""}
            ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="store-badge-icon" title="Source Code"><i data-lucide="github"></i></a>` : ""}
            ${project.links.apkDownload ? `<a href="${project.links.apkDownload}" target="_blank" class="store-badge-icon" title="Download APK"><i data-lucide="download"></i></a>` : ""}
          </div>
        </div>
      </div>
    </article>
  `).join("");

  initLucideIcons();
}

// Modal handling
window.openProjectModal = function(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  if (!modal || !modalContent) return;

  const screens = project.mockupScreens && project.mockupScreens.length > 0 
    ? project.mockupScreens 
    : [project.image];

  modalContent.innerHTML = `
    <div class="modal-two-col">
      <!-- Phone Mockup inside Modal -->
      <div>
        <div class="modal-phone-mockup">
          <img id="modalActiveScreen" src="${screens[0]}" alt="${project.title}" class="modal-phone-img">
        </div>
        <div class="modal-gallery-thumbs">
          ${screens.map((screen, idx) => `
            <div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalScreen('${screen}', this)">
              <img src="${screen}" alt="Thumb ${idx + 1}">
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Content info -->
      <div class="modal-content-details">
        <span class="project-badge-pill" style="position: static; display: inline-block; margin-bottom: 12px;">${project.badge}</span>
        <h2>${project.title}</h2>
        <div class="modal-tagline">${project.tagline}</div>
        <p class="modal-desc">${project.description}</p>

        <h4 style="font-size: 1.1rem; margin-bottom: 12px; color: var(--text-primary);">Key Architectural Features:</h4>
        <ul class="modal-features-list">
          ${(project.keyFeatures || []).map(feat => `<li>${feat}</li>`).join("")}
        </ul>

        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Technologies Used:</h4>
          <div class="project-tech-tags">
            ${project.techStack.map(t => `<span class="tech-tag" style="background: rgba(56, 189, 248, 0.15);">${t}</span>`).join("")}
          </div>
        </div>

        <div class="modal-buttons-group">
          ${project.links.playStore ? `<a href="${project.links.playStore}" target="_blank" class="btn btn-primary btn-sm"><i data-lucide="play"></i> Google Play</a>` : ""}
          ${project.links.appStore ? `<a href="${project.links.appStore}" target="_blank" class="btn btn-secondary btn-sm"><i data-lucide="apple"></i> App Store</a>` : ""}
          ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn btn-secondary btn-sm"><i data-lucide="github"></i> Repository</a>` : ""}
          ${project.links.liveDemo ? `<a href="${project.links.liveDemo}" target="_blank" class="btn btn-secondary btn-sm"><i data-lucide="external-link"></i> Web Demo</a>` : ""}
          ${project.links.apkDownload ? `<a href="${project.links.apkDownload}" target="_blank" class="btn btn-secondary btn-sm"><i data-lucide="download"></i> Download APK</a>` : ""}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  initLucideIcons();
};

window.switchModalScreen = function(src, element) {
  const activeScreen = document.getElementById("modalActiveScreen");
  if (activeScreen) activeScreen.src = src;

  document.querySelectorAll(".modal-thumb").forEach(th => th.classList.remove("active"));
  if (element) element.classList.add("active");
};

window.closeProjectModal = function() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
};

/* ===================================================================
   7. SKILLS SECTION
   =================================================================== */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid || !portfolioData.skillCategories) return;

  grid.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-category-card">
      <div class="category-header">
        <div class="category-icon-box">
          <i data-lucide="${cat.icon || 'code-2'}"></i>
        </div>
        <h3 class="category-title">${cat.category}</h3>
      </div>

      <div class="skills-list">
        ${cat.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-item-info">
              <span class="skill-name-with-icon">
                ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" class="skill-mini-icon">` : ''}
                ${skill.name}
              </span>
              <span class="skill-level-text">${skill.level}</span>
            </div>
            <div class="skill-progress-bar-bg">
              <div class="skill-progress-fill" style="width: ${skill.level};"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   8. SERVICES SECTION
   =================================================================== */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid || !portfolioData.services) return;

  grid.innerHTML = portfolioData.services.map(srv => `
    <div class="service-card">
      <div class="service-icon-wrapper">
        <i data-lucide="${srv.icon || 'layers'}"></i>
      </div>
      <h3 class="service-title">${srv.title}</h3>
      <p class="service-description">${srv.description}</p>
    </div>
  `).join("");
}

/* ===================================================================
   9. EXPERIENCE (TIMELINE)
   =================================================================== */
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  if (!timeline || !portfolioData.experience) return;

  timeline.innerHTML = portfolioData.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-company">${item.company} • ${item.location}</div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-achievements">
          ${item.achievements.map(ach => `<li>${ach}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   10. TESTIMONIALS & CERTIFICATIONS
   =================================================================== */
function renderTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container || !portfolioData.testimonials) return;

  container.innerHTML = portfolioData.testimonials.map(item => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${item.quote}"</p>
      <div class="testimonial-author">
        <img src="${item.avatar}" alt="${item.name}" class="testimonial-avatar">
        <div>
          <div class="author-name">${item.name}</div>
          <div class="author-role">${item.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   9.5. EDUCATION & HONORS (COMPETITIVE PROGRAMMING)
   =================================================================== */
function renderEducationAndHonors() {
  const eduContainer = document.getElementById("educationContainer");
  const honorsContainer = document.getElementById("honorsContainer");
  const languagesContainer = document.getElementById("languagesContainer");

  if (eduContainer && portfolioData.education) {
    const edu = portfolioData.education;
    eduContainer.innerHTML = `
      <div class="education-card">
        <div class="edu-badge"><i data-lucide="graduation-cap" style="width: 16px; height: 16px;"></i> ${edu.period}</div>
        <h3 class="edu-degree">${edu.degree}</h3>
        <div class="edu-institution">${edu.institution} • ${edu.location}</div>
        <div class="edu-gpa-badge">${edu.gpa}</div>
        <div class="edu-coursework-title">Key Core Coursework:</div>
        <div class="project-tech-tags" style="margin-bottom: 0;">
          ${edu.coursework.map(c => `<span class="tech-tag" style="background: rgba(56, 189, 248, 0.12);">${c}</span>`).join("")}
        </div>
      </div>
    `;
  }

  if (honorsContainer && portfolioData.honors) {
    honorsContainer.innerHTML = portfolioData.honors.map(honor => `
      <div class="honor-card">
        <div class="honor-icon"><i data-lucide="${honor.icon || 'trophy'}"></i></div>
        <div class="honor-info">
          <h4 class="honor-title">${honor.title}</h4>
          <div class="honor-org">${honor.organization} • ${honor.year}</div>
          <div class="honor-rank">${honor.rank}</div>
        </div>
      </div>
    `).join("");
  }

  if (languagesContainer && portfolioData.languages) {
    languagesContainer.innerHTML = portfolioData.languages.map(lang => `
      <div class="language-pill">
        <span class="lang-dot"></span>
        <strong>${lang.language}:</strong> <span style="color: var(--text-secondary); margin-left: 4px;">${lang.proficiency}</span>
      </div>
    `).join("");
  }
}

function renderCertifications() {
  const container = document.getElementById("certsGrid");
  if (!container || !portfolioData.certifications) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <a href="${cert.credentialUrl}" target="_blank" class="cert-card">
      <div class="cert-icon">
        <i data-lucide="award"></i>
      </div>
      <div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-issuer">${cert.issuer} • ${cert.year}</div>
      </div>
    </a>
  `).join("");
}

/* ===================================================================
   11. CONTACT SECTION & INTERACTIVE FORM
   =================================================================== */
function renderContactSection() {
  const { personal } = portfolioData;

  const emailEl = document.getElementById("contactEmail");
  if (emailEl) emailEl.textContent = personal.email;

  const phoneEl = document.getElementById("contactPhone");
  if (phoneEl) phoneEl.textContent = personal.phone;

  const locEl = document.getElementById("contactLocation");
  if (locEl) locEl.textContent = personal.location;

  const whatsBtn = document.getElementById("directWhatsAppBtn");
  if (whatsBtn && personal.whatsapp) {
    const cleanNum = personal.whatsapp.replace(/\+/g, "");
    whatsBtn.href = `https://wa.me/${cleanNum}?text=${encodeURIComponent('Hello ' + personal.name + ', I saw your portfolio and would like to discuss an opportunity!')}`;
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const subject = document.getElementById("formSubject").value;
    const message = document.getElementById("formMessage").value;

    // Build mailto link as instant native fallback
    const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;

    showToast("Opening your email client to send message...");
    form.reset();
  });
}

// Copy email helper
window.copyEmailToClipboard = function() {
  const email = portfolioData.personal.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email address copied to clipboard!");
  }).catch(() => {
    showToast("Email: " + email);
  });
};

/* ===================================================================
   12. TOAST NOTIFICATION
   =================================================================== */
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle" style="color: var(--accent-green); width: 18px; height: 18px;"></i> <span>${message}</span>`;
  initLucideIcons();
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
