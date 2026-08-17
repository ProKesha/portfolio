const translations = {
  uk: {
    title: "Дмитро Попов | Full-Stack TypeScript Developer",
    metaDescription:
      "Портфоліо Дмитра Попова, Full-Stack TypeScript Developer, який створює вебзастосунки, API та AI-рішення на React, Next.js, Node.js і PostgreSQL.",
    "nav.projects": "Проєкти",
    "nav.skills": "Навички",
    "nav.about": "Про мене",
    "nav.contact": "Контакти",
    "hero.name": "Дмитро Попов",
    "hero.title": "Full-Stack TypeScript Developer",
    "hero.description":
      "Розробляю full-stack вебзастосунки, API та AI-рішення на React/Next.js, Node.js/NestJS і PostgreSQL.",
    "hero.projectsCta": "Переглянути проєкти",
    "hero.cvCta": "Завантажити CV",
    "hero.socialsLabel": "Професійні профілі",
    "hero.focusTitle": "FULL-STACK ENGINEERING",
    "hero.focus.web": "Вебзастосунки",
    "hero.focus.api": "API та інтеграції",
    "hero.focus.backend": "Backend-сервіси",
    "hero.focus.ai": "AI-рішення",
    "skills.title": "Технології",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.data": "Data",
    "skills.infrastructure": "Інфраструктура та інтеграції",
    "projects.title": "Вибрані проєкти",
    "projects.subtitle":
      "Проєкти, які демонструють досвід у full-stack і комерційній розробці, Next.js, Node.js, Python/FastAPI, локальному AI, REST API та WordPress.",
    "projects.plishka.alt": "Головна сторінка Plishka",
    "projects.plishka.title": "Plishka — e‑commerce платформа",
    "projects.plishka.description":
      "Командний вебзастосунок для майстерні авторських виробів із дерева. Відповідав за frontend: інтеграцію зі Spring Boot REST API, авторизацію та особистий кабінет, каталог, обране, кошик, оформлення замовлень, відгуки й адміністративну панель. Налаштував адаптивний інтерфейс і розгортання на Railway.",
    "projects.domainTool.title": "Domain Tool",
    "projects.domainTool.description":
      "Full-stack панель для централізованого керування доменами в Namecheap і Cloudflare. Реалізував NestJS API, зашифроване зберігання credentials, PostgreSQL-схему та чергу масових операцій на Redis/BullMQ.",
    "projects.meetingAssistant.title": "AI Meeting Assistant",
    "projects.meetingAssistant.description":
      "Локальний full-stack AI-застосунок, що перетворює аудіозаписи зустрічей на транскрипти, структуровані підсумки та задачі. Побудував FastAPI/Next.js pipeline, multilingual E5 embeddings, pgvector semantic search і grounded RAG із посиланнями на джерела.",
    "projects.serverControl.title": "Northstar Server Control",
    "projects.serverControl.description":
      "Full-stack платформа для інвентаризації серверів, login/RBAC, audit log і безпечного підключення Hestia. Дані зберігаються в PostgreSQL, а SSH та Hestia secrets шифруються й ніколи не повертаються через API.",
    "projects.obsttechnik.label": "Commercial Website",
    "projects.obsttechnik.visualTitle": "Obsttechnik",
    "projects.obsttechnik.visualText":
      "WordPress-сайт для компанії у сфері садової техніки та обладнання для переробки.",
    "projects.obsttechnik.title": "Obsttechnik Website",
    "projects.obsttechnik.description":
      "Комерційний багатомовний сайт компанії Obsttechnik на WordPress. Працював над реалізацією сайту, адаптивними сторінками, контентними блоками, frontend-поведінкою, підтримкою існуючих секцій і покращенням користувацького досвіду.",
    "projects.obsttechnik.demo": "Відкрити сайт",
    "projects.backend.label": "Real-time App",
    "projects.backend.visualTitle": "Node Chat",
    "projects.backend.visualText":
      "Real-time чат із кількома кімнатами, створений на Node.js, Express і Socket.IO.",
    "projects.backend.title": "Node Chat",
    "projects.backend.description":
      "Node Chat — це вебзастосунок для обміну повідомленнями в реальному часі. Користувач може задати ім'я, створювати кімнати, перемикатися між ними, перейменовувати або видаляти їх і миттєво надсилати повідомлення в межах вибраної кімнати.",
    "projects.backend.demo": "Відкрити чат",
    "projects.backend.repo": "GitHub",
    "projects.catalog.alt": "Каталог телефонів на React",
    "projects.catalog.title": "Каталог телефонів на React",
    "projects.catalog.description":
      "SPA-інтерфейс для e-commerce з каталогом товарів, сортуванням, фільтрацією, пагінацією та сторінкою деталей продукту.",
    "projects.landing.alt": "Лендінг",
    "projects.landing.title": "Адаптивний лендінг",
    "projects.landing.description":
      "Сучасний адаптивний лендінг, зверстаний із дизайн-макета з чистою структурою та коректною поведінкою на різних екранах.",
    "projects.game.alt": "Гра 2048 на JavaScript",
    "projects.game.title": "Гра 2048 на JavaScript",
    "projects.game.description":
      "Інтерактивна браузерна гра з ігровою логікою на JavaScript, керуванням з клавіатури, підрахунком очок і динамічними оновленнями інтерфейсу.",
    "projects.nutrition.alt": "Сайт лікаря-нутріціолога Дарії Попової",
    "projects.nutrition.title": "Сайт лікаря-нутріціолога",
    "projects.nutrition.description":
      "Розробив сучасний адаптивний сайт для лікаря-нутріціолога з акцентом на чистий UI, довіру користувачів і оптимізацію конверсії. Налаштував CI/CD через GitHub і Cloudflare Pages, включно з підключенням власного домену.",
    "common.liveDemo": "Демо",
    "about.profileTitle": "Професійний профіль",
    "about.description":
      "Комерційний досвід у frontend і backend розробці, API-інтеграціях, автоматизації та розгортанні. Працюю з вебпродуктами від адаптивних інтерфейсів та інтеграцій до серверної логіки, баз даних і AI-рішень.",
    "about.infrastructure": "Інфраструктура",
    "about.highlightsTitle": "Досвід",
    "about.highlight.commercialTitle": "Комерційна веброзробка",
    "about.highlight.commercialText":
      "Комерційні сайти та вебзастосунки, адаптивні інтерфейси, підтримка та розробка нового функціоналу.",
    "about.highlight.fullstackTitle": "Full-Stack та API-інтеграції",
    "about.highlight.fullstackText":
      "REST API, backend services, авторизація, бази даних та інтеграції зі сторонніми сервісами.",
    "about.highlight.infrastructureTitle": "Інфраструктура та автоматизація",
    "about.highlight.infrastructureText":
      "Домени, DNS, Cloudflare, deployment-процеси, webhooks та автоматизація.",
    "about.highlight.aiTitle": "AI-застосунки",
    "about.highlight.aiText":
      "Транскрипція, структурований LLM-аналіз, embeddings, semantic search та RAG.",
    "contact.title": "Контакти",
    "contact.description":
      "Відкритий до full-stack, frontend і WordPress-проєктів, комерційної співпраці, запуску нових сайтів та підтримки існуючих вебрішень.",
    "footer.copy": "© 2026 Дмитро Попов — Full-Stack TypeScript Developer",
  },
  en: {
    title: "Dmytro Popov | Full-Stack TypeScript Developer",
    metaDescription:
      "Portfolio of Dmytro Popov, a Full-Stack TypeScript Developer building web applications, APIs and AI-powered tools with React, Next.js, Node.js and PostgreSQL.",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.name": "Dmytro Popov",
    "hero.title": "Full-Stack TypeScript Developer",
    "hero.description":
      "I build full-stack web applications, APIs and AI-powered tools with React/Next.js, Node.js/NestJS and PostgreSQL.",
    "hero.projectsCta": "View Projects",
    "hero.cvCta": "Download CV",
    "hero.socialsLabel": "Professional profiles",
    "hero.focusTitle": "FULL-STACK ENGINEERING",
    "hero.focus.web": "Web Applications",
    "hero.focus.api": "APIs & Integrations",
    "hero.focus.backend": "Backend Services",
    "hero.focus.ai": "AI-powered Tools",
    "skills.title": "Tech Stack",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.data": "Data",
    "skills.infrastructure": "Infrastructure & Integration",
    "projects.title": "Selected Projects",
    "projects.subtitle":
      "Projects demonstrating full-stack and commercial development with Next.js, Node.js, Python/FastAPI, local AI, REST APIs, and WordPress.",
    "projects.plishka.alt": "Plishka home page",
    "projects.plishka.title": "Plishka — E‑commerce Platform",
    "projects.plishka.description":
      "A team-built web application for a handcrafted wood products workshop. Responsible for the frontend: Spring Boot REST API integration, authentication and account management, catalog, favorites, cart, checkout, reviews, and the admin dashboard. Implemented the responsive UI and deployed it to Railway.",
    "projects.domainTool.title": "Domain Tool",
    "projects.domainTool.description":
      "A full-stack dashboard for centralized domain management across Namecheap and Cloudflare. Built a NestJS API, encrypted credential storage, a PostgreSQL schema, and a Redis/BullMQ queue for bulk operations.",
    "projects.meetingAssistant.title": "AI Meeting Assistant",
    "projects.meetingAssistant.description":
      "A local full-stack AI application that turns meeting recordings into transcripts, structured summaries, and action items. Built a FastAPI/Next.js pipeline with multilingual E5 embeddings, pgvector semantic search, and source-grounded RAG.",
    "projects.serverControl.title": "Northstar Server Control",
    "projects.serverControl.description":
      "A full-stack platform for server inventory, login/RBAC, audit logging, and secure Hestia connections. Data is stored in PostgreSQL, while SSH and Hestia secrets are encrypted and never returned by the API.",
    "projects.obsttechnik.label": "Commercial Website",
    "projects.obsttechnik.visualTitle": "Obsttechnik",
    "projects.obsttechnik.visualText":
      "WordPress website for a company in agricultural machinery and fruit processing equipment.",
    "projects.obsttechnik.title": "Obsttechnik Website",
    "projects.obsttechnik.description":
      "Commercial multilingual WordPress website for Obsttechnik. Worked on website delivery, responsive pages, content-driven blocks, frontend behavior, existing section maintenance, and user experience improvements.",
    "projects.obsttechnik.demo": "Open Website",
    "projects.backend.label": "Real-time App",
    "projects.backend.visualTitle": "Node Chat",
    "projects.backend.visualText":
      "A real-time multi-room chat app built with Node.js, Express, and Socket.IO.",
    "projects.backend.title": "Node Chat",
    "projects.backend.description":
      "Node Chat is a real-time chat web application where users can set a username, create rooms, switch between them, rename or delete rooms, and instantly exchange messages inside the selected room.",
    "projects.backend.demo": "Open Chat",
    "projects.backend.repo": "GitHub",
    "projects.catalog.alt": "React Phone Catalog",
    "projects.catalog.title": "React Phone Catalog",
    "projects.catalog.description":
      "SPA e-commerce interface with product catalog, sorting, filtering, pagination and product details page.",
    "projects.landing.alt": "Landing Page",
    "projects.landing.title": "Responsive Landing Page",
    "projects.landing.description":
      "Modern responsive landing page built from a design mockup with clean layout and adaptive behavior.",
    "projects.game.alt": "2048 JavaScript Game",
    "projects.game.title": "2048 JavaScript Game",
    "projects.game.description":
      "Interactive browser game with JavaScript game logic, keyboard controls, score calculation and dynamic UI updates.",
    "projects.nutrition.alt": "Daria Popova doctor nutritionist website",
    "projects.nutrition.title": "Doctor-Nutritionist Website",
    "projects.nutrition.description":
      "Developed a modern responsive website for a doctor nutritionist. Focused on clean UI, user trust, and conversion optimization. Implemented a full deployment pipeline using GitHub and Cloudflare Pages, including custom domain setup and continuous delivery.",
    "common.liveDemo": "Live Demo",
    "about.profileTitle": "Engineering Profile",
    "about.description":
      "Commercial development experience across frontend, backend, API integrations, automation and deployment. I build web products from responsive interfaces and API integrations to backend services, databases and AI-powered workflows.",
    "about.infrastructure": "Infrastructure",
    "about.highlightsTitle": "Experience Highlights",
    "about.highlight.commercialTitle": "Commercial Web Development",
    "about.highlight.commercialText":
      "Production websites and web applications, responsive interfaces, maintenance and feature development.",
    "about.highlight.fullstackTitle": "Full-Stack & API Integrations",
    "about.highlight.fullstackText":
      "REST APIs, backend services, authentication, databases and third-party integrations.",
    "about.highlight.infrastructureTitle": "Infrastructure & Automation",
    "about.highlight.infrastructureText":
      "Domains, DNS, Cloudflare, deployment workflows, webhooks and automation.",
    "about.highlight.aiTitle": "AI Applications",
    "about.highlight.aiText":
      "Transcription, structured LLM analysis, embeddings, semantic search and RAG.",
    "contact.title": "Contact",
    "contact.description":
      "Open to full-stack, frontend, and WordPress projects, commercial collaboration, new website launches, and support for existing web solutions.",
    "footer.copy": "© 2026 Dmytro Popov — Full-Stack TypeScript Developer",
  },
};

const textNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
const langButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');
const storageKey = "portfolio-language";

function applyLanguage(language) {
  const locale = translations[language] || translations.uk;

  document.documentElement.lang = language;
  document.title = locale.title;
  metaDescription?.setAttribute("content", locale.metaDescription);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (locale[key]) {
      node.textContent = locale[key];
    }
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;

    if (locale[key]) {
      node.alt = locale[key];
    }
  });

  ariaLabelNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;

    if (locale[key]) {
      node.setAttribute("aria-label", locale[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(storageKey, language);
}

const savedLanguage = localStorage.getItem(storageKey);
const browserLanguage = navigator.language?.startsWith("uk") ? "uk" : "en";
const initialLanguage = savedLanguage || browserLanguage;

applyLanguage(initialLanguage);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});
