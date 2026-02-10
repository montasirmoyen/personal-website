export interface Project {
  slug: string;
  title: string;
  colors?: [string, string];
  category: string;
  image: string;
  date: string;
  status: "completed" | "in-progress";
  description: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
  blogUrl?: string;
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
  projectUrl?: string;
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
    } | {
      type: "image";
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
    title: "RamAI",
    colors: ["#2e3ffa", "#1d46fd"],
    category: "AI, Web & App Development",
    image: "/ramai-home.png",
    date: "Jan 15, 2026 — Present",
    status: "completed",
    description: "An application assisting Suffolk University students by providing tools such as an AI chatbot and a library of 1200+ professors.",
    bullets: [
      "AI-powered chatbot using models like XiaomiMiMo's MiMo-V2-Flash for fast and accurate responses.",
      "Comprehensive professor discovery page with search and department filtering capabilities.",
      "Detailed professor profiles displaying ratings, departments, and student reviews.",
    ],
    technologies: ["TypeScript", "React", "Python", "Data Engineering", "AI Integration", "Auditing"],
    blogUrl: "https://montasirmoyen.com/blog/ramai",
    liveUrl: "https://ram-ai.vercel.app/",
    overview: "RamAI is an AI-integrated application designed specifically for Suffolk University students. It aggregates professor information and provides an intelligent chatbot interface to help students make informed decisions about their courses and instructors.",
    keyFeatures: [
      {
        title: "AI Chatbot Integration",
        description: "Utilizes various models such as XiaomiMiMo's MiMo-V2-Flash model for fast, accurate, and cost-effective responses to student queries about professors and courses.",
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
    outcome: `
    The application has been deployed and was tested and used by students with positive feedback since they found it useful.
    The project provided valuable experience in AI integration, backend engineering, data engineering, and building user-centric applications.
    `,
  },
  {
    slug: "mps",
    title: "MPS",
    colors: ["#2e3ffa", "#d70028"],
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
    technologies: ["Lua", "JavaScript", "JSON", "Entrepreneurship", "RBLX Studio"],
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
    slug: "resumexp",
    title: "ResumeXP",
    colors: ["#00ff8c", "#0ccaff"],
    category: "AI & Web Development",
    image: "/rxp-home.png",
    date: "Jan 29, 2026 — Present",
    status: "completed",
    description: "An AI-powered application to help users maximize their resume potential in seconds.",
    technologies: ["TypeScript", "React", "Next", "AI Integration"],
    bullets: [
      "Provides honest feedback on resumes to help users improve and stand out to potential employers.",
      "Offers a job match score feature that aligns resumes with job descriptions and suggests improvements.",
      "Generates personalized cover letters based on the user's resume for quick and efficient applications.",
    ],
    blogUrl: "https://montasirmoyen.com/blog/resumexp",
    liveUrl: "https://resumexp.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/resumexp",
    overview: "ResumeXP is an AI-powered application that helps users maximize their resume potential in seconds.",
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
    outcome: `
    The application was deployed and has been used by friends in my university to give insights on their resumes, and the feedback has been positive so far.
    The project gave valuable experience in AI integration, data analysis, and building user-centric applications.
    The source code is available on GitHub for anyone interested in exploring or contributing to the project.
    `,
  },
  {
    slug: "uniweek",
    title: "UniWeek",
    colors: ["#b3fbff", "#23d3ff"],
    category: "Full-Stack Web Development",
    image: "/uniweek-home.png",
    date: "Jan 21, 2026 — Present",
    status: "completed",
    description: "An application that visualizes university schedules from .xlsx files into clean, interactive layouts with live status updates.",
    bullets: [
      "Intelligently identifies gaps in university schedules to help students optimize their time, providing suggestions for nearby dining halls, cafes, and common areas during breaks.",
      "Provides real-time updates on the user's current class status throughout the day, indicating whether they are in class, on a break, or have upcoming classes soon.",
      "Provides info on professors if they exist in the database, including RateMyProfessors rating stars and difficulty, and links to their RamAI profile for more information.",
    ],
    technologies: ["Typescript", "React", "Next", "Python", "Firebase"],
    blogUrl: "https://montasirmoyen.com/blog/uniweek",
    liveUrl: "https://uni-week.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/uniweek",
    overview: "UniWeek is a small application that allows students to upload their university schedule in .xlsx format and visualizes it into a clean, interactive layout. The app also provides live status updates about the user's current class status.",
    keyFeatures: [
      {
        title: "Gap Analysis",
        description: "Intelligently identifies gaps in the university schedule to help students optimize their time. Provides suggestions for nearby dining halls, cafes, and common areas during breaks.",
      },
      {
        title: "Live Status Updates",
        description: "Provides real-time updates on the user's current class status throughout the day. Indicates whether the user is in class, on a break, or has upcoming classes soon. Also integrates emergency alerts from the university website.",
      },
      {
        title: "Detailed Professor Profiles",
        description: "If they exist in the data base, curated information on the professor would appear on the side panel including RateMyProfessors rating stars and difficulty. Links to their RamAI profile for more information and if they wanted to ask questions about the professor.",
      },
    ],
    challenges: [
      {
        title: "University Support",
        description: "The app only supports Suffolk University right now due to the unique format of their .xlsx schedule files. Expanding support to other universities would require creating additional parsers for each institution's specific format, as well as constructing a general dataset for the gap analysis.",
      },
      {
        title: "Grid Layout",
        description: "Creating the UI for the schedule grid layout was challenging, especially ensuring that class blocks were accurately positioned based on their start and end times. I had to calculate the correct row spans and placements dynamically to reflect the actual schedule.",
      },
    ],
    outcome: `
    The application has been deployed and was tested by friends.
    The project provided valuable experience in file parsing, data visualization, and building user-centric applications.
    The source code is available on GitHub for anyone interested in exploring or contributing to the project.
    `,
  },
  {
    slug: "scentdex",
    title: "ScentDex",
    colors: ["#ff34b1", "#ff851b"],
    category: "Front-End Web Development",
    image: "/scentdex-home.png",
    date: "Sep 2025 — Present",
    status: "completed",
    description: "Browse, study and filter the most popular fragrances from the most luxurious brands.",
    bullets: [
      "Sort and filter fragrances by various attributes such as seasons, gender, and more.",
      "View detailed fragrance profiles including ideal wear times and scent notes.",
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "JSON"],
    liveUrl: "https://scentdex.vercel.app",
    overview: "A catalog of various different fragrances. Each fragrance has information on the ideal time to wear them, and there are various sorts and filters to find your favorite fragrance.",
    keyFeatures: [
      {
        title: "Advanced Filtering System",
        description: "Features remarkable filters based on distinct features such as seasons, gender and much more.",
      },
      {
        title: "Detailed Fragrance Profiles",
        description: "Provides in-depth information on each fragrance, including ideal wear times and scent notes.",
      },
    ],
    challenges: [
      {
        title: "Fragrance Research",
        description: "I've only been really into fragrances since around 2023, when the trendiness was just starting to peak. I had decent knowledge on fragrances, but of course you can never know enough. I had to do extensive research on various fragrance notes to curate a decent dataset for the project.",
      }
    ],
    outcome: `
    The application has been deployed and provides an intuitive way to explore and discover fragrances.
    The project provided valuable experience in front-end development, handling large datasets, and building user-friendly interfaces.
    `,
  },
  {
    slug: "luxury-transport",
    title: "Luxury Transport",
    colors: ["#5512ff", "#3fffa9"],
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
    outcome: `
    The website has been deployed and is open source on GitHub.
    It can be used as a platform for providing seamless luxury transportation booking services.
    The project provided valuable experience in building user-friendly reservation systems.
    `,
  }
];

export const blogs: Blog[] = [
  {
    slug: "infinitecode",
    title: "InfiniteCode",
    category: "AI & Web Development",
    image: "/ifc-home.webp",
    date: "Feb 8, 2026 — Present",
    status: "in-progress",
    description: "Practice coding through LeetCode style problems, while also solving through AI generated problems.",
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
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Practicing questions that appear in technical interviews is valuable. 
            Platforms like LeetCode are great, I use it to learn common patterns, strengthen data structures and algorithms, and get comfortable with interview style problems. 
            But interviews don't always give you something you've seen before.
            They test how you think, not how many problems you've solved and memorized.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            InfiniteCode is built around that idea.
            Alongside classic challenges, the platform will generate new problems using AI so you're constantly solving things you haven't seen before.
            The goal is to build adaptability and confidence when facing unfamiliar questions, not just recognition of known ones.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I hope to take longer on this project, since it is more ambitious than my previous projects. 
            I'll be documenting the architecture, decisions, and progress as it comes together.
            `,
            marginBottom: 4
          }
        ],
      },
    ]
  },
  {
    slug: "resumexp",
    title: "ResumeXP",
    category: "AI & Web Development",
    image: "/rxp-analysis-2.png",
    date: "Jan 29, 2026 — Feb 3, 2026",
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
            marginBottom: 4
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
            marginBottom: 4
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
            marginBottom: 4
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
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I designed the analysis pipeline so the AI is constrained to return a strictly defined JSON structure.
            Returning unstructured text would make it difficult to reliably render results on the frontend, so a structured response was necessary.
            By enforcing a schema, the frontend can confidently parse and visualize sections like ratings, strengths, weaknesses, and suggestions without hesitation.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            To make this robust, I added a JSON extraction and validation step.
            If the model includes extra text outside the expected structure, the parser strips it out and keeps only the valid JSON.
            I also added defensive error handling for missing or malformed fields, ensuring the UI never renders partial or inconsistent data.
            `,
            marginBottom: 4
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
            marginBottom: 4
          },
          {
            type: "bulletpoints",
            content: [
              "Job matching based on the user's job description input",
              "Past analysis history for authenticated users",
              "Cover letter generation",
            ],
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            There are definitely more features I could add, but I want to keep the app light for now.
            I try to keep these projects small and organized so I can actually finish them and so they're easier to revisit in the future.
            That's the same approach I took with RamAI and UniWeek.
            I can always expand them later if I feel the need.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Beyond the technical work, I'm also practicing my flow: ideation, planning, building the MVP, then refining and polishing it.
            Each project teaches me something new about how to approach the next one, and that's been the most valuable part of this whole process.
            `,
            marginBottom: 4
          },
          {
            type: "image",
            content: [
              "/rxp-upload-page.png",
            ],
            marginBottom: 4
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
            marginBottom: 4
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
            marginBottom: 4
          },
        ],
      }
    ]
  },
  {
    slug: "uniweek",
    title: "UniWeek",
    category: "Full-Stack Web Development",
    image: "/uniweek-home.png",
    date: "Jan 21, 2026 — Jan 28, 2026",
    status: "completed",
    projectUrl: "https://montasirmoyen.com/projects/uniweek",
    liveUrl: "https://uni-week.vercel.app/",
    githubUrl: "https://github.com/montasirmoyen/uniweek",
    description: "An application that visualizes university schedules from .xlsx files into clean, interactive layouts with live status updates.",
    technologies: ["Typescript", "React", "Next", "Python", "Firebase"],
    blogPosts: [
      {
        date: "January 21, 2026 - 8:23PM",
        title: "Foundation",
        borderColor: "#d2d2d2",
        content: [
          {
            type: "paragraph",
            content: `
            I won't make the mistake of starting a project before creating the blog this time..
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            But after a fun time building RamAI, especially visualizing the data, I realized I wanted to work with data more.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I was trying to think of times at college where I just wished a tool existed.
            One of those times was when I was trying to create a visual schedule for the semester by looking back and forth at the blue text in Workday.
            I didn't even realize that Workday had a calendar view until halfway through my college career.
            Even so, their calendar view was not really user-friendly.
            Conveniently enough, the Workday developers created a button not far from it to export the .xlsx file of your schedule.
            I opened the file but it looked the exact same as on the website.
            Maybe Workday added this feature so us developers could do something with it?
            If so, I'm interested..
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Yes, it's called UniWeek for now. I'm not sure if I'll keep that name, but my eye itches when my projects don't have names.
            I'm probably going to choose Next.js and React to build this project just for UI flexibility and premium component usage.
            The MVP steps for this project is pretty simple:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Let user upload the .xlsx schedule file exported from Workday.",
              "Parse the .xlsx file and extract the data.",
              "Create a visual representation of the schedule using the data.",
              "Use the time I would have spent making my own clean schedule to do something more productive.",
            ],
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            That's all I had in mind for today, I have some quizzes to study for and lecture recordings to re-watch, so I'll leave it at that for now.
            `,
            marginBottom: 2
          },
          {
            type: "image",
            content: ["/tutorial.png"],
            marginBottom: 2
          },
        ]
      },
      {
        date: "January 24, 2026 - 1:37PM",
        title: "Ideation",
        borderColor: "#ffd438",
        content: [
          {
            type: "paragraph",
            content: `
            If you haven't read my previous post, I started developing a schedule visualization app a few days ago.
            I wanted to build something that takes an .xlsx file and turns it into a clean layout that shows the class blocks and actually reflects how students could move through their day.
            After outlining and confirming the general architecture and tech stack for the project, I started working on a small prototype.
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Parses the user's uploaded .xlsx file and extracts the data.",
              "Creates a nice visual representation of the schedule using the data, laid out on a grid with time and days of the week.",
              "Each class block opens up the side panel when clicked, showing more details about the class.",
              "Gaps between class blocks opens up the side panel when clicked, showing where the nearest dining halls, cafes, and common areas are.",
              "Gaps before the first and after the last class blocks open up the side panel when clicked, showing the nearest MBTA stations and parking garages. These two ideas are adopted so the app is less mundane.",
              "TailwindCSS use variables in #globals.css of course, so I can support both light and dark mode in the future. This also makes it easier to change the color scheme later on.",
            ],
            marginBottom: 6
          },
          {
            type: "paragraph",
            content: `
            One important thing to note is that the project has been planned and built with scalability in mind.
            I've designed the architecture so that adding support for more universities in the future would be straightforward.
            Right now, the project is able to support Suffolk University, each university would have its own parser module that knows exactly how to extract data from that specific university's schedule format.
            The only thing that would need to be done for each university is constructing the general dataset needed to render this project's unique approach of showing what the student can do between class block gaps and etc.
            The rest of the system would remain unchanged, making it easy to expand the project's reach over time if I ever decided to.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            That's all I wanted to share today, I'll continue working on the project when I have free time.
            `,
            marginBottom: 4
          },
        ]
      },
      {
        date: "January 25, 2026 - 11:14PM",
        title: "Live",
        borderColor: "#3cc0f0",
        content: [
          {
            type: "paragraph",
            content: `
            In the middle of a snow storm here in Boston, but I'm cozy enough to continue working on this..
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I've been coming up with ideas while working on some features for the app, and one of them is to add a live component to the schedule.
            What I mean by that is that the app will have a status, telling you whether you're currently in class or not, on a break, or if your next class is starting soon.
            Of course, it's better to be aware yourself of your schedule, but I think having this feature would be a nice touch.
            Below, I'll outline how I did it.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            First, I built a LiveStatus component that updates every single second using setInterval.
            The component calculates the current time in minutes since midnight and compares it against all classes scheduled for today.
            It filters the schedule to only show classes for the current day, then sorts them chronologically to find what's happening right now.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The logic was a bit intricate.
            The component needs to detect six different states:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "You're currently in class",
              "Your next class starts in 5 minutes",
              "You're on a break between classes",
              "All your classes are done for the day",
              "You have no classes today",
            ],
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Each state displays a different message.
            But what makes it feel alive is the dynamic color system.
            The status text changes color based on urgency, for example, yellow when you're in class, orange when your next class is within 5 minutes, and green when your day is done. 
            The component also displays a pulsing red dot labeled "Live" to emphasize that it's actively tracking your schedule in real time.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also had to make sure the component handles re-renders properly.
            The setInterval updates the currentTime state every second which:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Handles all the calculations",
              "Finds today's classes",
              "Detects the current class",
              "Calculates minutes until the next one",
              "Determines remaining classes",
            ],
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The secondary info line is context aware too. It shows "Today you have X classes, Y left" during the day, but switches to showing a countdown like "Next class in 45 minutes" when you're between classes.
            If the next class is over an hour away, it formats it as "Next class in 2h 15m" for readability. 
            Small details like pluralization ("1 class" vs "2 classes") and  12 hour time formatting keep the UI polished.
            I try to do these small UI touches before I actually try hard to make the UI look good, which will come later.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The hardest part was making sure everything recalculates on every render without causing performance issues.
            I initially had bugs where the status wouldn't update until I re-uploaded the schedule.
            The fix was making sure all derived values like statusColor, statusData, and secondaryInfo are computed inline during render rather than cached in useEffect or useMemo.
            This way, when currentTime updates every second, React automatically recalculates everything.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Overall, this makes the website feel at least a little more responsive and alive, exactly what I was trying to do.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Congratulations if you made it this far. I know this was one of my longer posts.. but I really wanted to share the process thoroughly.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            That's all for now though, stay warm and safe if you're in the snow storm like me!
            `,
            marginBottom: 4
          },
          {
            type: "image",
            content: ["/uniweek-live.png", "/uniweek-professor-stats.png"],
            marginBottom: 4
          },
        ]
      },
      {
        date: "January 27, 2026 - 3:58PM",
        title: "Live II",
        borderColor: "#b4ebff",
        content: [
          {
            type: "paragraph",
            content: `
            Continuing from my last post about adding live features to UniWeek... 
            I've implemented real-time emergency alerts from Suffolk University's website.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            A Python script scrapes the university homepage for the #globalAlert element, parsing the date and message using HTMLParser.
            A Next.js API route spawns the script and returns JSON to the frontend, which displays alerts above the schedule when active.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            It was a simple and quick implementation, but adds real value for students who many rely on UniWeek for their schedules.
            `,
            marginBottom: 4
          },
          {
            type: "image",
            content: ["/uniweek-alert.png"],
            marginBottom: 4
          },
        ]
      },
      {
        date: "January 28, 2026 - 10:13PM",
        title: "Conclusion",
        borderColor: "#ffb662",
        content: [
          {
            type: "paragraph",
            content: `
            I had a lot of fun building UniWeek over the past week, but I think I'll be pausing active development for now.
            It's reached a solid MVP state where users can upload their schedule and get a clean visual representation with live status updates and emergency alerts.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            It does seem like I'm burning through projects quickly lately, but I think that's okay as long as I'm learning and enjoying the process.
            I've learned a lot about parsing .xlsx files and using Python for real time data scraping, which are skills I can apply to future projects.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Honestly, I'm not even kidding when I say I'll actually use this app for the first few days whenever a new semester starts.
            Even if it's just a few days of using it every semester, it's really helpful to know what my day would look like at a glance.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            View the site at:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `https://uni-week.vercel.app/`,
            link: "https://uni-week.vercel.app/",
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            View the source code on GitHub:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `https://github.com/montasirmoyen/uniweek`,
            link: "https://github.com/montasirmoyen/uniweek",
            marginBottom: 4
          }
        ]
      }
    ]
  },
  {
    slug: "ramai",
    title: "RamAI",
    category: "AI, Web & App Development",
    image: "/ramai-mobile.png",
    date: "Jan 15, 2026 — Jan 20, 2026",
    status: "completed",
    description: "An application assisting Suffolk University students by providing tools such as an AI chatbot and a library of 1200+ professors.",
    technologies: ["TypeScript", "React", "Python", "Data Engineering", "AI Integration", "Auditing"],
    projectUrl: "https://montasirmoyen.com/projects/ramai",
    liveUrl: "https://ram-ai.vercel.app/",
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
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            For me, this project was always about growing as a software developer & engineer.
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
            This border color is nice..
            anyways, lately I've been auditing my AI's backend instead of adding new features.
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
            Reason being is that I was wrapping the project up.
            Working on this has taught me a lot about building AI-integrated applications, with this project acting as the catalyst.
            From designing the architecture and UI layout, to backend filtering, auditing, and refining the AI's responses, each step ended up being a meaningful learning experience.
            It just made me realize how complex the actual AI apps we use daily are.
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
            It's easy to make something that looks smart, but much harder to build something that users can actually rely on, which I'm still trying to achieve. 
            That shift in mentality is something I'll carry forward.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I'm stepping away from active development of major features for now.
            I'll focus on maintenance and polishing it here and there instead. 
            It's not because there's nothing left to improve, but I feel like this is a good stopping point. 
            The system works, I've learned lessons, and I'm happy with what is is right now.`,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            The live demo for the project is public if you're interested in checking it out.
            The UI is different because I migrated from React Native to a web app, which gave me more flexibility and easier deployment.
            `,
            marginBottom: 4
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
    next: "/next.webp",
    python: "/python.png",
    "ai integration": "/ai.png",
    auditing: "/audit.png",
    entrepreneurship: "/entrepreneurship.png",
    parsing: "/xlsx.png",
    "data engineering": "/data.png",
    "supabase": "/supabase.png",
    "postgresql": "/postgresql.svg",
  };

  const normalizedTech = tech.toLowerCase().trim();
  return techIcons[normalizedTech] || null;
}