export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'PM' | 'QA' | 'HYBRID' | 'DEV';
  timeline: string;
  badge: string;
  impactMetrics: { label: string; value: string }[];
  overview: string;
  pmSpec?: {
    summary: string;
    highlights: string[];
    deliverables: { name: string; url?: string; type: 'drive' | 'notion' | 'link' }[];
  };
  qaSpec?: {
    summary: string;
    highlights: string[];
    deliverables: { name: string; url?: string; type: 'github' | 'drive' | 'link' }[];
    testStats?: { label: string; count: string }[];
  };
  devSpec?: {
    techStack: string[];
    highlights: string[];
    deliverables: { name: string; url?: string; type: 'github' | 'link' }[];
  };
}

export const PERSONAL_INFO = {
  name: "Gurveender Jeet Kaur",
  headline: "Software Engineering @ Universitas Gadjah Mada (UGM)",
  gpa: "3.81 / 4.00",
  location: "Yogyakarta, Indonesia",
  email: "gurveenderjeetkaur@gmail.com",
  phone: "+62 812 6948 4827",
  github: "https://github.com/kaurgurveend",
  linkedin: "https://linkedin.com/in/gurveenderjeetkaur",
  vercel: "https://gurveen-portofolio.vercel.app",
  tagline: "The Quality-Obsessed Product Builder",
  bio: "Software Engineering undergraduate at UGM with proven experience leading software delivery from requirements gathering, BRD/SRS documentation, to rigorous QA testing. Bridging business vision with technical architecture and zero-defect execution."
};

export const QUICK_METRICS = [
  { value: "3.81", label: "UGM GPA", sublabel: "Software Eng. Tech" },
  { value: "101+", label: "Test Cases Crafted", sublabel: "Manual & API (SIMATKUL)" },
  { value: "92/100", label: "Project Monitoring Score", sublabel: "Mahreen Indonesia Intern" },
  { value: "5+", label: "E2E Projects Shipped", sublabel: "PM, QA & Full-Stack" }
];

