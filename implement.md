read implement.md and implement it do not install all dependcies at once do one by one
i uploaded the cv at assets stephen_Gregory...cv
my profile pic is steve.jpg
github gregory656
be madly creative and buidl the very complex porftolios somoes has ever seen in his life
# The blueprint: a portfolio that makes people stop scrolling.

Gregory, I'd build this as a premium software engineer's digital headquarters, not another developer portfolio with a dark hero, floating gradient blobs, and 40 rounded cards. 😂

Your portfolio should communicate three things within seconds:

1. You build real software, not just pretty interfaces.
2. You understand engineering beyond the frontend, including databases, performance, reliability, deployment, and complete systems.
3. You can prove it. Real projects, working demos, source code, certificates, education, technical decisions, and measurable results.

From our previous conversations, your strongest engineering angles include real-time applications, offline caching, media pipelines, PostgreSQL/PostGIS, C++,Python.Type/Javascript, testing and reliability, and Docker/VPS deployment. Those give you a much stronger story than a portfolio consisting only of skill badges.

The visual direction: pure white, editorial typography, precise spacing, restrained black typography, thin borders, real photographs, authentic technology logos, and unusually good motion design.

Think an architecture studio's precision combined with an engineer's technical depth.

## 1. The design system

```

VISUAL IDENTITY
├── Background:       #FFFFFF
├── Primary text:     #111111
├── Secondary text:   #686868
├── Borders:          #E8E8E8
├── Subtle surfaces:  #F8F8F8
├── Accent:           Black only
├── Typography:       Geist / Inter / system sans
├── Layout:           Editorial, asymmetric, generous whitespace
├── Cards:            Minimal; prefer open layouts and dividers
├── Icons:            Lucide + authentic technology logos
├── Motion:           Framer Motion
└── Responsive:       Mobile-first, fully accessible

```

The rule: every element must earn its place. White space is a design feature, not empty space waiting for another card.

Use Tailwind CSS for layout, typography, responsive behavior, and interaction states. Use Lucide for interface icons, but use official brand assets or a recognized technology-icon library for programming languages and frameworks. A JavaScript icon should actually look like JavaScript, not a generic code symbol.

### The typography hierarchy

- Hero headline: large, bold, editorial, and broken across intentional lines.
- Section headings: strong but restrained.
- Body copy: readable, concise, and technically specific.
- Metadata: small uppercase labels or subtle secondary text.
- Code and technical details: monospace typography used sparingly.

Avoid excessive pill badges, oversized rounded containers, fake terminal windows, rainbow colors, and decorative elements that have no purpose.

## 2. The full portfolio experience

Build the site as one cohesive experience with dedicated project detail pages. The homepage should be the highlight reel, while deeper pages prove your technical ability.

### 01. A hero that feels like a personal brand

The first screen should introduce you, show your actual portrait, and give visitors a clear next action.

```

┌─────────────────────────────────────────────────────────────┐
│  GS.       WORK    ABOUT    STACK    RESUME      LET'S TALK │
│                                                             │
│  SOFTWARE ENGINEER                       [YOUR REAL PHOTO]  │
│  BASED IN KENYA                                            │
│                                                             │
│  I build software that                                    │
│  solves real problems.                                     │
│                                                             │
│  From thoughtful interfaces to reliable systems,           │
│  I turn complex problems into useful products.             │
│                                                             │
│  [ Explore my work ↗ ]  [ Download résumé ↓ ]              │
│                                                             │
│  Software Engineering · Open to opportunities              │
│                                                             │
│  SCROLL TO EXPLORE                               01 / 06    │
└─────────────────────────────────────────────────────────────┘

```

Signature interaction: your portrait subtly responds to pointer movement. The headline reveals in staggered lines, and a thin vertical scroll indicator grows as visitors move down the page.

Keep the photo real. No AI-generated replacement for your face, no unnecessary background removal, and no decorative blobs floating around your head.

The hero copy above is a starting point. Personalize it with your strongest shipped projects and the kind of engineering work you want to be hired for.

### 02. Selected work: the main attraction

Don't show 20 projects as identical cards. Show three to six of your strongest projects as a large, editorial project list.

```

SELECTED WORK                                        2024—2026

01  PROJECT NAME                         [ REAL PROJECT IMAGE ]
    What it does. Who it helps.
    React · TypeScript · PostgreSQL
    View case study ↗

─────────────────────────────────────────────────────────────

02  PROJECT NAME                         [ REAL PROJECT IMAGE ]
    The problem, your solution, the outcome.
    Flutter · APIs · Offline caching
    View case study ↗

─────────────────────────────────────────────────────────────

03  PROJECT NAME                         [ REAL PROJECT IMAGE ]
    A technical challenge you solved.
    C++ · Data structures · Performance
    View case study ↗

                           Explore all projects ↗

```

