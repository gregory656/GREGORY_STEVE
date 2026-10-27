import { useEffect, useMemo, useState } from "react";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio";
import type { Project } from "./data/portfolio";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Search,
} from "lucide-react";
import "./App.css";

const CURRENT_YEAR = new Date().getFullYear();

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <ArrowUpRight
      aria-hidden="true"
      className="arrow"
      size={14}
      strokeWidth={1.5}
    />
  ) : (
    <ArrowRight
      aria-hidden="true"
      className="arrow"
      size={14}
      strokeWidth={1.5}
    />
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
const brandSlugs: Record<string, string> = {
  JavaScript: "javascript", TypeScript: "typescript", Python: "python", PHP: "php",
  SQL: "postgresql", Java: "openjdk", "C++": "cplusplus",
  C: "c", Dart: "dart", Kotlin: "kotlin", React: "react", "Next.js": "nextdotjs",
  HTML: "html5", CSS: "css", "Tailwind CSS": "tailwindcss", Bootstrap: "bootstrap",
  "Node.js": "nodedotjs", "Express.js": "express", Django: "django", Flask: "flask",
  FastAPI: "fastapi", Laravel: "laravel", "Spring Boot": "springboot", PostgreSQL: "postgresql",
  MySQL: "mysql", SQLite: "sqlite", MongoDB: "mongodb",
  Firebase: "firebase", Redis: "redis", Docker: "docker", Linux: "linux", Git: "git",
  GitHub: "github", "GitHub Actions": "githubactions",
  Vitest: "vitest", Pytest: "pytest", Jest: "jest", pandas: "pandas",
  NumPy: "numpy", "scikit-learn": "scikitlearn", PyTorch: "pytorch", TensorFlow: "tensorflow",
};
function TechMark({ name }: { name: string }) {
  const slug = brandSlugs[name];
  return slug ? <img className="tech-logo" src={`/icons/brands/${slug}.svg`} alt="" aria-hidden="true" loading="lazy" /> : null;
}
function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark-compact" : "brand-mark"} aria-hidden="true">
      <svg viewBox="0 0 42 42" fill="none">
        <path d="M18 8H7v9h11v10H6" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="miter" />
        <path d="M36 12V8H24v19h12v-9h-7" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="miter" />
        <circle cx="36" cy="36" r="2" fill="currentColor" />
      </svg>
    </span>
  );
}
function SectionTitle({
  number,
  label,
  title,
  intro,
}: {
  number: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-title">
      <span className="section-number">{number}</span>
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}
function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  const go = (to: string) => {
    history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return [path, go] as const;
}

function Header({
  go,
  openPalette,
}: {
  go: (to: string) => void;
  openPalette: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  const jump = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      go("/");
      setTimeout(
        () =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
        40,
      );
    } else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: "scaleX(" + progress + ")" }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            go("/");
          }}
          aria-label="Stephen Gregory Otieno home"
        >
          <BrandMark />
        </a>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <button onClick={() => jump("work")}>Work</button>
          <button onClick={() => jump("about")}>About</button>
          <button onClick={() => jump("toolkit")}>Toolkit</button>
          <button onClick={() => jump("education")}>Journey</button>
          <a href={profile.resume} download>
            Résumé <Arrow diagonal />
          </a>
          <button className="mobile-contact" onClick={() => jump("contact")}>
            Let's talk <Arrow diagonal />
          </button>
        </nav>
        <div className="header-actions">
          <button
            className="palette-trigger"
            onClick={openPalette}
            aria-label="Open quick navigation"
          >
            ⌘ K
          </button>
          <button className="contact-link" onClick={() => jump("contact")}>
            Let's talk <Arrow diagonal />
          </button>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}