export const PROJECTS: Project[] = [
  {
    id: "tentang-dental",
    title: "Tentang Dental",
    subtitle: "Dental Clinic Mobile Application",
    category: "HYBRID",
    timeline: "Feb 2026 – Jun 2026",
    badge: "PM & QA Automation Collaboration",
    overview: "Mobile application dedicated to streamlining dental clinic operations and patient records, specifically for securely uploading and inspecting dental X-ray diagnostics.",
    impactMetrics: [
      { label: "Core Feature", value: "X-Ray Upload & Viewer" },
      { label: "Collaboration", value: "Team of UI, FE, BE, QA" },
      { label: "Testing Scope", value: "E2E & UI Automation" }
    ],
    pmSpec: {
      summary: "Led product definition and stakeholder alignment directly with dental clinic management to map clinical workflows into a compliant mobile experience.",
      highlights: [
        "Led requirements gathering & scope definition with clinic stakeholders to address diagnostic workflow delays.",
        "Authored comprehensive SRS, user manuals, UAT test plans, and agile sprint timelines.",
        "Coordinated weekly deliverables across UI/UX, frontend (mobile), backend, and QA team members."
      ],
      deliverables: [
        { name: "SRS & Requirements Doc", type: "drive", url: "https://drive.google.com" },
        { name: "UAT Plan & Test Scenarios", type: "drive", url: "https://drive.google.com" }
      ]
    },
    qaSpec: {
      summary: "Collaborated on mobile test design and automated regression suites to validate edge cases during high-resolution dental X-ray uploads.",
      highlights: [
        "Designed edge case matrix: large DICOM/image payload handling, network timeout retries, and session expiration on image submission.",
        "Collaborated with group members to implement test automation scripts and validation checks.",
        "Facilitated UAT sign-off with clinic operators before stage deployment."
      ],
      deliverables: [
        { name: "Mobile Test Scenarios & Automation", type: "github", url: "https://github.com/kaurgurveend" },
        { name: "UAT Evidence & Findings Log", type: "drive", url: "https://drive.google.com" }
      ],
      testStats: [
        { label: "Critical Upload Flows Tested", count: "100%" },
        { label: "Automated Regression Suites", count: "Active" }
      ]
    }
  },
  {
    id: "simatkul",
    title: "SIMATKUL",
    subtitle: "Course Scheduling & Conflict Prevention System (UGM Capstone)",
    category: "QA",
    timeline: "Jun 2026 – Dec 2026",
    badge: "Quality Assurance Specialist",
    overview: "Departmental web-based course scheduling system engineered with algorithmic conflict detection to eliminate overlapping lecture hours, room collisions, and lecturer double-booking.",
    impactMetrics: [
      { label: "Manual Test Cases", value: "43 Cases" },
      { label: "API Test Cases", value: "58 Cases" },
      { label: "Framework", value: "Playwright (POM)" }
    ],
    qaSpec: {
      summary: "Engineered a robust multi-tier testing strategy covering API endpoints from Swagger specifications, manual SIT, and UI automation using Playwright Page Object Model.",
      highlights: [
        "Designed 43 manual test cases & 58 API test cases from Swagger documentation covering authentication, master data, and role-based permissions.",
        "Conducted end-to-end API testing via Postman in tandem with backend and frontend teammates during weekly sprints.",
        "Defined a 5-phase test strategy and adopted Playwright with Page Object Model (POM) architecture for scalable UI automation.",
        "Engineered an automated QA dashboard in Google Sheets powered by Google Apps Script to provide real-time sprint burn-down reports directly to the PM."
      ],
      deliverables: [
        { name: "Playwright POM Automation Repo", type: "github", url: "https://github.com/kaurgurveend" },
        { name: "Postman Collection & Environment", type: "github", url: "https://github.com/kaurgurveend" },
        { name: "Google Sheets QA Live Dashboard", type: "drive", url: "https://drive.google.com" }
      ],
      testStats: [
        { label: "Swagger API Coverage", count: "58 Endpoints" },
        { label: "Manual Test Suites", count: "43 Scenarios" },
        { label: "Schedule Overlap Bugs Caught", count: "0 in Prod" }
      ]
    },
    pmSpec: {
      summary: "Maintained direct communication with PM and engineering leads to turn complex academic conflict logic into actionable acceptance criteria.",
      highlights: [
        "Bridged edge-case findings from testing directly into the product backlog with precise reproducibility steps.",
        "Automated sprint QA velocity reporting to ensure timely sprint sign-offs."
      ],
      deliverables: [
        { name: "QA Sprint Sign-Off Reports", type: "drive", url: "https://drive.google.com" }
      ]
    }
  },
  {
    id: "panenin-ugm",
    title: "Panenin UGM",
    subtitle: "Agritech Marketplace & Direct Supply-Chain Platform",
    category: "PM",
    timeline: "Aug 2025 – Dec 2025",
    badge: "Project Manager",
    overview: "A digital agricultural platform built to connect local farmers directly with consumers and B2B buyers, eliminating predatory middlemen and streamlining produce delivery.",
    impactMetrics: [
      { label: "Target Market", value: "Agri-SMEs & Farmers" },
      { label: "Scope", value: "Marketplace & Inventory" },
      { label: "Deliverables", value: "PRD & Backlog" }
    ],
    pmSpec: {
      summary: "Orchestrated end-to-end product discovery, stakeholder interviews, and backlog management in Notion to build a functional agricultural commerce MVP.",
      highlights: [
        "Conducted field interviews and empathy mapping to identify harvest scheduling and price transparency pain points.",
        "Authored the Product Requirements Document (PRD), feature prioritization matrix (MoSCoW), and user stories.",
        "Facilitated bi-weekly sprint planning, backlog grooming, and UI/UX design handoffs in Figma."
      ],
      deliverables: [
        { name: "PRD & Product Vision Doc", type: "drive", url: "https://drive.google.com" },
        { name: "Notion Sprint Board & Backlog", type: "notion", url: "https://notion.so" }
      ]
    }
  },
  {
    id: "ais-ugm",
    title: "Academic Information System (AIS)",
    subtitle: "University Academic Information & Portal",
    category: "PM",
    timeline: "Aug 2025 – Nov 2025",
    badge: "Project Manager",
    overview: "Comprehensive academic management portal designed for course enrollment, grade processing, and institutional resource planning for university faculties.",
    impactMetrics: [
      { label: "Team Size", value: "3 Engineers (UI, FE, BE)" },
      { label: "Architecture", value: "C4 Model & UML" },
      { label: "Deliverable", value: "BRD & SRS" }
    ],
    pmSpec: {
      summary: "Led a cross-functional squad of 3 members through the full software definition cycle, establishing clear system boundaries through C4 architecture and UML modeling.",
      highlights: [
        "Authored the Business Requirements Document (BRD), MVP definition, and Software Requirements Specification (SRS).",
        "Modeled system architecture using C4 diagrams (Context, Container, Component) and comprehensive UML diagrams.",
        "Tracked milestones and sprint team progress through structured weekly executive progress reports."
      ],
      deliverables: [
        { name: "BRD & Scope Definition", type: "drive", url: "https://drive.google.com" },
        { name: "C4 Architecture & UML Blueprints", type: "drive", url: "https://drive.google.com" },
        { name: "Weekly Sprint Status Reports", type: "drive", url: "https://drive.google.com" }
      ]
    }
  },
  {
    id: "fullstack-engineering",
    title: "Full-Stack & Teaching Practicum",
    subtitle: "Developer & Academic Teaching Assistant",
    category: "DEV",
    timeline: "Feb 2026 – Dec 2026",
    badge: "Full-Stack Dev & Teaching Assistant",
    overview: "Hands-on engineering projects and academic mentorship guiding university students in modern programming languages (Kotlin, Python, JavaScript, Laravel).",
    impactMetrics: [
      { label: "Mentored", value: "100+ UGM Students" },
      { label: "Core Stacks", value: "Kotlin, Python, Laravel" },
      { label: "Subjects", value: "Mobile, Geo & Data Structures" }
    ],
    devSpec: {
      techStack: ["Kotlin", "Python", "JavaScript", "PHP", "Laravel", "React Native", "PostgreSQL"],
      highlights: [
        "Teaching Assistant for Mobile & Geospatial Programming Practicum (Kotlin) - running sessions, quizzes, and code reviews.",
        "Teaching Assistant for Data Structures Practicum (Python) - assisting in algorithmic complexity analysis and problem-solving.",
        "Built responsive web applications and backend APIs using modern frameworks (Laravel, React, RESTful architectures)."
      ],
      deliverables: [
        { name: "GitHub Personal Code Repositories", type: "github", url: "https://github.com/kaurgurveend" },
        { name: "Practicum Modules & Exercises", type: "github", url: "https://github.com/kaurgurveend" }
      ]
    }
  }
];

