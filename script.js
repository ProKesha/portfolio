/** @type {Record<string, Record<string, string>>} */
const translations = {
  uk: {
    title: "Дмитро Попов | Full-Stack Developer",
    metaDescription:
      "Full-Stack Developer із комерційним досвідом у TypeScript, React, Next.js і Node.js. Розробляю backend-сервіси, API та власні AI-застосунки з Python і FastAPI.",
    "nav.projects": "Проєкти",
    "nav.skills": "Навички",
    "nav.about": "Досвід",
    "nav.contact": "Контакти",
    "hero.name": "Дмитро Попов",
    "hero.title": "Full-Stack Developer",
    "hero.description":
      "Розробляю full-stack вебзастосунки, backend-сервіси, API та AI-powered інструменти.",
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
    "projects.title": "Ключові проєкти",
    "projects.subtitle":
      "Власні проєкти з акцентом на backend-сервіси, API-інтеграції та роботу з локальним AI.",
    "projects.plishka.alt": "Головна сторінка Plishka",
    "projects.plishka.title": "Plishka — e‑commerce платформа",
    "projects.plishka.description":
      "Командний вебзастосунок для майстерні авторських виробів із дерева. Відповідав за frontend: інтеграцію зі Spring Boot REST API, авторизацію та особистий кабінет, каталог, обране, кошик, оформлення замовлень, відгуки й адміністративну панель. Налаштував адаптивний інтерфейс і розгортання на Railway.",
    "projects.domainTool.title": "Domain Tool",
    "projects.domainTool.description":
      "Full-stack панель для централізованого керування доменами в Namecheap і Cloudflare. Реалізував NestJS API, зашифроване зберігання credentials, PostgreSQL-схему та чергу масових операцій на Redis/BullMQ.",
    "projects.meetingAssistant.title": "AI Meeting Assistant",
    "projects.meetingAssistant.description":
      "Власний full-stack AI-застосунок: завантаження аудіо → транскрипція через faster-whisper → обробка локальною LLM через Ollama → структуровані підсумки зустрічей, задачі та висновки. Використовую Next.js, Python і FastAPI, PostgreSQL/pgvector, embeddings, семантичний пошук та RAG із посиланнями на джерела.",
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
    "projects.nutrition.source": "Приватний репозиторій",
    "projects.nutrition.description":
      "Розробив сучасний адаптивний сайт для лікаря-нутріціолога з акцентом на чистий UI, довіру користувачів і оптимізацію конверсії. Налаштував CI/CD через GitHub і Cloudflare Pages, включно з підключенням власного домену.",
    "common.liveDemo": "Демо",
    "contact.title": "Контакти",
    "contact.description":
      "Відкритий до позицій Full-Stack Developer, Backend Developer та інженерних ролей із фокусом на AI. Також цікавлять можливості у Defense Tech / MilTech.",
    "footer.copy": "© 2026 Дмитро Попов — Full-Stack Developer",
    "projects.other": "Інші проєкти",
    "projects.earlier": "Ранні проєкти",
    "projects.demoData": "Демонстраційне середовище · синтетичні дані",
    "skills.direction": "Python / AI · активний напрям розвитку",
    "skills.context":
      "Мій основний комерційний стек — JavaScript, TypeScript, React, Next.js і Node.js. Активно вивчаю Python та використовую FastAPI у власних backend- і AI-проєктах.",
    "experience.title": "Досвід роботи",
    "contact.availability":
      "Розглядаю віддалену роботу з командами по всьому світу, а також офісний або гібридний формат у Києві та Київській області. Гнучкий щодо графіка роботи та співпраці з командами в часових поясах Європи, США й Азії.",
    "experience.nomads.dates": "Січень 2026 – серпень 2026",
    "experience.nomads.summary":
      "Працював над лендингами та технічними інтеграціями для проєктів performance-маркетингу.",
    "experience.nomads.item0": "Створював і адаптував responsive-лендинги.",
    "experience.nomads.item1":
      "Інтегрував форми збору заявок із CRM-системами, сторонніми сервісами та REST API.",
    "experience.nomads.item2":
      "Налаштовував webhooks, postbacks, пікселі та відстеження конверсій.",
    "experience.nomads.item3":
      "Працював із Google Analytics, Google Tag Manager, Meta Pixel, Keitaro та Binom.",
    "experience.nomads.item4":
      "Керував доменами, DNS, хостингом, SSL і налаштуваннями Cloudflare.",
    "experience.nomads.item5":
      "Знаходив і усував проблеми інтеграцій між frontend, системами трекінгу та зовнішніми сервісами.",
    "experience.obsttechnik.dates": "Серпень 2024 – листопад 2025",
    "experience.obsttechnik.summary":
      "Працював над вебзастосунками та комерційними вебпроєктами на JavaScript і TypeScript.",
    "experience.obsttechnik.item0":
      "Розробляв адаптивні інтерфейси та перевикористовувані компоненти на React і Angular.",
    "experience.obsttechnik.item1":
      "Реалізовував backend-функціональність на Node.js.",
    "experience.obsttechnik.item2": "Інтегрував REST API та сторонні сервіси.",
    "experience.obsttechnik.item3":
      "Створював і підтримував сторінки WordPress та власну функціональність.",
    "experience.obsttechnik.item4":
      "Додавав нові можливості й удосконалював наявні відповідно до бізнес-вимог.",
    "experience.obsttechnik.item5":
      "Усував помилки у frontend і backend та підтримував наявні проєкти.",
  },
  en: {
    title: "Dmytro Popov | Full-Stack Developer",
    metaDescription:
      "Full-Stack Developer with commercial experience in TypeScript, React, Next.js and Node.js, building backend services, APIs and AI-powered applications with Python and FastAPI.",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "Experience",
    "nav.contact": "Contact",
    "hero.name": "Dmytro Popov",
    "hero.title": "Full-Stack Developer",
    "hero.description":
      "Building full-stack web applications, backend services, APIs and AI-powered tools.",
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
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "Personal projects focused on backend services, API integrations and local AI workflows.",
    "projects.plishka.alt": "Plishka home page",
    "projects.plishka.title": "Plishka — E‑commerce Platform",
    "projects.plishka.description":
      "A team-built web application for a handcrafted wood products workshop. Responsible for the frontend: Spring Boot REST API integration, authentication and account management, catalog, favorites, cart, checkout, reviews, and the admin dashboard. Implemented the responsive UI and deployed it to Railway.",
    "projects.domainTool.title": "Domain Tool",
    "projects.domainTool.description":
      "A full-stack dashboard for centralized domain management across Namecheap and Cloudflare. Built a NestJS API, encrypted credential storage, a PostgreSQL schema, and a Redis/BullMQ queue for bulk operations.",
    "projects.meetingAssistant.title": "AI Meeting Assistant",
    "projects.meetingAssistant.description":
      "A personal full-stack AI application: audio upload → faster-whisper transcription → local LLM processing with Ollama → structured meeting summaries, tasks and insights. Built with Next.js, Python and FastAPI, PostgreSQL/pgvector, embeddings, semantic search and source-grounded RAG.",
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
    "projects.nutrition.source": "Private repository",
    "projects.nutrition.description":
      "Developed a modern responsive website for a doctor nutritionist. Focused on clean UI, user trust, and conversion optimization. Implemented a full deployment pipeline using GitHub and Cloudflare Pages, including custom domain setup and continuous delivery.",
    "common.liveDemo": "Live Demo",
    "contact.title": "Contact",
    "contact.description":
      "Open to Full-Stack, Backend and AI-oriented engineering roles. Also interested in Defense Tech / MilTech opportunities.",
    "footer.copy": "© 2026 Dmytro Popov — Full-Stack Developer",
    "projects.other": "Other Projects",
    "projects.earlier": "Earlier Projects",
    "projects.demoData": "Demo environment · synthetic data",
    "skills.direction": "Python / AI · active development",
    "skills.context":
      "My commercial stack is JavaScript, TypeScript, React, Next.js and Node.js. I am actively learning Python and using FastAPI in personal backend and AI projects.",
    "experience.title": "Experience",
    "contact.availability":
      "Available for remote opportunities worldwide and on-site/hybrid roles in Kyiv and Kyiv region. Flexible with working hours and comfortable collaborating across European, US and Asian time zones.",
    "experience.nomads.dates": "Jan 2026 – Aug 2026",
    "experience.nomads.summary":
      "Worked on landing pages and technical integrations for performance marketing projects.",
    "experience.nomads.item0": "Built and customized responsive landing pages.",
    "experience.nomads.item1":
      "Integrated lead forms with CRM systems, third-party services and REST APIs.",
    "experience.nomads.item2":
      "Configured webhooks, postbacks, tracking pixels and conversion tracking.",
    "experience.nomads.item3":
      "Worked with Google Analytics, Google Tag Manager, Meta Pixel, Keitaro and Binom.",
    "experience.nomads.item4":
      "Managed domains, DNS, hosting, SSL and Cloudflare configuration.",
    "experience.nomads.item5":
      "Investigated integration issues across frontend, tracking and external services.",
    "experience.obsttechnik.dates": "Aug 2024 – Nov 2025",
    "experience.obsttechnik.summary":
      "Worked on web applications and commercial web projects using JavaScript and TypeScript.",
    "experience.obsttechnik.item0":
      "Developed responsive interfaces and reusable components with React and Angular.",
    "experience.obsttechnik.item1":
      "Worked on backend functionality using Node.js.",
    "experience.obsttechnik.item2":
      "Integrated REST APIs and third-party services.",
    "experience.obsttechnik.item3":
      "Developed and maintained WordPress pages and custom functionality.",
    "experience.obsttechnik.item4":
      "Implemented new features and improved existing functionality based on business requirements.",
    "experience.obsttechnik.item5":
      "Debugged frontend and backend issues and supported existing projects.",
  },
};

/** @type {NodeListOf<HTMLElement>} */
const textNodes = document.querySelectorAll("[data-i18n]");
/** @type {NodeListOf<HTMLImageElement>} */
const altNodes = document.querySelectorAll("[data-i18n-alt]");
/** @type {NodeListOf<HTMLElement>} */
const ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
/** @type {NodeListOf<HTMLButtonElement>} */
const langButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');
const storageKey = "portfolio-language";

/** @param {string | undefined} language */
function applyLanguage(language) {
  language =
    language && Object.hasOwn(translations, language) ? language : "en";
  const locale = translations[language];

  document.documentElement.lang = language;
  document.title = locale.title;
  metaDescription?.setAttribute("content", locale.metaDescription);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (key && locale[key]) {
      node.textContent = locale[key];
    }
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;

    if (key && locale[key]) {
      node.alt = locale[key];
    }
  });

  ariaLabelNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;

    if (key && locale[key]) {
      node.setAttribute("aria-label", locale[key]);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(storageKey, language);
  } catch {
    /* Storage may be disabled. */
  }
}

let savedLanguage;
try {
  savedLanguage = localStorage.getItem(storageKey);
} catch {
  /* Use English if storage is unavailable. */
}
applyLanguage(savedLanguage || "en");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});
