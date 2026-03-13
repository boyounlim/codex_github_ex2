const portfolioData = {
  profile: {
    name: "김민준",
    tagline: "문제를 제품으로 바꾸는 프론트엔드 개발자",
    description:
      "사용자 여정과 비즈니스 목표를 함께 고려해, 빠르고 직관적인 웹 경험을 설계하고 구현합니다. 협업 커뮤니케이션과 실행 속도를 강점으로 팀 생산성을 높이는 데 집중합니다.",
  },
  techStack: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "Figma",
    "Vercel",
  ],
  projects: [
    {
      title: "팀 일정 관리 SaaS",
      summary:
        "반복 업무를 줄이기 위해 캘린더 기반 업무 분배 기능과 알림 워크플로를 설계했습니다. 출시 후 주간 활성 사용자가 42% 증가했습니다.",
      tech: "React, Node.js, PostgreSQL",
      role: "프론트엔드 리드, API 협업, UI 설계",
      period: "2025.01 - 2025.04",
      link: "https://github.com/your-github-id/scheduler-saas",
    },
    {
      title: "커머스 운영 대시보드",
      summary:
        "운영팀의 주문/재고 확인 시간을 단축하기 위해 KPI 보드와 검색 최적화를 구현했습니다. 핵심 시나리오 작업 시간을 30% 줄였습니다.",
      tech: "TypeScript, Chart.js, Express",
      role: "대시보드 UI 구현, 성능 개선",
      period: "2024.09 - 2024.12",
      link: "https://github.com/your-github-id/commerce-dashboard",
    },
    {
      title: "기술 블로그 템플릿",
      summary:
        "콘텐츠 작성 시간을 절약하기 위해 마크다운 기반 템플릿과 자동 배포 파이프라인을 구성했습니다. 작성/배포 리드타임을 크게 단축했습니다.",
      tech: "Astro, Markdown, Vercel",
      role: "전체 설계 및 배포 자동화",
      period: "2024.05 - 2024.07",
      link: "https://github.com/your-github-id/dev-blog-template",
    },
    {
      title: "실시간 협업 화이트보드",
      summary:
        "원격 브레인스토밍 경험을 개선하기 위해 동기화 안정성과 렌더링 최적화에 집중했습니다. 세션 이탈률을 18% 감소시켰습니다.",
      tech: "WebSocket, Canvas API, Redis",
      role: "클라이언트 렌더링 및 동기화 로직 구현",
      period: "2023.11 - 2024.03",
      link: "https://github.com/your-github-id/realtime-whiteboard",
    },
  ],
  contact: {
    email: "hello.dev.portfolio@gmail.com",
    github: "https://github.com/your-github-id",
    etcLinks: [
      { label: "Notion Resume", url: "https://www.notion.so/your-resume" },
      { label: "Blog", url: "https://your-blog.example.com" },
    ],
  },
};

const nameEl = document.getElementById("profile-name");
const taglineEl = document.getElementById("profile-tagline");
const descriptionEl = document.getElementById("profile-description");
const aboutDescriptionEl = document.getElementById("about-description");
const stackListEl = document.getElementById("tech-stack-list");
const projectGridEl = document.getElementById("project-grid");
const emailLinkEl = document.getElementById("email-link");
const heroMailLinkEl = document.getElementById("hero-mail-link");
const githubLinkEl = document.getElementById("github-link");
const etcLinksEl = document.getElementById("etc-links");
const footerNameEl = document.getElementById("footer-name");
const currentYearEl = document.getElementById("current-year");
const navToggleEl = document.getElementById("nav-toggle");
const navEl = document.getElementById("site-nav");

function buildMailtoHref(email, profileName) {
  const subject = "포트폴리오 협업 문의";
  const body = `${profileName} 님 안녕하세요.\n포트폴리오를 보고 연락드립니다.\n`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderTechStack(stacks) {
  const fragment = document.createDocumentFragment();
  stacks.forEach((stack) => {
    const item = document.createElement("li");
    item.textContent = stack;
    fragment.appendChild(item);
  });
  stackListEl.appendChild(fragment);
}

function renderProjects(projects) {
  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project-card reveal-item";
    article.style.setProperty("--delay", `${index * 70}ms`);

    const header = document.createElement("div");
    header.className = "project-header";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    const period = document.createElement("p");
    period.className = "project-period";
    period.textContent = project.period;

    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;

    const role = document.createElement("p");
    role.className = "project-role";
    role.textContent = `역할: ${project.role}`;

    const tech = document.createElement("p");
    tech.className = "project-tech";
    tech.textContent = `기술: ${project.tech}`;

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "프로젝트 링크 보기";

    header.appendChild(title);
    header.appendChild(period);
    article.appendChild(header);
    article.appendChild(summary);
    article.appendChild(role);
    article.appendChild(tech);
    article.appendChild(link);
    fragment.appendChild(article);
  });

  projectGridEl.appendChild(fragment);
}

function renderEtcLinks(links) {
  const fragment = document.createDocumentFragment();

  links.forEach((entry) => {
    const link = document.createElement("a");
    link.href = entry.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = entry.label;
    fragment.appendChild(link);
  });

  etcLinksEl.appendChild(fragment);
}

function renderProfile(data) {
  const mailtoHref = buildMailtoHref(data.contact.email, data.profile.name);

  nameEl.textContent = data.profile.name;
  taglineEl.textContent = data.profile.tagline;
  descriptionEl.textContent = data.profile.description;
  aboutDescriptionEl.textContent = data.profile.description;
  emailLinkEl.href = mailtoHref;
  heroMailLinkEl.href = mailtoHref;
  githubLinkEl.href = data.contact.github;
  footerNameEl.textContent = data.profile.name;
  currentYearEl.textContent = new Date().getFullYear();

  renderTechStack(data.techStack);
  renderProjects(data.projects);
  renderEtcLinks(data.contact.etcLinks);
}

function setupReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  targets.forEach((element) => observer.observe(element));
}

function setupNavigation() {
  if (!navToggleEl) {
    return;
  }

  navToggleEl.addEventListener("click", () => {
    const expanded = navToggleEl.getAttribute("aria-expanded") === "true";
    navToggleEl.setAttribute("aria-expanded", String(!expanded));
    navEl.classList.toggle("is-open");
  });

  navEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("is-open");
      navToggleEl.setAttribute("aria-expanded", "false");
    });
  });
}

renderProfile(portfolioData);
setupNavigation();
setupReveal();
