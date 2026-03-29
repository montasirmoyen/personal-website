export const techStack: Record<string, { src: string; doc?: string }> = {
  ["c++"]: { src: "/cpp.png", doc: "https://en.cppreference.com/w/" },
  cmake: { src: "/cmake.png", doc: "https://cmake.org/documentation/" },
  python: { src: "/python.png", doc: "https://docs.python.org/3/" },
  java: { src: "/java.webp", doc: "https://docs.oracle.com/en/java/" },
  javascript: { src: "/javascript.png", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  typescript: { src: "/typescript.png", doc: "https://www.typescriptlang.org/docs/" },
  lua: { src: "/lua.png", doc: "https://www.lua.org/docs.html" },
  json: { src: "/json.png", doc: "https://www.json.org/json-en.html" },
  "postgresql": { src: "/postgresql.svg", doc: "https://www.postgresql.org/docs/" },
  rust: { src: "/rust.png", doc: "https://doc.rust-lang.org/book/" },

  opencv: { src: "/opencv.webp", doc: "https://docs.opencv.org/4.x/" },
  mediapipe: { src: "/mediapipe.png", doc: "https://github.com/google-ai-edge/mediapipe" },
  aws: { src: "/aws.png", doc: "https://aws.amazon.com/documentation/" },
  amplify: { src: "/amplify.png", doc: "https://docs.amplify.aws/" },
  lambda: { src: "/lambda.png", doc: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
  s3: { src: "/s3.png", doc: "https://docs.aws.amazon.com/s3/index.html" },
  angular: { src: "/angular.png", doc: "https://angular.io/docs" },
  dynamodb: { src: "/dynamodb.png", doc: "https://docs.aws.amazon.com/dynamodb/index.html" },
  maven: { src: "/maven.png", doc: "https://maven.apache.org/index.html" },
  docker: { src: "/docker.png", doc: "https://docs.docker.com/" },
  ["spring boot"]: { src: "/spring-boot.webp", doc: "https://spring.io/projects/spring-boot" },
  react: { src: "/react.png", doc: "https://react.dev/learn" },
  firebase: { src: "/firebase.png", doc: "https://firebase.google.com/docs" },
  "rblx studio": { src: "/rblxstudio.png", doc: "https://create.roblox.com/docs/creation" },
  "node.js": { src: "/nodejs.png", doc: "https://nodejs.org/en/docs/" },
  mongodb: { src: "/mongodb.png", doc: "https://www.mongodb.com/docs/" },
  next: { src: "/next.webp", doc: "https://nextjs.org/docs" },
  "supabase": { src: "/supabase.png", doc: "https://supabase.com/docs" },

  "ai integration": { src: "/ai.png" },
  auditing: { src: "/audit.png" },
  entrepreneurship: { src: "/entrepreneurship.png" },
  parsing: { src: "/xlsx.png" },
  "data engineering": { src: "/data.png" },
};

export interface Project {
  slug: string;
  title: string;
  colors?: [string, string];
  category: string;
  image: string;
  carouselImages?: string[];
  date: string;
  status: "completed" | "in-progress";
  description: string;
  bullets?: string[];
  technologies: string[];
  githubUrl?: string;
  blogUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  overview?: string;
  problemItSolves?: string;
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  tradeoffs?: {
    title: string;
    description: string;
  }[];
  outcome?: string;
}

export interface Blog {
  slug: string;
  title: string;
  heroBlog?: boolean;
  challenge?: boolean;
  collab?: boolean;
  collaborators?: {
    name: string;
    avatarImgUrl?: string;
  }[];
  mini?: boolean;
  category: string;
  image: string;
  date: string;
  status: "completed" | "in-progress";
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  projectUrl?: string;
  blogPosts: {
    date: string;
    title: string;
    borderColor: string;
    content: ({
      type: "paragraph";
      content: string;
      link?: string;
      marginBottom?: number;
    } | {
      type: "bulletpoints";
      content: string[];
      marginBottom?: number;
    } | {
      type: "image";
      content: string[];
      scale?: number;
      marginBottom?: number;
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
    slug: "infinitecode",
    title: "InfiniteCode",
    colors: ["#d1001c", "#ff1369"],
    category: "AI & Full-Stack Development",
    image: "/ic-ai-gen.png",
    carouselImages: ["/ic-ql.png", "/ic-grading.png", "/ic-db.png", "/ic-ai-grade.png", "/ic-ai-gen.png", "/ic-ai-gen-home.png"],
    date: "February 8, 2026 — Present",
    status: "in-progress",
    description: "An application providing endless coding practice powered by curated challenges and unprecedented AI-generated problems.",
    technologies: ["TypeScript", "Python", "PostgreSQL", "Supabase", "AI Integration"],
    blogUrl: "https://montasirmoyen.com/blog/infinitecode",
    problemItSolves: "Practicing questions that appear in technical interviews is valuable. Platforms like LeetCode are great, I use it to learn common patterns, strengthen data structures and algorithms, and get comfortable with interview style problems. But interviews don't always give you something you've seen before. They test how you think, meaning they might not hand you a problem you've solved or memorized before.",
    keyFeatures: [
      {
        title: "Unprecedented Questions",
        description: "Uses AI to generate unique coding questions, providing endless practice opportunities for users.",
      },
      {
        title: "Custom Question Grader",
        description: "Users can input their own questions and solutions, and the AI will grade their code and provide feedback, making it a versatile tool for learning and improvement.",
      },
      {
        title: "Intuitive Code Editor",
        description: "Provides a user-friendly code editor with features like syntax highlighting.",
      },
      {
        title: "Multi Language Support",
        description: "Supports multiple programming languages such as Java, Python, and C++, allowing users to practice and improve their skills in various languages.",
      },
      {
        title: "Cloud Persistence",
        description: "Ensures that user progress and data are securely stored in the cloud, allowing for seamless access across devices and sessions.",
      },
    ],
    challenges: [
      {
        title: "Running Code",
        description: "Running user code in a secure and efficient way is a major challenge. I had to consider various approaches, such as using containerization with Docker or leveraging serverless functions, to execute code safely without risking the stability of the platform. Ultimately, I took assistance from AI to ensure safe execution.",
      },
      {
        title: "Grading Solutions",
        description: "Ensuring accurate grading of user solutions was a significant challenge. I initially considered using deterministic test cases, but the sheer variety of coding problems and potential edge cases made this approach impractical. Implementing AI for grading introduced complexity, such as handling hallucinations and ensuring reliable feedback, but it ultimately provided a more flexible and scalable solution.",
      },
    ],
    tradeoffs: [
      {
        title: "Sourcing Classic Problems",
        description: "I chose to source classic coding problems from public websites to provide users with familiar and well-known challenges. This approach allowed me to quickly build a robust problem set without having to create all the content from scratch. However, it also meant that I had to rely on the quality and variety of problems available on those platforms, which may not cover every topic or difficulty level comprehensively.",
      },
      {
        title: "AI Grading vs Deterministic Test Cases",
        description: "Choosing AI for grading solutions introduced complexity, such as handling hallucinations and ensuring reliable feedback, but it ultimately provided a more flexible and scalable solution compared to deterministic test cases.",
      },
      {
        title: "Running In-House vs Third-Party Services vs AI Assistance",
        description: "Deciding whether to run code in-house, use third-party services, or leverage AI assistance was a critical tradeoff. Each option had its pros and cons in terms of cost, scalability, and reliability. Ultimately, I chose the AI approach for the time being.",
      }
    ],
    outcome: `
    To be determined, the project is still in progress.
    `,
  },
  {
    slug: "mps",
    title: "MPS",
    colors: ["#2e3ffa", "#d70028"],
    category: "Game Development",
    image: "/mps.png",
    carouselImages: ["/mps-6.webp", "/mps-4.png", "/mps-7.webp", "/mps-3.png", "/mps-8.webp", "/mps-5.png"],
    date: "Aug 2021 — Dec 2023",
    status: "completed",
    description: "A fast-paced multiplayer soccer game with 50+ real life teams.",
    problemItSolves: "There was a lack of fast-paced soccer games with realistic mechanics on Roblox at the time, and I wanted to create a fun and competitive soccer experience for players on the platform. I also wanted to build a community around the game where players could connect and compete with each other.",
    technologies: ["Lua", "JavaScript", "JSON", "RBLX Studio", "Entrepreneurship"],
    gameUrl: "https://www.roblox.com/games/13436905139/MPS-4-a-side",
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
        title: "Nature of Sports Games: Limited Updates",
        description: "Sports games often have limited opportunities for new content and updates, which can make it challenging to keep players engaged over time. This required careful planning and creativity to introduce meaningful updates that kept the game fresh and exciting.",
      },
      {
        title: "Staff Employment",
        description: "There was a need to grow the administration team when the player count grew and moderations for reports by users were needed. Initially, close friends accompanied me to help deal with moderations, but I eventually built it into a stable work enviornment.",
      },
    ],
    tradeoffs: [
      {
        title: "Solo Development vs Team",
        description: "The game started as a solo project, and I continued to develop it mostly on my own. While this allowed for a consistent vision and faster decision-making, it also meant that the development process was more time-consuming and limited in terms of expertise. As the game grew, I had to bring on staff to help with moderation and community management, but the core development remained solo.",
      },
      {
        title: "Monetization vs Player Experience",
        description: "I chose to monetize the game through various methods, such as microtransactions. While this generated significant revenue, I had to be careful to balance monetization with player experience to avoid making the game feel pay-to-win or alienating players who didn't want to spend money. I focused on creating a fair and enjoyable experience for all players while still offering optional purchases for those who wanted to support the game.",
      },
      {
        title: "Performance vs Visuals",
        description: "Soccer is played on a large field with many players, which can lead to performance issues, especially on lower-end devices. I had to make tradeoffs between visual fidelity and performance to ensure the game ran smoothly for a wide range of players. This involved optimizing assets, simplifying certain visual effects, and making design choices that prioritized gameplay performance while still maintaining an engaging visual style.",
      }
    ],
    outcome: `
    MPS has reached great heights, at times hitting around 500,000 monthly players and a few thousand concurrent users at peak hours.
    The revenue from it ended up paying for my university tuition, which is something I'm still grateful for.
    What mattered just as much was the community that formed around it.
    MPS became a starting point for a lot of the soccer titles that came after on Roblox, and seeing other developers build on the genre of soccer games was honestly one of the coolest parts of the whole experience.
    Working on the game taught me a lot, everything from gameplay design and scaling servers to handling feedback and managing a large player base.
    It was my first real exposure to building and maintaining a product that people around the world actually used, and it shaped a lot of how I approach projects today.
    `,
  },
  {
    slug: "ramai",
    title: "RamAI",
    colors: ["#2e3ffa", "#1d46fd"],
    category: "AI & Full-Stack Development",
    image: "/ramai-home.png",
    carouselImages: ["/ramai-chat.png", "/ramai-response.png", "/ramai-jl.png", "/ramai-ag.png"],
    date: "January 15, 2026 — Present",
    status: "completed",
    description: "An application assisting Suffolk University students by providing tools such as an AI chatbot and a library of 1200+ SU professors.",
    technologies: ["TypeScript", "React", "Python", "Data Engineering", "AI Integration", "Auditing"],
    blogUrl: "https://montasirmoyen.com/blog/ramai",
    liveUrl: "https://ram-ai.vercel.app/",
    problemItSolves: "When trying to find an answer to a question about professors at Suffolk University, scrolling through pages of professor information and reviews can be time consuming. Especially when time is limited, like when you're registering for classes and trying to decide between professors, it can be hard to find the information you need quickly.",
    keyFeatures: [
      {
        title: "AI Chatbot Integration",
        description: "Utilizes various models such as XiaomiMiMo's MiMo-V2-Flash model for fast, accurate, and cost-effective responses to student queries about professors and courses.",
      },
      {
        title: "Comprehensive Professor Discovery",
        description: "Includes a comprehensive library with search functionality, keeping 1200+ professors easily discoverable.",
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
        title: "AI Scope and Limitations",
        description: "Maximizing the usefulness of the AI and making sure a broad range of questions could be answered. This involved careful consideration of the training data and prompt design to ensure the AI could handle a wide variety of queries while staying within its knowledge base.",
      },
      {
        title: "Data Representation",
        description: "Handling edge cases where users ask questions not represented well in the dataset required careful consideration of how the AI should respond responsibly.",
      },
    ],
    tradeoffs: [
      {
        title: "RAG vs Intent-Based Planning",
        description: "I chose to implement an intent-based planning system in the backend instead of a traditional Retrieval-Augmented Generation (RAG) approach. This allows for more structured and controlled responses, but it also means that the AI's capabilities are limited to the defined intents and may not handle unexpected queries as gracefully as a RAG system might.",
      },
      {
        title: "AI Model Selection",
        description: "I chose AI models that balance performance, accuracy, and cost. Extensive testing and evaluation were conducted to select the most suitable model for the application's needs.",
      },
      {
        title: "Sourcing Data",
        description: "I chose RateMyProfessors as the primary data source for professor information due to its comprehensive coverage and user-generated reviews. However, this also means that the data may be subject to biases and may not always be up-to-date, which is a tradeoff I had to consider.",
      },
      {
        title: "Storing Data in JSON vs Database",
        description: "I chose JSON for data storage due to its simplicity and ease of use for the project's needs. While a database could offer more robust querying capabilities, JSON provided a lightweight and flexible solution that met the application's requirements.",
      },
    ],
    outcome: `
    The application has been deployed and was tested and used by students with positive feedback since they found it useful.
    The project provided valuable experience in AI integration, backend engineering, data engineering, and building user-centric applications.
    `,
  },
  {
    slug: "resumexp",
    title: "ResumeXP",
    colors: ["#00ff8c", "#0ccaff"],
    category: "AI & Full-Stack Development",
    image: "/rxp-home.png",
    carouselImages: ["/rxp-home.png","/rxp-dashboard.png","/rxp-analysis-1.png", "/rxp-analysis-2-1.png", "/rxp-analysis-3.png"],
    date: "January 29, 2026 — Present",
    status: "completed",
    description: "An AI-powered application to help users maximize their resume potential in seconds.",
    problemItSolves: "Crafting a strong resume is crucial for job seekers, but it can be time consuming and challenging to know how to improve it effectively. Especially with all the ATS requirements and the need to tailor resumes for different job applications, it can be overwhelming for users to optimize their resumes and create compelling cover letters quickly.",
    technologies: ["TypeScript", "React", "Next", "AI Integration"],
    bullets: [
      "Provides honest feedback on resumes to help users improve and stand out to potential employers.",
      "Offers a job match score feature that aligns resumes with job descriptions and suggests improvements.",
      "Generates personalized cover letters based on the user's resume for quick and efficient applications.",
    ],
    blogUrl: "https://montasirmoyen.com/blog/resumexp",
    liveUrl: "https://resumexp.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/resumexp",
    keyFeatures: [
      {
        title: "Honest Feedback",
        description: "Provides users with honest and constructive feedback on their resumes, helping them improve and stand out to potential employers.",
      },
      {
        title: "Job Match Score",
        description: "Lets users input a job description and receive a match score indicating how well their resume aligns with the job requirements, along with suggestions for improvement.",
      },
      {
        title: "Cover Letter Generation",
        description: "Generates personalized cover letters based on the user's resume, helping users create compelling applications quickly and efficiently.",
      },
    ],
    challenges: [
      {
        title: "ATS Compliance",
        description: "Knowing how Applicant Tracking Systems (ATS) work and ensuring the AI provides suggestions that help resumes pass these systems was a significant challenge. Research and prompt engineering were required to achieve this.",
      },
    ],
    tradeoffs: [
      {
        title: "AI Model Selection",
        description: "I chose AI models that balance performance, accuracy, and cost. Extensive testing and evaluation were conducted to select the most suitable model for the application's needs.",
      },
    ],
    outcome: `
    The application was deployed and has been used by friends in my university to give insights on their resumes, and the feedback has been positive so far.
    The project gave valuable experience in AI integration, data analysis, and building user-centric applications.
    The source code is available on GitHub for anyone interested in exploring or contributing to the project.
    `,
  },
  {
    slug: "scentdex",
    title: "ScentDex",
    colors: ["#ff34b1", "#ff851b"],
    category: "AI & Full-Stack Development",
    image: "/sd-home-1.png",
    carouselImages: ["/sd-home-1.png", "/sd-home-3.png", "/sd-home-4.png", "/sd-ai.png", "/sd-compare-1.png", "/sd-compare-2.png", "/sd-compare-3.png"],
    githubUrl: "https://github.com/montasirmoyen/scentdex/",
    date: "Sep 2025 — Present",
    status: "completed",
    description: "Browse, study and filter the most popular fragrances from the most luxurious brands.",
    technologies: ["TypeScript", "React", "Next", "Node.js", "JSON", "AI Integration"],
    liveUrl: "https://scentdex.vercel.app",
    keyFeatures: [
      {
        title: "Advanced Filtering System",
        description: "Features remarkable filters based on distinct features such as seasons, gender and much more.",
      },
      {
        title: "Detailed Fragrance Profiles",
        description: "Provides in-depth information on each fragrance, including ideal wear times and scent notes.",
      },
      {
        title: "Artificial Intelligence Integration",
        description: "Integrates AI to provide personalized fragrance recommendations and insights based on user preferences.",
      },
    ],
    challenges: [
      {
        title: "Fragrance Research",
        description: "I've only been really into fragrances since around 2023, when the trendiness was just starting to peak. I had decent knowledge on fragrances, but of course you can never know enough. I had to do extensive research on various fragrance notes to curate a decent dataset for the project.",
      }
    ],
    tradeoffs: [
      {
        title: "Data Sourcing",
        description: "I chose to source data from Fragella, a reputable fragrance database, to ensure the accuracy and reliability of the information presented. Limited quantity, but high quality.",
      }
    ],
    outcome: `
    The website has been deployed and is open source on GitHub.
    The project provided valuable experience in front-end development, handling large datasets, and building user-friendly interfaces.
    `,
  }
];

export const blogs: Blog[] = [
  {
    slug: "infinitecode",
    title: "InfiniteCode",
    category: "AI & Full-Stack Development",
    image: "/ic-grading.png",
    date: "February 8, 2026 — Present",
    status: "in-progress",
    heroBlog: true,
    description: "Endless coding practice powered by curated challenges and unprecedented AI-generated problems.",
    technologies: ["TypeScript", "Python", "PostgreSQL", "Supabase", "AI Integration"],
    blogPosts: [
      {
        date: "February 8, 2026 - 6:16PM",
        title: "Infinite",
        borderColor: "#eb0f13",
        content: [
          {
            type: "paragraph",
            content: `
            I'm starting a new project called InfiniteCode, a coding practice platform built around maximizing problem-solving skills.
            `,
          },
          {
            type: "paragraph",
            content: `
            Practicing questions that appear in technical interviews is valuable. 
            Platforms like LeetCode are great, I use it to learn common patterns, strengthen data structures and algorithms, and get comfortable with interview style problems. 
            But interviews don't always give you something you've seen before.
            They test how you think, meaning they might not hand you a problem you've solved or memorized before.
            `,
          },
          {
            type: "paragraph",
            content: `
            InfiniteCode is built around the idea of adaptability.
            Alongside classic challenges, the platform will generate new problems using AI so you're constantly solving things you haven't seen before.
            The goal is to build this adaptability and confidence when facing unfamiliar questions, not just recognition of known ones.
            `,
          },
          {
            type: "paragraph",
            content: `
            I hope to take longer on this project, since it is more ambitious than my previous projects. 
            I'll be documenting the architecture, decisions, and progress as it comes together.
            `,
          }
        ],
      },
      {
        date: "February 10, 2026 - 11:53PM",
        title: "Architecture",
        borderColor: "#ffb12b",
        content: [
          {
            type: "paragraph",
            content: `
            The mission is quite simple: prepare users for the unexpected in coding interviews.
            But for that, InfiniteCode needs a clean editor, clear problems, and fast feedback.
            I'm keeping the architecture minimal on purpose for now so I can move efficiently and iterate without over-engineering.
            `,
          },
          {
            type: "paragraph",
            content: `
            The core UI should use a split layout like LeetCode, NeetCode, etc.
            Question on the left, code editor and output on the right.
            Of course, the well known splitter component should be used to resize panels.
            It's a familiar layout that would reduce the learning curve for users.
            I am choosing Monaco for the editor because it feels like Visual Studio Code and looks to already support syntax highlighting and language tooling.
            It's heavier than a basic textarea and less customizable, but worth it for user experience.
            Besides, I don't think most users would want a highly customized editor for a coding practice platform, so the tradeoff is reasonable.
            Check out Monaco here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: "https://www.npmjs.com/package/@monaco-editor/react",
            link: "https://www.npmjs.com/package/@monaco-editor/react",
          },
          {
            type: "paragraph",
            content: `
            I'll use OpenRouter SDK, still haven't decided on the AI model.
            The AI pipeline will have to handle problem generation and solution grading.
            Python retrieves classic problems from some public websites, but there's no way to really grade these problems without an AI.
            You'd need a lot of test cases for each problem to reliably grade them, and even then, there are edge cases that could slip through.
            I may not need an AI to grade solutions, but I haven't found a way to reliably test and grade code without it yet.
            But grading should be lightweight to avoid overwhelming users while still giving reasonable feedback.
            A simple prompt would suffice to check if the user's solution to the problem is correct, and maybe provide some hints if it's not.
            `,
          },
          {
            type: "paragraph",
            content: `
            Planning wise, I'm prioritizing a stable experience before adding more complexity like user accounts or rankings.
            Yes, social features will have to wait, it will help me nail the core loop first, which is: read -> solve -> test -> learn.
            I think this is the most important part to get right, and I can always build around it later.
            Overview:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Stack: Next.js + React, Typescript, Monaco editor, OpenRouter, Python for classic problem retrieval",
              "Future Stack: PostgreSQL & Supabase for user data and storage, I want to explore Supabase for this project since I haven't used it before and it seems interesting",
              "UI: shadcn, mvp: split view (question on left, editor + console on right)",
              "Considerations: Limited functionality for Monaco but better user experience, AI used to grade solutions",
              "Focus: Core loop first, extras (accounts, leaderboards) later"
            ],
          }
        ]
      },
      {
        date: "February 12, 2026 - 11:01PM",
        title: "Assessment",
        borderColor: "#0fdc8a",
        content: [
          {
            type: "paragraph",
            content: `
            While working on the grading pipeline for InfiniteCode, I've realized how powerful using AI to grade can be.
            I initially thought I could get away with just running the user's code against a set of test cases, but that approach has some major limitations.
            `,
          },
          {
            type: "paragraph",
            content: `
            The sheer size of the database of coding problems and their edge cases makes it impractical to maintain exhaustive test cases for every problem, especially as the database grows.
            Even if I did, there are always edge cases that could slip through, and users would be left wondering why their solution was marked wrong.
            With AI grading layered on top of deterministic test execution, there's more flexibility.
            For example, I made it so that the AI helps evaluate the solution and also provides some cases where the solution fails or succeeds, based on the results from actual test runs.
            One to three cases, just to give users a better understanding of where their solution stands and how it can be improved.          
            `,
          },
          {
            type: "paragraph",
            content: `
            Using AI also allows for more refined feedback.
            Instead of just marking a solution as right or wrong, the AI can provide hints, suggest optimizations, or even point out specific lines of code that could be improved.
            Some platforms are beginning to explore AI-assisted feedback, but I think concrete example cases alongside that feedback could really enhance the learning experience for users.
            `,
          },
          {
            type: "paragraph",
            content: `
            Of course, there are drawbacks to using AI for grading.
            AI models can hallucinate, and this isn't new information.
            Just relying on AI for grading could lead to inaccurate feedback if the model isn't properly constrained or if it encounters a problem it doesn't understand well.
            To mitigate this, I will have to implement strong filtering and constraints in the backend, such as structured prompts, validation against real test results, and output filtering to ensure the AI's responses are as accurate and helpful as possible.
            `,
          },
          {
            type: "paragraph",
            content: `
            All in all, while using AI for grading introduces some complexity and potential downsides, I believe the benefits in terms of flexibility, refined feedback, and scalability outweigh the drawbacks when implemented thoughtfully.
            `,
          },
          {
            type: "image",
            content: ["/ic-grading.png"],
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Green checks give me dopamine..
            `,
          },
        ]
      },
      {
        date: "February 22, 2026 - 1:01AM",
        title: "Versatility",
        borderColor: "#124dff",
        content: [
          {
            type: "paragraph",
            content: `
            It's been a while.
            I've been busy with University and career development, but I've been making progress on InfiniteCode in my free time.
            `,
          },
          {
            type: "paragraph",
            content: `
            So looking back, it looks like I left off talking about the grading aspect of the app, choosing AI for grading after weighing the tradeoffs.
            But I'm still realizing how powerful AI can be used in this platform.
            It has allowed me to add more versatility to the platform, which has opened up more use cases beyond just practicing interview questions.
            `,
          },
          {
            type: "paragraph",
            content: `
            For example, I've worked on adding a feature where users can grade their coding assignments.
            This is a common use case for students who want to get feedback on their code before submitting it officially.
            A student would just input their code into the built in code editor, and what that code is supposed to do, and the AI would handle it from there.
            It's especially good if the student feels they missed some test cases, or if they just want some feedback on how to optimize their code.
            An AI should tell you where your code is failing and give you some hints on how to fix it, which would be really useful for learning and improving coding skills.
            `,
          },
          {
            type: "image",
            content: ["/ic-ai-grade.png"],
          },
          {
            type: "image",
            content: ["/ic-ai-gen.png"],
          },
          {
            type: "paragraph",
            content: `
            Finished up the AI question generation feature as well.
            Solving those questions is a fun experience, and it's interesting to see the variety of questions it can come up with.
            `,
          },
        ]
      },
      {
        date: "March 8, 2026 - 1:19AM",
        title: "Persistence I",
        borderColor: "#0079cf",
        content: [
          {
            type: "paragraph",
            content: `
            I've been looking forward to this part of the development, which involves moving from in-memory state to real persistence.
            Until now, features functioned correctly in the UI, but data wasn't persisted when the page was closed.
            Supabase changed that, tt gave me storage, auth, and a PostgreSQL backend in one place, so I could focus more on product behavior and less on wiring up infrastructure from scratch.
            `,
          },
          {
            type: "paragraph",
            content: `
            I had a bit of prior experience with PostgreSQL, but Supabase was new for me.
            The learning curve was honestly smooth.
            The dashboard made it easy to inspect tables, test queries, and verify data while building.
            For this project, relational structure matters.
            Users, generated questions, and saved question records all map naturally to Postgres tables, and that made the data model feel clean and predictable.
            `,
          },
          {
            type: "paragraph",
            content: `
            Authentication was the next step.
            Once auth was in place, features became user-specific in a meaningful way.
            A signed-in user can save generated questions and come back later to load them, while anonymous users still get the core experience but without persistence.
            That line between “try it” and “personal workspace” is small in code, but huge in UX.
            `,
          },
          {
            type: "paragraph",
            content: `
            One detail I cared about was data safety in the UI flow.
            If a user is about to load another saved question or click “New Question” while their current generated question hasn't been saved, the app now warns them first.
            It sounds simple, but these guardrails matter.
            They prevent accidental data loss and make the app feel reliable instead of fragile.
            `,
          },
          {
            type: "paragraph",
            content: `
            Overall, this stage made the app feel real.
            Persistence, authentication, and a structured database turned temporary interactions into durable user progress.
            There's still plenty to build, but this foundation is solid.
            `,
          },
          {
            type: "image",
            content: ["/ic-db.png"],
          },
        ]
      },
      {
        date: "March 10, 2026 - 2:04AM",
        title: "Persistence II",
        borderColor: "#0079cf",
        content: [
          {
            type: "paragraph",
            content: `
            On the last blog post, I focused on saving AI generated questions with Supabase and PostgreSQL.
            Storing the problem itself solved one half of the problem.
            But while using the app, I noticed the bigger pain point was actually user progress.
            People switch tabs, refresh, change language, or come back later.
            If their code disappears, trust disappears too.
            So recently I focused on saving editor code drafts and tracking completed questions in a way that feels fast for users but still clean and affordable on the backend.
            `,
          },
          {
            type: "paragraph",
            content: `
            My first decision was local draft saving.
            I added autosave to localStorage with a debounce, keyed by user + question + language + variant.
            That means a Python draft for Question A does not overwrite a Java draft for Question A, and neither affects Question B.
            Local save is instant and free, so it gives a great UX baseline.
            Then I layered cloud persistence with Supabase for authenticated users.
            I only sync remotely when it matters (manual save, run/submit/grade, periodic dirty sync), not every keystroke.
            This reduces write volume and avoids turning autosave into a cost problem.
            `,
          },
          {
            type: "paragraph",
            content: `
            I had to make tradeoffs around consistency vs cost.
            Full real-time sync on every edit sounds nice, but it is expensive and noisy.
            So I used hash based checks to skip unchanged saves and added cooldown/rate limiting on manual draft saves.
            I also introduced conflict resolution between local and remote drafts using updated timestamps, choosing the newer draft as source of truth on load.
            For a single user coding workflow, this is simple, reliable, and easy.
            In short, I optimize for practical durability, not theoretical perfection.
            `,
          },
          {
            type: "paragraph",
            content: `
            The second feature was completion tracking after successful submit.
            I created a completed questions table and marked questions as completed only after a valid submission event, not on run/simulate.
            This avoids false positives and keeps progress meaningful.
            For generated AI questions, I used stable question keys (content based hashing fallback) so progress and drafts still map correctly even when IDs are temporary.
            The result is a smoother loop: solve -> submit -> completion recorded -> progress reflected in UI.
            This also sets up future features like streaks and personalized recommendations.
            `,
          },
          {
            type: "paragraph",
            content: `
            All in all, I was working less on adding flashy features and more on product reliability.
            My core principle was “save often locally, sync smartly remotely”.
            That gave me a strong UX, lower backend cost, and cleaner data semantics for progress tracking.
            `,
          },
          {
            type: "image",
            content: ["/ic-ql.png"],
          },
        ]
      }
    ]
  },
  {
    slug: "chess",
    title: "Chess",
    category: "Web Development",
    image: "/chess-home.jpg",
    date: "March 25, 2026 — Present",
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/chess",
    description: "A classic chess game in Next.js featuring a sleek design and smooth gameplay.",
    technologies: ["TypeScript", "React", "Next"],
    collab: true,
    collaborators: [
      {
        name: "montasirmoyen",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/111202851?v=4",
      },
      {
        name: "omaershah",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/267569221?v=4",
      }
    ],
    blogPosts: [
      {
        date: "March 25, 2026",
        title: "Endgame",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            Chess is one of those timeless games that has captivated people for centuries.
            It's a game of strategy, skill, and endless possibilities.
            I've always been fascinated by chess, and I thought it would be a fun project to build a chess game from scratch on just the Next.js framework.
            `,
          },
          {
            type: "paragraph",
            content: `
            Collaborating with my younger brother, we've created the base for a chess game that features a sleek design and smooth gameplay.
            It'll be available on the web soon, and I'd be excited to share it.
            `,
          },
          {
            type: "paragraph",
            content: `
            One of our ambitions with this project is to integrate AI as well.
            More specifically, an AI coach that will help users improve their chess skills by providing real-time feedback and suggestions during gameplay.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "domain-expansion",
    title: "Domain Expansion",
    category: "Computer Vision/ML Development",
    image: "/de-home.webp",
    date: "March 15, 2026 — Present",
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/domain-expansion",
    description: "A real-time computer vision application using hand tracking to identify Jujutsu Kaisen \"Domain Expansion\" gestures via webcam and trigger on-screen overlays.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    collab: true,
    collaborators: [
      {
        name: "montasirmoyen",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/111202851?v=4",
      },
      {
        name: "omaershah",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/267569221?v=4",
      }
    ],
    blogPosts: [
      {
        date: "March 14, 2026",
        title: "Alliance",
        borderColor: "#00e1ff",
        content: [
          {
            type: "paragraph",
            content: `
            I've been watching the season 3 of Jujutsu Kaisen during the break. 
            One of the coolest concepts in the show is the idea of a "Domain Expansion".
            It's essentially a powerful technique where the user creates a pocket dimension that guarantees their attacks will hit.
            `,
          },
          {
            type: "paragraph",
            content: `
            In the show, the users iconically perform a specific hand gesture to activate their Domain Expansion.
            I thought it would be fun to build a computer vision application that could recognize those hand gestures in real time using a webcam, and trigger some kind of on-screen overlay or effect when the gesture is detected.
            It would be a fun way to combine my curiosity in computer vision with my enjoyment of the show.
            I told my younger brother about it and he also found the project interesting, so I decided to invite him to collaborate.
            `,
          },
        ],
      },
      {
        date: "March 15, 2026",
        title: "Architecture",
        borderColor: "#e4e724",
        content: [
          {
            type: "paragraph",
            content: `
            The overall stack of this project is as simple as the concept itself.
            Python for the main application, OpenCV for video processing, and MediaPipe for hand tracking and gesture recognition.
            MediaPipe's hand tracking provides a lot of useful data points, like the positions of each finger and the angles between them.
            The main challenge is going to be accurately recognizing the specific hand gestures associated with the Domain Expansion technique.
            `,
          },
          {
            type: "paragraph",
            content: `
            The project should also be easy to demo and share, so I'm keeping that in mind as I build it out.
            `,
          }
        ],
      },
      {
        date: "March 15, 2026",
        title: "Hindrance",
        borderColor: "#e72431",
        content: [
          {
            type: "paragraph",
            content: `
            Implementing Satoru Gojo's Domain Expansion, "Unlimited Void", was quite simple because the gesture itself is simple.
            Only one hand needed and your middle finger to be wrapped behind your pointer.
            It was easy to set up a MediaPipe pipeline to recognize that gesture, and I ended up finishing it quickly while my brother was sleeping.
            `,
          },
          {
            type: "paragraph",
            content: `
            Then I went onto implementing Sukuna's Domain Expansion, "Malevolent Shrine", which was a lot more challenging.
            The gesture is more complex, requiring both hands and a specific way to position your fingers.
            MediaPipe's hand tracking can struggle with accurately recognizing that gesture, since theres 10 fingers trying to be tracked simultaneously.
            `,
          },
          {
            type: "paragraph",
            content: `
            At first, I was stumped, I had been playing around with different approaches to try to get it working, but nothing seemed to be accurate enough.
            I then set it aside, leaving it for the next day.
            `,
          },
          {
            type: "paragraph",
            content: `
            So today, I sat down with my brother and we brainstormed some solutions together.
            We noticed that the main issue was that MediaPipe was struggling to track all 10 fingers accurately, which made it hard to reliably detect the specific configuration needed for Sukuna's Domain Expansion.
            But what if we didn't need to track all 10 fingers?
            We could just focus on the pinky, ring and middle fingers, since those are the ones that are most critical for the gesture.
            `,
          },
          {
            type: "paragraph",
            content: `
            So we did, we set up a new MediaPipe pipeline that only tracked those three fingers, and we focused our gesture recognition logic on the positions of those fingers relative to each other.
            We made sure that we took into account more factors like fingertip distances and trying to find a triangle formed by the gesture.
            Soon enough, that pull request was merged, and we had a working implementation of Sukuna's Domain Expansion as well.
            `,
          },
          {
            type: "image",
            content: ["/de-sukuna.webp"],
            scale: 0.25,
          }
        ],
      },
      {
        date: "March 26, 2026",
        title: "Foundation",
        borderColor: "#ff5ddc",
        content: [
          {
            type: "paragraph",
            content: `
            We have implemented 6 domain expansions so far:
            `,
          },
          {
            type: "bulletpoints",
            content: [
              "Satoru Gojo's \"Infinite Void\"",
              "Ryomen Sukuna's \"Malevolent Shrine\"",
              "Mahito's \"Self-Embodiment of Perfection\"",
              "Yuji Itadori's Unnamed Domain Expansion",
              "Kinji Hakari \"Idle Death Gamble\"",
              "Yuta Okkotsu's \"Authentic Mutual Love\""
            ],
          },
          {
            type: "paragraph",
            content: `
            Of course, there are many more domain expansions in the series, and we plan to implement as many as we can.
            But now, the foundation is there and the architecture is set up.
            The app detects the specific hand gestures for each domain expansion and displays the text.
            But it feels incomplete, we want to add some kind of visual effect or overlay that appears when the gesture is detected, to make it more immersive and fun to use.
            `,
          },
          {
            type: "paragraph",
            content: `
            But it has been a fun project to work on, and it's been a great way to learn more about computer vision and gesture recognition.
            `,
          },
        ],
      }
    ]
  },
  {
    slug: "ask-cli",
    title: "Ask CLI",
    category: "CLI Development",
    image: "/ask-home.png",
    date: "March 21, 2026",
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/ask-cli",
    description: "A CLI tool that lets you ask questions about your code directly from the terminal.",
    technologies: ["Rust"],
    mini: true,
    blogPosts: [
      {
        date: "March 13, 2026 - 4:17PM",
        title: "Rationale",
        borderColor: "#f48734",
        content: [
          {
            type: "paragraph",
            content: `Before you read, learn what a "CLI" is, if you don't already know.`,
            link: "https://aws.amazon.com/what-is/cli/"
          },
          {
            type: "paragraph",
            content: `
            I've been using the terminal a lot more recently, and I've been thinking about how powerful it would be to have a tool that could answer questions about my code directly from the command line.
            `,
          },
          {
            type: "paragraph",
            content: `
            With advancements in AI, it's becoming increasingly common to have a local language model that can understand and analyze code.
            So why not build a CLI tool that leverages a AI or a local language model to answer questions about your codebase?
            You could have a simple command and the tool would analyze the relevant code and provide an answer right in the terminal.
            `,
          },
          {
            type: "paragraph",
            content: `
            Rust is perfect for this project because it's great for building fast and efficient CLI tools, and it has a growing ecosystem of libraries.
            I've already created the base, you can view it in the source code.
            I've been wanting to add more features and polish it up, so I thought it would be a fun mini project to work on in my free time.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "aiflash",
    title: "AIFlash",
    category: "Full-Stack Cloud Development",
    image: "/aif-flashcards.png",
    date: "Mar 18, 2026",
    status: "completed",
    githubUrl: "https://github.com/montasirmoyen/aiflash",
    liveUrl: "https://staging.d1gk5r8nqlxue7.amplifyapp.com/",
    description: "Serverless app utilizing generative AI to transform raw study notes into interactive flashcards. Built with an Angular frontend and a scalable AWS backend, it features 3D card animations and real time AI processing via OpenRouter.",
    technologies: ["Angular", "AWS", "Amplify", "Lambda", "Node.js", "S3", "AI Integration"],
    challenge: true,
    blogPosts: [
      {
        date: "March 18, 2026 - Part 1",
        title: "Continuity",
        borderColor: "#ff628e",
        content: [
          {
            type: "paragraph",
            content: `
            I really enjoyed building the Crawler and Universal Room Booker (URB) projects recently, the thrill of building projects from scratch in a day was an amazing experience.
            So much so, that I wanted to do it again, but this time with a different focus.
            I've never used AWS, and the idea of building something without worrying about servers or infrastructure is really appealing to me.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            To give more context behind my growing curiosity around serverless architecture, 
            I recently had a technical interview where the interviewer (really nice guy) was telling me how his software engineering team works. 
            He described how he and his team transitioned core backend systems to an event driven, serverless model on AWS because it reduced operational overhead and allowed them to focus purely on business logic.
            That stuck with me because up until that point, most of my projects had been focusing on features.
            But hearing someone frame architecture as a strategic advantage, something that directly impacts scalability, maintainability, and team velocity, made me realize there was a deeper layer of engineering I hadn't fully explored yet.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "March 18, 2026 - Part 2",
        title: "Architecture",
        borderColor: "#8eedbc",
        content: [
          {
            type: "paragraph",
            content: `
            I've decided on the idea of an AI powered flashcard generator for students.
            The core concept is simple: users input their raw study notes, and the app uses generative AI to transform those notes into interactive flashcards.
            The stack will simply be Angular and, of course, AWS.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            But, I feel like this project should be more for me to get comfortable with AWS and exploring the interface and services, rather than building a super polished product.
            Again, I've never used AWS, so stuff like Lambda, API gateways and S3 are all new to me.
            I want to make sure I understand how they work and how to use them effectively.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "March 18, 2026 - Part 3",
        title: "Implementation",
        borderColor: "#7cf93d",
        content: [
          {
            type: "paragraph",
            content: `
            The implementation started with the "brain" of the app: an AWS Lambda function.
            I chose Node.js for the runtime since it's lightweight and works well with the async nature of AI API calls.
            Getting the OpenAI library to actually run in the AWS environment was the first real issue.
            I had to learn about Lambda Layers to package my [node_modules] properly so the function could actually import the dependencies it needed to talk to OpenRouter.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Next, I had to bridge the gap between my Angular frontend and the backend.
            I set up an HTTP API via AWS API Gateway.
            This acted as the front door, taking the notes from my UI and triggering the Lambda.
            A huge chunk of time went into configuring the CORS.
            It's one of those things that works fine on localhost but becomes a brick wall in the cloud if you forget to explicitly tell AWS to trust your specific frontend origin.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I used S3 for static website hosting, but eventually used AWS Amplify because it handled the SSL certificates and deployment pipelines much more smoothly.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Seeing the data flow from a textarea in Angular, through an API gateway, and processed by an LLM in a Lambda was pretty satisfying.
            It felt less like writing code and more like assembling a high performance machine.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "March 18, 2026 - Part 4",
        title: "Testing",
        borderColor: "#9760ff",
        content: [
          {
            type: "paragraph",
            content: `
            Testing was a lesson in cloud latency.
            Initially, I was getting "Unknown Errors" in the console.
            After looking through CloudWatch logs, I realized my Lambda was timing out.
            The default 3 second limit wasn't enough for an AI model to think and respond.
            To improve SSL handshake performance, I increased the memory allocation and extended the timeout to 30 seconds to provide the function with more CPU capacity. 
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also ran into issues with the AI response format.
            LLMs like to talk, but my frontend needed strict JSON.
            I had to refine my system prompt to ensure the AI returned only the raw array.
            I tested this by feeding it messy, unstructured lecture notes.. like my OS notes on Logical Address Spaces and verified the cards came back correctly categorized with consistent IDs.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Once the backend was stable, I tested the end to end flow from the live Amplify URL.
            Seeing the 3D flip animations work with real data pulled from the cloud confirmed everything was finally solid.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "March 18, 2026 - Part 5",
        title: "Reflection",
        borderColor: "#115bcb",
        content: [
          {
            type: "paragraph",
            content: `
            Looking back, the biggest takeaway wasn't just learning AWS, it was learning how to think in terms of managed services.
            In my previous projects, I was responsible for everything.
            Here I learned to delegate, I let S3 handle the files and Lambda handle the logic.
            It's a shift in mindset from building a server to building a system.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also think that Full Stack in 2026 could really mean "Full-Stack Cloud".
            Understanding how to configure a VPC, manage IAM roles, and debug a distributed trace in CloudWatch is just as important as knowing how to center a div in CSS.
            The complexity moved from the code itself to the connections between the services.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            AIFlash started as a way to get comfortable with the AWS console, but it turned into a blueprint for how I want to build software going forward; fast, decoupled, and infinitely scalable.
            `,
            marginBottom: 4
          },
          {
            type: "image",
            content: ["/aif-flashcards.png"],
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Time to study..
            `,
            marginBottom: 4
          },
        ],
      }
    ]
  },
  {
    slug: "crawler",
    title: "Crawler",
    category: "Systems Development",
    image: "/crawler-home.jpg",
    date: "March 13, 2026",
    status: "completed",
    githubUrl: "https://github.com/montasirmoyen/crawler",
    description: "A high-performance application designed to recursively traverse the web by leveraging a multi-threaded architecture and robust synchronization primitives for concurrency and resource management.",
    technologies: ["C++", "CMake"],
    challenge: true,
    blogPosts: [
      {
        date: "March 13, 2026 - Part 1",
        title: "Beyond",
        borderColor: "#00e1ff",
        content: [
          {
            type: "paragraph",
            content: `
            I'm currently taking an Operating Systems course this semester.
            Professor DZ has made it interactive and interesting so far, and it's given me a much deeper understanding of how computers work under the hood.
            Threads, scheduling, synchronization, memory management.. they're only seen as exam topics if you look at them from a surface level, but when you really dive into them, you see how they shape the way we build software and systems.
            `,
          },
          {
            type: "paragraph",
            content: `
            We've been given a semester long project by the Prof called "psirver".
            It is essentially a user-space C++ server on a POSIX system that executes and monitors Python scripts over HTTP.
            It has forced me to think about process control, signal handling, and fault isolation in a way that most assignments never did.
            `,
          },
          {
            type: "paragraph",
            content: `
            I enjoyed building psirver, but I wanted a second project where I could make my own architectural tradeoffs from day one.
            So I thought of this simple web crawler.
            It's small enough to finish quickly, but deep enough to explore concurrency and resource management.
            `,
          },
          {
            type: "paragraph",
            content: `
            I gave myself a 24 hour time constraint to keep momentum high and decisions practical.
            The challenge and goal is not to build the biggest crawler on day one, but to design something correct, measurable, and easy to extend without rewriting everything later.
            `,
          }
        ],
      },
      {
        date: "March 13, 2026 - Part 2",
        title: "Architecture",
        borderColor: "#fabd5a",
        content: [
          {
            type: "paragraph",
            content: `
            I chose C++ because I want explicit control over memory, threading, and performance behavior, just like psirver.
            The stack is intentionally more minimal than other projects I've worked on.
            CMake for builds, libcurl for HTTP fetches, and STL synchronization primitives for safe shared-state coordination.
            `,
          },
          {
            type: "paragraph",
            content: `
            At a high level, the crawler runs on a producer consumer model.
            A thread-safe URL queue feeds worker threads, each worker fetches a page, extracts candidate links, normalizes and deduplicates them, and pushes new URLs back into the queue until limits are reached.
            `,
          },
          {
            type: "paragraph",
            content: `
            Key constraints are politeness and control.
            I cap crawl depth, guard against duplicate visits, and plan rate limiting per domain.
            Fast code is good, but predictable behavior under load is the real engineering target.
            `,
          },
        ],
      },
      {
        date: "March 13, 2026 - Part 3",
        title: "Implementation",
        borderColor: "#28ff85",
        content: [
          {
            type: "paragraph",
            content: `
            I started the implementation by keeping things extremely small. 
            Instead of worrying about threads or link extraction immediately, I just wanted the crawler to fetch a single page and print something useful.
            The first working version simply accepted a seed URL, fetched the HTML using libcurl, and logged that the request completed successfully.
            `,
          },
          {
            type: "paragraph",
            content: `
            Once that worked, I added the basic pipeline: a queue of URLs to visit and a set that tracks which URLs have already been crawled.
            Even though the crawler is simple right now, separating those responsibilities early made the code easier to reason about.
            The queue handles scheduling, while the visited set prevents the crawler from getting stuck revisiting the same pages.
            `,
          },
          {
            type: "paragraph",
            content: `
            After the basic flow worked, I began wiring in link extraction so the crawler could actually discover new pages.
            At this stage I wasn't aiming for perfect HTML parsing yet.
            The actual goal was just to prove that the crawler could fetch a page, extract links, and continue crawling.
            Once that feedback loop worked, the rest of the architecture started to make more sense.
            `,
          }
        ],
      },
      {
        date: "March 13, 2026 - Part 4",
        title: "Testing",
        borderColor: "#de679c",
        content: [
          {
            type: "paragraph",
            content: `
            Testing this project was mostly about observing behavior rather than writing formal unit tests.
            Since the crawler interacts with the real web, the easiest way to verify things was to run it on small, predictable sites and watch what happened.
            `,
          },
          {
            type: "paragraph",
            content: `
            I started by crawling very small sites with low page limits to confirm that URLs were being discovered and scheduled correctly.
            Logging helped a lot here, printing each crawled URL made it obvious when the crawler was revisiting pages or failing to extract links properly.
            `,
          },
          {
            type: "paragraph",
            content: `
            I also tried testing edge cases like invalid URLs and pages that returned errors.
            In those cases the crawler shouldn't crash or stall it should simply skip the page and continue working through the queue.
            That kind of resilience is important for crawlers because the web is messy and unpredictable.
            `,
          }
        ],
      },
      {
        date: "March 13, 2026 - Part 5",
        title: "Reflection",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            One thing I liked about this project is that it connects directly to concepts I'm learning in my os class.
            Queues, synchronization, worker threads.. you start seeing why these topics are on OS exams when you build something like this.
            `,
          },
          {
            type: "paragraph",
            content: `
            Giving myself a 24 hour constraint also changed how I approached the design.
            Instead of trying to make everything perfect, I focused on building something that worked first and could be improved later and that mindset made progress much faster.
            `,
          },
          {
            type: "paragraph",
            content: `
            The crawler is still pretty small, but it already feels like a solid base to experiment with.
            There are a lot of directions it could go next like better HTML parsing, smarter scheduling, or even distributed crawling.
            For now though, I'm happy that the core loop works and that I got to apply some systems concepts in a practical way.
            `,
          },
          {
            type: "paragraph",
            content: `
            This was a great way to wrap up Spring Break, I'll definitely be revisiting this project later to add more features and optimizations, but it was a fun challenge to build something like this in a short time and see how far I could get with it.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "urb",
    title: "URB",
    category: "Backend Development",
    image: "/urb-home.jpg",
    date: "February 26, 2026",
    status: "completed",
    githubUrl: "https://github.com/montasirmoyen/urb",
    description: "Universal Room Booker: a scalable backend system for managing reservable rooms with safe and concurrent booking logic.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Maven", "Docker"],
    challenge: true,
    blogPosts: [
      {
        date: "February 26, 2026 - Part 1",
        title: "Endeavor",
        borderColor: "#ff453b",
        content: [
          {
            type: "paragraph",
            content: `
            While I'm taking a break from InfiniteCode, I thought of starting a challenge to build a backend system in one day.
            It could be for any use case, but I would need to build it from zero, including setting up the database, designing the API, and implementing the core logic.
            I also would need to learn how to use Spring Boot, which is a popular Java framework for building backend applications.
            I want to do this to grow my backend development skills and see how much I would accomplish in a limited time frame.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'm settling on building a room booking system, which is a common use case for backend applications and is something that interests me.
            I'm always booking library rooms at my university, and I was curious about how the backend systems for those work, and if I could build something similar.
            This project is open source on GitHub, and anyone can use it as they please, but it also serves as proof that I built this project in a day.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'll break this challenge into sections: architecture and design decisions, implementation details, testing, and reflections on the process and what I learned.
            The goal is to have the project ready on GitHub by the end of the day and document it here.
            I'll refine the blog posts after the challenge for readability and accuracy.
            `,
          },
          {
            type: "paragraph",
            content: `
            I've always loved a challenge, so let's see how this goes.
            `,
          },
        ],
      },
      {
        date: "February 26, 2026 - Part 2",
        title: "Architecture",
        borderColor: "#dabf7c",
        content: [
          {
            type: "paragraph",
            content: `
            For the tech stack, I chose Java and Spring Boot to sharpen my Java skills and learn Spring Boot, which are widely used in the industry for building scalable backend systems.
            PostgreSQL handles the database for its reliability and support for complex queries and transactions, which are crucial for a booking system.
            Maven manages dependencies and project structure, which is standard in Java projects.
            `,
          },
          {
            type: "paragraph",
            content: `
            The core functionality allows users to create rooms with capacity limits and book them while preventing overlapping reservations.
            The main challenge is ensuring the booking logic is safe and handles concurrent requests without allowing double bookings.
            This requires proper database-level constraints and graceful API error handling.
            `,
          },
          {
            type: "paragraph",
            content: `
            The API has two main endpoints: one for creating and listing rooms, and another for creating bookings.
            The booking endpoint checks for overlapping reservations in the same room and rejects conflicting requests.
            The database schema uses JPA entities with proper validation and relationships to efficiently manage rooms and bookings.
            `,
          },
        ],
      },
      {
        date: "February 26, 2026 - Part 3",
        title: "Implementation",
        borderColor: "#39ffff",
        content: [
          {
            type: "paragraph",
            content: `
            The implementation involved setting up a Spring Boot project with Maven, configuring PostgreSQL as the database, and building the REST API.
            I created JPA entities for Room and Booking, repositories for database operations, and service layer logic for handling bookings.
            Controllers handle HTTP requests and return appropriate responses using Data Transfer Objects.
            `,
          },
          {
            type: "paragraph",
            content: `
            The booking service checks for overlapping bookings by querying the database for any existing reservations that conflict with the requested time frame.
            I used Spring Data JPA custom queries to efficiently find conflicts before creating new bookings.
            Global exception handling ensures consistent error responses across all endpoints.
            `,
          },
          {
            type: "paragraph",
            content: `
            Input validation uses Jakarta Validation annotations on DTOs to reject invalid requests early.
            Lombok reduces boilerplate code for getters, setters, and constructors.
            The project follows standard Spring Boot conventions with a clear separation of concerns across controllers, services, repositories, and entities.
            `,
          }
        ],
      },
      {
        date: "February 26, 2026 - Part 4",
        title: "Testing",
        borderColor: "#30b0c0",
        content: [
          {
            type: "paragraph",
            content: `
            Testing the room booking system required setting up an integration test environment with PostgreSQL.
            I used Spring Boot Test with JUnit 5 to create comprehensive tests that verify the API behavior end-to-end.
            The tests run against a real PostgreSQL instance to ensure the booking logic works correctly with the database.
            `,
          },
          {
            type: "paragraph",
            content: `
            I implemented Docker support to standardize the development environment and eliminate manual PostgreSQL setup.
            A Dockerfile packages the Spring Boot application, and a Docker Compose file orchestrates both the app and PostgreSQL in a single command.
            This makes it trivial for others to get the project running without installing Java, Maven, or PostgreSQL locally.
            `,
          },
          {
            type: "paragraph",
            content: `
            Test cases cover creating rooms, listing rooms, creating valid bookings, and rejecting overlapping bookings.
            The integration tests verify that the API correctly handles edge cases like back-to-back bookings and exact time overlaps.
            The test suite ensures data persists correctly in PostgreSQL and that the booking validation logic works as intended.
            `,
          }
        ],
      },
      {
        date: "February 26, 2026 - Part 5",
        title: "Reflection",
        borderColor: "#a2845e",
        content: [
          {
            type: "paragraph",
            content: `
            Building this project in a day taught me that Spring Boot significantly accelerates backend development.
            The framework handles so much boilerplate code that I could focus on business logic rather than infrastructure.
            JPA and Spring Data made database interactions straightforward, and the built-in dependency injection system kept the code organized and testable.
            `,
          },
          {
            type: "paragraph",
            content: `
            What I enjoyed most was the clean architecture that Spring Boot encourages.
            The separation between controllers, services, and repositories made the code easy to understand and modify.
            Lombok saved considerable time by eliminating repetitive getter and setter code.
            Working with PostgreSQL proved reliable, and the simple SQL queries needed for this project were easy to construct through JPA custom methods.
            `,
          },
          {
            type: "paragraph",
            content: `
            The most challenging part was handling concurrent booking attempts and ensuring the database prevents conflicts.
            I had to think carefully about the proper way to query for overlapping bookings to catch all edge cases.
            Balancing fast development with proper testing was also tricky within the time constraint.
            `,
          },
          {
            type: "paragraph",
            content: `
            With Docker support already in place, future improvements could include implementing user authentication, adding pagination for listing bookings, and including more detailed error messages.
            This one-day challenge proved that with the right tools and framework, you can build a functional backend system quickly while maintaining clean, readable code.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "resumexp",
    title: "ResumeXP",
    category: "AI & Full-Stack Development",
    image: "/rxp-analysis-2.png",
    date: "January 29, 2026 — February 3, 2026",
    status: "completed",
    projectUrl: "https://montasirmoyen.com/projects/resumexp",
    liveUrl: "https://resumexp.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/resumexp",
    description: "An AI-powered application to help users maximize their resume potential in seconds.",
    technologies: ["TypeScript", "React", "Next", "Firebase", "AI Integration"],
    blogPosts: [
      {
        date: "January 29, 2026 - 7:12PM",
        title: "Curiosity",
        borderColor: "#7cdad5",
        content: [
          {
            type: "paragraph",
            content: `
            I realized I have an AI API key lying around and I've been thinking about applications that could leverage AI to provide real value to users.
            There are a few resume analyzer applications out there that I have used, but I'm really interested in how it actually works.
            I suspect it's simpler than it sounds, so I want to have a go at it.
            `,
          },
          {
            type: "paragraph",
            content: `
            Right off the bat, I already see how the architecture of this project would look like:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "User uploads their resume, clicks a button to analyze it",
              "The file is sent to the file parsing API",
              "The API extracts the text from the resume and sends it to the AI analysis API",
              "Using careful prompt engineering, the AI analyzes the resume and provides suggestions for improvement",
              "The suggestions are sent back to the frontend and displayed to the user",
            ],
          },
          {
            type: "paragraph",
            content: `
            Looking ahead, I presume the main challenge would be making sure the resume passes the Applicant Tracking System (ATS).
            From what I've read, many companies use ATS to filter resumes before a human even sees them.
            So making sure the resume is optimized for ATS would be crucial.
            I'll have to do some research on how ATS systems work and what they look for in resumes.
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            That's all I had in mind for today, I'll continue working on this in my free time.
            Also, it felt like January flew by really quickly.. just me?
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "January 31, 2026 - 1:57AM",
        title: "Pipeline",
        borderColor: "#d24d8b",
        content: [
          {
            type: "paragraph",
            content: `
            I spent a day finishing the MVP for ResumeXP.
            I finally have the full flow working from uploading a resume, to parsing the text, to sending it through the AI pipeline and then visualizing the results in a clean UI.
            Once I started working on it, I could not stop until it was done. It felt exhilarating to see everything come together.
            `,
          },
          {
            type: "paragraph",
            content: `
            The upload and parsing flow was pretty straightforward.
            Users can drop in a PDF, DOCX or TXT file and the analysis service would handle it.
            What I used for each file type:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "'react-pdftotext' library for PDF files, which takes the file object directly and returns the extracted text",
              "'mammoth' library for DOCX files, by converting the file into to an ArrayBuffer, pass it to Mammoth itself, and grab the value field from the result",
              "TXT files or other plain texts, you can just call file.text() which is convenient",
            ],
            marginBottom: 10
          },
          {
            type: "image",
            content: ["/rxp-uploading.png"],
            marginBottom: 10
          },
          {
            type: "paragraph",
            content: `
            Why did I parse the files on the client instead of the server?
            I chose client side parsing because the text extraction requirements were straightforward and supported by lightweight browser libraries like above.
            Parsing on the client reduced backend complexity and made the upload experience feel more responsive.
            If the parsing logic became more complex or needed stricter validation, the server is always there.
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Once the text is parsed and ready, it's sent to the AI pipeline.
            This part was straightforward, and having some experience from RamAI doing something similiar helped a lot.
            I built a dedicated API route that handles the entire process of:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Validating the input",
              "Constructing a strict system prompt",
              "Sending the request to the AI model",
              "Cleaning up the AI's response"
            ],
          },
          {
            type: "paragraph",
            content: `
            I designed the analysis pipeline so the AI is constrained to return a strictly defined JSON structure.
            Returning unstructured text would make it difficult to reliably render results on the frontend, so a structured response was necessary.
            By enforcing a schema, the frontend can confidently parse and visualize sections like ratings, strengths, weaknesses, and suggestions without hesitation.
            `,
          },
          {
            type: "paragraph",
            content: `
            To make this robust, I added a JSON extraction and validation step.
            If the model includes extra text outside the expected structure, the parser strips it out and keeps only the valid JSON.
            I also added defensive error handling for missing or malformed fields, ensuring the UI never renders partial or inconsistent data.
            `,
          },
          {
            type: "paragraph",
            content: `
            On the frontend, this structured output made it straightforward to design a clean, readable interface that visualizes the analysis clearly.
            With the MVP complete, the focus now shifts to refining prompt quality, tightening formatting, and improving ATS checks to make the overall experience more polished.
            `,
            marginBottom: 10
          },
          {
            type: "image",
            content: ["/rxp-analysis.png"],
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            7.8 out of 10? Guess I know what I'm fixing next.. :p
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "February, 3, 2026 - 12:08PM",
        title: "Flow",
        borderColor: "#1d4eff",
        content: [
          {
            type: "paragraph",
            content: `
            I've been working on wrapping ResumeXP for the past couple of days.
            The few components I've been finishing up are:
            `,
          },
          {
            type: "bulletpoints",
            content: [
              "Job matching based on the user's job description input",
              "Past analysis history for authenticated users",
              "Cover letter generation",
            ],
          },
          {
            type: "paragraph",
            content: `
            There are definitely more features I could add, but I want to keep the app light for now.
            I try to keep these projects small and organized so I can actually finish them and so they're easier to revisit in the future.
            That's the same approach I took with RamAI.
            I can always expand them later if I feel the need.
            `,
          },
          {
            type: "paragraph",
            content: `
            Beyond the technical work, I'm also practicing my flow: ideation, planning, building the MVP, then refining and polishing it.
            Each project teaches me something new about how to approach the next one, and that's been the most valuable part of this whole process.
            `,
          },
          {
            type: "image",
            content: [
              "/rxp-upload-page.png",
            ],
          },
          {
            type: "paragraph",
            content: `
            Visit the site here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `
            https://resumexp.vercel.app
            `,
            link: "https://resumexp.vercel.app",
          },
          {
            type: "paragraph",
            content: `
            View the source code here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `
            https://github.com/montasirmoyen/resumexp
            `,
            link: "https://github.com/montasirmoyen/resumexp",
          },
        ],
      }
    ]
  },
  {
    slug: "ramai",
    title: "RamAI",
    category: "AI & Full-Stack Development",
    image: "/ramai-mobile.png",
    date: "January 15, 2026 — January 20, 2026",
    status: "completed",
    description: "An application assisting Suffolk University students by providing tools such as an AI chatbot and a library of 1200+ professors.",
    technologies: ["TypeScript", "React", "Python", "Data Engineering", "AI Integration", "Auditing"],
    projectUrl: "https://montasirmoyen.com/projects/ramai",
    liveUrl: "https://ram-ai.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/ramai",
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
            I agreed, they had a point, but I also had one:
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            The existence of similar projects by billion dollar companies shouldn't deter you from working on your own.
            The goal, or my goal at least, isn't to compete with them.
            It's to learn, build, and ultimately have fun in my free time because it's been my passion to do so.
            It's the kind of mentality that I have when planning and building all of my projects, and it's what has allowed me to actually enjoy working on them and not get demotivated by the fact that there are similar projects out there.
            `,
          },
          {
            type: "paragraph",
            content: `
            For me, this project was always about growing as a software developer & engineer.
            Designing a system, integrating AI and working with real data, while also creating a general usage for students.
            And honestly, if even one person uses and benefits from it, that's good enough for me.
            Every project teaches you something, and for me, that's far more valuable than trying to measure yourself against tech giants.
            `,
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
            This border color is nice.. anyways, lately I've been auditing my AI's backend instead of adding new features.
            I decided to halt feature work because I know that accuracy and trust matter a lot when it comes to RamAI's chatbot.
            If the AI gives messy information or is unable to respond to certain questions, users will quickly lose trust and stop using it.
            `,
          },
          {
            type: "paragraph",
            content: `
            I have an opinion that you may or may not agree with: an AI that confidently says incorrect stuff is worse than one that says "I don't know".
            `,
          },
          {
            type: "paragraph",
            content: `
            So, I researched and came up with questions that real users would realistically ask the chatbot.
            Then I asked those questions, recorded the responses, and analyzed them alongside a rating based on how well the AI responded.
            I wanted to see where the system actually breaks under real questions.
            `,
          },
          {
            type: "paragraph",
            content: `
            What surprised me most is how good the AI responded to many of the questions when the intent was clear.
            It's surreal to witness something you created work in a way like this.
            You honestly have to experience it if you haven't.
            `,
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
            Reason being is that I was wrapping the project up.
            Working on this has taught me a lot about building AI-integrated applications, with this project acting as the catalyst.
            From designing the architecture and UI layout, to backend filtering, auditing, and refining the AI's responses, each step ended up being a meaningful learning experience.
            It just made me realize how complex the actual AI apps we use daily are.
            `,
          },
          {
            type: "paragraph",
            content: `
            I also had a few friends try out the app.
            They liked it and said they genuinely found it useful.
            That feedback mattered more than I expected, because it helped me see the project from a user's perspective instead of just my own as the builder.
            `,
          },
          {
            type: "paragraph",
            content: `
            What stood out to me the most is how much trust and accuracy matter when working with AI. 
            It's easy to make something that looks smart, but much harder to build something that users can actually rely on, which I'm still trying to achieve. 
            That shift in mentality is something I'll carry forward.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'm stepping away from active development of major features for now.
            I'll focus on maintenance and polishing it here and there instead. 
            It's not because there's nothing left to improve, but I feel like this is a good stopping point. 
            The system works, I've learned lessons, and I'm happy with what is is right now.`,
          },
          {
            type: "paragraph",
            content: `
            The live demo for the project is public if you're interested in checking it out.
            The UI is different because I migrated from React Native to a web app, which gave me more flexibility and easier deployment.
            `,
          },
          {
            type: "paragraph",
            content: `
            Visit it here:
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `ram-ai.vercel.app`,
            link: "https://ram-ai.vercel.app/",
            marginBottom: 1
          }
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getTechIcon(tech: string): string | null {
  const normalizedTech = tech.toLowerCase().trim();
  return techStack[normalizedTech]?.src || null;
}

export function getTechDoc(tech: string): string | null {
  const normalizedTech = tech.toLowerCase().trim();
  return techStack[normalizedTech]?.doc || null;
}