export const WORKFLOW_LAYERS = [
  {
    step: "01",
    phase: "Discovery & PRD Formulation",
    role: "Product Management",
    accent: "pm",
    headline: "Translating User Friction into Bulletproof Specs",
    description: "Deep stakeholder discovery, writing clear Business Requirements Documents (BRD), defining MVP bounds, and structuring Acceptance Criteria in Gherkin format (Given-When-Then).",
    tools: ["Notion", "Figma", "Jira", "Google Workspace", "C4 Modeling"]
  },
  {
    step: "02",
    phase: "Edge-Case & Architecture Review",
    role: "QA × PM Intersection",
    accent: "hybrid",
    headline: "Stress-Testing Concepts Before Code is Written",
    description: "Evaluating Figma flows for failure scenarios, analyzing Swagger API schemas, mapping database relationship constraints, and preventing scope creep before development begins.",
    tools: ["Swagger", "UML Diagrams", "Database Schema Review", "Boundary Analysis"]
  },
  {
    step: "03",
    phase: "Deep Validation & Test Engineering",
    role: "Quality Assurance",
    accent: "qa",
    headline: "Zero-Assumption Verification Across Layers",
    description: "Executing 50+ Postman API collections, validating authentication & permission tokens, implementing Playwright Page Object Model (POM) test automation, and verifying data integrity.",
    tools: ["Postman", "Playwright", "DBeaver", "SQL", "Page Object Model"]
  },
  {
    step: "04",
    phase: "UAT Sign-off & Release Observability",
    role: "PM Delivery & Quality Confidence",
    accent: "dev",
    headline: "Ensuring What Was Designed is What Reached Users",
    description: "Leading User Acceptance Testing (UAT) with real stakeholders, tracking defect resolution via automated dashboards, and safeguarding a confident zero-regression deployment.",
    tools: ["Google Apps Script Dashboard", "UAT Reports", "Defect Triage SLA"]
  }
];