function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={"botanical " + className}
      viewBox="0 0 160 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="stem"
        d="M78 210C81 158 72 122 93 79c10-21 24-36 46-53"
      />
      <path d="M81 155c-31-9-48-30-52-58 26 3 47 20 52 58ZM88 126c28-7 45-23 55-47-25-1-45 13-55 47ZM94 82c-18-20-20-43-9-67 17 15 23 38 9 67Z" />
      <circle cx="138" cy="24" r="7" />
    </svg>
  );
}
function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const pointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      e.pointerType !== "mouse" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: ((e.clientX - r.left - r.width / 2) / r.width) * 8,
      y: ((e.clientY - r.top - r.height / 2) / r.height) * 8,
    });
  };
  return (
    <section
      className="hero section-wrap"
      onPointerMove={pointer}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <div className="hero-copy">
        <Eyebrow>
          <span className="availability-dot" /> Software engineer ·{" "}
          {profile.location}
        </Eyebrow>
        <h1>
          <span>I build software</span>
          <span>
            that <em>moves people</em>
          </span>
          <span>forward.</span>
        </h1>
        <p className="hero-lede">
          From thoughtful interfaces to dependable systems, I turn complex ideas
          into useful digital products.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <Arrow diagonal />
          </a>
          <a className="text-link" href={profile.resume} download>
            Download résumé <Arrow />
          </a>
        </div>
        <div className="hero-meta">
          <span>{profile.availability}</span>
          <span className="meta-separator" />
          <span>Currently building for the web</span>
        </div>
      </div>
      <div className="hero-visual">
        <div
          className="portrait-frame"
          style={{
            transform: "translate3d(" + offset.x + "px," + offset.y + "px,0)",
          }}
        >
          <img
            src="/images/steve.jpg"
            alt="Stephen Gregory Otieno"
            fetchPriority="high"
          />
          <span className="portrait-index">NAI / KE</span>
        </div>
        <div className="portrait-caption">
          <span>Stephen Gregory Otieno</span>
          <span>Engineer · Nairobi</span>
        </div>
        <div className="portrait-coordinate" aria-hidden="true">
          <span>01</span><i /> <span>BUILT WITH INTENT</span>
        </div>
        <Botanical className="hero-botanical" />
        <span className="hero-side-note">
          BUILD WITH INTENTION / {CURRENT_YEAR}
        </span>
      </div>
      <div className="hero-foot">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
        <span>01 / 06</span>
      </div>
    </section>
  );
}
function ProjectRow({
  project,
  go,
  index,
}: {
  project: Project;
  go: (to: string) => void;
  index: number;
}) {
  return (
    <article className={"project-row project-row-" + index}>
      <button
        className="project-image"
        onClick={() => go("/projects/" + project.slug)}
        aria-label={"Read " + project.title + " case study"}
      >
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="image-index">CASE STUDY {project.number}</span>
        <span className="project-image-arrow">
          <Arrow diagonal />
        </span>
      </button>
      <div className="project-copy">
        <span className="project-index">{project.number} / 03</span>
        <div>
          <p className="project-category">{project.category}</p>
          <h3>
            <button onClick={() => go("/projects/" + project.slug)}>
              {project.title}
              <Arrow diagonal />
            </button>
          </h3>
          <p className="project-summary">{project.summary}</p>
          <div className="project-tech">
            {project.technologies.length ? (
              project.technologies.map((t) => <span key={t}>{t}</span>)
            ) : (
              <span className="project-tech-note">
                Project stack not listed in CV
              </span>
            )}
          </div>
          <button
            className="text-link project-link"
            onClick={() => go("/projects/" + project.slug)}
          >
            Read the case study <Arrow diagonal />
          </button>
        </div>
      </div>
    </article>
  );
}
function Work({ go }: { go: (to: string) => void }) {
  return (
    <section id="work" className="work-section section-wrap">
      <SectionTitle
        number="01"
        label="Selected work"
        title="Useful things,
thoughtfully made."
        intro="A selection of products and digital experiences built around real people and practical needs."
      />
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} go={go} index={i} />
        ))}
      </div>
      <div className="all-projects">
        <span>Three projects · product, systems, and the web</span>
        <button className="text-link" onClick={() => go("/projects")}>
          Explore project index <Arrow diagonal />
        </button>
      </div>
    </section>
  );
}
function Toolkit({ onSkill }: { onSkill: (skill: string) => void }) {
  return (
    <section id="toolkit" className="toolkit-section section-wrap">
      <SectionTitle
        number="02"
        label="Technical toolkit"
        title="A practical range.
A product mindset."
        intro="Tools are selected for the problems at hand. Choose a technology to find related project work."
      />
      <div className="skill-grid">
        {skillGroups.map((group, i) => (
          <div className="skill-group" key={group.name}>
            <div className="skill-heading">
              <span>0{i + 1}</span>
              <h3>{group.name}</h3>
            </div>
            <div className="skill-items">
              {group.items.map((item) => (
                <button
                  key={item}
                  onClick={() => onSkill(item)}
                  title={"Find projects using " + item}
                >
                  <TechMark name={item} />
                  {item}
                  <Arrow diagonal />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="toolkit-note">
        A broad working toolkit from my CV; specific project connections are
        shown only where documented.
      </p>
    </section>
  );
}
function About({ go }: { go: (to: string) => void }) {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="about-art">
        <Botanical />
        <div className="art-caption">
          A SYSTEM IS ONLY AS GOOD
          <br />
          AS THE PEOPLE IT SERVES.
        </div>
      </div>
      <div className="about-copy">
        <SectionTitle
          number="03"
          label="A little about me"
          title="Engineering with
people in mind."
        />
        <p className="about-lede">
          I’m Stephen, a software engineer and digital product builder based in
          Nairobi.
        </p>
        <p>
          I’m drawn to the space where thoughtful product decisions meet solid
          engineering. My work spans campus communities, school workflows, and
          customer facing web experiences.
        </p>
        <p>
          I value clear interfaces, maintainable systems, and the patient work
          of understanding a problem before reaching for a tool. I use AI as a
          research and implementation aid, then review, test, and adapt what it
          produces.
        </p>
        <button className="text-link" onClick={() => go("/projects")}>
          See how I work <Arrow diagonal />
        </button>
      </div>
    </section>
  );
}
function Journey() {
  return (
    <section id="education" className="journey-section section-wrap">
      <SectionTitle
        number="04"
        label="Education & experience"
        title="Learning by building."
        intro="A growing foundation in software engineering, computer science, and practical digital work."
      />
      <div className="journey-columns">
        <div>
          <Eyebrow>Education</Eyebrow>
          {education.map((e, i) => (
            <article className="journey-row" key={e.institution}>
              <span>0{i + 1}</span>
              <div>
                <h3>{e.degree}</h3>
                <p>{e.institution}</p>
              </div>
              <span className="journey-date">Dates not listed</span>
            </article>
          ))}
        </div>
        <div>
          <Eyebrow>Experience</Eyebrow>
          {experience.map((e) => (
            <article className="journey-row" key={e.organization}>
              <span>01</span>
              <div>
                <h3>{e.role}</h3>
                <p>{e.organization}</p>
                <p className="journey-detail">{e.detail}</p>
              </div>
              <span className="journey-date">Professional</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Credentials() {
  return (
    <section className="credentials-section section-wrap">
      <div>
        <Eyebrow>Credentials</Eyebrow>
        <h2>Proof over promises.</h2>
      </div>
      <div className="credential-note">
        <span className="credential-mark">
          <Plus aria-hidden="true" size={22} strokeWidth={1.2} />
        </span>
        <div>
          <h3>Certificates</h3>
          <p>
            No certificates were included with the supplied CV. This section is
            ready for verified credentials when available.
          </p>
        </div>
      </div>
    </section>
  );
}
function ResumeContact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:" + profile.email;
    }
  };
  return (
    <>
      <section className="resume-section section-wrap">
        <div>
          <Eyebrow>Résumé · PDF</Eyebrow>
          <h2>
            A fuller picture,
            <br />
            one click away.
          </h2>
          <p>
            Experience, education, and a detailed technical inventory in a
            concise PDF.
          </p>
        </div>
        <a className="button button-outline" href={profile.resume} download>
          Download résumé{" "}
          <span className="download-icon" aria-hidden="true">
            <ArrowDown size={15} strokeWidth={1.5} />
          </span>
        </a>
      </section>
      <section id="contact" className="contact-section section-wrap">
        <div className="contact-title">
          <Eyebrow>05 · Contact</Eyebrow>
          <h2>
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <p>
            I’m open to internship opportunities and collaborative product work.
          </p>
        </div>
        <div className="contact-details">
          <a className="email-link" href={"mailto:" + profile.email}>
            {profile.email}
            <Arrow diagonal />
          </a>
          <button className="copy-email" onClick={copy}>
            {copied ? "Copied to clipboard" : "Copy email"}
          </button>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
            <img className="social-logo" src="/icons/brands/github.svg" alt="" aria-hidden="true" /> GitHub <Arrow diagonal />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-11.8 7H5v9h2.2zm-.1-3.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6M19 13.5c0-2.5-1.3-3.7-3.1-3.7a2.7 2.7 0 0 0-2.4 1.3V10H11.3v9h2.2v-4.5c0-1.2.2-2.4 1.7-2.4s1.5 1.4 1.5 2.5V19H19z" /></svg> LinkedIn <Arrow diagonal />
            </a>
          </div>
          <a
            className="phone-link"
            href={"tel:" + profile.phone.replaceAll(" ", "")}
          >
            {profile.phone}
          </a>
        </div>
      </section>
    </>
  );
}
function Footer({ go }: { go: (to: string) => void }) {
  return (
    <footer className="site-footer section-wrap">
      <a
        className="footer-mark"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <BrandMark compact />
      </a>
      <span>Designed & built with intention · Nairobi, Kenya</span>
      <span>© {CURRENT_YEAR} Stephen Gregory Otieno</span>
      <button onClick={() => go("/projects")}>
        Project index <Arrow diagonal />
      </button>
    </footer>
  );
}
function Home({
  go,
  onSkill,
}: {
  go: (to: string) => void;
  onSkill: (s: string) => void;
}) {
  return (
    <>
      <main id="main">
        <div id="top">
          <Hero />
        </div>
        <div className="signal-strip" aria-label="Engineering focus">
          <span>PRODUCT THINKING</span><i />
          <span>SOFTWARE ENGINEERING</span><i />
          <span>HUMAN OUTCOMES</span><i />
          <span>PRODUCT THINKING</span><i />
          <span>SOFTWARE ENGINEERING</span>
        </div>
        <Work go={go} />
        <Toolkit onSkill={onSkill} />
        <About go={go} />
        <Journey />
        <Credentials />
        <ResumeContact />
      </main>
      <Footer go={go} />
    </>
  );
}
function ProjectIndex({
  go,
  selectedSkill,
}: {
  go: (to: string) => void;
  selectedSkill: string;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(selectedSkill || "All");
  const filters = ["All", "Campus", "Education", "Business"];
  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const text = (
          p.title +
          " " +
          p.summary +
          " " +
          p.category
        ).toLowerCase();
        const matchText = text.includes(query.toLowerCase());
        const matchCategory =
          filter === "All" ||
          (filter === "Campus" &&
            p.category.toLowerCase().includes("campus")) ||
          (filter === "Education" &&
            p.category.toLowerCase().includes("school")) ||
          (filter === "Business" &&
            p.category.toLowerCase().includes("business"));
        return matchText && matchCategory;
      }),
    [query, filter],
  );
  return (
    <main id="main" className="index-page section-wrap">
      <button className="back-link" onClick={() => go("/")}>
        <ArrowLeft aria-hidden="true" size={14} /> Home
      </button>
      <SectionTitle
        number="WORK / INDEX"
        label="Project archive"
        title="Work, in detail."
        intro="Search projects by name or description, or browse by the documented product category."
      />
      <div className="filter-bar">
        <label className="search-box" htmlFor="project-search">
          <Search aria-hidden="true" size={17} strokeWidth={1.5} />
          <input
            id="project-search"
            aria-label="Search projects or categories"
            placeholder="Search projects or categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>/</kbd>
        </label>
        <div className="filters" role="group" aria-label="Project categories">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <p className="result-count">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {filter && filter !== "All" ? " · " + filter : ""}
      </p>
      <div className="index-projects">
        {filtered.map((p, i) => (
          <ProjectRow key={p.slug} project={p} go={go} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <p>
            {filter !== "All" && !filters.includes(filter)
              ? "The CV lists this skill in the overall toolkit, but does not connect it to a named project yet."
              : "No projects match that search."}
          </p>
          <button
            className="text-link"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Browse all projects <Arrow />
          </button>
        </div>
      )}
      <p className="artwork-note">
        Project cover images are original editorial illustrations, not product
        screenshots.
      </p>
    </main>
  );
}
function CaseStudy({
  project,
  go,
}: {
  project: Project;
  go: (to: string) => void;
}) {
  return (
    <main id="main" className="case-page section-wrap">
      <button className="back-link" onClick={() => go("/projects")}>
        <ArrowLeft aria-hidden="true" size={14} /> All projects
      </button>
      <div className="case-header">
        <Eyebrow>
          {project.number} / Case study · {project.category}
        </Eyebrow>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="case-meta">
          <span>
            <small>ROLE</small>
            {project.role}
          </span>
          <span>
            <small>TYPE</small>
            {project.category}
          </span>
          <span>
            <small>LINK</small>
            <a href={project.url} target="_blank" rel="noreferrer">
              Visit project <Arrow diagonal />
            </a>
          </span>
        </div>
      </div>
      <img className="case-cover" src={project.image} alt={project.imageAlt} />
      <p className="artwork-note">
        Editorial concept artwork · Not a screenshot of the live product.
      </p>
      <div className="case-content">
        <aside>
          <Eyebrow>On this page</Eyebrow>
          <a href="#problem">Project scope</a>
          <a href="#approach">CV contributions</a>
          <a href="#decisions">Technical record</a>
          <a href="#reflection">Reflection</a>
        </aside>
        <div className="case-article">
          <section id="problem">
            <Eyebrow>01 / Project scope</Eyebrow>
            <h2>What the CV describes</h2>
            <p>{project.problem}</p>
          </section>
          <section id="approach">
            <Eyebrow>02 / Contribution</Eyebrow>
            <h2>Work listed in the CV</h2>
            <ul>
              {project.approach.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section id="decisions">
            <Eyebrow>03 / Engineering</Eyebrow>
            <h2>Technical record</h2>
            <ul>
              {project.decisions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="case-tech">
              <Eyebrow>Technology</Eyebrow>
              {project.technologies.length ? (
                project.technologies.map((t) => <span key={t}>{t}</span>)
              ) : (
                <p>
                  Project specific technologies were not listed in the supplied
                  CV.
                </p>
              )}
            </div>
          </section>
          <section id="reflection">
            <Eyebrow>04 / Reflection</Eyebrow>
            <h2>What’s known</h2>
            <p>{project.lessons}</p>
            <a
              className="button button-dark"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit {project.title} <Arrow diagonal />
            </a>
          </section>
        </div>
      </div>
      <div className="case-next">
        <span>Next project</span>
        <button
          onClick={() => {
            const next =
              projects[(projects.indexOf(project) + 1) % projects.length];
            go("/projects/" + next.slug);
          }}
        >
          {projects[(projects.indexOf(project) + 1) % projects.length].title}{" "}
          <Arrow diagonal />
        </button>
      </div>
    </main>
  );
}
function CommandPalette({
  open,
  onClose,
  go,
}: {
  open: boolean;
  onClose: () => void;
  go: (to: string) => void;
}) {
  const [q, setQ] = useState("");
  useEffect(() => {
    if (open) {
      setTimeout(() => document.getElementById("command-search")?.focus(), 20);
    }
  }, [open]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
        else document.dispatchEvent(new Event("open-palette"));
      }
      if (e.key === "Escape") onClose();
      if (e.key === "/" && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        document.dispatchEvent(new Event("open-palette"));
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open, onClose]);
  if (!open) return null;
  const actions = [
    ["Selected work", "/", "#work"],
    ["About", "/", "#about"],
    ["Technical toolkit", "/", "#toolkit"],
    ["Education", "/", "#education"],
    ["Contact", "/", "#contact"],
    ["Project index", "/projects", ""],
  ].filter(([name]) => name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <section
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="palette-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 id="palette-title" className="sr-only">
          Quick navigation
        </h2>
        <label className="palette-search">
          <Search aria-hidden="true" size={17} strokeWidth={1.5} />
          <input
            id="command-search"
            aria-label="Search destinations"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Where would you like to go?"
          />
          <kbd>ESC</kbd>
        </label>
        <p className="palette-label">NAVIGATE</p>
        {actions.map(([name, path, hash]) => (
          <button
            key={name}
            className="palette-action"
            onClick={() => {
              onClose();
              if (hash) {
                if (location.pathname !== "/") go("/");
                setTimeout(
                  () =>
                    document
                      .querySelector(hash)
                      ?.scrollIntoView({ behavior: "smooth" }),
                  50,
                );
              } else go(path);
            }}
          >
            {name}
            <Arrow diagonal />
          </button>
        ))}
        {!actions.length && (
          <p className="palette-empty">No destinations match.</p>
        )}
        <div className="palette-footer">
          <span>Tab to navigate</span>
          <span>↵ to open</span>
          <span>esc to close</span>
        </div>
      </section>
    </div>
  );
}
export default function App() {
  const [path, go] = usePath();
  const [palette, setPalette] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  useEffect(() => {
    const open = () => setPalette(true);
    document.addEventListener("open-palette", open);
    return () => document.removeEventListener("open-palette", open);
  }, []);
  useEffect(() => {
    document.title =
      path === "/projects"
        ? "Projects · Stephen Gregory Otieno"
        : path.startsWith("/projects/")
          ? projects.find((p) => path.endsWith(p.slug))?.title +
            " · Case study · Stephen Gregory Otieno"
          : "Stephen Gregory Otieno · Software Engineer";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Stephen Gregory Otieno is a Nairobi based software engineer building useful digital products and dependable systems.",
    );
  }, [path]);
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".hero-copy, .hero-visual, .section-title, .project-row, .skill-group, .about-art, .about-copy > p, .journey-row, .credentials-section > *, .resume-section > *, .contact-title, .contact-details",
    );
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, [path]);
  const detail = path.startsWith("/projects/")
    ? projects.find((p) => path.split("/").pop() === p.slug)
    : undefined;
  return (
    <>
      <Header go={go} openPalette={() => setPalette(true)} />
      {path === "/projects" ? (
        <ProjectIndex go={go} selectedSkill={selectedSkill} />
      ) : detail ? (
        <CaseStudy project={detail} go={go} />
      ) : path.startsWith("/projects/") ? (
        <main id="main" className="not-found section-wrap">
          <Eyebrow>404 · Not found</Eyebrow>
          <h1>This project moved.</h1>
          <button className="text-link" onClick={() => go("/projects")}>
            Back to projects <Arrow />
          </button>
        </main>
      ) : (
        <Home
          go={go}
          onSkill={(s) => {
            setSelectedSkill(s);
            go("/projects");
          }}
        />
      )}
      <CommandPalette
        key={palette ? "open" : "closed"}
        open={palette}
        onClose={() => setPalette(false)}
        go={go}
      />
    </>
  );
}
