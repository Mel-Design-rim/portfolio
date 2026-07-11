export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  image: string;
  year: string;
  context: string;
  client: string;
  duration: string;
  tags: string[];
  stack: string[];
  mission: string;
  analysis: string;
  intervention: string;
  links: ProjectLink[];
  evidence: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'absat',
    title: 'Absat',
    type: 'Web Platform',
    image: '/assets/images/absat-cover.svg',
    year: '2026',
    context: 'Final Year Project',
    client: "Agence d'Information Indépendante",
    duration: '6+ months',
    tags: ['SaaS', 'Media', 'AI', 'Dashboard'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Django', 'DRF', 'MySQL', 'JWT', 'Konva'],
    mission:
      'Absat is a web platform built for media institutions. It centralizes and accelerates the production of media content: graphic templates, editorial projects, transcription, translation and AI assistance — all in a single workspace organized by roles (Admin, Designer, Editor).',
    analysis:
      'The platform is built on a Next.js / TypeScript frontend with a Django REST Framework backend and a MySQL database. It features secure JWT authentication with email verification, role-based access control, an admin dashboard with activity statistics, and a Canvas-based visual editor (Konva / React-Konva) where editable fields are controlled per role.',
    intervention:
      'I designed and developed the entire platform end to end: data modeling (MCD/MLD), REST API architecture, role & permission system, the template validation workflow, the visual Canvas editor, the media library, and the AI assistant for writing, title generation, audio/video transcription and automatic translation.',
    links: [{ label: 'FRONTEND_REPO', url: 'https://github.com/Mel-Design-rim/frontend' }],
    evidence: ['/assets/images/alakhbar-promo.jpg'],
  },
  {
    id: 'aoun',
    title: 'Aoun',
    type: 'Marketplace App',
    image: '/assets/images/aoun-cover.svg',
    year: '2025',
    context: 'Academic / Personal',
    client: 'University Project',
    duration: '4 months',
    tags: ['Marketplace', 'Mobile', 'Web App'],
    stack: ['Spring Boot', 'Java', 'React', 'React Native', 'Expo', 'MySQL', 'REST API'],
    mission:
      'Aoun is a marketplace connecting users with local skilled workers — plumbers, carpenters and other service providers. It brings visibility and trust to an informal market through verified professional profiles.',
    analysis:
      'The system relies on a Spring Boot REST backend serving both a React web client and a React Native (Expo) mobile app. Core features: worker search, professional profiles, identity verification, previous-work uploads, a rating system, admin validation and dispute management.',
    intervention:
      'I worked across the full stack: backend API design with Spring Boot, database modeling, the React web interface and the React Native mobile application, including the verification and rating workflows.',
    links: [
      { label: 'MOBILE_REPO', url: 'https://github.com/Mel-Design-rim/aoun_dev' },
      { label: 'BACKEND_REPO', url: 'https://github.com/Mel-Design-rim/spring-min-project' },
    ],
    evidence: [],
  },
  {
    id: 'doit',
    title: 'do-it',
    type: 'macOS Application',
    image: '/assets/images/doit-cover.svg',
    year: '2025',
    context: 'Personal Project',
    client: 'Self-initiated',
    duration: 'Ongoing',
    tags: ['Productivity', 'Native App', 'macOS'],
    stack: ['SwiftUI', 'SwiftData', 'macOS'],
    mission:
      'do-it is a native macOS task manager designed to organize work and protect focus. Kanban board, simple notes, a focus timer and a menu-bar companion — everything needed to plan the day without leaving the flow.',
    analysis:
      'Built entirely with SwiftUI and SwiftData, the app offers drag-and-drop Kanban task management, a Today board, Pomodoro-style focus sessions, quick notes and system notifications, with a lightweight menu-bar companion for instant access.',
    intervention:
      'I designed and developed the full application: data model with SwiftData, the entire SwiftUI interface, drag-and-drop interactions, the focus/Pomodoro engine and the menu-bar integration.',
    links: [],
    evidence: [],
  },
  {
    id: '7alen',
    title: '7alen',
    type: 'Brand Campaign',
    image: '/assets/images/7alen-cover.jpg',
    year: '2024',
    context: 'Professional',
    client: '7alen Delivery',
    duration: '1 month',
    tags: ['Branding', 'Advertising', 'Social Media'],
    stack: ['Compositing', 'Typography', 'Art Direction'],
    mission:
      'A launch campaign for 7alen, a local delivery application. The goal: make a brand-new service instantly recognizable and trustworthy across social platforms and outdoor advertising.',
    analysis:
      'The key visual composes the delivery scooter inside a dynamic ribbon of service categories (restaurants, butchers, bakeries, delivery tracking), unified by a bold orange identity and bilingual Arabic/French typography with clear calls to action.',
    intervention:
      'I created the full campaign visual: art direction, photo compositing, lighting and glow work, bilingual typographic system and declinations for covers, posts and store badges.',
    links: [],
    evidence: [],
  },
  {
    id: 'slash',
    title: 'Slash Sport',
    type: 'Brand Identity',
    image: '/assets/images/slash-cover.jpg',
    year: '2024',
    context: 'Professional',
    client: 'Slash Sport Media',
    duration: '3 weeks',
    tags: ['Branding', 'Sports', 'Media'],
    stack: ['Logo Design', 'Key Visual', 'Compositing'],
    mission:
      '"Break the Line" — a complete key visual for Slash Sport, a Mauritanian sports media brand covering football, basketball, martial arts, chess and more.',
    analysis:
      'The visual slices national athletes into a rhythm of diagonal "slash" panels, echoing the brand name and logo. A dark teal palette with electric accents gives the brand an energetic broadcast-ready look, with bilingual Arabic/English lockups.',
    intervention:
      'I designed the concept and executed the full composition: athlete cutouts, panel system, color grading, brand lockups and the bilingual slogan treatment.',
    links: [],
    evidence: [],
  },
  {
    id: 'sava',
    title: 'Sava FC',
    type: 'Club Identity',
    image: '/assets/images/sava-logo.jpg',
    year: '2025',
    context: 'Professional',
    client: 'Sava Football Club',
    duration: '2 weeks',
    tags: ['Logo', 'Sports', 'Identity'],
    stack: ['Logo Design', 'Brand Guidelines', 'Vector'],
    mission:
      "A complete crest and identity for Sava FC. The badge had to feel modern and competitive while carrying the club's initials in one seamless mark.",
    analysis:
      'The crest merges the letters S, A, V, A with a football into a single fluid emblem inside a shield — documented through a full logo-meaning breakdown, construction grid and color system in vivid green on dark.',
    intervention:
      'I designed the logo from research sketches to the final vector crest, and produced the identity presentation: meaning diagram, variations, and social media assets.',
    links: [],
    evidence: ['/assets/images/sava-2.jpg', '/assets/images/sava-3.jpg'],
  },
  {
    id: 'kalimat',
    title: 'Kalimat',
    type: 'Typography Series',
    image: '/assets/images/kalimat-1.jpg',
    year: '2024',
    context: 'Personal Series',
    client: 'Mel Design',
    duration: 'Ongoing',
    tags: ['Arabic Type', 'Minimal', 'Series'],
    stack: ['Arabic Typography', 'Layout', 'Concept'],
    mission:
      'كلمات و معاني ("Words & Meanings") — a minimalist Arabic typography series where each word\'s design expresses its own meaning.',
    analysis:
      'Each piece plays with blur, weight, color and composition on a quiet dark canvas: a single Arabic word becomes the entire visual, letting form embody sense — fog blurs, absence hides letters, light reveals.',
    intervention:
      'I conceived the series concept and designed every piece: word selection, typographic manipulation and the consistent visual system signed under the Mel Design identity.',
    links: [],
    evidence: ['/assets/images/kalimat-2.jpg', '/assets/images/kalimat-3.jpg'],
  },
  {
    id: 'techforge',
    title: 'TechForge',
    type: 'Club Branding',
    image: '/assets/images/techforge-rollup.jpg',
    year: '2025',
    context: 'Community',
    client: 'TechForge Club — Univ. Nouakchott',
    duration: '2 weeks',
    tags: ['Branding', 'Print', 'Infographic'],
    stack: ['Logo', 'Roll-up Design', 'Print'],
    mission:
      'Full visual identity and a large-format roll-up for TechForge, a university tech club — "Where Ideas Meet Innovation" — covering development, AI, cybersecurity and networks.',
    analysis:
      "The roll-up organizes the club's story into a bilingual Arabic/French infographic: mission, domains, reasons to join and goals, illustrated with 3D elements in a green & gold system derived from the logo.",
    intervention:
      'I designed the club logo, built the full green/gold visual system, and produced the roll-up: layout, 3D-style illustration integration, bilingual copy setting and print preparation.',
    links: [],
    evidence: ['/assets/images/design-1.jpg'],
  },
  {
    id: 'motion',
    title: 'Motion Work',
    type: 'Video Production',
    image: '/assets/images/alakhbar-promo.jpg',
    year: '2023—2026',
    context: 'Professional',
    client: 'Media Agencies & Productions',
    duration: 'Continuous',
    tags: ['Video', 'Montage', 'Broadcast', 'Audio'],
    stack: ['Premiere Pro', 'After Effects', 'Audition', 'Suno', 'Whisper'],
    mission:
      'Video editing, motion design and audio production for media agencies, TV-style shows and social platforms — from show openers and promos to full episode post-production.',
    analysis:
      'Work spans broadcast promos (like the Al Akhbar evening show), social media reels, sound treatment and AI-assisted workflows (transcription with Whisper, music prompting with Suno) integrated into professional production pipelines.',
    intervention:
      'I handled editing, rhythm and pacing, motion graphics, color and audio treatment, and designed the accompanying promotional visuals for each production.',
    links: [
      { label: 'SHOWREEL_01', url: 'https://youtu.be/MDwNX87AvHw' },
      { label: 'SHOWREEL_02', url: 'https://youtu.be/RYE__g4Gbbs' },
      { label: 'SHOWREEL_03', url: 'https://youtu.be/h6ib0fGl0Mw' },
      { label: 'FB_PRODUCTION', url: 'https://www.facebook.com/share/v/1DE9cr32KY/' },
    ],
    evidence: ['/assets/images/design-2.jpg', '/assets/images/design-3.jpg'],
  },
];