export const EXPERIENCES = [
  {
    role: "Quality Assurance Intern",
    company: "PT Kreasi Bali Sasmita Nusantara",
    period: "Sep 2026 – Dec 2026",
    type: "Internship",
    location: "Remote / Bali",
    highlights: [
      "Performed comprehensive manual testing across web applications to ensure functional integrity and UI compliance.",
      "Identified and reported software defects with precise replication steps, maintaining evidence in UAT logs.",
      "Collaborated closely with developers and product managers to accelerate defect resolution cycles."
    ],
    skills: ["Manual Testing", "UAT Documentation", "Defect Tracking", "Bug Reporting"]
  },
  {
    role: "Project Management Intern",
    company: "PT Mahreen Indonesia Group",
    period: "Jun 2026 – Aug 2026",
    type: "Internship",
    location: "Yogyakarta",
    highlights: [
      "Coordinated cross-functional activities across technical and non-technical divisions, supporting task allocation.",
      "Monitored progress and deliverables using Excel dashboards, delivering periodic status reports to management.",
      "Awarded an overall performance evaluation score of 88/100 (Excellent), with 92/100 in Project Monitoring and 90/100 in Team Coordination & Delegation."
    ],
    skills: ["Project Monitoring (92/100)", "Agile Coordination", "Cross-Team Delegation", "Progress Reporting"]
  },
  {
    role: "Teaching Assistant — Mobile & Geospatial Programming",
    company: "Universitas Gadjah Mada",
    period: "Aug 2026 – Dec 2026",
    type: "Academic",
    location: "UGM, Yogyakarta",
    highlights: [
      "Guided undergraduate students in building Android mobile and geospatial applications in Kotlin.",
      "Conducted weekly hands-on laboratory sessions, graded code submissions, and prepared technical quiz modules."
    ],
    skills: ["Kotlin", "Android Development", "Geospatial APIs", "Code Review"]
  },
  {
    role: "Teaching Assistant — Data Structures Practicum",
    company: "Universitas Gadjah Mada",
    period: "Feb 2026 – Jun 2026",
    type: "Academic",
    location: "UGM, Yogyakarta",
    highlights: [
      "Mentored students through algorithmic complexity, tree traversals, graphs, and memory management in Python.",
      "Supervised lab sessions and evaluated algorithmic correctness in weekly programming assignments."
    ],
    skills: ["Python", "Data Structures", "Algorithms", "Mentorship"]
  }
];

export const LEADERSHIP = [
  {
    role: "Hustler / Product Lead",
    organization: "Google Developer Groups on Campus (GDGoC) UGM",
    period: "Dec 2025 – Jun 2026",
    summary: "Worked in a 3-member team to construct a functioning prototype for the 'Tech for Social Impact' hackathon, spearheading rapid user validation and problem scoping under strict deadlines."
  },
  {
    role: "Secretary",
    organization: "KOMATIK UGM (Komunitas Mahasiswa TIK)",
    period: "Jan 2025 – Dec 2026",
    summary: "Managed official legal documentation, event permits, and funding proposals for university tech competitions and community workshops."
  },
  {
    role: "Secretary",
    organization: "ASSETS UGM",
    period: "Mar 2025 – Feb 2026",
    summary: "Oversaw executive board schedules, drafted board meeting minutes, and maintained the organization's central institutional archive."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Project Management Job Simulation",
    issuer: "Siemens Mobility (Forage)",
    date: "Mar 2026",
    credentialId: "Verified Simulation"
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "Mar 2026",
    credentialId: "IBM Professional"
  },
  {
    title: "Mahreen Indonesia Internship Batch 1",
    issuer: "PT Mahreen Indonesia Group",
    date: "Aug 2026",
    credentialId: "Cert. No. 315/MII-B1/VIII/2026"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Product Management & Discovery",
    accent: "indigo",
    skills: [
      "PRD & BRD Formulation",
      "Software Requirements Spec (SRS)",
      "Agile & Scrum Sprints",
      "C4 Architecture Modeling",
      "UML Use-Case & Sequence",
      "Jira & Backlog Management",
      "Notion Workspaces",
      "Stakeholder Interviewing",
      "UAT Planning & Execution"
    ]
  },
  {
    category: "Testing & Quality Assurance",
    accent: "emerald",
    skills: [
      "Playwright (Page Object Model)",
      "API Testing (Postman & Swagger)",
      "Manual Functional & Regression",
      "Boundary Value Analysis",
      "Bug Triage & Defect Logs",
      "Google Apps Script QA Dashboard",
      "Selenium & Appium (Hands-on)",
      "Cucumber (BDD Syntax)",
      "System Integration Testing (SIT)"
    ]
  },
  {
    category: "Technical Stack & Tools",
    accent: "cyan",
    skills: [
      "Python",
      "Kotlin",
      "JavaScript / TypeScript",
      "PHP & Laravel",
      "React Native",
      "PostgreSQL & MySQL",
      "Git & GitHub",
      "Google Workspace & Excel"
    ]
  }
];
