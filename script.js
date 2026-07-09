/* ============================================================
   Marcos Cherem — portfolio interactions + content
   ============================================================ */

/* ---------- THEME ---------- */
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ---------- NAV SHADOW ON SCROLL ---------- */
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

/* ---------- TYPED SUBTITLE ---------- */
const phrases = [
  "A DevOps & Infrastructure Leader.",
  "A Platform Engineering Innovator.",
  "A Cloud & FinOps Strategist.",
  "An AI Infrastructure Builder.",
  "A Martial Artist.",
];
const typedEl = document.getElementById("typed");
let pi = 0, ci = 0, deleting = false;
function typeLoop() {
  const word = phrases[pi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) {
    ci++;
    setTimeout(typeLoop, 55);
  } else if (deleting && ci > 0) {
    ci--;
    setTimeout(typeLoop, 28);
  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(typeLoop, 1600);
    } else {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(typeLoop, 250);
    }
  }
}
typeLoop();

/* ---------- PROJECTS / FLAGSHIP WORK ---------- */
const projects = [
  {
    title: "Internal Developer Platform 🚀",
    desc: "Designed and shipped a self-serve Internal Developer Platform as an internal product for 200+ engineers, with golden paths and a service catalogue that cut platform-team ticket volume and sped up onboarding.",
    tags: ["IDP", "Golden Paths", "Terraform", "AWS"],
    meta: "Awin · 2025",
  },
  {
    title: "FinOps Cost Program 💰",
    desc: "Stood up a dedicated FinOps function that delivered $1.1M in cloud savings in 2025, plus a further $500K through vendor renegotiation and SaaS consolidation, by rightsizing, reserved instances, and killing idle spend.",
    tags: ["FinOps", "AWS Cost Explorer", "Vendor Strategy"],
    meta: "Awin · 2024–25",
  },
  {
    title: "LLM Triage → MCP Server 🤖",
    desc: "Built an internal LLM on Llama to auto-classify and route operational tickets, then evolved it into a Model Context Protocol server that exposes internal tooling to AI agents under governed, controlled access.",
    tags: ["Llama", "MCP", "AI Agents", "Python"],
    meta: "Awin · 2025",
  },
  {
    title: "Observability Modernisation 📊",
    desc: "Led the migration from Prometheus and Grafana to Datadog across 1,461 VMware VMs, 806 Docker containers, and AWS workloads, redesigning monitoring, logging, alerting, and tracing with service ownership across every team.",
    tags: ["Datadog", "SRE", "DORA", "Observability"],
    meta: "Awin",
  },
  {
    title: "AWS Landing Zone 🏗️",
    desc: "Designed and built the AWS landing zone from scratch: multi-account governance, security baselines, network topology, and hybrid connectivity from the Equinix data centre, all codified in Terraform and Terragrunt.",
    tags: ["AWS", "Terraform", "Terragrunt", "IaC"],
    meta: "Awin",
  },
  {
    title: "Zero-Trust & SASE 🔐",
    desc: "Replaced legacy VPN with a zero-trust posture using Palo Alto Prisma SASE, tied into IAM lifecycle, and ran endpoint and supply-chain security with CrowdStrike and Snyk inside an ISO 27001 aligned framework.",
    tags: ["SASE", "Zero Trust", "CrowdStrike", "ISO 27001"],
    meta: "Awin",
  },
  {
    title: "Martial Arts Instructor 🥋",
    desc: "Certified Freestyle Martial Arts instructor and 3rd Dan black belt, teaching classes in Buckingham and Towcester. Training since 2017 alongside my son, I qualified as an instructor in 2024 and am now working toward my 4th Dan black belt and grading examiner certification.",
    tags: ["3rd Dan Black Belt", "Chief Instructor", "Buckingham & Towcester"],
    meta: "Freestyle Martial Arts · Since 2017",
    link: "https://www.freestylemartialarts.com/buckingham",
  },
];

