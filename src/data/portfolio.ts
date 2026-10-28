export const profile = {
  name: "Stephen Gregory Otieno",
  monogram: "SG",
  role: "Software engineer & digital product builder",
  location: "Nairobi, Kenya",
  email: "gregorysteve656@gmail.com",
  phone: "+254 182 292 2287",
  github: "https://github.com/gregory656",
  linkedin: "https://www.linkedin.com/in/gregory_.steve/",
  learningProfiles: [
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/gregory656", detail: "Python & SQL skills tests · coding challenges", icon: "hackerrank" },
    { name: "LeetCode", url: "https://leetcode.com/u/gregory656/", detail: "DSA problems · interview patterns", icon: "leetcode" },
    { name: "freeCodeCamp", url: "https://www.freecodecamp.org/gregory656", detail: "Guided curriculum · certification projects", icon: "freecodecamp" },
    { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/courses/", detail: "AI & machine learning courses", icon: "deeplearning" },
    { name: "Hugging Face", url: "https://huggingface.co/gregory656", detail: "LLM learning · models · datasets · demos", icon: "huggingface" },
    { name: "GitHub", url: "https://github.com/gregory656", detail: "Projects · source code · collaboration", icon: "github" },
    { name: "CodeChef", url: "https://www.codechef.com/users/brill_tale_25", detail: "DSA practice · timed programming contests", icon: "codechef" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io/profile/gregory656", detail: "Real-world UI challenges · portfolio projects", icon: "frontendmentor" },
    { name: "Exercism", url: "https://exercism.org/profiles/gregory656", detail: "Language tracks · practice exercises · mentoring", icon: "exercism" },
    { name: "Codeforces", url: "https://codeforces.com/profile/gregorysteve656", detail: "Competitive programming · DSA contests", icon: "codeforces" },
    { name: "Codewars", url: "https://www.codewars.com/users/gregorysteve65", detail: "Kata · bite-size coding problems", icon: "codewars" },
    { name: "W3Schools", url: "https://www.w3profile.com/gregory656", detail: "Web development tutorials · guided practice", icon: "w3schools" },
  ],
  availability: "Open to software engineering roles",
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
  github: string;
  downloadUrl?: string;
  concept?: boolean;
};

export const projects: Project[] = [
  {
    slug: "siviq",
    number: "01",
    title: "Siviq",
    category: "Campus social platform & marketplace",
    summary:
      "A campus product connecting student communities, messages, and a focused peer marketplace.",
    description:
      "A social platform and marketplace concept designed around the everyday needs of a campus community.",
    role: "Product and software development",
    technologies: [],
    problem:
      "Campus communities need a trusted place where conversation, useful information, and peer-to-peer exchange can coexist.",
    approach: [
      "Brought social posts, messaging, real time interactions, and marketplace journeys into one product concept.",
      "Prioritized campus context and clear paths between community activity and listings.",
      "Focused on usability as the product spans multiple kinds of interaction.",
    ],
    decisions: [
      "The public project materials do not specify the complete implementation stack or measured outcomes.",
    ],
    lessons:
      "A compelling community product depends on trust, clear moderation paths, and a marketplace that never overwhelms the social experience.",
    url: "https://siviq.top",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.siviq.africa",
    image: "/images/project-siviq.svg",
    imageAlt:
      "Editorial illustration of a campus community and marketplace interface",
    github: "https://github.com/gregory656",
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
      "School teams coordinate large amounts of student, staff, and operational information across everyday workflows.",
    approach: [
      "Developed application interfaces for structured information management.",
      "Considered opportunities to reduce repetitive manual steps.",
      "Kept the product focused on practical school workflows.",
    ],
    decisions: [
      "The public project materials do not specify the complete implementation stack or measured outcomes.",
    ],
    lessons:
      "Good school software respects the rhythm of the school day: fast access to the right information, clear permissions, and resilient records.",
    url: "https://nexagen.co.ke",
    image: "/images/project-nexagen.svg",
    imageAlt: "Editorial illustration of a school management dashboard",
    github: "https://github.com/gregory656",
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
      "Customers comparing electrical, solar, and backup power services need clear information and a direct path to an informed enquiry.",
    approach: [
      "Improved website presentation, responsiveness, and usability.",
      "Presented service information in a way that supports customer enquiries.",
      "Worked toward aligning the website experience with the business and its customers.",
    ],
    decisions: [
      "The public project materials do not specify the complete implementation stack or measured outcomes.",
    ],
    lessons:
      "Service pages work best when the next useful action is obvious and content remains easy to scan on a phone.",
    url: "https://topheightselectricals.com",
    image: "/images/project-top-heights.svg",
    imageAlt:
      "Editorial illustration of a solar and electrical services website",
    github: "https://github.com/gregory656",
  },
  {
    slug: "neural-atlas",
    number: "04",
    title: "Neural Atlas",
    category: "AI / LLM systems concept",
    summary: "A speculative research copilot that turns a question into a cited, inspectable map of evidence.",
    description: "An independent system-design concept for grounded research over long, mixed-format document collections.",
    role: "Concept study · AI architecture & product design",
    technologies: ["Python", "FastAPI", "PostgreSQL", "PyTorch"],
    problem: "A fluent answer is not enough when a researcher needs to know what supports it, what conflicts with it, and what the model could not find.",
    approach: ["Parse and version source documents before indexing them.", "Retrieve evidence through a hybrid lexical and semantic search pipeline.", "Return answer claims linked to source passages, with explicit uncertainty and a visible retrieval trail."],
    decisions: ["Separate ingestion, retrieval, reranking, and generation so each stage can be inspected.", "Keep citations attached to evidence objects throughout the pipeline.", "Treat evaluation sets, prompt-injection resistance, and refusal behavior as core product features."],
    lessons: "This is a speculative architecture and product-design exercise, not a deployed service or measured result. The most interesting challenge is making evidence quality visible to the person using the system.",
    url: "https://github.com/gregory656",
    github: "https://github.com/gregory656",
    image: "/images/project-neural-atlas.svg",
    imageAlt: "Abstract editorial illustration of a grounded AI research system",
    concept: true,
  },
  {
    slug: "field-echo",
    number: "05",
    title: "Field Echo",
    category: "Systems / IoT concept",
    summary: "A resilient edge-to-cloud sensing network for environmental signals in low-connectivity locations.",
    description: "A speculative embedded-systems concept exploring how tiny devices can make dependable observations when networks are unreliable.",
    role: "Concept study · embedded systems & distributed design",
    technologies: ["C++", "Python", "Docker", "PostgreSQL"],
    problem: "Remote sensing is only useful when readings stay trustworthy through intermittent power, flaky connectivity, sensor drift, and delayed synchronization.",
    approach: ["Buffer signed, timestamped readings at the edge and synchronize them when a connection returns.", "Track device health and calibration alongside the measurements.", "Design a small observability console that distinguishes missing data from a healthy zero reading."],
    decisions: ["Use an idempotent ingestion path to make repeated delivery safe.", "Keep device identity and key rotation in the design from the start.", "Plan for offline-first operation, explicit retention, and low-power sampling modes."],
    lessons: "This is a proposed system design, not a deployed sensor network. It reflects a future learning direction in embedded systems and IoT, where hardware constraints meet distributed-software fundamentals.",
    url: "https://github.com/gregory656",
    github: "https://github.com/gregory656",
    image: "/images/project-field-echo.svg",
    imageAlt: "Abstract editorial illustration of connected environmental sensors",
    concept: true,
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
    name: "AI, ML & LLM engineering",
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
      "LLM evaluation",
      "Prompt engineering",
      "Embeddings",
      "Vector search",
      "Fine-tuning",
      "Model serving",
      "Guardrails",
      "Computer vision",
    ],
  },
  {
    name: "Systems design & cloud",
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
      "System design",
      "Distributed systems",
      "Microservices",
      "Event-driven architecture",
      "Caching",
      "Message queues",
      "Observability",
      "Scalability",
      "Threat modeling",
    ],
  },
  {
    name: "Embedded systems & IoT · learning path",
    items: ["Embedded C", "ESP32", "Arduino", "MQTT", "IoT security", "Edge computing", "Sensor networks", "RTOS", "PCB fundamentals", "Device telemetry"],
  },
  {
    name: "Engineering craft & interview fundamentals",
    items: ["Data structures", "Algorithms", "Complexity analysis", "Object-oriented design", "Concurrency", "Networking", "Operating systems", "Database design", "Critical thinking", "Technical communication"],
  },
] as const;

