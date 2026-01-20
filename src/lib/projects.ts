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
  overview?: string;
  blogPosts?: {
    date: string;
    title: string;
    borderColor: string;
    content: ({
      type: "paragraph";
      content: string;
      link?: string;
      marginBottom: number;
    } | {
      type: "bulletpoints";
      content: string[];
      marginBottom: number;
    })[]
  }[];
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  outcome?: string;
}

export interface Blog {
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  status: "completed" | "in-progress";
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  blogPosts: {
    date: string;
    title: string;
    borderColor: string;
    content: ({
      type: "paragraph";
      content: string;
      link?: string;
      marginBottom: number;
    } | {
      type: "bulletpoints";
      content: string[];
      marginBottom: number;
    })[]
  }[];
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  outcome?: string;
}

export const projects: Project[] = [
  {
    slug: "ramai",
    title: "ramai",
    category: "AI & App Development",
    image: "/ramai-home.png",
    date: "Jan 15, 2026 — Jan 20, 2026",
    status: "completed",
    description: "An application assisting Suffolk University students by aggregating professor information with an AI chatbot.",
    bullets: [
      "AI-powered chatbot using XiaomiMiMo's MiMo-V2-Flash for fast and accurate responses.",
      "Comprehensive professor discovery page with search and department filtering capabilities.",
      "Detailed professor profiles displaying ratings, departments, and student reviews.",
    ],
    technologies: ["TypeScript", "React", "AI Integration"],
    githubUrl: "https://github.com/montasirmoyen/ramai-sc",
    overview: "ramai is an AI-integrated application designed specifically for Suffolk University students. It aggregates professor information and provides an intelligent chatbot interface to help students make informed decisions about their courses and instructors.",
    keyFeatures: [
      {
        title: "AI Chatbot Integration",
        description: "Utilizes XiaomiMiMo's MiMo-V2-Flash model for fast, accurate, and cost-effective responses to student queries about professors and courses.",
      },
      {
        title: "Advanced Search & Filtering",
        description: "Comprehensive discovery page with search functionality and department filters including Computer Science, Mathematics, and Business.",
      },
      {
        title: "Detailed Professor Profiles",
        description: "View professor information including name, department, average ratings, and recent student reviews all in one place.",
      },
    ],
    challenges: [
      {
        title: "AI Accuracy and Trust",
        description: "Ensuring the AI chatbot provides accurate information was critical. Extensive auditing and prompt engineering was required to minimize hallucinations and maintain user trust. The backend implements strong filtering and constraints based on planner intents.",
      },
      {
        title: "Data Representation",
        description: "Handling edge cases where users ask questions not well-represented in the dataset required careful consideration of how the AI should respond responsibly.",
      },
    ],
    outcome: "The application successfully launched with positive feedback from early users who found it genuinely useful. The project provided valuable experience in AI integration, backend filtering, and building user-centric applications."
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
    slug: "luxury-transport",
    title: "Luxury Transport",
    category: "Full-Stack Web Development",
    image: "/luxtra-home.png",
    date: "Nov 2025 — Present",
    status: "completed",
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
    slug: "fragrance-catalog",
    title: "Fragrance Catalog",
    category: "Front-End Web Development",
    image: "/fc-home.png",
    date: "Sep 2025 — Present",
    status: "completed",
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
  }
];

