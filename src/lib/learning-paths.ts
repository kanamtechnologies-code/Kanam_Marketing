export type LearningPathSlug =
  | "ai-literacy"
  | "digital-literacy"
  | "ai-python"
  | "data-analyst"
  | "cybersecurity";

export type LearningPath = {
  slug: LearningPathSlug;
  name: string;
  shortName: string;
  lessons: number;
  subtitle: string;
  /** Short summary used in meta and overviews. */
  outcome: string;
  /** Concrete learning outcomes for the path detail page. */
  learnOutcomes: string[];
  /** Skills shown on chooser tiles and detail (join for short labels). */
  skills: string[];
  capstone: string;
  marketingAngle: string;
  whoFor: string;
  prerequisite?: string;
  weeklyThemes: string[];
  lessonTitles: string[];
  image: string;
  /** Overview section visual on the path detail page. */
  overviewImage: string;
};

export const LEARNING_PATHS: LearningPath[] = [
  {
    slug: "ai-literacy",
    name: "AI Literacy",
    shortName: "AI Literacy",
    lessons: 16,
    subtitle: "What AI is, how it works, and how to use it wisely",
    outcome:
      "Students understand AI in daily life, prompting, verification, academic integrity, bias and fairness, privacy and deepfakes, and the future of work.",
    learnOutcomes: [
      "Explain what AI is (and isn’t) and where it shows up in everyday life",
      "Describe how machines sense, represent data, and learn from examples",
      "Write clearer prompts and iterate when answers are weak or wrong",
      "Verify AI output instead of trusting it — including for schoolwork",
      "Spot bias, fairness issues, deepfakes, and privacy risks",
      "Connect AI literacy to careers and responsible digital citizenship",
    ],
    skills: [
      "Stronger prompting",
      "Verify, don’t trust",
      "Bias & fairness awareness",
      "Privacy & deepfake sense",
      "AI integrity at school",
    ],
    capstone: "Be an AI-Smart Citizen",
    marketingAngle:
      "Students learn to evaluate AI — not to paste prompts for answers.",
    whoFor: "Anyone new to AI who wants clear literacy before (or alongside) coding — teens, classrooms, and self-paced learners.",
    weeklyThemes: [
      "What AI Really Is",
      "How Machines Sense & Represent",
      "How AI Learns",
      "Generative AI & LLMs",
      "Talking to AI: Prompting",
      "Using AI Well (verify + school integrity)",
      "AI, Society & Ethics",
      "Your Future With AI + capstone",
    ],
    lessonTitles: [
      "What Is AI, Really?",
      "AI Is All Around You",
      "How Computers See and Hear",
      "Turning the World Into Data",
      "How AI Learns From Examples",
      "Training, Testing, and Mistakes",
      "What Is Generative AI?",
      "Inside a Large Language Model",
      "How to Talk to AI (Prompting)",
      "Better Prompts, Better Answers",
      "Don't Trust — Verify",
      "AI at School: Help vs. Cheating",
      "Bias, Fairness, and Data",
      "Privacy, Deepfakes, and Your Footprint",
      "AI and the Future of Work",
      "Capstone: Be an AI-Smart Citizen",
    ],
    image: "/images/product/path-ai-literacy.png",
    overviewImage: "/images/product/overview-ai-literacy.png",
  },
  {
    slug: "digital-literacy",
    name: "Digital Literacy",
    shortName: "Digital Literacy",
    lessons: 16,
    subtitle: "Use technology safely, smartly, and ready for work",
    outcome:
      "Foundations of devices and the internet, files and cloud, search, misinformation, communication and collaboration, digital citizenship, content creation, copyright, security and privacy, wellbeing, troubleshooting, and career-ready digital skills.",
    learnOutcomes: [
      "Navigate devices, files, cloud storage, and how the internet fits together",
      "Search smarter and judge whether information is trustworthy",
      "Communicate and collaborate clearly online — with strong digital citizenship",
      "Create and edit content while respecting copyright and giving credit",
      "Protect accounts, privacy, and wellbeing with practical habits",
      "Troubleshoot common tech problems and connect skills to school and work",
    ],
    skills: [
      "Smart search & judgment",
      "Digital citizenship",
      "Privacy & account hygiene",
      "Cloud collaboration",
      "Content creation basics",
    ],
    capstone: "Your Digital Toolkit",
    marketingAngle:
      "Practical tech fluency and digital citizenship — not random YouTube wandering.",
    whoFor: "Anyone building stronger digital foundations for school, work, and everyday life online.",
    weeklyThemes: [
      "Digital Foundations",
      "Finding & Judging Information",
      "Communicating & Collaborating",
      "Digital Identity & Citizenship",
      "Creating Digital Content",
      "Staying Safe & Secure",
      "Wellbeing & Problem-Solving",
      "Digital Skills for the Real World + capstone",
    ],
    lessonTitles: [
      "How Computers & the Internet Work",
      "Files, Folders & the Cloud",
      "Search Like a Pro",
      "Is It True? Spotting Misinformation",
      "Communicate Clearly & Kindly Online",
      "Collaborate in the Cloud",
      "Your Digital Footprint & Reputation",
      "Being a Good Digital Citizen",
      "Create & Edit Digital Content",
      "Copyright, Licensing & Giving Credit",
      "Passwords, Scams & Account Security",
      "Protect Your Privacy & Data",
      "Healthy Tech Habits & Digital Wellbeing",
      "Troubleshoot Like a Tech Pro",
      "Digital Skills for Work & Career",
      "Capstone: Your Digital Toolkit",
    ],
    image: "/images/product/path-digital-literacy.png",
    overviewImage: "/images/product/overview-digital-literacy.png",
  },
  {
    slug: "ai-python",
    name: "AI + Python Starter Pack",
    shortName: "AI + Python",
    lessons: 14,
    subtitle: "Build your first AI helper with Python",
    outcome:
      "Real Python fundamentals framed as teaching an AI helper exact instructions: output, variables, and input → conditionals → loops → lists and dicts → functions and parameters → rule-driven helper → AI NPC → Quest Adventure Bot capstone.",
    learnOutcomes: [
      "Write and run real Python in the browser — no special install",
      "Use variables, input/output, and conditionals to make programs decide",
      "Repeat work with loops and organize information with lists and dictionaries",
      "Build reusable skills with functions and parameters",
      "Guide a rule-driven AI helper and grow it into a playable project",
      "Finish by shipping a Quest Adventure Bot you can demo and explain",
    ],
    skills: [
      "Python fundamentals",
      "Conditionals & loops",
      "Lists, dicts & memory",
      "Functions & parameters",
      "Build an AI helper",
    ],
    capstone: "Quest Adventure Bot",
    marketingAngle:
      "Students don’t just learn about coding — they write and run Python in the browser and finish with a project.",
    whoFor: "Beginners ready to write and run real Python in the browser — with live help or async practice.",
    weeklyThemes: [
      "Meet Your AI Helper",
      "Teaching AI to Decide",
      "Repeating Work",
      "Patterns & State",
      "Giving AI a Memory",
      "Reusable Skills",
      "Smart, Rule-Driven AI",
      "Capstone: Quest Adventure Bot",
    ],
    lessonTitles: [
      "My First AI Helper",
      "My AI Helper Listens",
      "My AI Makes Choices",
      "Smarter AI Rules",
      "AI Repeats Tasks",
      "Patterns and Predictions",
      "AI Notices Patterns",
      "AI Remembers Choices",
      "Organizing Memory",
      "Teaching the Bot Skills (Functions)",
      "Giving Functions Better Information (Parameters)",
      "Guiding AI with Rules",
      "Build Your AI NPC",
      "Capstone: Quest Adventure Bot",
    ],
    image: "/images/product/path-ai-python.png",
    overviewImage: "/images/product/overview-ai-python.png",
  },
  {
    slug: "data-analyst",
    name: "Data Analyst Track",
    shortName: "Data Analyst",
    lessons: 14,
    subtitle: "SQL, tables, and charts for real-world questions",
    outcome:
      "Data investigation cycle — ask → query → transform → summarize → visualize → communicate. Real SQL and charts in the browser.",
    learnOutcomes: [
      "Ask better data questions and choose the columns that matter",
      "Write SQL to filter, sort, count, and summarize real tables",
      "Combine tables with joins to sharpen an investigation",
      "Build charts (bar, pie, line, histogram, scatter) that show the answer",
      "Explain trends, distributions, and relationships in plain language",
      "Complete a data project you can present — not worksheet busywork",
    ],
    skills: [
      "SQL queries & filters",
      "Joins & summarizing",
      "Charts that communicate",
      "Read trends & spread",
      "Tell the data story",
    ],
    capstone: "Your Data Project",
    marketingAngle:
      "Students query real tables and turn answers into charts — not worksheet busywork.",
    whoFor: "Anyone ready to investigate data with SQL and charts — teens, classrooms, and self-paced learners.",
    weeklyThemes: [
      "What Data Is",
      "Choosing & Filtering",
      "Sorting & Summarizing",
      "Connecting & Sharpening (joins)",
      "Comparing with Charts (bar/pie)",
      "Trends & Spread (line/histogram)",
      "Relationships & Planning (scatter)",
      "Capstone data project",
    ],
    lessonTitles: [
      "What Is Data?",
      "Your First Query",
      "Pick the Columns You Need",
      "Find What You're Looking For",
      "Sort and Rank",
      "Count and Summarize",
      "Combine Tables",
      "Ask Better Questions",
      "Tell the Story with Charts",
      "Parts of a Whole",
      "Change Over Time",
      "Distributions",
      "Relationships",
      "Your Data Project",
    ],
    image: "/images/product/path-data-analyst.png",
    overviewImage: "/images/product/overview-data-analyst.png",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Cybersecurity",
    lessons: 16,
    subtitle: "High-school cyber fundamentals — defend systems, data, and people",
    outcome:
      "Students learn defensive cybersecurity foundations: threats and risk, account hygiene, phishing defense, networks and secure connections, malware awareness, privacy and data protection, incident response basics, ethics and responsible reporting — finishing by defending a realistic scenario.",
    learnOutcomes: [
      "Explain what cybersecurity is and why systems, data, and people need defenders",
      "Separate threats from risks and choose practical protective habits",
      "Strengthen accounts with passwords, MFA, and phishing resistance",
      "Understand networks, secure connections, and safer software choices at a high level",
      "Protect privacy, permissions, and shared/cloud data responsibly",
      "Practice incident basics and ethics — then defend a realistic scenario",
    ],
    skills: [
      "Threat & risk awareness",
      "Account & phishing defense",
      "Secure connection habits",
      "Privacy & data protection",
      "Incident response basics",
    ],
    capstone: "Defend the Scenario",
    marketingAngle:
      "Students learn to defend systems, data, and people — not how to hack.",
    whoFor:
      "Teens and beginners who want practical cyber defense skills for school, work, and everyday life online.",
    weeklyThemes: [
      "What Cybersecurity Is",
      "People & Accounts",
      "Social Engineering Defense",
      "Networks & Safe Connections",
      "Malware & Software Hygiene",
      "Privacy & Data Protection",
      "Incidents, Ethics & Careers",
      "Capstone: Defend the Scenario",
    ],
    lessonTitles: [
      "What Is Cybersecurity?",
      "Why Systems Need Defenders",
      "Threats, Risks & What Defenders Do",
      "People, Process & Technology",
      "Passwords, MFA & Account Hygiene",
      "Phishing & Social Engineering Defense",
      "Networks at a Glance",
      "Firewalls & Secure Connections",
      "Malware Awareness & Safe Software",
      "Privacy, Data & Permissions",
      "Secure Sharing & Cloud Habits",
      "Incident Response Basics",
      "Ethics & Responsible Reporting",
      "Careers in Cyber Defense",
      "Scenario Planning",
      "Capstone: Defend the Scenario",
    ],
    image: "/images/product/path-cybersecurity.png",
    overviewImage: "/images/product/overview-cybersecurity.png",
  },
];

