export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "it-consulting",
    number: "01",
    title: "IT Services & Consulting",
    tagline: "Strategic guidance for informed technology decisions",
    description:
      "Technology consulting and strategic guidance to help businesses make informed technology decisions. We evaluate technical bottlenecks, align software roadmaps with executive objectives, and establish sustainable digital foundations.",
    deliverables: [
      "Technology Architecture Review & Roadmapping",
      "Digital Maturity & Readiness Assessment",
      "Legacy Modernization Strategy",
      "Engineering Process & Agile Optimization",
    ],
    techStack: ["Enterprise Architecture", "System Design", "Audit & Optimization", "Strategy"],
  },
  {
    id: "software-development",
    number: "02",
    title: "Software Development",
    tagline: "Tailored software built for scale, performance, and resilience",
    description:
      "Custom software solutions designed around business requirements, scalability, and performance. We build tailored platforms that handle mission-critical workflows with zero-downtime reliability.",
    deliverables: [
      "Bespoke Enterprise Software Systems",
      "Microservices & Event-Driven Architecture",
      "Secure REST & GraphQL APIs",
      "Data Pipeline & Processing Engines",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL"],
  },
  {
    id: "web-mobile-apps",
    number: "03",
    title: "Web & Mobile Application Development",
    tagline: "Intuitive, high-performance digital experiences across platforms",
    description:
      "Modern, responsive, and intuitive digital experiences across web and mobile platforms. Crafted with editorial attention to detail, tactile micro-interactions, and instant responsiveness on any screen size.",
    deliverables: [
      "Progressive Web Applications (PWA)",
      "Cross-Platform Native Mobile Apps (iOS & Android)",
      "Interactive Client Portals & Dashboards",
      "Fluid Animation & Micro-interaction Systems",
    ],
    techStack: ["React", "React Native", "Tailwind CSS", "iOS", "Android", "WebAssembly"],
  },
  {
    id: "cloud-transformation",
    number: "04",
    title: "Cloud & Digital Transformation",
    tagline: "Modernize infrastructure and unlock cloud-powered innovation",
    description:
      "Modernize infrastructure, improve operational efficiency, and embrace cloud-powered innovation. We guide organizations away from rigid on-prem constraints to flexible, highly automated multi-cloud architectures.",
    deliverables: [
      "Cloud Migration & Architecture Modernization",
      "Kubernetes & Container Orchestration",
      "DevSecOps & Automated CI/CD Pipelines",
      "Cost Optimization & Reliability Engineering",
    ],
    techStack: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "ai-solutions",
    number: "05",
    title: "AI & Technology Solutions",
    tagline: "Intelligent automation and next-generation cognitive systems",
    description:
      "Explore intelligent automation, AI-powered solutions, and emerging technologies. We integrate predictive intelligence, generative AI models, and automated reasoning into enterprise workflows to deliver measurable competitive advantages.",
    deliverables: [
      "Custom AI Model Integration & Fine-Tuning",
      "Intelligent Workflow & Document Automation",
      "Natural Language & Cognitive Search Systems",
      "Predictive Analytics & Real-Time Decisioning",
    ],
    techStack: ["PyTorch", "TensorFlow", "OpenAI / Claude API", "LangChain", "Vector DBs"],
  },
];

