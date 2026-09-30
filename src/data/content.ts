import { ServiceItem, CaseStudy, EngineeringPillar, TechCategory, IndustryItem, ValueItem, WorkStep } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-apps',
    number: '01',
    title: 'Web Applications',
    shortDesc: 'SaaS platforms, customer portals, internal tools, business applications, dashboards, and digital products.',
    deliverables: ['Custom SaaS platforms', 'High-throughput customer portals', 'Complex operational dashboards', 'Internal workflow tools']
  },
  {
    id: 'mobile-apps',
    number: '02',
    title: 'Mobile Applications',
    shortDesc: 'iOS and Android applications designed around real user workflows.',
    deliverables: ['Native iOS & Android apps', 'Cross-platform React Native & Flutter', 'Offline-first sync architectures', 'Field workforce tools']
  },
  {
    id: 'backend-apis',
    number: '03',
    title: 'Backend & APIs',
    shortDesc: 'Reliable backend systems, APIs, authentication, integrations, data processing, and microservices.',
    deliverables: ['RESTful & GraphQL services', 'Event-driven message queues', 'Zero-trust authentication & RBAC', 'Distributed background workers']
  },
  {
    id: 'ai-genai',
    number: '04',
    title: 'AI & Generative AI',
    shortDesc: 'AI assistants, RAG systems, AI agents, document intelligence, knowledge search, and workflow automation.',
    deliverables: ['Retrieval-Augmented Generation (RAG)', 'Autonomous agent pipelines', 'Document OCR & semantic parsing', 'Deterministic validation guardrails']
  },
  {
    id: 'cloud-devops',
    number: '05',
    title: 'Cloud & DevOps',
    shortDesc: 'AWS, Azure, GCP, infrastructure automation, CI/CD, containers, monitoring, and deployment.',
    deliverables: ['Terraform Infrastructure as Code', 'Kubernetes & container orchestration', 'Automated staging & release pipelines', 'Disaster recovery architectures']
  },
  {
    id: 'data-integrations',
    number: '06',
    title: 'Data & Integrations',
    shortDesc: 'Databases, data pipelines, third-party APIs, synchronization, and business integrations.',
    deliverables: ['ETL & real-time streaming pipelines', 'PostgreSQL & transactional data modeling', 'ERP / CRM bi-directional sync', 'Resilient webhook ingest systems']
  },
  {
    id: 'modernization',
    number: '07',
    title: 'Software Modernization',
    shortDesc: 'Modernize existing applications, architecture, databases, and infrastructure without unnecessary rewrites.',
    deliverables: ['Strangler fig migration paths', 'Database schema decoupling', 'Monolith to modular services', 'Legacy API modernization']
  },
  {
    id: 'consulting',
    number: '08',
    title: 'Technology Consulting',
    shortDesc: 'Architecture, technical discovery, technology strategy, system design, and engineering planning.',
    deliverables: ['Architecture audits & risk reviews', 'Technology vendor evaluations', 'Technical due diligence', 'System design specifications']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'expenso',
    title: 'Expenso',
    subtitle: 'Personal finance, rebuilt around intelligence.',
    clientSector: 'Personal Finance / AI / FinTech',
    aspectRatio: '16/10',
    imageAlt: 'Expenso Personal Finance & Conversational Intelligence Platform',
    summary: 'A cross-platform personal finance platform combining expense tracking, bank statement imports, financial analytics, and conversational AI.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Capacitor', 'Gemini', 'Groq', 'TanStack Query', 'Zustand', 'IndexedDB'],
    year: '2025',
    location: 'Web PWA + Android',
    overview: 'Expenso was built around a simple problem: managing money becomes complicated when expenses come from multiple accounts, currencies, statements, and payment sources. The application brings those workflows together in one place. Users can import bank statements and spreadsheets, organize transactions, review spending patterns, and ask questions about their finances using natural language.',
    problem: 'Personal finance tools typically force users into either rigid manual spreadsheets or opaque cloud services that require direct account credentials. Furthermore, modern AI financial experiments often generate hallucinated sums or inconsistent category aggregations, undermining user trust in their financial record.',
    approach: 'A key engineering decision was to keep financial calculations deterministic rather than allowing the AI model to calculate financial figures itself. The application prepares the actual financial data first, while AI is used to explain that data and provide conversational insights. The platform also supports offline usage, native Android capabilities, biometric authentication, and privacy-focused handling of sensitive financial information.',
    productFeatures: [
      'Bank statement and spreadsheet import',
      'Automated transaction categorization & duplicate transaction detection',
      'Conversational financial analysis with AI-assisted financial insights',
      'Financial charts, analytics, and automated financial reports',
      'Offline-first expense tracking with IndexedDB and Zustand',
      'Web PWA + Android application via Capacitor',
      'Biometric authentication and App PIN security',
      'PII redaction before AI processing & multi-currency support'
    ],
    technologyDetails: [
      'Next.js, React, TypeScript, and Tailwind CSS responsive interface',
      'Deterministic arithmetic engine preventing AI calculation errors',
      'Firebase cloud storage paired with IndexedDB for local offline-first resilience',
      'Gemini and Groq AI integrations with strict pre-inference PII scrubbing',
      'Capacitor integration providing native Android biometric security'
    ],
    outcome: 'Unified multi-account expense tracking into a cohesive, private, and deterministic workflow. Users interact with their financial data through natural language while maintaining absolute certainty in arithmetic calculations.',
    engineeringFocus: 'Keeping financial calculations deterministic while using AI for explanation, analysis, and natural-language interaction.'
  },
  {
    id: 'dronesurvey',
    title: 'DroneSurvey',
    subtitle: 'Browser-based GIS for massive photogrammetry and survey datasets.',
    clientSector: 'GIS / Geospatial / Photogrammetry',
    aspectRatio: '16/10',
    imageAlt: 'DroneSurvey Browser GIS & Large Raster Dataset Viewer',
    summary: 'A browser-based GIS platform for viewing and working with large drone survey datasets without requiring traditional desktop GIS software.',
    technologies: ['React', 'TypeScript', 'Python', 'Flask', 'Rasterio', 'GDAL', 'Leaflet', 'Firebase'],
    year: '2025',
    location: 'Cloud Geospatial Pipeline',
    overview: 'Drone survey datasets can become extremely large. Orthomosaic imagery can reach several gigabytes, while KML and Shapefile datasets may contain thousands of spatial features. DroneSurvey takes a browser-first approach to this problem.',
    problem: 'Traditional desktop GIS software requires heavy local installations, large memory allocations, and specialized workstations to open multi-gigabyte orthomosaics and Shapefiles, creating severe bottlenecks for field teams and external stakeholders.',
    approach: 'Instead of loading entire datasets into the browser, the backend processes and serves only the data required for the current map view. Raster processing and reprojection are handled through a Python-based GIS layer, while the frontend renders spatial data interactively. The platform allows users to work with orthomosaics, DSMs, KML/KMZ files, and Shapefiles directly from a web interface.',
    productFeatures: [
      'Large GeoTIFF / COG raster support and on-demand raster tile generation',
      'KML / KMZ and ESRI Shapefile spatial vector support',
      'Google Drive survey loading and cloud repository integrations',
      'Interactive attribute tables and spatial feature query tools',
      'Canvas-based hardware-accelerated vector rendering',
      'Coordinate and map navigation with multiple reference systems',
      'Large dataset streaming with PWA support and secure cloud tunnelling'
    ],
    technologyDetails: [
      'Python and Flask geospatial backend utilizing Rasterio and GDAL for raster decimation and reprojection',
      'On-demand dynamic tile generation streaming only visible viewport bounding boxes',
      'React and TypeScript frontend coupled with Leaflet and canvas-accelerated rendering',
      'Firebase cloud storage integration with secure tunnelling for private survey repos'
    ],
    outcome: 'Eliminated desktop GIS software barriers, allowing engineers and project managers to interactively inspect multi-gigabyte drone surveys and complex vector datasets smoothly in any modern web browser.',
    engineeringFocus: 'Streaming and processing large geospatial datasets so the browser only receives the data required for the current map view.'
  },
  {
    id: 'tour-diary',
    title: 'Tour Diary',
    subtitle: 'Bilingual travel records and automated government-format reporting.',
    clientSector: 'Government Workflow / Travel Claims / AI Automation',
    aspectRatio: '16/10',
    imageAlt: 'Tour Diary Bilingual Travel Claims & Excel Generation System',
    summary: 'A bilingual travel diary and T.A./D.A. claim platform designed to simplify travel records, allowance calculations, and government-format reporting.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini', 'Capacitor', 'ExcelJS'],
    year: '2025',
    location: 'Web + Android Application',
    overview: 'Tour Diary was built around a practical administrative problem: field officers were spending significant time maintaining travel records and preparing allowance claims manually. The application turns that process into a structured digital workflow.',
    problem: 'Field officers maintained handwritten travel notebooks and had to manually calculate complex daily allowances, travel rates, and multi-leg journeys before transcribing data into rigid, bilingual government Excel templates with strict declaration requirements.',
    approach: 'Travel legs can be recorded throughout the month, calculations are handled by the system, and the final report can be generated in the required format. One of the more interesting parts of the project is the reporting engine. Instead of producing a generic spreadsheet, the application generates structured Excel documents that follow the required format, including bilingual content, declarations, and signature sections. The application also supports Gujarati and English input, including AI-assisted parsing of informal travel information into structured records.',
    productFeatures: [
      'Bilingual Gujarati + English interface and data input',
      'AI-assisted travel-log parsing converting informal notes to structured trips',
      'Multi-leg travel entries with automated T.A./D.A. calculation rules',
      'Pixel-accurate government-format Excel generation with declarations and signatures',
      'Monthly calendar view with gazetted holiday detection',
      'Web + Android cross-platform application powered by Capacitor',
      'Supabase PostgreSQL with Row-Level Security, rate limiting, and Cloudflare Turnstile'
    ],
    technologyDetails: [
      'ExcelJS template generation engine producing exact government-specified claim sheets',
      'Gemini AI model configured for bilingual entity extraction from raw text notes',
      'Supabase PostgreSQL with strict Row-Level Security isolating individual officer records',
      'Capacitor integration enabling native Android deep-linking and offline leg logging'
    ],
    outcome: 'Replaced hours of tedious manual calculations and formatting with a dependable, structured application that generates official, audit-ready government claim spreadsheets in a single click.',
    engineeringFocus: 'Turning a specific administrative workflow into a structured application while generating reports that follow the required government format.'
  },
  {
    id: 'smart-billing',
    title: 'Smart Billing',
    subtitle: 'Cloud invoicing, multi-tier GST, and conversational AI business intelligence.',
    clientSector: 'Billing / Business Software / AI Analytics',
    aspectRatio: '16/9',
    imageAlt: 'Smart Billing Invoicing, Payment Tracking & AI Analytics Dashboard',
    summary: 'A cloud billing platform combining invoicing, payment tracking, customer management, reporting, and AI-assisted business analysis.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Gemini', 'Node.js'],
    year: '2024',
    location: 'Cloud Platform • Multi-Device',
    overview: 'Smart Billing was designed for businesses where billing involves much more than creating invoices. Once a business has hundreds of invoices, customers, products, payments, and different units of measurement, the challenge becomes understanding what is happening across that data.',
    problem: 'Growing commercial businesses struggle to maintain invoice accuracy across diverse packaging units, manage multi-rate GST/CGST/SGST taxes, follow up on outstanding receivables, and spot sales dips or customer churn before it impacts cash flow.',
    approach: 'The application brings those workflows together. Invoices can be created using product and customer information, payments can be tracked across different payment methods, and outstanding balances are calculated automatically. The platform also adds an analytics layer that uses historical business data for sales trends, customer insights, forecasting, and conversational analysis in both English and Gujarati.',
    productFeatures: [
      'Fast invoice creation with product and customer auto-suggestions',
      'Automated GST / CGST / SGST multi-tier tax computation',
      'Multiple units and packaging types with inventory adjustment',
      'Payment and receivables tracking across UPI, cheque, and bank transfers',
      'WhatsApp payment reminders with formatted balance statements',
      'Multiple invoice layouts with thermal printing and PDF export',
      'English + Gujarati conversational AI analysis and sales forecasting',
      'Customer churn indicators, interactive dashboards, and automated cloud backups'
    ],
    technologyDetails: [
      'Deterministic calculation core preparing accounting aggregates before AI query evaluation',
      'Gemini AI contextual intelligence generating bilingual insights from pre-computed metrics',
      'Firebase Firestore transactional data model with responsive client-side caching',
      'Thermal printer hardware communication and high-resolution PDF rendering engines'
    ],
    outcome: 'Accelerated invoice turnaround, reduced receivables turnaround through automated reminders, and gave business owners instant conversational access to their operating trends in their preferred language.',
    engineeringFocus: 'Preparing business metrics from application data first, then using AI to explain trends and generate insights rather than making the AI responsible for financial calculations.'
  },
  {
    id: 'sr-security-services',
    title: 'SR Security Services',
    subtitle: 'High-trust corporate presence for security and facility management.',
    clientSector: 'Corporate Website / Web Development',
    aspectRatio: '16/10',
    imageAlt: 'SR Security Services Corporate Website & Service Presentation',
    summary: 'A corporate website for a Gujarat-based security and facility management company, designed to present its services, industries, credentials, and enquiry channels clearly.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    year: '2024',
    location: 'Gujarat, India',
    overview: 'SR Security Services needed a digital presence that could communicate more than a list of security services. The website was structured to give prospective clients a clear understanding of the company, its services, operating areas, industries served, credentials, and deployment process.',
    problem: 'Commercial clients evaluating security, bouncers, and facility management services require immediate proof of regulatory compliance, operational rigor, and verified service credentials, which generic or outdated websites fail to communicate.',
    approach: 'The experience brings together security services, event management, bouncer services, housekeeping, contract manpower, and detective services while keeping the information easy to navigate. The site also presents certifications, the company\'s work process, gallery, client information, and direct enquiry options so visitors can move naturally from learning about the company to getting in touch.',
    productFeatures: [
      'Corporate website design with deliberate visual hierarchy and institutional trust',
      'Structured presentation of 6 core security and facility management divisions',
      'Industry-specific solutions for industrial complexes, corporate hubs, and events',
      'Certifications and government registration compliance section',
      'Six-step work and deployment process presentation',
      'Gallery and project presentation with client showcases',
      'Direct quote/enquiry workflow with WhatsApp contact integration',
      'Fully responsive, mobile-friendly experience with instant page loads'
    ],
    technologyDetails: [
      'React 19 and Vite build pipeline delivering instant load times and zero render lag',
      'TypeScript typing guaranteeing component and content interface stability',
      'Tailwind CSS design system providing clean typography and responsive layouts',
      'Direct enquiry integration connecting potential corporate clients straight to operations'
    ],
    outcome: 'Created a modern, credible corporate identity that clearly showcases certifications and services, making it effortless for prospective clients to evaluate capabilities and submit direct commercial enquiries.',
    engineeringFocus: 'Turning a broad range of security and facility-management services into a clear, professional website focused on trust, information hierarchy, and easy enquiry.'
  }
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    title: 'Architecture',
    summary: 'Systems designed to evolve.',
    details: 'We design system boundaries around business domain capabilities, avoiding both fragile distributed microservice sprawl and tangled monolithic codebases.',
    metricsOrPractices: ['Domain-Driven Design (DDD)', 'Explicit service contracts', 'Idempotent state machines', 'Decoupled data boundaries']
  },
  {
    title: 'Performance',
    summary: 'Fast, responsive applications.',
    details: 'Performance is engineered into data structures, indexing, and network transfer sizes from day one, not patched on after users complain.',
    metricsOrPractices: ['Zero unnecessary bundle weight', 'Sub-millisecond query indexing', 'Optimistic UI state updates', 'Edge caching & CDN offload']
  },
  {
    title: 'Security',
    summary: 'Authentication, authorization, and secure system design.',
    details: 'Security is treated as an architectural foundation. We enforce least-privilege access, encrypted data states, and automated dependency inspection.',
    metricsOrPractices: ['OAuth2 / OIDC & RBAC enforcement', 'AES-256 encryption at rest and in transit', 'Strict content security policies (CSP)', 'OWASP Top 10 continuous mitigation']
  },
  {
    title: 'Testing',
    summary: 'Automated testing where it provides meaningful value.',
    details: 'We write thorough integration tests and end-to-end user journeys that protect critical business logic, rather than chasing hollow 100% test coverage metrics.',
    metricsOrPractices: ['Automated CI regression suites', 'Realistic mock API sandboxes', 'Property-based business logic tests', 'Deterministic database seed harnesses']
  },
  {
    title: 'Infrastructure',
    summary: 'Reliable cloud and deployment environments.',
    details: 'Every environment is defined in versioned code. Staging mirrors production so there are no surprises on release day.',
    metricsOrPractices: ['Declarative Terraform IaC', 'Immutable container images', 'Blue-green & canary rollouts', 'Automated zero-downtime migrations']
  },
  {
    title: 'Observability',
    summary: 'Systems that are easier to monitor and operate.',
    details: 'Clear structured logging, distributed tracing, and actionable alerting ensure your team understands exactly what the software is doing in production.',
    metricsOrPractices: ['OpenTelemetry structured traces', 'Actionable alert thresholds', 'Real-time error triage pipelines', 'Transparent service health checks']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'SQL', 'Solidity']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Django', 'Flask', 'Spring Boot', '.NET']
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud']
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Firebase', 'Supabase']
  },
  {
    category: 'AI',
    items: ['OpenAI', 'Anthropic', 'AWS Bedrock', 'Hugging Face', 'LangChain', 'LangGraph', 'RAG', 'Vector Databases', 'AI Agents']
  }
];

