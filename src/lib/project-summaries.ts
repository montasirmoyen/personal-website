import type { ProjectStatus } from "./types";

export type SharedProjectSummary = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
};

export const projectSummaries: Record<string, SharedProjectSummary> = {
  ramai: {
    title: "RamAI",
    category: "AI & Full-Stack Development",
    description:
      "A specialized AI-powered assistant designed to provide Suffolk University students with grounded academic guidance and comparisons of professors based on data and review evidence.",
    technologies: ["TypeScript", "Python", "JSON", "Data Engineering", "AI Integration", "Auditing"],
    status: "completed",
  },
  mps: {
    title: "MPS",
    category: "Game Development",
    description: "A fast-paced multiplayer soccer game with 50+ real life teams.",
    technologies: ["Lua", "JavaScript", "JSON", "RBLX Studio", "Entrepreneurship"],
    status: "completed",
  },
  infinitecode: {
    title: "InfiniteCode",
    category: "AI & Full-Stack Development",
    description: "An application providing endless coding practice powered by curated challenges and unprecedented AI-generated problems.",
    technologies: ["TypeScript", "Python", "PostgreSQL", "Supabase", "AI Integration"],
    status: "in-progress",
  },
  resumexp: {
    title: "ResumeXP",
    category: "AI & Full-Stack Development",
    description: "An AI-powered application to help users maximize their resume potential in seconds.",
    technologies: ["TypeScript", "React", "Next", "Firebase", "AI Integration"],
    status: "completed",
  },
  scentdex: {
    title: "ScentDex",
    category: "AI & Full-Stack Development",
    description: "Browse, study and filter the most popular fragrances from the most luxurious brands.",
    technologies: ["TypeScript", "React", "Next", "Node.js", "JSON", "AI Integration"],
    status: "completed",
  },
  chess: {
    title: "Chess",
    category: "Web Development",
    description: "A classic chess game in Next.js featuring a sleek design and smooth gameplay.",
    technologies: ["TypeScript", "React", "Next"],
    status: "in-progress",
  },
  "domain-expansion": {
    title: "Domain Expansion",
    category: "Computer Vision/ML Development",
    description: "A real-time computer vision application using hand tracking to identify Jujutsu Kaisen \"Domain Expansion\" gestures via webcam and trigger on-screen overlays.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    status: "in-progress",
  },
  "ask-cli": {
    title: "Ask CLI",
    category: "CLI Development",
    description: "A CLI tool that lets you ask questions about your code directly from the terminal.",
    technologies: ["Rust"],
    status: "in-progress",
  },
  aiflash: {
    title: "AIFlash",
    category: "Full-Stack Cloud Development",
    description:
      "Serverless app utilizing generative AI to transform raw study notes into interactive flashcards. Built with an Angular frontend and a scalable AWS backend, it features 3D card animations and real time AI processing via OpenRouter.",
    technologies: ["Angular", "AWS", "Amplify", "Lambda", "Node.js", "S3", "AI Integration"],
    status: "completed",
  },
  crawler: {
    title: "Crawler",
    category: "Systems Development",
    description:
      "A high-performance application designed to recursively traverse the web by leveraging a multi-threaded architecture and robust synchronization primitives for concurrency and resource management.",
    technologies: ["C++", "CMake"],
    status: "completed",
  },
  urb: {
    title: "URB",
    category: "Backend Development",
    description: "Universal Room Booker: a scalable backend system for managing reservable rooms with safe and concurrent booking logic.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Maven", "Docker"],
    status: "completed",
  },
};