Use actual screenshots of your applications, product interfaces, dashboards, mobile screens, architecture diagrams, and real deployment environments where appropriate.

Every project should answer five questions:

- What problem did you solve?
- What did you personally build?
- Which technologies did you use, and why?
- What was technically difficult?
- What can a visitor inspect, run, or verify?

Each project should open a dedicated case study, not a generic modal containing three sentences.

A case study can include:

- A large project cover image.
- Problem and solution.
- Your responsibilities.
- Architecture and key engineering decisions.
- Selected screenshots or a short demonstration.
- Challenges, trade-offs, and lessons learned.
- GitHub repository and live demo links, where available.

Never invent performance metrics, users, customers, or production results. If you have no measurements, explain the technical achievement honestly.

### 03. Skills: categorized, visual, and credible

This section should feel like an engineer's technical inventory, not a cloud of 70 badges.

Use recognizable technology logos alongside names, arranged into compact groups. On desktop, use a clean multi-column layout; on mobile, stack the groups.

```

TECHNICAL TOOLKIT

LANGUAGES
[JS] JavaScript    [TS] TypeScript    [C++] C++
[PY] Python        [SQL] SQL

FRONTEND
[React] React      [Tailwind] Tailwind CSS
[HTML5] HTML5      [CSS3] CSS3

BACKEND & APIs
Node.js · REST APIs · Authentication
Real-time communication · API integration

DATABASES & DATA
PostgreSQL · PostGIS · Spatial indexing
Database design · Row-level security

SYSTEMS & INFRASTRUCTURE
Docker · Linux · VPS deployment
Caching · Media pipelines · Offline support

ENGINEERING PRACTICES
Data structures & algorithms
Automated testing · Reliability
Performance profiling · Debugging
Version control · Technical documentation

```

Treat this as a suggested structure, not a claim that every technology is a current strength. Only publish the tools you can discuss confidently in an interview.

For the logos, use a maintained icon library such as `@icons-pack/react-simple-icons` for supported technology brands, with Lucide for navigation, arrows, external links, and other interface elements. Verify brand availability before relying on a particular icon export.

Interaction idea: hovering over a technology reveals a one-line description and links to projects where you used it. Selecting a technology filters the project list to matching work.

This connects your skills to evidence, which is much more convincing than assigning yourself arbitrary proficiency percentages.

### 04. About me: the engineer behind the code

Avoid the generic paragraph about being passionate about innovation.

Use an asymmetric editorial layout: your photo or a real work-in-progress image on one side, and a short story on the other.

Include:

- Your engineering philosophy.
- What kinds of problems interest you.
- How you approach reliability, performance, and maintainability.
- Your educational journey.
- What opportunities you're pursuing.

Add a compact timeline of your real milestones, such as starting software engineering, building significant projects, completing certifications, and gaining practical experience.

Keep it factual and personal. A strong story is more valuable than a wall of corporate buzzwords.

### 05. Education and certificates

Give education its own section rather than hiding it in the footer.

For education, include the institution, program, dates, relevant details, and a genuine school photograph if you have one. A real campus photo can be a wide editorial image rather than another card.

For certificates, use a clean list with:

- Certificate title.
- Issuing organization.
- Completion date.
- Credential verification link.
- A preview of the actual certificate when useful.

Clicking a certificate can open an accessible lightbox with the full document, its issuer, and a verification link. On mobile, the image should fit the screen and remain readable.

Don't publish private student information or expose verification codes beyond what the credential provider makes public.

### 06. Résumé and career availability

Your CV should be easy to find from the navigation and the hero.

Include a proper PDF download, an optional HTML résumé page, and a clear email contact action.

Because you've mentioned that an internship is required by your school, the availability section can communicate that accurately:

- Open to software engineering internships.
- Available to start immediately for remote opportunities.
- Available for full-time, on-site opportunities from February 2027.

Keep these details editable in one configuration file so you can update your availability without hunting through components.

### 07. Contact and social profiles

The contact section should be simple and confident.

- Email: `mailto:` link to your actual public contact address.
- GitHub: your real profile.
- LinkedIn: your real profile.
- Other professional profiles, if relevant.
- CV download.
- Optional copy-email button with a small success message.