export const TOTAL_LESSONS = LEARNING_PATHS.reduce((sum, p) => sum + p.lessons, 0);

/** Marketing total across the five paths (16+16+16+14+14). */
export const LESSONS_COUNT_LABEL = "76";

export const PATHS_COUNT_LABEL = "5";

export const PATHS_LIST_SHORT =
  "AI Literacy, Digital Literacy, AI + Python, Data Analyst, and Cybersecurity";

export const PROOF_POINTS = [
  { label: "Learning paths", value: PATHS_COUNT_LABEL },
  { label: "Interactive lessons", value: LESSONS_COUNT_LABEL },
  { label: "Schedule", value: "Flexible" },
  { label: "Format", value: "Live + async" },
] as const;

/** Designed pacing — always pair with flexibility language in UI copy. */
export const PACING_DESIGNED =
  "Designed for about 8 weeks at ~2 sessions per week";

export const PACING_FLEXIBLE =
  "The schedule flexes to your classroom, family, or self-paced needs";

export const PACING_BLURB = `${PACING_DESIGNED} — ${PACING_FLEXIBLE.toLowerCase()}.`;

export const PACING_SHORT =
  "Flexible schedule — designed for ~8 weeks at ~2 sessions/week";

export const PACING_LABEL = "Flexible — designed for ~8 weeks · ~2 sessions/week";

