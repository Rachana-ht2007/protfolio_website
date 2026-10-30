import { Project, Milestone, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Rachana H T',
  role: 'Full-Stack Developer & AI Specialist',
  degree: 'B.Tech AI & Data Science Student',
  institution: 'REVA University',
  location: 'Bangalore, India',
  email: 'ugcet2502137@reva.edu.in',
  github: 'https://github.com/Rachana-ht2007',
  linkedin: 'https://www.linkedin.com/in/rachana-h-t-b84721384',
  heroSubtitle:
    'B.Tech AI & Data Science Student at REVA University building intelligent web applications, full-stack workflows, and AI systems.',
  portraitImage: '/src/assets/images/rachana_portrait_1793342095434.jpg',
  statusBadge: 'Available for Tech Opportunities & Collaborations',
};

export const TECH_TICKER = [
  'React',
  'Vite',
  'Python',
  'Tailwind CSS',
  'Supabase',
  'C / Low-Level',
  'FastAPI',
  'PostgreSQL',
  'Computer Vision',
  'TypeScript',
];

export const STATS = [
  {
    id: 'hackathons',
    value: 2,
    suffix: 'x',
    label: 'Hackathon Wins',
    context: 'Smart India Hackathon Internal Winner & Web Hackathon Finalist',
  },
  {
    id: 'projects',
    value: 5,
    suffix: '+',
    label: 'Full-Stack Apps',
    context: 'Deployed production-grade systems across AI, web, and cloud',
  },
  {
    id: 'leetcode',
    value: 100,
    suffix: '+',
    label: 'LeetCode Solved',
    context: 'Strong foundational DSA in Python & C algorithmic optimization',
  },
  {
    id: 'batch',
    value: 1,
    suffix: 'st',
    label: 'Tier Placement Batch',
    context: 'Ranked in REVA University top-tier corporate placement cohort',
  },
];