No backend is necessary. Use ordinary links, native browser behavior, and clipboard access where supported.

If you want a contact form without a backend, provide a button that opens a prefilled email draft. Clearly explain that it uses the visitor's email application rather than pretending that a message was submitted to a server.

Finish with a minimal footer containing your name, current year, social links, and a back-to-top action.

## 3. The animation system: spectacular, but disciplined

This is where your portfolio can become memorable without looking like a template generated by an AI.

Use motion as part of the interface's storytelling, not as confetti.

| Effect                       | Implementation                   | Where it belongs             |
| ---------------------------- | -------------------------------- | ---------------------------- |
| Staggered text reveal        | Framer Motion                    | Hero headline                |
| Portrait parallax            | Pointer-based transform          | Hero portrait                |
| Project image reveal         | Clip-path animation              | Work section                 |
| Animated section transitions | Viewport-triggered motion        | Major sections               |
| Cursor-following detail      | Pointer events and transforms    | Optional desktop enhancement |
| Technology logo motion       | Small hover transforms           | Skills                       |
| Scroll progress              | Scroll position tracking         | Navigation                   |
| Magnetic buttons             | Pointer tracking                 | Primary calls to action      |
| Certificate lightbox         | Accessible dialog + transitions  | Credentials                  |
| Floating decorative elements | Small SVG shapes, used sparingly | Hero or section transitions  |

### The signature effect: a botanical engineering motif

You mentioned flying and flowery animations. I'd give the portfolio a distinctive visual signature: minimal black line-art flowers or branching geometric forms that slowly unfurl as sections enter the viewport.

Imagine a fine-line SVG drawing that grows along a curved path beside a section title. A few petals rotate into position, then settle. On the next section, the same visual language becomes a branching network that evokes software architecture.

Keep these elements monochrome, small, and sparse. They should feel art-directed, not like a screensaver.

You can create these with SVG paths, CSS transforms, and Framer Motion. They remain crisp at any resolution and don't require a backend.

Other animation rules:

- Use spring physics for small interactions, not every element.
- Keep most transitions around 200–600 ms; reserve longer motion for intentional reveals.
- Animate opacity and transforms where possible.
- Never block scrolling while an animation plays.
- Respect `prefers-reduced-motion`.
- Disable pointer-dependent effects on touch devices.
- Avoid permanent floating, bouncing, spinning, or typing animations.

The aim is a site that feels alive when explored and calm when read.

## 4. Recommended frontend stack

Keep the stack lean. You want a portfolio that is technically impressive and maintainable, not a dependency museum.

| Technology                     | Purpose                                              |
| ------------------------------ | ---------------------------------------------------- |
| React                          | Component-based UI                                   |
| TypeScript                     | Type safety and maintainability                      |
| Vite                           | Fast development and production builds               |
| Tailwind CSS                   | Layout, typography, responsive styling               |
| Framer Motion (`motion`)       | Entrance animations, transitions, interactive motion |
| Lucide React                   | Interface icons                                      |
| Simple Icons                   | Recognizable technology brand logos                  |
| React Router                   | Navigation between project case studies              |
| React Helmet Async             | Page titles and metadata                             |
| Zod                            | Validate project and content data                    |
| Vitest + React Testing Library | Component and interaction tests                      |
| Playwright                     | End-to-end browser tests                             |

Use your existing React template if it already has a working setup. Don't rebuild the project from scratch just to match this list.

Install the core dependencies with:

```

npm install lucide-react motion react-router-dom react-helmet-async zod
npm install @icons-pack/react-simple-icons
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

```

If you have no backend, you don't need an API server, database, authentication provider, or server-side contact form. Your portfolio can run entirely as a static frontend.

For a small portfolio, avoid adding libraries merely because they sound impressive. Each dependency should solve a real problem.

## 5. The architecture: organized like a real product

Don't put your entire portfolio into `App.tsx`. Separate content, components, pages, animations, and assets.

