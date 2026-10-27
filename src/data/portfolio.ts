export const profile = {
  name: "Stephen Gregory Otieno",
  monogram: "GS.",
  role: "Software engineer & digital product builder",
  location: "Nairobi, Kenya",
  email: "gregorysteve656@gmail.com",
  phone: "+254 719 637 416",
  github: "https://github.com/gregory656",
  linkedin: "https://www.linkedin.com/in/gregory_.steve/",
  availability: "Open to software engineering internships",
  resume: "/documents/stephen-gregory-otieno-cv.pdf",
} as const;

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  problem: string;
  approach: string[];
  decisions: string[];
  lessons: string;
  url: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "siviq",
    number: "01",
    title: "Siviq",
    category: "Campus social platform & marketplace",
    summary:
      "A campus focused product concept bringing student connection and buying and selling into one place.",
    description:
      "A social platform and marketplace concept designed around the everyday needs of a campus community.",
    role: "Product and software development",
    technologies: [],
    problem:
      "The CV frames Siviq as a campus focused social platform and marketplace combining student connection, messaging, and buying and selling. It does not include a separate user research problem statement.",
    approach: [
      "Brought social posts, messaging, real time interactions, and marketplace journeys into one product concept.",
      "Prioritized campus context and clear paths between community activity and listings.",
      "Focused on usability as the product spans multiple kinds of interaction.",
    ],
    decisions: [
      "The supplied CV does not document architecture, implementation trade offs, or the project's technology stack.",
    ],
    lessons:
      "The CV describes the product scope but does not include measured outcomes or implementation details. Add architecture diagrams and screenshots as they become available.",
    url: "https://siviq.top",
    image: "/images/project-siviq.svg",
    imageAlt:
      "Editorial illustration of a campus community and marketplace interface",
  },
  {
    slug: "nexagen",
    number: "02",
    title: "NexaGen",
    category: "School management software",
    summary:
      "A school management solution focused on structured information and digital administrative workflows.",
    description:
      "Software intended to help organize school information and support day to day administrative work.",
    role: "Software development",
    technologies: [],
    problem:
      "The CV describes NexaGen as school management software for organizing school information and supporting administrative workflows. A more specific problem statement was not supplied.",
    approach: [
      "Developed application interfaces for structured information management.",
      "Considered opportunities to reduce repetitive manual steps.",
      "Kept the product focused on practical school workflows.",
    ],
    decisions: [
      "The supplied CV does not specify architecture, implementation trade offs, or the project's technology stack.",
    ],
    lessons:
      "Specific workflows, architecture, and measured outcomes were not supplied in the CV. They can be added when project evidence is ready.",
    url: "https://nexagen.co.ke",
    image: "/images/project-nexagen.svg",
    imageAlt: "Editorial illustration of a school management dashboard",
  },
  {
    slug: "top-heights-electricals",
    number: "03",
    title: "Top Heights Electricals",
    category: "Business website",
    summary:
      "A responsive online presence for electrical, solar, and backup power services.",
    description:
      "A customer facing business website presenting electrical, solar, and backup power solutions.",
    role: "Web development and digital solutions",
    technologies: [],
    problem:
      "The CV describes a business website for electrical, solar, and backup power services. It does not provide a separate user research problem statement.",
    approach: [
      "Improved website presentation, responsiveness, and usability.",
      "Presented service information in a way that supports customer enquiries.",
      "Worked toward aligning the website experience with the business and its customers.",
    ],
    decisions: [
      "The supplied CV does not document architecture, implementation trade offs, or a project specific technology stack.",
    ],
    lessons:
      "The CV confirms the work but does not provide analytics or conversion data. No performance claims are made here.",
    url: "https://topheightselectricals.com",
    image: "/images/project-top-heights.svg",
    imageAlt:
      "Editorial illustration of a solar and electrical services website",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "SQL",
      "Java",
      "C++",
      "C#",
      "C",
      "Dart",
      "Kotlin",
    ],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "Laravel",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    name: "Data & storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "SQL Server",
      "MongoDB",
      "Firebase",
      "Redis",
    ],
  },
  {
    name: "AI & data tools",
    items: [
      "OpenAI API",
      "Gemini",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    name: "Systems & quality",
    items: [
      "Docker",
      "Linux",
      "Git",
      "GitHub Actions",
      "AWS",
      "Azure",
      "Vitest",
      "Pytest",
      "Playwright",
      "Jest",
    ],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Kirinyaga University",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the People · Online",
  },
] as const;

export const experience = [
  {
    role: "Web Development and Digital Solutions",
    organization: "Top Heights Electricals",
    detail:
      "Website development, customer facing service information, responsive presentation, usability, and troubleshooting.",
  },
] as const;