/** Device access — Chromebook + mobile ready, no special install. */
export const DEVICE_READY_SHORT = "Chromebook & mobile ready";

export const DEVICE_READY_BLURB =
  "Chromebook and mobile ready — works in the browser with no special software to install.";

export const DEVICE_READY_LABEL = "Chromebook & mobile ready · no install";

export const LESSON_FLOW = [
  {
    title: "Learn it",
    body: "Coach’s note, quick explainer, and word help — the goal and big idea in plain language.",
  },
  {
    title: "Do the activity",
    body: "Guided practice with instant feedback, then a from-scratch challenge and check-for-understanding.",
  },
  {
    title: "Reflect",
    body: "Ethics or reflection moments on AI, data, cyber defense, or digital citizenship.",
  },
  {
    title: "Earn XP & badges",
    body: "Progress shows on a clear roadmap — for learners, families, and instructors.",
  },
] as const;

export const DELIVERY_MODES = [
  "Live cohort / classroom",
  "After-school & weekend programs",
  "Scout troops & youth groups",
  "Hybrid",
  "Self-paced enrichment",
  "Homeschool / family use",
] as const;

/** Where Kanam fits beyond the school day — use in partner/program copy. */
export const PROGRAM_FIT_SHORT =
  "after-school programs, weekend cohorts, and Boy Scout & Girl Scout troops";