```

src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PageShell.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TechIcon.tsx
│   │   ├── MagneticLink.tsx
│   │   └── CertificateDialog.tsx
│   │
│   ├── motion/
│   │   ├── Reveal.tsx
│   │   ├── TextReveal.tsx
│   │   ├── BotanicalDrawing.tsx
│   │   └── ProjectImageReveal.tsx
│   │
│   └── projects/
│       ├── ProjectList.tsx
│       ├── ProjectRow.tsx
│       ├── ProjectFilters.tsx
│       └── CaseStudyLayout.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── SelectedWork.tsx
│   ├── Skills.tsx
│   ├── About.tsx
│   ├── ExperienceTimeline.tsx
│   ├── Education.tsx
│   ├── Certificates.tsx
│   ├── Resume.tsx
│   └── Contact.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   └── NotFoundPage.tsx
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── education.ts
│   ├── certificates.ts
│   └── experience.ts
│
├── hooks/
│   ├── useReducedMotion.ts
│   └── useCopyToClipboard.ts
│
├── lib/
│   ├── animations.ts
│   ├── icons.ts
│   └── utils.ts
│
├── styles/
│   └── globals.css
│
└── main.tsx

public/
├── images/
│   ├── profile/
│   ├── projects/
│   ├── education/
│   └── certificates/
├── icons/
├── documents/
│   └── resume.pdf
└── favicon.svg

```

This structure gives you reusable components, individual project pages, and centralized content. You can update your details without rewriting the design.

### Make the content data-driven

For example, a project record should contain its title, description, technologies, cover image, screenshots, links, and case-study content. The project list and detail pages should both read from that same source.

That means adding a new project becomes a content task, not a component rewrite.

Keep your personal details in `profile.ts`, your technical skills in `skills.ts`, and your certificates in `certificates.ts`.

Important: don't make project pages depend on external APIs. Store the content locally and bundle or host the images with your static site.

## 6. Advanced features that give the portfolio an edge

These are the features I'd prioritize, in order of impact.

### Tier 1: Ship these first

Project case studies with technical depth. This is your strongest feature. Each project explains engineering decisions, trade-offs, implementation, and evidence.

Live project filtering. Filter projects by frontend, backend, databases, systems, or other technologies. Filters should work instantly without reloading the page.

Real technology logo wall. Recognizable, correctly labeled icons grouped by skill category, with links to relevant projects.

Résumé download. A visible, tested PDF download that works on desktop and mobile.

Responsive navigation. A clean desktop header and accessible mobile menu.

Accessible motion. Animation controls that respect the visitor's motion preferences.

### Tier 2: The memorable details

Interactive project explorer. Selecting a technology highlights projects that use it and displays your role in those projects.

Technical architecture illustrations. Create lightweight SVG diagrams for selected projects. Show components, data flow, caching, storage, or deployment, but only where relevant.

Command palette. Let visitors press `Ctrl+K` or `Cmd+K` to jump to projects, skills, résumé, and contact. Add keyboard navigation and an accessible dialog.

Custom pointer interactions. Buttons respond subtly to pointer movement, while project images reveal details on hover. Disable the effects on touch devices.

Certificate gallery. Browse real credentials and inspect a full-size preview without leaving the page.

A real project index. Give recruiters a dedicated page to browse all projects, search titles and descriptions, and filter by technology.

### Tier 3: The engineering flex

Performance dashboard for development. Track bundle size, image sizes, accessibility issues, and Lighthouse scores during development. Publish only measured, reproducible results.

Keyboard-first navigation. Make the site usable without a mouse, including the command palette, dialogs, menus, and project filters.

SEO and social previews. Add meaningful titles, descriptions, canonical URLs, Open Graph metadata, and a custom social sharing image.

Offline-friendly behavior. Cache appropriate static assets through a service worker if offline access is useful. This is optional and should not complicate ordinary browsing.

A small hidden interaction. For example, a keyboard shortcut reveals a compact list of favorite engineering tools. Make it discoverable and accessible rather than turning the entire portfolio into a game.

I would not add a fake visitor counter, fake GitHub contribution statistics, a pretend terminal, or a contact form that silently fails. Those features create the wrong kind of attention.

## 7. Performance, accessibility, and production quality

A visually ambitious portfolio still needs to behave like production software.

- Images: use optimized WebP or AVIF images, responsive sizing, explicit dimensions, and lazy loading below the fold.
- Fonts: self-host a small number of font files where practical and avoid unnecessary font weights.
- Animation: use transforms and opacity where possible; avoid continuous layout recalculation.
- Accessibility: semantic HTML, keyboard navigation, visible focus states, descriptive image alt text, and appropriate contrast.
- Motion preferences: provide a reduced-motion experience that preserves all content and functionality.
- Routing: ensure direct navigation and refreshes work on project detail URLs with your chosen hosting provider.
- Testing: test the mobile menu, project filters, CV download, certificate dialog, contact links, and all project URLs.
- Security: use safe external-link attributes, avoid injecting raw HTML, and keep private credentials out of the frontend.
- SEO: give every project page a descriptive title and summary. Use a sitemap and robots configuration appropriate to the deployment.
- Deployment: build the static site and verify the production version, not just the Vite development server.

