import { useEffect, useMemo, useState } from "react";
import {
  education,
  experience,
  engagementTypes,
  futureDirection,
  hiringRoleGroups,
  learningFocus,
  profile,
  projects,
  skillGroups,
  workSetups,
} from "./data/portfolio";
import type { Project } from "./data/portfolio";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Mail,
  Phone,
  Plus,
  Play,
  Search,
} from "lucide-react";
import "./App.css";

const CURRENT_YEAR = new Date().getFullYear();
const PROJECT_FILTERS = ["All", "Campus", "Education", "Business", "AI / LLM", "Systems / IoT"];

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
  Java: "openjdk", "C++": "cplusplus",
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
const brandColors: Record<string, string> = {
  JavaScript: "#d6a900", TypeScript: "#3178c6", Python: "#3776ab", PHP: "#777bb4", SQL: "#4169e1", Java: "#e76f00", "C++": "#00599c", C: "#555", Dart: "#0175c2", Kotlin: "#7f52ff", React: "#087ea4", "Next.js": "#111", HTML: "#e34f26", CSS: "#1572b6", "Tailwind CSS": "#06b6d4", Bootstrap: "#7952b3", "Node.js": "#5fa04e", "Express.js": "#333", Django: "#092e20", Flask: "#222", FastAPI: "#009688", Laravel: "#ff2d20", "Spring Boot": "#6db33f", PostgreSQL: "#4169e1", MySQL: "#00758f", SQLite: "#003b57", MongoDB: "#47a248", Firebase: "#dd2c00", Redis: "#d82c20", Docker: "#2496ed", Linux: "#e5a900", Git: "#f05032", GitHub: "#222", "GitHub Actions": "#2088ff", Vitest: "#729b1b", Pytest: "#3776ab", Jest: "#c21325", pandas: "#150458", NumPy: "#4dabcf", "scikit-learn": "#f7931e", PyTorch: "#ee4c2c", TensorFlow: "#ff6f00",
};
function TechMark({ name }: { name: string }) {
  const slug = brandSlugs[name];
  return slug ? <span className="tech-logo" style={{ "--brand-color": brandColors[name] ?? "#111", "--brand-icon": `url(/icons/brands/${slug}.svg)` } as React.CSSProperties} aria-hidden="true" /> : null;
}
function BrandGlyph({ name }: { name: "GitHub" | "LinkedIn" }) {
  return name === "GitHub" ? <span className="brand-glyph github-glyph" aria-hidden="true" /> : <span className="brand-glyph linkedin-glyph" aria-hidden="true">in</span>;
}
function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark-compact" : "brand-mark"} aria-hidden="true">
      <img src="/images/steve.jpg" alt="" />
      <b>SG</b>
    </span>
  );
}
function CvBuddy() {
  return (
    <span className="cv-buddy" aria-hidden="true">
      <span className="cv-buddy-bubble cv-buddy-plea">Pretty please?</span>
      <span className="cv-buddy-bubble cv-buddy-cheer">You made my day!</span>
      <svg viewBox="0 0 92 84" fill="none">
        <path className="buddy-arm buddy-arm-left" d="M29 44 16 34" />
        <path className="buddy-arm buddy-arm-right" d="m64 43 12-12" />
        <circle className="buddy-hand" cx="14" cy="32" r="4" />
        <circle className="buddy-hand" cx="78" cy="29" r="4" />
        <rect className="buddy-paper" x="27" y="8" width="40" height="57" rx="9" />
        <path className="buddy-paper-fold" d="M54 9v11h12" />
        <path className="buddy-detail" d="M35 54h24M35 59h15" />
        <path className="buddy-leg" d="m38 65-3 7m20-7 3 7" />
        <g className="buddy-pleading-face">
          <path className="buddy-brow" d="m36 31 5 2m12-2 5-2" />
          <circle className="buddy-eye" cx="40" cy="37" r="2" />
          <circle className="buddy-eye" cx="54" cy="37" r="2" />
          <path className="buddy-mouth" d="M43 47q4-5 8 0" />
          <path className="buddy-tear" d="M36 40q-4 6 0 8 4-2 0-8Zm22 0q-4 6 0 8 4-2 0-8Z" />
        </g>
        <g className="buddy-laugh-face">
          <path className="buddy-laugh-eye" d="m37 36 5 3 4-3m5 0 4 3 5-3" />
          <path className="buddy-grin" d="M40 42q7 13 14 0-7 4-14 0Z" />
          <circle className="buddy-cheek" cx="34" cy="42" r="2" />
          <circle className="buddy-cheek" cx="60" cy="42" r="2" />
        </g>
        <path className="buddy-sparkle sparkle-one" d="M12 11v8m-4-4h8" />
        <path className="buddy-sparkle sparkle-two" d="M78 55v6m-3-3h6" />
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
function EngineeringScene() {
  return <svg className="engineering-scene" viewBox="0 0 420 420" fill="none" aria-hidden="true">
    <defs><radialGradient id="human-glow"><stop stopColor="#fff"/><stop offset=".48" stopColor="#d9cbff" stopOpacity=".5"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient></defs>
    <circle className="human-halo" cx="210" cy="205" r="116" fill="url(#human-glow)"/>
    <circle className="human-orbit orbit-one" cx="210" cy="205" r="147" stroke="#d8cef5" strokeDasharray="3 8"/>
    <ellipse className="human-orbit orbit-two" cx="210" cy="205" rx="175" ry="90" stroke="#d7eff1" transform="rotate(-34 210 205)"/>
    <path className="circuit-route route-one" d="M31 92h65l25 25h44m224 194h-73l-29-29h-41M82 340h45l31-31h35m140-238h-43l-25 25h-30" stroke="#b8a5ed"/>
    <path className="circuit-route route-two" d="M49 222h76l20-20h38m188-84h-58l-25 26h-45m-213 101h54l30 29h44m204-18h-51l-28 29h-37" stroke="#a7dbe2"/>
    <g className="human-figure"><circle cx="210" cy="164" r="30" fill="#fff" stroke="#22202b" strokeWidth="2"/><path d="M154 282c4-43 26-66 56-66s52 23 56 66" fill="#fff" stroke="#22202b" strokeWidth="2"/><path d="M173 238c13 13 26 19 37 19s24-6 37-19" stroke="#b5a1ed" strokeWidth="3" strokeLinecap="round"/></g>
    <g className="human-nodes"><rect x="92" y="113" width="8" height="8" rx="1" fill="#f3a17f"/><rect x="341" y="139" width="6" height="6" rx="1" fill="#8dcad3"/><rect x="125" y="305" width="8" height="8" rx="1" fill="#8dcad3"/><rect x="326" y="288" width="8" height="8" rx="1" fill="#b99df1"/><rect x="61" y="220" width="4" height="4" rx="1" fill="#f3a17f"/></g>
    <text x="210" y="365" textAnchor="middle" fill="#85808d" fontFamily="monospace" fontSize="9" letterSpacing="3">PEOPLE AT THE CENTER / SYSTEMS AROUND</text>
  </svg>;
}
function FieldTicker({ top = false }: { top?: boolean }) {
  const notes = top
    ? ["Open to software engineering roles", "Nairobi · Kenya", "LLM systems · evidence first", "Systems design + critical thinking", "MSc Embedded Systems & IoT · future direction", "Neural Atlas + Field Echo concept studies"]
    : ["Nairobi · Kenya", "Building useful products", "LLM systems · evidence first", "Critical thinking in practice", "MSc Embedded Systems & IoT · future direction", "Design for the failure path", "Open to software engineering roles"];
  return <section className={top ? "field-ticker field-ticker-top" : "field-ticker"} aria-label={top ? "Portfolio news highlights" : "Portfolio field notes"}>
    <div className="ticker-heading"><span><Cpu className="ticker-engineering-mark" size={12} strokeWidth={1.6} aria-hidden="true" /> {top ? "PORTFOLIO SIGNAL" : "FIELD NOTES"}</span><span>{top ? "AT A GLANCE" : "PROJECT SIGNAL / 01—07"}</span></div>
    <div className="ticker-window" aria-hidden="true"><div className="ticker-track">{[0, 1].map((loop) => <div className="ticker-set" key={loop}>{notes.map((note, noteIndex) => <span className="ticker-note" key={note}><b className="ticker-index">{String(noteIndex + 1).padStart(2, "0")}</b>{note}</span>)}</div>)}</div></div>
    <p className="sr-only">{notes.join(". ")}</p>
  </section>;
}
function BirdFlight() {
  return <svg className="bird-flight" viewBox="0 0 520 520" fill="none" aria-hidden="true">
    <path className="flight-path" d="M25 198C145 26 321 72 477 20"/>
    <g className="bird bird-one"><path d="M0 11Q8 2 16 11Q24 2 32 11"/></g>
    <g className="bird bird-two"><path d="M0 10Q6 3 12 10Q18 3 24 10"/></g>
    <g className="bird bird-three"><path d="M0 8Q5 2 10 8Q15 2 20 8"/></g>
    <rect className="flight-star star-one" x="403" y="72" width="4" height="4"/><rect className="flight-star star-two" x="98" y="74" width="4" height="4"/>
  </svg>;
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
          <Code2 className="availability-mark" size={13} strokeWidth={1.7} aria-hidden="true" /> Software engineer ·{" "}
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
          <span className="cv-invite">
            <a className="text-link cv-download" href={profile.resume} download>
              Download résumé <Arrow />
            </a>
            <CvBuddy />
          </span>
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
          <span>01</span><span className="coordinate-trace" aria-hidden="true" /> <span>BUILT WITH INTENT</span>
        </div>
        <BirdFlight />
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
        <span className="project-index">{project.number} / 05{project.concept && <b> · CONCEPT</b>}</span>
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
              <span className="project-tech-note">Product thinking · systems · people</span>
            )}
          </div>
          <button
            className="text-link project-link"
            onClick={() => go("/projects/" + project.slug)}
          >
            Read the case study <Arrow diagonal />
          </button>
          <a className="project-repo-link" href={project.github} target="_blank" rel="noreferrer"><BrandGlyph name="GitHub" /> GitHub profile <Arrow diagonal /></a>
          {project.downloadUrl && <a className="project-download-link" href={project.downloadUrl} target="_blank" rel="noreferrer"><Play className="play-mark" size={13} fill="currentColor" aria-hidden="true" /> Get Siviq on Google Play <Arrow diagonal /></a>}
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
        <span>Five explorations · products, intelligence, and connected systems</span>
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
        intro="A growing engineering map: tools, system concepts, and interview foundations. Select a tool to explore related project work."
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
      <div className="learning-focus">
        <div className="learning-focus-heading">
          <Eyebrow>How I build</Eyebrow>
          <h3>Strong foundations.<br /><em>Useful AI.</em></h3>
          <p>Engineering skills that make AI assisted work understandable, testable, and ready for real users.</p>
        </div>
        <div className="focus-groups">
          {learningFocus.map((group, i) => <article className="focus-card" key={group.name}>
            <span className="focus-index">0{i + 1}</span><h4>{group.name}</h4>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>)}
        </div>
      </div>
      <div className="learning-profiles">
        <div className="profiles-heading"><div><Eyebrow>Practice & community</Eyebrow><h3>Find me learning <em>in the open.</em></h3></div><p>Practice, coursework, and code in one place.</p></div>
        <div className="profile-card-grid">
          {profile.learningProfiles.map((item) => <a className="learning-profile-card" href={item.url} target="_blank" rel="noreferrer" key={item.name}>
            <span className="platform-icon"><img src={`/icons/brands/${item.icon}.${item.icon === "deeplearning" ? "png" : "svg"}`} alt="" loading="lazy" /></span>
            <span className="platform-copy"><strong>{item.name}</strong><small>{item.detail}</small></span><Arrow diagonal />
          </a>)}
        </div>
        <p className="profile-note">DeepLearning.AI links to its course library; it does not expose a standard public learner profile URL.</p>
      </div>
      <p className="toolkit-note">
        A learning map, not a claim that every tool appears in shipped work. Project pages distinguish live work from architecture concepts.
      </p>
    </section>
  );
}
const labModes = [
  { name: "LLM / RAG", signal: "A grounded answer, with the evidence still attached.", nodes: ["QUESTION", "RETRIEVE", "RERANK", "GENERATE", "VERIFY"] },
  { name: "Edge / IoT", signal: "Sensors keep their memory when the network disappears.", nodes: ["SENSOR", "EDGE BUFFER", "MQTT", "INGEST", "INSIGHT"] },
  { name: "Distributed", signal: "Assume a component will fail. Design the recovery path first.", nodes: ["CLIENT", "GATEWAY", "QUEUE", "WORKER", "STORE"] },
];
function SystemsLab() {
  const [mode, setMode] = useState(0);
  const active = labModes[mode];
  return (
    <section className="systems-lab section-wrap" id="lab">
      <div className="lab-heading"><span className="lab-orbit" aria-hidden="true"><i /><i /><i /></span><div><Eyebrow>Interactive systems desk · 06</Eyebrow><h2>Think in <em>systems.</em></h2><p>Three problems. Three ways to make complexity visible.</p></div></div>
      <div className="lab-tabs" role="group" aria-label="Choose a system diagram">{labModes.map((item, i) => <button key={item.name} aria-pressed={mode === i} onClick={() => setMode(i)}><span>0{i + 1}</span>{item.name}</button>)}</div>
      <div className="lab-display" key={active.name}>
        <div className="lab-pipeline" aria-label={active.nodes.join(" to ")}>
          {active.nodes.map((node, i) => <div className="lab-node" key={node} style={{ "--node-index": i } as React.CSSProperties}><span className="node-signal" /><small>0{i + 1}</small><strong>{node}</strong><i>{i === active.nodes.length - 1 ? "OUTPUT" : "PROCESS"}</i></div>)}
          <div className="lab-signal-line" aria-hidden="true" />
        </div>
        <div className="lab-readout"><span>DESIGN PRINCIPLE / {active.name}</span><h3>{active.signal}</h3><p>Explore the diagram as a systems-thinking exercise. It describes a design direction, not a claim of production deployment.</p><span className="lab-live"><Cpu size={11} strokeWidth={1.6} aria-hidden="true" /> MODEL: CONCEPTUAL · STATUS: EXPLORING</span></div>
      </div>
    </section>
  );
}
function About({ go }: { go: (to: string) => void }) {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="about-art">
        <EngineeringScene />
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
        <p>I’m fascinated by intelligent products: how models retrieve evidence, how distributed systems recover, and how tiny devices make reliable decisions at the edge. I bring curiosity, critical thinking, and a habit of asking what happens when the happy path ends.</p>
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
              <span className="journey-date">Timeline open</span>
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
      <div className="future-path"><span>FUTURE DIRECTION / LEARNING PATH</span><strong>{futureDirection}</strong><p>Long-term curiosity: intelligent devices, robust edge systems, and the software that connects them.</p><i aria-hidden="true">↗</i></div>
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
            Credentials will be added as they’re earned. For now, the focus is on learning in public and building thoughtful systems.
          </p>
        </div>
      </div>
    </section>
  );
}
function ResumeContact() {
  const [copied, setCopied] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Full-Stack Engineer");
  const [selectedSetup, setSelectedSetup] = useState<string>("Remote");
  const [selectedEngagement, setSelectedEngagement] = useState<string>("Full-time");
  const hiringMessage = "Hi Stephen, I’d like to discuss hiring you as a " + selectedRole + ". Work setup: " + selectedSetup + ". Engagement: " + selectedEngagement + ". Company: [company name]. Location: [city / country]. Could we talk?";
  const whatsappLink = "https://wa.me/" + profile.phone.replace(/\D/g, "") + "?text=" + encodeURIComponent(hiringMessage);
  const emailLink = "mailto:" + profile.email + "?subject=" + encodeURIComponent("Hiring inquiry · " + selectedRole) + "&body=" + encodeURIComponent(hiringMessage);
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
      <section id="contact" className="contact-section hire-section section-wrap">
        <div className="hire-topline"><Eyebrow>05 · Hire me / open channel</Eyebrow><span className="hire-live"><Cpu size={12} strokeWidth={1.6} aria-hidden="true" /> OPEN TO OPPORTUNITIES</span></div>
        <div className="hire-hero">
          <div className="hire-heading"><h2>Bring me the<br />interesting <em>problem.</em></h2><p>Remote-first and open to full-time, contract, part-time, freelance, or internship opportunities. Pick a role below and I’ll tailor the introduction for you.</p></div>
          <div className="hire-orbit" aria-hidden="true"><span className="hire-orbit-ring ring-a" /><span className="hire-orbit-ring ring-b" /><span className="hire-orbit-core">SG</span><i className="orbit-dot dot-a" /><i className="orbit-dot dot-b" /><i className="orbit-dot dot-c" /><span className="orbit-caption">GOOD WORK / GOOD PEOPLE</span></div>
        </div>
        <div className="hire-builder">
          <div className="hire-roles">
            <div className="hire-section-heading"><span>01</span><div><h3>What are you hiring for?</h3><p>Select a role to personalize your message.</p></div></div>
            {hiringRoleGroups.map((group) => <div className="hire-role-group" key={group.name}><h4>{group.name}</h4><div className="hire-role-list">{group.roles.map((role) => <button key={role} aria-pressed={selectedRole === role} onClick={() => setSelectedRole(role)}>{role}<span>↗</span></button>)}</div></div>)}
          </div>
          <div className="hire-brief">
            <div className="hire-section-heading"><span>02</span><div><h3>Shape the opportunity</h3><p>Choose what fits your team and project.</p></div></div>
            <fieldset className="hire-choice"><legend>Work setup</legend><div>{workSetups.map((setup) => <button type="button" key={setup} aria-pressed={selectedSetup === setup} onClick={() => setSelectedSetup(setup)}>{setup}</button>)}</div></fieldset>
            <fieldset className="hire-choice"><legend>Engagement</legend><div>{engagementTypes.map((engagement) => <button type="button" key={engagement} aria-pressed={selectedEngagement === engagement} onClick={() => setSelectedEngagement(engagement)}>{engagement}</button>)}</div></fieldset>
            <div className="hire-preview"><span>YOUR INTRO, PREPARED</span><strong>{selectedRole}</strong><p>{selectedSetup} · {selectedEngagement}</p><Cpu className="hire-preview-cpu" size={21} strokeWidth={1.4} aria-hidden="true" /></div>
            <div className="hire-actions">
              <a className="hire-action hire-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer"><img className="whatsapp-logo" src="/icons/brands/whatsapp.svg" alt="" aria-hidden="true" /><span><b>Start on WhatsApp</b><small>Opens a ready-to-send hiring brief</small></span><Arrow diagonal /></a>
              <a className="hire-action" href={emailLink}><Mail size={18} aria-hidden="true" /><span><b>Hire by email</b><small>{profile.email}</small></span><Arrow diagonal /></a>
              <a className="hire-action" href={"tel:" + profile.phone.replace(/\D/g, "")}><Phone size={18} aria-hidden="true" /><span><b>Call me</b><small>{profile.phone}</small></span><Arrow diagonal /></a>
            </div>
            <button className="copy-email" onClick={copy}>{copied ? "Email copied — ready when you are" : "Or copy my email address"}</button>
          </div>
        </div>
        <div className="hire-footerline"><span>SELECT A ROLE · SET THE MODE · LET’S TALK</span><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><BrandGlyph name="GitHub" /> GitHub <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-11.8 7H5v9h2.2zm-.1-3.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6M19 13.5c0-2.5-1.3-3.7-3.1-3.7a2.7 2.7 0 0 0-2.4 1.3V10H11.3v9h2.2v-4.5c0-1.2.2-2.4 1.7-2.4s1.5 1.4 1.5 2.5V19H19z" /></svg> LinkedIn <Arrow diagonal /></a></div></div>
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
        <FieldTicker top />
        <div id="top">
          <Hero />
        </div>
        <div className="signal-strip" aria-label="Engineering focus">
          <span className="signal-label">PRODUCT THINKING</span><i className="signal-trace" aria-hidden="true" />
          <span className="signal-label">SOFTWARE ENGINEERING</span><i className="signal-trace" aria-hidden="true" />
          <span className="signal-label">HUMAN OUTCOMES</span><i className="signal-trace" aria-hidden="true" />
          <span className="signal-label">PRODUCT THINKING</span><i className="signal-trace" aria-hidden="true" />
          <span>SOFTWARE ENGINEERING</span>
        </div>
        <Work go={go} />
        <SystemsLab />
        <Toolkit onSkill={onSkill} />
        <About go={go} />
        <Journey />
        <Credentials />
        <ResumeContact />
        <FieldTicker />
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
  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const text = (
          p.title +
          " " +
          p.summary +
          " " + p.category + " " + p.technologies.join(" ")
        ).toLowerCase();
        const matchText = text.includes(query.toLowerCase());
        const matchCategory =
          filter === "All" ||
          (filter === "Campus" &&
            p.category.toLowerCase().includes("campus")) ||
          (filter === "Education" &&
            p.category.toLowerCase().includes("school")) ||
          (filter === "Business" &&
            p.category.toLowerCase().includes("business")) ||
          (filter === "AI / LLM" && p.category.toLowerCase().includes("ai / llm")) ||
          (filter === "Systems / IoT" && p.category.toLowerCase().includes("systems / iot")) ||
          (!PROJECT_FILTERS.includes(filter) && p.technologies.some((technology) => technology.toLowerCase() === filter.toLowerCase()));
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
          {PROJECT_FILTERS.map((f) => (
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
            {filter !== "All" && !PROJECT_FILTERS.includes(filter)
              ? `No showcased project is tagged with ${filter} yet. Explore the concept studies for proposed system designs.`
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
        Concept imagery is original editorial artwork, not a screenshot of a live product.
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
          {project.number} / {project.concept ? "Concept study" : "Case study"} · {project.category}
        </Eyebrow>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className={project.downloadUrl ? "case-meta case-meta-download" : "case-meta"}>
          <span>
            <small>ROLE</small>
            {project.role}
          </span>
          <span>
            <small>TYPE</small>
            {project.category}
          </span>
          <span>
            <small>{project.concept ? "CONCEPT CODE" : "LIVE PROJECT"}</small>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.concept ? <><BrandGlyph name="GitHub" /> GitHub profile</> : <>Visit project <Arrow diagonal /></>}
            </a>
          </span>
          {project.downloadUrl && <span className="case-store-meta"><small>ANDROID APP</small><a href={project.downloadUrl} target="_blank" rel="noreferrer"><Play className="play-mark" size={13} fill="currentColor" aria-hidden="true" /> Download on Google Play <Arrow diagonal /></a></span>}
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
          <a href="#approach">Approach</a>
          <a href="#decisions">Technical record</a>
          <a href="#reflection">Reflection</a>
        </aside>
        <div className="case-article">
          <section id="problem">
            <Eyebrow>01 / Project scope</Eyebrow>
            <h2>The challenge</h2>
            <p>{project.problem}</p>
          </section>
          <section id="approach">
            <Eyebrow>02 / Contribution</Eyebrow>
            <h2>Approach</h2>
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
                  Stack details aren’t part of this portfolio entry yet.
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
      ".hero-copy, .hero-visual, .section-title, .project-row, .skill-group, .about-art, .about-copy > p, .journey-row, .credentials-section > *, .resume-section > *, .contact-title, .contact-details, .systems-lab, .field-ticker, .work-section, .toolkit-section, .about-section, .journey-section, .credentials-section, .contact-section, .signal-strip",
    );
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    let previousY = window.scrollY;
    let direction: "down" | "up" = "down";
    const updateDirection = () => {
      const nextY = window.scrollY;
      if (nextY !== previousY) direction = nextY > previousY ? "down" : "up";
      previousY = nextY;
      document.documentElement.dataset.scrollDirection = direction;
    };
    window.addEventListener("scroll", updateDirection, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-motion", direction === "down" ? "from-below" : "from-above");
          entry.target.classList.add("is-visible");
        } else {
          entry.target.setAttribute("data-motion", direction === "down" ? "exit-up" : "exit-down");
          entry.target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -10% 0px" });
    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateDirection);
      delete document.documentElement.dataset.scrollDirection;
    };
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