export const PROGRAM_FIT_BLURB =
  "Built for classrooms — and just as strong for after-school programs, weekend cohorts, and Boy Scout and Girl Scout troops that want Kanam live instruction plus a platform with progress adults can see.";

export const CHART_TYPES = ["bar", "pie", "line", "histogram", "scatter"] as const;

export function getLearningPath(slug: string): LearningPath | undefined {
  return LEARNING_PATHS.find((p) => p.slug === slug);
}

/** Pair weekly themes with lesson titles for a course-outline UX. */
export type WeekModule = {
  week: number;
  theme: string;
  lessons: string[];
};

export function groupLessonsByWeek(path: LearningPath): WeekModule[] {
  const weeks = path.weeklyThemes.length || 1;
  const titles = path.lessonTitles;
  const base = Math.floor(titles.length / weeks);
  const remainder = titles.length % weeks;
  let cursor = 0;

  return path.weeklyThemes.map((theme, index) => {
    const count = base + (index < remainder ? 1 : 0);
    const lessons = titles.slice(cursor, cursor + count);
    cursor += count;
    return { week: index + 1, theme, lessons };
  });
}

export const STANDARDS_BLURB =
  "Standards-aligned curriculum documentation is available for accreditation and adoption conversations. Primary mapping: CSTA K–12 CS Standards (2017), Levels 2 and 3A — also mapped to the K–12 CS Framework, ISTE Standards for Students (2016), and Common Core Math statistics/probability (especially the Data track), with forward-looking mapping toward CSTA Draft 3.0. Clear enough for teens starting out; deep enough for anyone leveling up in tech.";