Aim for strong Core Web Vitals and accessibility, then report the actual results you measure. Don't promise a perfect Lighthouse score before testing.

## 8. The master implementation prompt

Use this in your coding agent with your existing React repository open. The instruction is to build the actual portfolio, not merely generate a mockup or another planning document.

# Build a Premium, Production-Quality Software Engineer Portfolio

## Role

Act as a senior frontend engineer, product designer, motion designer, and accessibility specialist. Transform my existing React template into a distinctive, production-quality personal portfolio for a software engineer.

Work directly with the existing codebase. Inspect the current project structure, package.json, installed dependencies, routing, and styles before making changes. Preserve useful existing work and use the existing build system unless there is a compelling technical reason to change it.

## Design direction

Create a premium editorial portfolio with a strictly white visual identity.

- Background: #FFFFFF.
- Primary text: #111111.
- Secondary text: #686868.
- Borders: #E8E8E8.
- Subtle surfaces: #F8F8F8.
- No gradients, colorful backgrounds, excessive cards, glassmorphism, or generic AI-generated design patterns.
- Use generous whitespace, precise alignment, refined typography, thin dividers, asymmetric editorial layouts, and high-quality real photography.
- Use Tailwind CSS for styling, Lucide React for interface icons, and authentic technology brand icons for programming languages and frameworks.
- Use Framer Motion, through the motion package, for purposeful animations.
- Use React and TypeScript where supported by the existing project.

The result should feel custom-designed, technically sophisticated, understated, and enterprise-ready.

## Personal content

Build the content architecture to support:

1. My real portrait and professional introduction.
2. Selected software projects and detailed case studies.
3. Programming languages and categorized technical skills.
4. Education, schools, and genuine campus photographs.
5. Real certificates with credential verification links.
6. Work experience and an honest career timeline.
7. Downloadable PDF résumé.
8. Email contact and professional social profiles.
9. Live project demonstrations and source repositories where available.
10. Current career availability.

Keep personal details and portfolio content in centralized, typed data files. Do not fabricate names, projects, credentials, photographs, metrics, employers, URLs, or achievements. Use clearly labeled placeholders wherever information is missing.

## Homepage

Implement these sections in order:

1. Minimal sticky navigation with GS. monogram, section links, résumé action, and mobile menu.
2. Full-screen or near-full-screen editorial hero with my actual portrait, a distinctive headline, concise introduction, project CTA, résumé download, and career availability.
3. Selected work featuring three to six prominent projects in a large editorial list with real screenshots.
4. Interactive, categorized technical skills with authentic language and framework logos.
5. About section with personal engineering philosophy and concise biography.
6. Education and career timeline.
7. Certificate gallery with accessible full-size previews.
8. Résumé and career availability.
9. Contact section with email, GitHub, LinkedIn, and other configured profiles.
10. Minimal footer with current year and back-to-top control.

## Project experience

Create a dedicated project index with live search and technology filters.

Create individual project case-study pages that support:

- Project title, summary, cover image, and role.
- Problem, solution, and target users.
- Technologies and architectural decisions.
- Important implementation details.
- Challenges, trade-offs, and lessons learned.
- Real screenshots, diagrams, and optional video demonstrations.
- GitHub and live demo links.
- Related projects and navigation back to the project index.

Use the same data source for project listings and project details. All filters and search must work without a backend.

## Technical skills

Organize skills into categories such as:

- Programming languages.
- Frontend development.
- Backend and APIs.
- Databases and data engineering.
- Systems and infrastructure.
- Testing and reliability.
- Developer tools.

Use real, recognizable technology logos, accurate labels, and accessible descriptions. Selecting a technology should filter relevant projects. Do not use arbitrary proficiency percentages or claim expertise that is not configured in the content.

## Signature motion design

Create an original, restrained animation system:

- Staggered headline reveals.
- Smooth section entrance transitions.
- Carefully controlled portrait parallax.
- Project images revealed through animated clipping masks.
- Subtle magnetic buttons on desktop.
- Scroll progress indicator.
- Animated SVG botanical line art that unfurls alongside selected sections.
- Fine-line branching illustrations inspired by software architecture.
- Small, intentional logo interactions.
- Accessible certificate dialog transitions.
- Optional keyboard-accessible command palette triggered by Ctrl+K or Cmd+K.

