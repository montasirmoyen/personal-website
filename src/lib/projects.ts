export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  status: "completed" | "in-progress";
  description: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "luxury-transport",
    title: "Luxury Transport",
    category: "Full-Stack Web Development",
    image: "/background.jpg",
    date: "Nov 2025 — Present",
    status: "in-progress",
    description: "Reserve luxury transportation services within the Greater Boston Area, and modify/cancel reservations with ease.",
    bullets: [
      "Reserve luxury transportation services within the Greater Boston Area, and modify/cancel reservations with ease.",
      "Select from a fleet of luxury vehicles from minivans, SUVs, and sedans.",
      "Supports payment methods including card, PayPal and Venmo.",
    ],
    technologies: ["React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/montasirmoyen/luxury-transport",
    liveUrl: "https://luxury-transport.com",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    keyFeatures: [
      {
        title: "High-Performance Architecture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Seamless Payment Integration",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Real-Time Reservation Management",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    challenges: [
      {
        title: "Payment Gateway Integration",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Real-Time Updates",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    outcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The platform has been successfully launched and is providing seamless luxury transportation booking services.",
  },
  {
    slug: "mps",
    title: "MPS",
    category: "Game Development",
    image: "/mps.png",
    date: "Aug 2021 — Dec 2023",
    status: "completed",
    description: "Achieved over 3,500+ concurrent players and 500,000+ monthly active players.",
    bullets: [
      "Achieved over 3,500+ concurrent players and 500,000+ monthly active players.",
      "Founded the growing parent company, gaining 160,000+ official members and producing more successful spin-offs of the game.",
      "Generated over 6 figures in net revenue while still maintaining a generous passive income thanks to various methods of monetization and social media influencer partner deals.",
    ],
    technologies: ["Lua", "JavaScript", "RBLX Studio", "JSON"],
    gameUrl: "https://www.roblox.com/games/mps",
    githubUrl: "https://github.com/montasirmoyen/mps",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    keyFeatures: [
      {
        title: "Scalable Game Architecture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Monetization Strategy",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Community Building",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    challenges: [
      {
        title: "Scaling for High Player Counts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Revenue Optimization",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    outcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The game achieved remarkable success with over 500,000 monthly active players and generated significant revenue.",
  },
  {
    slug: "fragrance-catalog",
    title: "Fragrance Catalog",
    category: "Front-End Web Development",
    image: "/background.jpg",
    date: "Sep 2025 — Present",
    status: "in-progress",
    description: "Browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
    bullets: [
      "Browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
      "Welcoming community contributions, especially to expand the curated fragrance dataset.",
    ],
    technologies: ["React", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/montasirmoyen/fragrance-catalog",
    liveUrl: "https://fragrance-catalog.com",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    keyFeatures: [
      {
        title: "Advanced Filtering System",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Community Contributions",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Curated Dataset",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    challenges: [
      {
        title: "Data Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "Filter Performance",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    outcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The platform provides an intuitive way to explore and discover fragrances.",
  },
  {
    slug: "enhanceme",
    title: "Enhanceme",
    category: "Full-Stack Web Development",
    image: "/background.jpg",
    date: "Sep 2025 — Present",
    status: "in-progress",
    description: "Enhances and strengthens resumes, providing tailored suggestions for improvement.",
    bullets: [
      "Enhances and strengthens resumes, providing tailored suggestions for improvement.",
      "Fine-tuned AI model to act as a resume expert and analyze resume content more effectively.",
      "Complies with Applicant Tracking System (ATS) standards to increase interview chances.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/montasirmoyen/enhanceme",
    liveUrl: "https://enhanceme.com",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    keyFeatures: [
      {
        title: "AI-Powered Analysis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "ATS Compliance",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Tailored Suggestions",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    challenges: [
      {
        title: "AI Model Fine-Tuning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
      {
        title: "ATS Standards Integration",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
    ],
    outcome: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The platform helps users create ATS-compliant resumes with AI-powered insights.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