export const blogs: Blog[] = [
  {
    slug: "ramai",
    title: "ramai",
    category: "AI & App Development",
    image: "/ramai-home.png",
    date: "Jan 15, 2026 — Jan 20, 2026",
    status: "completed",
    description: "An application assisting Suffolk University students by aggregating professor information with an AI chatbot.",
    technologies: ["TypeScript"],
    blogPosts: [
      {
        date: "January 15, 2026",
        title: "Inception",
        borderColor: "#1aca75",
        content: [
          {
            type: "paragraph",
            content: `
            Actually, this is the start of the blog for this project.
            I started planning the actual project a few days ago. 
            I suppose the reason for starting this app in particular was because I was interested in creating my first AI integrated application.
            But I also wanted something that Suffolk University students could potentially use.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Right now, I've already started building the app, after a day or two of planning the architecture and determining the tech stack.
            I've always had the bad habit of creating the name and logo of applications early, but wow, that part is really fun.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            But enough of that, here's what I've done so far:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Prototype AI chatbot. I've decided to use XiaomiMiMo's MiMo-V2-Flash. I like this model because it's quite fast despite being inexpensive. But also because anything above this is overkill for this project.",
              "Discover page, along with the search bar feature, which is the main component of the page. You can search for professors by their name, and it also has a filters button with department filters such as Computer Science, Mathematics, and Business.",
              "Professor profile page, which displays the professor's information such as their name, department, average rating, and recent reviews from students.",
            ],
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            I'll continue working on this in my free time, and I'll post updates here as I make more progress.
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "January 16, 2026",
        title: "Motive",
        borderColor: "#553adc",
        content: [
          {
            type: "paragraph",
            content: `
            One of my friends told me this project didn't make sense to create because Google's AI search results or ChatGPT "does the same thing and better.”
            I agreed and didn't argue with them, just gave them a shrug. Because I knew that this kind of mentality was a bit narrow and misses the point.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The existence of similar projects by billion dollar companies shouldn't deter you from working on your own.
            The goal, or my goal at least, isn't to compete with them.
            It's to learn, build, and ultimately have fun in my free time because it's been my passion to do so.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            For me, this project was always about growing as a software developer.
            Designing a system, integrating AI and working with real data, while also creating a general usage for students.
            And honestly, if even one person uses and benefits from it, that's good enough for me.
            Every project teaches you something, and for me, that's far more valuable than trying to measure yourself against tech giants.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "January 17, 2026",
        title: "Audit",
        borderColor: "#ff1285",
        content: [
          {
            type: "paragraph",
            content: `
            I like this border color.
            Anyways, lately I've been auditing my AI's backend instead of adding new features.
            I decided to halt feature work because I know that accuracy and trust matter a lot when it comes to RamAI's chatbot.
            If the AI gives messy information or is unable to respond to certain questions, users will quickly lose trust and stop using it.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I have an opinion that you may or may not agree with: an AI that confidently says incorrect stuff is worse than one that says "I don't know".
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            So, I researched and came up with questions that real users would realistically ask the chatbot.
            Then I asked those questions, recorded the responses, and analyzed them alongside a rating based on how well the AI responded.
            I wanted to see where the system actually breaks under real questions.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            What surprised me most is how good the AI responded to many of the questions when the intent was clear.
            It's surreal to witness something you created work in a way like this.
            You honestly have to experience it if you haven't.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Of course, it wasn't all perfect.
            There were small bugs, like case sensitivity and prompt boundary issues, that caused some big perception problems.
            I also noticed I was asking the AI questions that aren't really represented in the data, and I'm still not sure how I want to handle those yet.
            There were also weird bracket artifacts leaking into responses, along with a JSON/syntax error tied to a specific (or maybe unspecific) intent.
            One response in particular was amusing to me, where the AI tried to be safe and helpful at the same time, then ended up contradicting itself.
            You can find that response at the end of this blog post in the promptAccuracy.md file, question 5, where I asked about student reviews on a professor.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Overall, there are strong protections against AI hallucinations in the backend.
            Department scoping is mostly working as intended.
            My ranking logic is producing genuinely useful results.
            Auditing all of this has also made debugging way easier than blindly guessing what to fix.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            If you're looking to build a similiar AI system, let half the work be done by the prompt engineering for the planner and answer.
            The backend filters and constraints do the rest, based on the intents from the planner.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            Below are the audit files in markdown which contain stuff like questions asked to the AI, notes and detailed analyses.
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            promptAccuracy.md
            `,
            link: "https://drive.google.com/file/d/1sVkUzfep1-FFfIDjQXQkW4monR5i5TO3/view?usp=drive_link",
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            promptAccuracyFollowUp.md
            `,
            link: "https://drive.google.com/file/d/15gJhxOkPVPc-JQceWjUJw0fEup5Wi218/view?usp=drive_link",
            marginBottom: 2
          },
        ]
      },
      {
        date: "January 20, 2026",
        title: "Reflection",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            It's been a few days since my last post.
            The reason is that I was wrapping the project up, at least for now.
            Working on this has taught me a lot about building AI-integrated applications, with this project acting as the catalyst.
            From designing the architecture and UI layout, to backend filtering, auditing, and refining the AI's responses, each step ended up being a meaningful learning experience.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also had a few friends try out the app.
            They liked it and said they genuinely found it useful.
            That feedback mattered more than I expected, because it helped me see the project from a user's perspective instead of just my own as the builder.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            What stood out to me the most is how much trust and accuracy matter when working with AI. 
            It's easy to make something that looks smart, but much harder to build something that users can actually rely on. 
            That shift in mentality is something I'll carry into future projects.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            For now, I'm stepping away from active development. 
            Not because there's nothing left to improve, but because this feels like a good stopping point. 
            The system works, I've learned lessons, and I'm happy with what is is right now.`,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The source code for the project is public if you're interested in looking through it:
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `github.com/montasirmoyen/ramai-sc`,
            link: "https://github.com/montasirmoyen/ramai-sc",
            marginBottom: 1
          }
        ]
      }
    ]
  },
];



export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
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