document.getElementById("cards").innerHTML = projects
  .map(
    (p) => `
    <article class="card reveal">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="meta">${p.meta}</div>
      ${p.link ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">View profile ↗</a>` : ""}
    </article>`
  )
  .join("");

/* ---------- SKILLS ---------- */
const skills = [
  "AWS", "Terraform", "Terragrunt", "Docker", "GitHub Actions", "Datadog",
  "Ansible", "Chef", "Internal Developer Platforms", "FinOps", "SRE / DORA",
  "Palo Alto Prisma (SASE)", "CrowdStrike", "Snyk", "ISO 27001", "Zero Trust",
  "IAM Lifecycle", "Llama / LLMs", "Model Context Protocol", "Python",
  "VMware", "Equinix", "M&A Integration", "Business Continuity",
  "Engineering Leadership", "Polyglot 🌍", "Star Citizen (3,000 hrs) 🚀", "Coffee ☕",
];
document.getElementById("pills").innerHTML = skills
  .map((s) => `<span class="pill reveal">${s}</span>`)
  .join("");

/* ---------- EXPERIENCE ---------- */
const experience = [
  {
    company: "Awin",
    role: "Director of DevOps & IT Operations",
    date: "Nov 2020 – Present",
    short:
      "Lead a 24-person platform engineering organisation supporting 200+ developers on a hybrid AWS and Equinix estate, with a €4M budget.",
    more:
      "Unified Systems Engineering, Network Operations, and IT Operations into a single DevOps function; drove change failure rate from 25% to 0% via DORA-tracked, fully automated CI/CD; delivered $1.6M in savings through FinOps and vendor strategy; shipped an Internal Developer Platform; built an LLM-to-MCP AI capability; co-authored the AI governance framework; and led M&A integration and due diligence for ShareASale and Singleview.",
  },
  {
    company: "Improbable",
    role: "Senior Technical Delivery Manager",
    date: "Sep 2019 – Mar 2020",
    short:
      "Delivered the Western launch of Nostos on the SpatialOS distributed simulation platform at this Series-B, $600M+ funded technology company.",
    more:
      "Aligned infrastructure scaling, engineering delivery, and partner coordination across distributed platform teams, and introduced Scaled Agile Framework practices into the Distributed Operating Platform unit to improve cross-team predictability.",
  },
  {
    company: "IPsoft",
    role: "R&D Senior Project Manager",
    date: "May 2017 – Sep 2019",
    short:
      "Directed European R&D delivery for the IPcenter and 1Desk enterprise AI and automation platforms.",
    more:
      "Coordinated engineering, product, and integration teams across European R&D sites; delivered integrations with Jira, ServiceNow, and customer CRM systems; and embedded GDPR and security review steps into the release process.",
  },
  {
    company: "Crytek",
    role: "Head of Network Operations",
    date: "Sep 2015 – Apr 2017",
    short:
      "Ran a globally distributed Network Operations Centre across 10+ locations, keeping live online services up for CryEngine titles.",
    more:
      "Structured follow-the-sun rotations and formal incident response, managed engineers in Frankfurt and Kiev, and cut latency and annual CDN, data centre, and cloud spend through vendor consolidation and renegotiation.",
  },
  {
    company: "European Central Bank (via Serco)",
    role: "Senior IT Project Manager",
    date: "Sep 2013 – Sep 2015",
    short:
      "Delivered enterprise-wide IT service management, monitoring, server automation, and vulnerability management in a highly regulated central-banking environment.",
    more:
      "Managed cross-vendor delivery teams, defined acceptance criteria against internal control frameworks, and sequenced changes with careful rollback planning to protect a regulated, low-latency financial estate.",
  },
  {
    company: "AIG (via Atos)",
    role: "Senior IT Project Manager",
    date: "Dec 2011 – Sep 2013",
    short:
      "Led AIG's global data centre consolidation into Fort Worth, Texas, migrating 250+ servers per weekend with no rollbacks.",
    more:
      "Created and standardised the go-live process across 30+ sites in two months, lifting migration throughput from 25 to 250+ servers per weekend, and built executive dashboards to track the programme for VPs and stakeholders.",
  },
  {
    company: "HSBC",
    role: "IT Operations Director, Unix",
    date: "Aug 2010 – Dec 2011",
    short:
      "Owned a 1,000+ Unix server estate behind the bank's core applications, with 40+ direct reports and 20+ Oracle consultants.",
    more:
      "Consolidated all Latin American data centres into a Tier 4 site in Mexico, virtualised the estate into a cloud-like environment, and refreshed average server age from 10 years to under 5 while improving high availability and disaster recovery.",
  },
  {
    company: "Nortel Networks",
    role: "Global Product Support Manager",
    date: "2008 – 2010",
    short:
      "Built a global product support function from scratch and led M&A due diligence and asset transition through Nortel's bankruptcy and sale.",
    more:
      "Assembled and trained an 82-engineer support organisation in two months, surpassed prior team metrics within three, and kept performance and morale high through Chapter 11 headcount reductions while coordinating asset handovers with legal, finance, and acquiring entities.",
  },
  {
    company: "Thomson Reuters",
    role: "Data Center Operations Manager",
    date: "2006 – 2008",
    short:
      "Ran data centre operations for continuous customer service across networking, telecoms, and data security.",
    more:
      "Achieved 90% business continuity across the customer base, cut telecom cost 20% while improving reliability, implemented ITIL best practices, and stood up disaster-recovery infrastructure and RSA-secured VPN access.",
  },
];

document.getElementById("timeline").innerHTML = experience
  .map(
    (e) => `
    <div class="tl-item reveal">
      <span class="tl-dot"></span>
      <span class="tl-date">${e.date}</span>
      <div class="tl-card">
        <h3>${e.company}</h3>
        <div class="role">${e.role}</div>
        <p>${e.short}</p>
        <p class="more">${e.more}</p>
        <button class="read-more">read more ▾</button>
      </div>
    </div>`
  )
  .join("");

document.querySelectorAll(".read-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".tl-card");
    const open = card.classList.toggle("open");
    btn.textContent = open ? "read less ▴" : "read more ▾";
  });
});

/* ---------- REVEAL ON SCROLL ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
