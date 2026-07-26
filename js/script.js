/* ============================================================
   DATA
   ============================================================ */
const PROJECTS = [
  {
    label: "Exhibit A",
    title: "Inflation in India (2020–2025)",
    overview: "Analysed inflation trends in India from 2020 to 2025, examining how COVID-19, supply chain disruptions, and the Russia–Ukraine conflict influenced price levels and the Indian economy.",
    did: [
      "Analysed CPI-based inflation data (2020–2025)",
      "Studied food and fuel inflation trends",
      "Reviewed RBI monetary policy measures",
      "Interpreted economic data using Excel and secondary research"
    ],
    insights: [
      "Food and fuel prices were the primary drivers of inflation.",
      "Global events significantly impacted India's inflation trends.",
      "RBI's monetary policies helped stabilise inflation over time."
    ],
    skills: ["Economic Analysis", "Research", "Data Analysis", "Excel", "Critical Thinking"],
    pdf: "assets/pdfs/projects/inflation-in-india.pdf"
  },
  {
    label: "Exhibit B",
    title: "Horizontal Statement Analysis of Apple",
    overview: "A comparative financial statement analysis of Apple Inc., examining its Balance Sheet for FY2023 and FY2024 to evaluate year-on-year performance and stability.",
    did: [
      "Performed horizontal analysis using Apple's published financial statements",
      "Calculated absolute and percentage changes in key Balance Sheet items",
      "Interpreted trends in assets, liabilities, and shareholders' equity",
      "Assessed Apple's financial position and year-over-year performance"
    ],
    insights: [
      "Total assets increased by 3.52%, reflecting steady business growth.",
      "Current liabilities rose while long-term liabilities declined — improved long-term debt management.",
      "Apple maintained a strong financial position despite lower shareholders' equity."
    ],
    skills: ["Financial Statement Analysis", "Balance Sheet Analysis", "Excel", "Critical Thinking"],
    pdf: "assets/pdfs/projects/horizontal-statement-analysis-apple.pdf"
  },
  {
    label: "Exhibit C",
    title: "Capital Budgeting Techniques — Infosys Limited",
    overview: "A study of Infosys Limited's capital budgeting practices, focusing on how the company evaluates long-term investment decisions using DCF, NPV, and IRR.",
    did: [
      "Studied traditional and modern capital budgeting techniques",
      "Analysed Infosys' investment evaluation process using public financial information",
      "Examined the application of DCF across infrastructure, technology, and financial investments",
      "Evaluated how risk, future cash flows, and profitability influence decisions"
    ],
    insights: [
      "Infosys follows a structured, data-driven approach to long-term investment decisions.",
      "DCF supports more accurate project evaluation by considering the time value of money.",
      "Strategic capital allocation and risk analysis drive sustainable growth and shareholder value."
    ],
    skills: ["Capital Budgeting", "Financial Analysis", "Investment Evaluation", "Corporate Finance"],
    pdf: "assets/pdfs/projects/capital-budgeting-infosys.pdf"
  },
  {
    label: "Exhibit D",
    title: "ABC Call Volume Trend Analysis",
    overview: "Analysed customer call centre data for ABC Insurance to identify call volume trends, reduce call abandonment, and improve workforce planning across 23 days of inbound call data.",
    did: [
      "Cleaned and analysed 23 days of inbound call data in Excel",
      "Built pivot tables and visualisations to identify peak call hours and durations",
      "Developed a manpower allocation strategy for day and night shifts",
      "Proposed staffing recommendations to improve efficiency and customer service"
    ],
    insights: [
      "Identified peak call periods and staffing gaps affecting service levels.",
      "Proposed a strategy to reduce the call abandonment rate from 30% to 10%.",
      "Designed a scalable workforce planning model to improve utilisation and satisfaction."
    ],
    skills: ["Data Analysis", "Excel", "Pivot Tables", "Workforce Planning", "Business Analytics"],
    pdf: "assets/pdfs/projects/abc-call-volume-trend-analysis.pdf"
  }
];

