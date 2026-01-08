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
    image: "/luxtra-home.png",
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
    liveUrl: "https://luxury-transport.vercel.app",
    overview: "Luxury Transport is a demo reservation website to book transportation services. It's mainly for the Greater Boston Area, but offers long distance services.",
    keyFeatures: [
      {
        title: "Free Fare Estimate",
        description: "Get a detailed estimate on your reservation at no cost.",
      },
      {
        title: "Large Fleet of Vehicles",
        description: "Select from a variety of luxurious vehicles that from sedans to mini-vans.",
      },
      {
        title: "Ease of Cancellation",
        description: "Easily cancel or modify reservations through the website when you create an account.",
      },
    ],
    challenges: [
      {
        title: "Demand",
        description: "The demand of template websites like these is not very high. I was inspired by my Dad's friend who owns a similiar company, so I decided to design a website that business owners like him could use for free.",
      },
    ],
    outcome: "The website has been deployed and is open source on GitHub. It can be used as a platform for providing seamless luxury transportation booking services.",
  },
  {
    slug: "mps",
    title: "MPS",
    category: "Game Development",
    image: "/mps.png",
    date: "Aug 2021 — Dec 2023",
    status: "completed",
    description: "A fast-paced multiplayer soccer game with 50+ real life teams.",
    bullets: [
      "Achieved over 3,500+ concurrent players and 500,000+ monthly active players.",
      "Founded the growing parent company, gaining 160,000+ official members and producing more successful spin-offs of the game.",
      "Generated over 6 figures in net revenue while still maintaining a generous passive income thanks to various methods of monetization and social media influencer partner deals.",
    ],
    technologies: ["Lua", "JavaScript", "RBLX Studio", "JSON"],
    gameUrl: "https://www.roblox.com/games/13436905139/MPS-4-a-side",
    overview: "This is a multiplayer soccer game where players compete against each other in two 4 player teams. The game goes on until 90 minutes (around 30 minutes in real life), if the score is tied, it goes onto 120 minutes. If it's still tied, whoever scores next wins the game.",
    keyFeatures: [
      {
        title: "High Skill Ceiling",
        description: "Players have 5 tools, shoot, pass, long, tackle and dribble. Each tool has different actions when their respective key is pressed. There are around 25+ dribble combos, and more to be discovered.",
      },
      {
        title: "Successful Monetization",
        description: "RBLX games do generate revenue based on CCU and engagement time. This game alone has gained over six figures in net revenue across time.",
      },
      {
        title: "Community Building",
        description: "This game is an excellent way to meet new people and make new friends. I've created a community where over 160,000 players converse about the game in general, and host matches between each other.",
      },
    ],
    challenges: [
      {
        title: "Scaling for High Player Counts",
        description: "This was a small project I worked on in Sophomore year in high school, it unexpectedly gained attention from the soccer community and turned into a fan favorite. This also meant I had to optimize the game further, making it smoother for long-term gaming.",
      },
      {
        title: "Staff Employment",
        description: "There was a need to grow the administration team when the player count grew and moderations for reports by users were needed. Initially, close friends accompanied me to help deal with moderations, but I eventually built it into a stable work enviornment.",
      },
    ],
    outcome: "The game achieved remarkable success with over 500,000 monthly active players and generated significant revenue that helped me pay for necessities like university tuiton.",
  },
  {
    slug: "fragrance-catalog",
    title: "Fragrance Catalog",
    category: "Front-End Web Development",
    image: "/fc-home.png",
    date: "Sep 2025 — Present",
    status: "in-progress",
    description: "Browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
    bullets: [
      "Browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
      "Welcoming community contributions, especially to expand the curated fragrance dataset.",
    ],
    technologies: ["React", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/montasirmoyen/fragrance-catalog",
    liveUrl: "https://fragrance-catalog.vercel.app",
    overview: "A catalog of various different fragrances. Each fragrance has information on the ideal time to wear them, and there are various sorts and filters to find your favorite fragrance.",
    keyFeatures: [
      {
        title: "Advanced Filtering System",
        description: "Features remarkable filters based on distinct features such as seasons, gender and much more.",
      },
      {
        title: "Community Contributions",
        description: "The project encourages open-source contribution especially in the area of the fragrance data. Requiring no APIs, the JSON data can be expanded by anyone with knowledge in fragrances.",
      },
    ],
    challenges: [
      {
        title: "Fragrance Research",
        description: "I've only been really into fragrances since around 2023, when the trendiness was just starting to peak. I had decent knowledge on fragrances, but of course you can never know enough. I had to do extensive research on various fragrance notes to curate a decent dataset for the project.",
      },
      {
        title: "Product Images",
        description: "Many of the images were from Fragantica.com, a more advanced fragrance library that offers a wide range of images for non-commercial usage.",
      },
    ],
    outcome: "The website has been deployed and is open source on GitHub. The platform provides an intuitive way to explore and discover fragrances.",
  },
  /*
    {
    slug: "enhanceme",
    title: "Enhanceme",
    category: "Full-Stack Web Development",
    image: "/enhanceme-home.png",
    date: "Sep 2025 — Present",
    status: "in-progress",
    description: "Enhances and strengthens resumes, providing tailored suggestions for improvement.",
    bullets: [
      "Enhances and strengthens resumes, providing tailored suggestions for improvement.",
      "Fine-tuned AI model to act as a resume expert and analyze resume content more effectively.",
      "Complies with Applicant Tracking System (ATS) standards to increase interview chances.",
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/montasirmoyen/enhanceme",
    liveUrl: "https://enhanceme.vercel.app",
    overview: "A demo AI resume wizard that can be fed a resume in a PDF/DOCX format and respond with intelligent suggestions to strengthen the resume.",
    keyFeatures: [
      {
        title: "AI-Powered Analysis",
        description: "Receive an intelligent analysis from an AI model.",
      },
      {
        title: "ATS Compliance",
        description: "Complies with the Applicant Tracking Systems which helps resumes get passed the job's resume scan."
      },
      {
        title: "Tailored Suggestions",
        description: "Detailed constructive suggestions based on what your resume lacks.",
      },
    ],
    challenges: [
      {
        title: "AI Model Fine-Tuning",
        description: "The AI model needed to be fine-tuned to the point where it was an expert at resume analyzing.",
      },
      {
        title: "ATS Standards Integration",
        description: "ATS compliance can sometimes be tricky especially in applications to a project like this.",
      },
    ],
    outcome: "The platform helps users create ATS-compliant resumes with AI-powered insights. Anyone can use the source code and create their own AI resume wizard by plugging in their AI model and key to generate much more accurate and powerful responses.",
  },
    */
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getTechIcon(tech: string): string | null {
  const techIcons: Record<string, string> = {
    react: "/react.png",
    typescript: "/typescript.png",
    javascript: "/javascript.png",
    firebase: "/firebase.png",
    lua: "/lua.png",
    "rblx studio": "/rblxstudio.png",
    json: "/json.png",
    "node.js": "/nodejs.png",
    nodejs: "/nodejs.png",
    mongodb: "/mongodb.png",
  };

  const normalizedTech = tech.toLowerCase().trim();
  return techIcons[normalizedTech] || null;
}