export const learningFocus = [
  { name: "Engineering fundamentals", items: ["Data structures & algorithms", "OOP & functional basics", "HTTP, REST & authentication", "Git & team workflows"] },
  { name: "Reliable applications", items: ["Unit, integration & end-to-end testing", "Debugging & code review", "Database design & indexing", "Docker, CI/CD & application security"] },
  { name: "LLM applications", items: ["LLM APIs & structured outputs", "Prompt and context design", "Tool calling & AI agents", "RAG, embeddings & vector search", "Evaluation, guardrails, privacy & cost"] },
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

export const futureDirection = "MSc in Embedded Systems & IoT";

export const hiringRoleGroups = [
  { name: "Product engineering", roles: ["Software Engineer", "Full-Stack Engineer", "Frontend Engineer", "Backend Engineer", "Web Application Developer", "API & Integration Engineer"] },
  { name: "AI & intelligent applications", roles: ["AI Application Engineer", "LLM Application Engineer", "RAG / Knowledge Systems Engineer", "Generative AI Developer", "Python Developer", "TypeScript Developer"] },
  { name: "Systems & quality", roles: ["Cloud / Platform Engineer", "DevOps & CI/CD Engineer", "QA Automation Engineer", "Systems Integration Engineer", "IoT / Edge Software Engineer"] },
] as const;

export const workSetups = ["Remote", "Hybrid", "On-site · Nairobi"] as const;
export const engagementTypes = ["Full-time", "Contract", "Part-time", "Freelance", "Internship"] as const;

export const experience = [
  {
    role: "Web Development and Digital Solutions",
    organization: "Top Heights Electricals",
    detail:
      "Website development, customer facing service information, responsive presentation, usability, and troubleshooting.",
  },
] as const;