const EXPERIENCE = [
  {
    date: "May 2026 – Jun 2026",
    title: "Management Intern",
    org: "GramTarang Technologies Pvt. Ltd.",
    desc: "Business research, financial analysis, export documentation, and business development. Researched EOU schemes and export compliance, performed P&L analysis, and supported outreach for BIOVIA software solutions.",
    skills: "Financial Analysis · Business Research · Export Documentation · Business Development",
    pdf: "assets/pdfs/internships/gramtarang-certificate.pdf"
  },
  {
    date: "May 2024 – Nov 2024",
    title: "Data Analytics Intern",
    org: "ONLEI",
    desc: "Virtual data analytics internship working with real-world datasets — data cleaning, exploratory analysis, dashboarding, and business reporting.",
    skills: "Excel · SQL · Python · Data Visualisation",
    pdf: "assets/pdfs/internships/onlei-certificate.pdf"
  },
  {
    date: "2024",
    title: "Data Analytics Intern",
    org: "Trainity",
    desc: "Solved business problems using Excel, SQL, and analytical techniques, working on data interpretation, reporting, and business insight projects.",
    skills: "SQL · Excel · Business Analytics · Reporting",
    pdf: "assets/pdfs/internships/trainity-certificate.pdf"
  },
  {
    date: "Oct 2023 – Dec 2023",
    title: "Management Consulting Fellowship",
    org: "Career Edge",
    desc: "Applied consulting frameworks to real-world business problems — market entry, growth strategy, profitability, case analysis, and guesstimation.",
    skills: "Management Consulting · Business Strategy · Case Study Analysis · Guesstimation",
    pdf: "assets/pdfs/certifications/career-edge-fellowship.pdf"
  },
  {
    date: "2026",
    title: "Business Insights & Data Visualization",
    org: "Tata (Forage Job Simulation)",
    desc: "Job simulation covering business insight generation and data visualisation techniques used in real Tata Group analytics workflows.",
    skills: "Data Visualisation · Business Insights · Analytics",
    pdf: "assets/pdfs/certifications/tata-forage-simulation.pdf"
  }
];

/* ============================================================
   RENDER PROJECTS & EXPERIENCE
   ============================================================ */
function renderExhibits(){
  const root = document.getElementById("exhibits");
  if (!root) return;
  root.innerHTML = PROJECTS.map((p, i) => `
    <article class="exhibit reveal" data-reveal-delay="${(i % 2) * 100}">
      <p class="exhibit__label">${p.label}</p>
      <h3 class="exhibit__title">${p.title}</h3>
      <p class="exhibit__overview">${p.overview}</p>
      <h5>What I Did</h5>
      <ul>${p.did.map(d => `<li>${d}</li>`).join("")}</ul>
      <h5>Key Insights</h5>
      <ul>${p.insights.map(i => `<li>${i}</li>`).join("")}</ul>
      <div class="exhibit__skills">${p.skills.map(s => `<span>${s}</span>`).join("")}</div>
      <div class="exhibit__footer">
        <a class="exhibit__link" href="${p.pdf}" target="_blank" rel="noopener">View Full Report (PDF) →</a>
      </div>
    </article>
  `).join("");
  observeReveals(root.querySelectorAll(".reveal"));
}