The botanical visual motif should be monochrome, elegant, and sparse. Use SVG paths, CSS transforms, and motion primitives rather than decorative animations everywhere.

Respect prefers-reduced-motion. Avoid continuous animation that distracts from reading. Disable pointer-dependent interactions on touch devices. Keep animations smooth, interruptible, and non-blocking.

## Engineering architecture

Separate the application into reusable layout components, UI primitives, animation components, content sections, project pages, typed data modules, hooks, utilities, and global styles.

Create centralized modules for profile, projects, skills, education, certificates, and experience.

Use React Router if appropriate for the existing application. Ensure direct navigation and page refreshes work on nested project routes.

Validate content structures with TypeScript and, where useful, Zod.

Avoid monolithic components, duplicated content, unnecessary dependencies, excessive abstraction, and placeholder interactions that do nothing.

## Frontend-only constraints

This is a static frontend with no backend integration.

- Do not create an API server or database.
- Do not add authentication or backend-dependent features.
- Store public portfolio content locally.
- Use local assets or explicitly configured public asset URLs.
- Implement contact through mailto links or a prefilled email draft.
- Ensure résumé downloads work.
- Do not expose private credentials or secrets in frontend code.
- Make unavailable external links configurable rather than inventing destinations.

## Quality requirements

- Fully responsive across mobile, tablet, and desktop.
- Accessible semantic HTML and keyboard navigation.
- Visible focus states and appropriate color contrast.
- Optimized real images with responsive sizing and lazy loading where appropriate.
- Search-engine-friendly titles, descriptions, and social sharing metadata.
- No horizontal overflow, broken image paths, dead links, or console errors.
- Correct loading, empty, error, and interaction states where relevant.
- Unit tests for important interactive components.
- Browser-level testing for critical user journeys.
- Respect reduced-motion preferences and maintain a usable experience when animations are disabled.

## Implementation process

Phase 1: Inspect the repository and report the existing framework, dependencies, entry points, and constraints.

Phase 2: Establish the design tokens, typography, responsive layout, navigation, and reusable UI primitives.

Phase 3: Implement the homepage and all major sections with polished responsive styling.

Phase 4: Implement the project index, search, technology filters, and detailed project case studies.

Phase 5: Add skills, certificates, education, résumé, social profiles, and contact interactions.

Phase 6: Implement and refine the signature motion system, botanical SVG artwork, and keyboard-accessible interactions.

Phase 7: Optimize performance, accessibility, responsive behavior, SEO, and production configuration.

Phase 8: Run the available tests and production build. Fix actual errors, broken routes, missing assets, and unfinished interactions.

Do not stop after creating the hero section or a visual mockup. Continue until the complete portfolio is implemented.

At completion, provide a concise summary of the features implemented, files created or changed, commands to run the application, required personal assets and information still missing, tests executed, and production build results.

Prioritize real implementation quality over decorative complexity. Every interaction must work, every design decision must have a purpose, and the final result must look intentionally art-directed rather than generated from a generic template.

## 9. Build it in the right order

Don't attempt every animation and advanced feature on day one. Here's the implementation roadmap I'd follow.

```

PHASE 1  FOUNDATION
         Design tokens, fonts, global layout, navigation
                    ↓
PHASE 2  PERSONAL BRAND
         Hero, portrait, about, responsive structure
                    ↓
PHASE 3  PROJECT PROOF
         Selected work, case studies, screenshots, filters
                    ↓
PHASE 4  CREDENTIALS
         Skills, education, certificates, résumé
                    ↓
PHASE 5  SIGNATURE MOTION
         SVG botanicals, reveals, parallax, micro-interactions
                    ↓
PHASE 6  ADVANCED INTERACTIONS
         Command palette, keyboard navigation, project explorer
                    ↓
PHASE 7  QUALITY
         Accessibility, tests, performance, SEO, mobile polish
                    ↓
PHASE 8  DEPLOY
         Production build, live verification, final content audit

```

My strongest recommendation: get the content and project case studies right before adding elaborate animation. A recruiter should be impressed even with motion disabled. Then the animation becomes the memorable finishing touch rather than a distraction from missing substance.

## 10. What I need from you to make this genuinely yours

The implementation prompt gives you the full direction. The next step is replacing placeholders with your actual identity, assets, and project evidence.

If you upload your current React template as a ZIP, I can help turn this blueprint into a concrete implementation that fits your existing codebase rather than guessing how your project is structured.

Would you like me to help you build this step by step, with a clear implementation checklist you can work through and test as you go?