export const ABOUT_TABS = {
  background: {
    title: 'Background',
    lead: 'Transitioning from life sciences to artificial intelligence revealed a natural bridge between biological complexity and neural architectures.',
    paragraphs: [
      'My initial academic foundation in biology gave me a deep appreciation for complex systems, feedback loops, and organic data patterns. When I pivoted to Computer Science with a specialization in Artificial Intelligence and Data Science at REVA University, I found that the mathematical models governing neural networks mirrored natural emergent behaviors.',
      'Over the past three years, I have turned that curiosity into rigorous engineering: building end-to-end full-stack web applications, processing multi-spectral geospatial satellite imagery, and mastering low-level computational algorithms in C and Python.',
    ],
  },
  highlights: {
    title: 'Highlights',
    lead: 'Recognized for execution speed, team leadership, and algorithmic problem-solving.',
    paragraphs: [
      'Led Team OrbitX to win the internal campus round of the prestigious Smart India Hackathon (SIH) with SatQuery AI, an automated satellite intelligence pipeline analyzing coastal dynamics and vessel trajectories.',
      'Selected for the premier REVA University Top-Tier Placement Batch, an intensive elite technical program reserved for the top percentile of students demonstrated through competitive coding and systems design assessments.',
      'Active contributor to the Google Developer Student Clubs (GDSC) AI/ML division, conducting peer sessions on neural network foundations, full-stack Vite/React workflows, and API architectures.',
    ],
  },
  focus: {
    title: 'Current Focus',
    lead: 'Architecting scalable cloud-native web portals, agentic AI pipelines, and resilient distributed databases.',
    paragraphs: [
      'Currently deepening my expertise in modern cloud data architectures using PostgreSQL, Supabase Row-Level Security, and asynchronous Python backends for real-time inference.',
      'Actively exploring how small language models and multi-modal computer vision models can be packaged into lightweight, accessible client interfaces without heavy operational overhead.',
      'Preparing for technical engineering roles and collaborative research projects where rigorous code quality, spatial design elegance, and high-impact machine learning intersect.',
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'satquery-ai',
    title: 'SatQuery AI',
    tagline: 'Multi-Spectral Satellite Imagery Intelligence Platform',
    category: 'aiml',
    categoryLabel: 'AI & ML',
    recognition: 'Smart India Hackathon Internal Winner (Team OrbitX)',
    summary:
      'AI-powered satellite image analysis platform built to process multispectral Earth observation data, detecting coastal shifts, maritime vessel locations, and environmental heatmaps.',
    fullDescription:
      'SatQuery AI was designed during the Smart India Hackathon to overcome manual satellite imagery inspection bottlenecks. The application ingests high-resolution satellite tiles, runs computer vision segmentation pipelines to outline coastlines and maritime transport coordinates, and visualizes multi-spectral thermal heatmaps over an interactive React GIS interface.',
    technologies: ['Python', 'React', 'FastAPI', 'Node.js', 'Computer Vision', 'Tailwind CSS'],
    image: '/src/assets/images/satquery_ai_mockup_1793342092058.jpg',
    githubUrl: 'https://github.com/Rachana-ht2007/satquery-ai',
    liveUrl: '#',
    demoType: 'satquery',
    architecture: {
      client: 'React 19 SPA with Tailwind CSS, SVG GIS coordinate mapping, and telemetry overlays.',
      server: 'FastAPI Python asynchronous inference microservice with Node.js orchestration.',
      database: 'GeoJSON spatial indexing with cached tile buffers for near real-time rendering.',
      dataFlow: [
        'Satellite imagery ingested as high-resolution raster tiles',
        'FastAPI microservice executes spectral index extraction (NDVI/thermal)',
        'Computer vision contours detect coastal lines and vessel coordinates',
        'React client overlays interactive bounding boxes, heatmaps, and telemetry data',
      ],
      keyChallenges:
        'Managing heavy GeoTIFF multi-spectral image sizes on client viewports while maintaining 60fps panning and smooth bounding-box re-renders.',
    },
    metrics: [
      { label: 'Detection Speed', value: '0.4s / tile' },
      { label: 'Accuracy', value: '94.2% IoU' },
      { label: 'SIH Result', value: 'Internal 1st' },
    ],
  },
  {
    id: 'smart-assignment',
    title: 'Smart Assignment Submission System',
    tagline: 'Automated Academic Code Evaluation & Grading Portal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Web',
    recognition: 'Web Hackathon Finalist',
    summary:
      'Full-stack automated evaluation portal featuring role-based workflows, instantaneous syntax/test execution grading, and live submission monitoring.',
    fullDescription:
      'Developed to streamline university coursework assessment. Instructors define rubric constraints and automated test suites; students submit their source code and receive instantaneous feedback with granular scoring across functionality, code quality, and documentation.',
    technologies: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Row Level Security'],
    image: '/src/assets/images/assignment_system_mockup_1793342093357.jpg',
    githubUrl: 'https://github.com/Rachana-ht2007/smart-assignment-portal',
    liveUrl: '#',
    demoType: 'assignment',
    architecture: {
      client: 'Vite + React single-page app with role-based routing (Student & Faculty views).',
      server: 'Supabase Edge Functions with sandboxed code execution evaluation.',
      database: 'PostgreSQL with Row Level Security (RLS) enforcing strict classroom partitions.',
      dataFlow: [
        'Student submits code via web editor with live client-side validation',
        'Supabase Edge Function executes code against predefined assertion test matrices',
        'Real-time Postgres changes push immediate evaluation scores back to student UI',
        'Faculty analytics dashboard aggregates grade distributions and rubric insights',
      ],
      keyChallenges:
        'Enforcing rigid database isolation between student submissions and building deterministic evaluation sandboxes resistant to infinite loops.',
    },
    metrics: [
      { label: 'Eval Latency', value: '0.5s avg' },
      { label: 'Test Coverage', value: '100% automated' },
      { label: 'RLS Security', value: 'Strict RBAC' },
    ],
  },
  {
    id: 'bmw-aesthetic',
    title: 'BMW Aesthetic Showcase',
    tagline: 'Interactive Luxury Automotive Visual Configurator',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Web',
    summary:
      'High-performance automotive web showcase featuring interactive vehicle configuration, 360-degree aerodynamic inspection, and fluid micro-interactions.',
    fullDescription:
      'An architectural web application celebrating precision German automotive engineering. Features dynamic finish customization (Alpine White, Carbon Black, Isle of Man Green, Individual Dravit Grey), interactive aerodynamic specs, powertrain telemetry, and seamless layout transitions.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'State Machines'],
    image: '/src/assets/images/bmw_showcase_mockup_1793342093743.jpg',
    githubUrl: 'https://github.com/Rachana-ht2007/bmw-aesthetic-showcase',
    liveUrl: '#',
    demoType: 'bmw',
    architecture: {
      client: 'Vite React application utilizing hardware-accelerated CSS transforms and spring physics.',
      server: 'Static edge-delivered architecture optimized for sub-second First Contentful Paint.',
      database: 'In-memory configuration state machine with deterministic spec serialization.',
      dataFlow: [
        'User interacts with vehicle finishes, wheels, and interior packages',
        'State machine validates package compatibility and updates vehicle specs in real time',
        'Framer Motion orchestrates cinematic camera angle transitions and lighting reflections',
        'Instant configuration manifest generated for quotation or export',
      ],
      keyChallenges:
        'Maintaining 60 FPS transitions during continuous color shifts and viewport resize operations across mobile and high-DPI desktop displays.',
    },
    metrics: [
      { label: 'FPS Target', value: '60 FPS stable' },
      { label: 'Lighthouse Score', value: '99 Performance' },
      { label: 'Interactions', value: '12+ Config States' },
    ],
  },
  {
    id: 'ticket-booking',
    title: 'IPL & Cinema Ticket Reservation Platform',
    tagline: 'High-Concurrency Stadium & Theater Seat Booking Engine',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Web',
    summary:
      'Dual-vertical reservation system supporting dynamic stadium seating tier maps for IPL matches and interactive theater screen booking with live seat reservation locking.',
    fullDescription:
      'Built to simulate high-demand booking surges for Indian Premier League cricket matches and premier cinema screenings. Provides an intuitive visual seat matrix with distinct tier price calculations, countdown seat holds, and instant digital pass generation with QR code markers.',
    technologies: ['React', 'Supabase', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    image: '/src/assets/images/booking_platform_mockup_1793342093743.jpg',
    githubUrl: 'https://github.com/Rachana-ht2007/ticket-booking-platform',
    liveUrl: '#',
    demoType: 'booking',
    architecture: {
      client: 'React responsive vector seat map with multi-tier selection and cart timers.',
      server: 'Supabase Realtime channels with optimistic concurrency lock handlers.',
      database: 'PostgreSQL transactional seat state table with TTL-based lock expirations.',
      dataFlow: [
        'User selects cricket stadium stand or cinema theater row',
        'Click locks seat with an optimistic temporary hold (10-minute TTL)',
        'Realtime broadcast prevents collision across concurrent browser sessions',
        'Checkout completes transaction and generates cryptographically signed ticket pass',
      ],
      keyChallenges:
        'Eliminating race conditions when two users click the exact same seat within milliseconds of each other using Postgres row locking.',
    },
    metrics: [
      { label: 'Seat Rendering', value: '< 16ms SVG map' },
      { label: 'Concurrency', value: 'Zero race conflicts' },
      { label: 'Pass Generation', value: 'Instant QR' },
    ],
  },
  {
    id: 'graphics-editor-c',
    title: 'Menu-Driven 2D Graphics Editor',
    tagline: 'Low-Level Rasterization Engine & Algorithmic Drafting Suite in C',
    category: 'lowlevel',
    categoryLabel: 'C & Low-Level',
    summary:
      'Terminal and raster-driven 2D computer graphics suite in C implementing classical rendering algorithms, polygon clipping, and 2D matrix transformations.',
    fullDescription:
      'An exploration of fundamental computer graphics algorithms implemented from first principles in ANSI C. Contains custom implementations of Bresenham line generation, midpoint circle rasterization, Sutherland-Hodgman polygon clipping, boundary-fill algorithms, and 2D affine transformation matrices.',
    technologies: ['C Programming', 'Rasterization Math', 'Bresenham Algorithm', 'Sutherland-Hodgman', 'Data Structures'],
    image: '/src/assets/images/graphics_editor_mockup_1793342096031.jpg',
    githubUrl: 'https://github.com/Rachana-ht2007/2d-graphics-editor-c',
    liveUrl: '#',
    demoType: 'graphics',
    architecture: {
      client: 'Interactive WebAssembly / Canvas algorithm simulator mirroring C engine behavior.',
      server: 'Modular ANSI C codebase with separate compilation units for geometry, clipping, and raster.',
      database: 'Compact memory buffer representing virtual frame buffer coordinates.',
      dataFlow: [
        'User supplies coordinate vertices via menu input or coordinate parameters',
        'Bresenham integer arithmetic calculates exact pixel raster points without floating-point lag',
        'Clipping pipeline evaluates Sutherland-Hodgman vertex intersections against viewport bounds',
        'Raster state renders wireframes with zero external graphical dependencies',
      ],
      keyChallenges:
        'Implementing clean integer-only Bresenham arithmetic avoiding floating point rounding errors across all line slope octants.',
    },
    metrics: [
      { label: 'Math Engine', value: 'Pure Integer Math' },
      { label: 'Dependencies', value: 'Zero External' },
      { label: 'Algorithms', value: '5 Core Graphics' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & Modern Web',
    iconName: 'Layout',
    skills: [
      {
        name: 'React 19 & Vite',
        proficiency: 92,
        experience: '2+ years',
        description: 'Component architecture, custom hooks, state machines, and performant SPA builds.',
      },
      {
        name: 'Tailwind CSS',
        proficiency: 95,
        experience: '2+ years',
        description: 'Utility-first styling, design system tokens, responsive grids, and micro-interactions.',
      },
      {
        name: 'TypeScript',
        proficiency: 88,
        experience: '2 years',
        description: 'Rigorous type safety, generic interfaces, and strict component contracts.',
      },
      {
        name: 'Framer Motion',
        proficiency: 85,
        experience: '1+ year',
        description: 'Spring physics, layout animations, gesture controls, and smooth reveal states.',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Cloud Infrastructure',
    iconName: 'Server',
    skills: [
      {
        name: 'Python (FastAPI & Flask)',
        proficiency: 90,
        experience: '2+ years',
        description: 'Asynchronous REST APIs, background workers, and ML model serving.',
      },
      {
        name: 'Node.js & Express',
        proficiency: 86,
        experience: '2 years',
        description: 'Full-stack application services, middleware orchestration, and authentication.',
      },
      {
        name: 'Supabase & PostgreSQL',
        proficiency: 89,
        experience: '1.5 years',
        description: 'Relational schema design, Row-Level Security (RLS), and real-time event streaming.',
      },
      {
        name: 'RESTful API Design',
        proficiency: 90,
        experience: '2 years',
        description: 'Clean endpoint contracts, payload serialization, and robust error handling.',
      },
    ],
  },
  {
    id: 'aiml',
    name: 'AI, ML & Data Science',
    iconName: 'Cpu',
    skills: [
      {
        name: 'Computer Vision & Geospatial',
        proficiency: 85,
        experience: '1.5 years',
        description: 'Multi-spectral satellite processing, contour detection, and image segmentation.',
      },
      {
        name: 'Scikit-Learn & ML Foundations',
        proficiency: 88,
        experience: '2 years',
        description: 'Supervised & unsupervised learning, classification, regression, and model evaluation.',
      },
      {
        name: 'NumPy & Pandas',
        proficiency: 90,
        experience: '2 years',
        description: 'High-performance tabular data wrangling, matrix manipulation, and feature engineering.',
      },
      {
        name: 'Prompt & Agent Engineering',
        proficiency: 84,
        experience: '1 year',
        description: 'Integrating multimodal LLM APIs, function calling, and structured output parsing.',
      },
    ],
  },
  {
    id: 'systems',
    name: 'Core Engineering & Systems',
    iconName: 'Code2',
    skills: [
      {
        name: 'C Programming',
        proficiency: 86,
        experience: '2 years',
        description: 'Pointers, dynamic memory management, low-level data structures, and computer graphics.',
      },
      {
        name: 'Data Structures & Algorithms',
        proficiency: 90,
        experience: '2+ years',
        description: 'NPTEL certified DSA in Python, 100+ LeetCode problems solved across graphs, trees, and DP.',
      },
      {
        name: 'Git & GitHub Workflows',
        proficiency: 92,
        experience: '2+ years',
        description: 'Branching strategies, pull requests, automated CI checks, and collaborative code reviews.',
      },
      {
        name: 'Linux & Terminal Tools',
        proficiency: 85,
        experience: '2 years',
        description: 'Bash scripting, development toolchains, and environment management.',
      },
    ],
  },
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    id: 'sih-winner',
    year: '2024',
    period: 'September 2024',
    title: 'Smart India Hackathon (SIH) Internal Campus Winner',
    organization: 'REVA University · Team OrbitX',
    badge: '1st Place Internal Winner',
    description:
      'Led Team OrbitX to clinch first place in the internal campus evaluation round for the nationwide Smart India Hackathon. Conceived and architected SatQuery AI to solve automated multi-spectral satellite imagery processing.',
    achievements: [
      'Engineered the core geospatial image processing and segmentation pipeline in Python',
      'Created the real-time React GIS interface for viewing coastline shift detections and maritime tracking',
      'Pitch lead representing the 6-member team before an expert academic and industry evaluation panel',
    ],
    skillsApplied: ['Python', 'Computer Vision', 'React', 'Team Leadership', 'Geospatial Analytics'],
  },
  {
    id: 'web-hackathon-finalist',
    year: '2024',
    period: 'July 2024',
    title: 'Web Hackathon Finalist — Automated Assignment System',
    organization: 'Inter-College Technical Symposium',
    badge: 'Hackathon Finalist',
    description:
      'Designed and deployed the Smart Assignment Submission System in an intensive 36-hour sprint. Competed against 40+ engineering teams to secure a finalist position.',
    achievements: [
      'Configured Supabase Row Level Security to isolate student submissions cryptographically',
      'Built a sub-second automated code syntax and test runner execution preview',
      'Delivered faculty analytics with instant grade distribution histograms',
    ],
    skillsApplied: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Rapid Prototyping'],
  },
  {
    id: 'placement-batch',
    year: '2024',
    period: 'March 2024',
    title: 'REVA University Top-Tier Placement Batch Selection',
    organization: 'School of Computing and Information Technology',
    badge: 'Elite Batch Selection',
    description:
      'Inducted into REVA University’s premier corporate training and tier-1 placement cohort following competitive evaluations in data structures, algorithms, system design, and quantitative aptitude.',
    achievements: [
      'Ranked among the top percentile of B.Tech AI & Data Science undergraduates',
      'Advanced training in scalable backend architectures and distributed system principles',
      'Peer mentor guiding junior students through competitive coding in Python and C',
    ],
    skillsApplied: ['Algorithms', 'System Design', 'Python', 'Competitive Coding'],
  },
  {
    id: 'nptel-cert',
    year: '2023',
    period: 'November 2023',
    title: 'NPTEL DSA Certification in Python',
    organization: 'NPTEL · IIT Madras / Swayam',
    badge: 'Elite Certification',
    description:
      'Earned high-distinction certification in Data Structures and Algorithms using Python. Mastered asymptotic complexity analysis, graph algorithms, divide-and-conquer paradigms, and dynamic programming.',
    achievements: [
      'Comprehensive mastery of trees, heaps, Dijkstra shortest-path, and algorithmic complexity',
      'Applied theoretical concepts to solve 100+ LeetCode computational challenges',
      'Bridged theoretical complexity math with production-grade software implementation',
    ],
    skillsApplied: ['Python', 'Data Structures', 'Algorithms', 'Asymptotic Analysis'],
  },
];