function renderTimeline(){
  const root = document.getElementById("timeline");
  if (!root) return;
  root.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="timeline-item__date">${e.date}</div>
      <div>
        <h3 class="timeline-item__title">${e.title}</h3>
        <p class="timeline-item__org">${e.org}</p>
        <p class="timeline-item__desc">${e.desc}</p>
        <p class="timeline-item__skills">${e.skills}</p>
      </div>
      <a class="timeline-item__link" href="${e.pdf}" target="_blank" rel="noopener">View Certificate</a>
    </div>
  `).join("");
  observeReveals(root.querySelectorAll(".timeline-item"));
}

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
let revealObserver;
function getRevealObserver(){
  if (revealObserver) return revealObserver;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target;
        const delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
        setTimeout(() => el.classList.add("is-visible"), delay);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  return revealObserver;
}
function observeReveals(nodeList){
  const obs = getRevealObserver();
  nodeList.forEach(el => obs.observe(el));
}
function initRevealAll(){
  observeReveals(document.querySelectorAll(".reveal:not(#exhibits .reveal):not(#timeline .timeline-item)"));
}

/* ============================================================
   COUNTER ANIMATION (stats strip)
   ============================================================ */
function initCounters(){
  const nums = document.querySelectorAll(".stat__num");
  if (!nums.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      const duration = 900;
      const start = performance.now();
      function tick(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(el => obs.observe(el));
}

/* ============================================================
   TYPEWRITER (hero role line)
   ============================================================ */
function initTypewriter(){
  const el = document.getElementById("typewriter");
  if (!el) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phrases = [
    "MBA Candidate",
    "Management Professional",
    "Finance & Strategy Enthusiast",
    "Aspiring Business Leader"
  ];
  if (prefersReduced){
    el.textContent = phrases[0];
    return;
  }
  let pIdx = 0, cIdx = 0, deleting = false;
  function step(){
    const phrase = phrases[pIdx];
    if (!deleting){
      cIdx++;
      el.textContent = phrase.slice(0, cIdx);
      if (cIdx === phrase.length){
        deleting = true;
        setTimeout(step, 1400);
        return;
      }
    } else {
      cIdx--;
      el.textContent = phrase.slice(0, cIdx);
      if (cIdx === 0){
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    setTimeout(step, deleting ? 35 : 55);
  }
  step();
}

/* ============================================================
   HERO NETWORK CANVAS
   ============================================================ */
function initHeroCanvas(){
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let w, h, points;
  const COUNT_BASE = 46;

  function resize(){
    const hero = canvas.closest(".hero");
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
    const count = Math.round((w / 1200) * COUNT_BASE) + 18;
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }));
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    for (const p of points){
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < points.length; i++){
      for (let j = i + 1; j < points.length; j++){
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140){
          ctx.strokeStyle = `rgba(232,163,61,${0.12 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    for (const p of points){
      ctx.fillStyle = "rgba(79,191,184,0.55)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!prefersReduced) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
  if (prefersReduced) draw(); // draw a single static frame
}

/* ============================================================
   PDF LINK HANDLING (works around browsers blocking data: URI
   navigation — converts embedded PDFs to blob URLs at click time)
   ============================================================ */
function dataUriToBlobUrl(dataUri){
  const [, base64] = dataUri.split(",");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const blob = new Blob([bytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}
function initPdfLinks(){
  document.querySelectorAll(".exhibit__link, .timeline-item__link").forEach(a => {
    a.addEventListener("click", function(e){
      const href = this.getAttribute("href");
      if (href && href.startsWith("data:application/pdf")){
        e.preventDefault();
        window.open(dataUriToBlobUrl(href), "_blank");
      }
      // otherwise it's a normal relative path — default navigation just works
    });
  });
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   CONTACT FORM (Formspree)
   ============================================================ */
function initForm(){
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("YOUR_FORM_ID")) {
      status.textContent = "Form isn't connected yet — see setup instructions in the README.";
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    status.textContent = "Sending…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });
      if (res.ok) {
        status.textContent = "Message sent — thank you! I'll get back to you soon.";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Please email me directly instead.";
      }
    } catch (err) {
      status.textContent = "Network error — please email me directly instead.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ============================================================
   MISC
   ============================================================ */
function setYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderExhibits();
  renderTimeline();
  initPdfLinks();
  initRevealAll();
  initCounters();
  initTypewriter();
  initHeroCanvas();
  initNav();
  initForm();
  setYear();
});