export const AI_CAPABILITIES = [
  {
    title: 'AI Assistants',
    description: 'Context-aware conversational tools trained on specific organizational documentation and operational workflows.'
  },
  {
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation that grounds answers strictly in your verified private data stores with exact citations.'
  },
  {
    title: 'AI Agents',
    description: 'Multi-step autonomous execution systems that parse instructions, query internal APIs, and complete operational tasks.'
  },
  {
    title: 'Document Intelligence',
    description: 'Automated extraction of structured tables, entities, and compliance clauses from unstructured PDFs and images.'
  },
  {
    title: 'Knowledge Search',
    description: 'Hybrid semantic and lexical search engines that locate relevant organizational information across disconnected silos.'
  },
  {
    title: 'Workflow Automation',
    description: 'Classification, triage, and programmatic routing of high-volume incoming communications and operational tickets.'
  },
  {
    title: 'Natural Language Interfaces',
    description: 'Human-friendly text interfaces that translate natural inquiries directly into database queries and operational commands.'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    name: 'Financial Services',
    description: 'High-precision ledgers, compliance reporting, payment gateway integrations, and multi-currency treasury reconciliation.',
    technicalChallenges: ['Double-entry arithmetic integrity', 'Sub-second audit trails', 'Strict regulatory encryption standards']
  },
  {
    name: 'Healthcare',
    description: 'HIPAA/PIPEDA-compliant patient intake platforms, clinical trial management, diagnostic lab scheduling, and telemetry systems.',
    technicalChallenges: ['PHI isolation & cryptographic access', 'Zero-leakage telemetry', 'HL7 / FHIR data integration']
  },
  {
    name: 'Retail & E-commerce',
    description: 'Headless commerce storefronts, multi-warehouse inventory synchronization, custom checkout funnels, and customer loyalty engines.',
    technicalChallenges: ['Peak flash-sale concurrency', 'Real-time stock reservation locks', 'Omnichannel catalog reconciliation']
  },
  {
    name: 'Logistics',
    description: 'Fleet telematics consoles, route optimization algorithms, freight dispatch tracking, and cold-chain temperature verification.',
    technicalChallenges: ['Loss-tolerant mobile delta sync', 'Spatial vector routing', 'High-frequency IoT message ingest']
  },
  {
    name: 'Professional Services',
    description: 'Client collaboration extranets, resource scheduling, automated timesheet verification, and complex billing engines.',
    technicalChallenges: ['Granular multi-tenant permissions', 'Custom document generation', 'Third-party accounting sync']
  },
  {
    name: 'SaaS & Technology',
    description: 'Core software platforms, multi-tenant architectures, developer APIs, subscription lifecycle billing, and feature-flag frameworks.',
    technicalChallenges: ['Zero-downtime schema evolution', 'API rate-limiting & metering', 'Multi-region disaster failover']
  },
  {
    name: 'Startups',
    description: 'High-velocity MVP architectures built on clean foundations designed to support rapid iteration and venture scale.',
    technicalChallenges: ['Lean modular design', 'Fast deployment cadence', 'Scalable relational data schemas']
  },
  {
    name: 'Manufacturing',
    description: 'Shop-floor monitoring dashboards, industrial IoT telemetry collectors, quality assurance logging, and supplier coordination.',
    technicalChallenges: ['Edge device resilience', 'Legacy PLC connectivity', 'Predictive maintenance alert loops']
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    number: '01',
    title: 'Understand first.',
    description: 'Spend time understanding the problem before deciding what to build. Writing code before clarifying business constraints leads to rework.'
  },
  {
    number: '02',
    title: 'Keep it maintainable.',
    description: 'Software should still make sense long after launch. We prioritize clarity, standardized patterns, and clean boundaries over clever abstractions.'
  },
  {
    number: '03',
    title: 'Be clear about trade-offs.',
    description: 'Every technical decision has consequences — whether speed, cost, flexibility, or complexity. We explain choices transparently so there are no surprises.'
  },
  {
    number: '04',
    title: 'Build with purpose.',
    description: 'Use technology because it solves a problem, not because it is trending. Every library, framework, or model must justify its presence.'
  }
];

export const WORK_STEPS: WorkStep[] = [
  {
    number: '01',
    name: 'Discover',
    description: 'Understand the problem.',
    details: 'We dig into current operational workflows, interview key users, inspect existing codebase health, and identify technical and business bottlenecks.'
  },
  {
    number: '02',
    name: 'Plan',
    description: 'Define architecture and priorities.',
    details: 'We outline concrete system diagrams, database schemas, API contracts, milestone estimates, and the critical delivery path.'
  },
  {
    number: '03',
    name: 'Build',
    description: 'Develop incrementally.',
    details: 'We work in rapid, observable iterations. You review functional software deployed to staging every two weeks, with transparent code reviews.'
  },
  {
    number: '04',
    name: 'Launch',
    description: 'Deploy and monitor.',
    details: 'We execute tested zero-downtime migration plans, verify telemetry, and actively observe application performance under real production traffic.'
  },
  {
    number: '05',
    name: 'Evolve',
    description: 'Continue improving.',
    details: 'We provide structured handoff documentation or ongoing engineering capacity, iterating based on actual user feedback and production analytics.'
  }
];
