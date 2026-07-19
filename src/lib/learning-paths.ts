export type LearningPathSlug =
  | "ai-literacy"
  | "advanced-ai"
  | "ap-csp-prep"
  | "digital-literacy"
  | "cybersecurity"
  | "financial-literacy"
  | "ai-python"
  | "data-analyst";

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
  /** One plain-language focus line per week — shown in the path explorer. */
  weeklyFocus: string[];
  lessonTitles: string[];
  /** Per-session synopsis from the live lesson goal in the app. */
  lessonSynopses: string[];
  image: string;
  /** Overview section visual on the path detail page. */
  overviewImage: string;
  /** Optional highlight blocks on the path detail page (e.g. AP college credit). */
  detailCallouts?: Array<{ title: string; body: string }>;
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
      "Learn to judge AI with confidence — stronger prompts, verification, and integrity that hold up at school.",
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
    weeklyFocus: [
      "Define artificial intelligence and spot where it already shapes your day.",
      "Perception (seeing/hearing) and turning the messy world into data.",
      "Machine learning from examples, training vs. testing, and why AI gets things wrong.",
      "How tools like ChatGPT and image generators create new text and pictures.",
      "Write clear prompts, add context, and refine answers like a pro.",
      "Fact-check AI output and use it honestly for schoolwork.",
      "Bias and fairness, then privacy, deepfakes, and misinformation.",
      "Jobs and creativity, plus a capstone to become an AI-smart citizen.",
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
    lessonSynopses: [
      "Define artificial intelligence in plain language, separate real AI from sci-fi myths, and tell the difference between narrow and general AI.",
      "Spot the AI hidden in everyday apps and devices, understand the trade you make — convenience in exchange for your data — and meet the hidden human labor behind it.",
      "Understand how AI 'perceives' the world — turning pixels and sound waves into numbers it can analyze (the Big Idea of Perception) — and why that process can be unfair to some people.",
      "See how words, categories, and ideas get represented as numbers — the foundation that lets AI 'reason' about almost anything (the Big Idea of Representation) — and why what gets left out can cause real unfairness.",
      "Understand machine learning: instead of being programmed with rules, AI learns patterns from labeled examples (the Big Idea of Learning) — and why the examples chosen shape everything the AI does.",
      "Learn how we check whether a model really learned, why AI makes confident mistakes, and what 'overfitting' and 'accuracy' mean — including how a shiny accuracy number can hide dangerous failures.",
      "Understand the AI that creates new text, images, audio, and video — how it differs from older AI, where its content comes from, and the real questions that raises about ownership and consent.",
      "Open up the 'LLM' behind chatbots: tokens, the context window, and why these models 'hallucinate' confidently wrong answers — including a real case where that got someone in serious trouble.",
      "Learn the building blocks of a great prompt — role, task, context, format, and constraints — so you get useful answers instead of vague ones, and prompt in a way that's honest and respectful of others' privacy.",
      "Level up your prompting with examples, step-by-step requests, and iteration — turning a first draft answer into exactly what you need, while staying honest about how you got there.",
      "Build the habit of fact-checking AI output, recognizing hallucinations, knowing which tasks are risky to trust, and understanding your responsibility not to spread unverified claims.",
      "Draw a clear line between using AI to learn and using it to cheat, navigate the gray areas honestly, and build personal rules for effective AI use in school.",
      "Understand how AI picks up human bias from its data, why that leads to unfair outcomes, and how it can be reduced (the Big Idea of Societal Impact).",
      "Protect your privacy when using AI, recognize deepfakes and AI-driven scams, think before you share, and respect other people's consent when AI-generated media is involved.",
      "Explore how AI is changing jobs and creativity, why 'AI + human' beats either alone, what skills keep you valuable, and the fairness questions around who bears the cost of that change.",
      "Put it all together: review the big ideas, evaluate a real AI tool with a full adoption checklist, and write your own responsible-use guidelines.",
    ],
    image: "/images/product/path-card-ai-literacy.png",
    overviewImage: "/images/product/overview-photo-ai-literacy.png",
  },
  {
    slug: "advanced-ai",
    name: "Advanced AI",
    shortName: "Advanced AI",
    lessons: 16,
    subtitle: "Build, evaluate, and audit AI systems — beyond prompting",
    outcome:
      "Students go past consumer AI use into framing problems, training and evaluating models, RAG and agents, fairness audits, AI security, and shipping a thin AI system they can demo and defend. Aligned to CSTA AI specialty pathways.",
    learnOutcomes: [
      "Frame AI problems with clear tasks, metrics, and human review",
      "Work with training data — features, labels, leakage, and dataset bias",
      "Train classifiers and read confusion matrices, precision, and recall",
      "Explain LLMs beyond prompting: tokens, embeddings, RAG, and agents",
      "Choose among prompt, RAG, and fine-tune — then evaluate with a harness",
      "Audit fairness and AI security risks, then ship and defend a capstone system",
    ],
    skills: [
      "ML evaluation labs",
      "RAG & agents",
      "Fairness audits",
      "AI security awareness",
      "Ship & defend a system",
    ],
    capstone: "Demo, Audit & Defend",
    marketingAngle:
      "Move from prompting to building — train, evaluate, retrieve, audit, and ship AI systems like a creator, not just a consumer.",
    whoFor:
      "Grades 10–12 (strong 9ths welcome) who already understand AI basics and want a specialty pathway beyond chat tools.",
    prerequisite:
      "Recommended: AI Literacy plus Python & AI Foundations (or equivalent coding basics).",
    weeklyThemes: [
      "Frame & Data",
      "Classical ML You Can See",
      "Neural Nets & Vision",
      "LLMs Beyond Prompts",
      "Agents & Evaluation",
      "Stack Choices & Audits",
      "Ship & Integrate",
      "Capstone",
    ],
    weeklyFocus: [
      "Problem framing, task types, features/labels, leakage, and dataset bias.",
      "Train classifiers, read confusion matrices, precision/recall, and baselines.",
      "Layers, overfitting, and computer-vision pipelines with privacy checks.",
      "Tokens, embeddings, evaluation, and retrieval-augmented generation (RAG).",
      "Tool-using agents, budgets, human gates, and evaluation harnesses.",
      "Prompt vs RAG vs fine-tune, fairness audits, and AI security.",
      "MLOps lite — deploy, monitor, drift — plus multimodal system design.",
      "Build a thin AI system, then demo, audit, and defend it.",
    ],
    lessonTitles: [
      "AI Systems: Framing Problems Worth Solving",
      "Data for Machine Learning",
      "Train Your First Classifier",
      "Neural Networks: From Neurons to Overfitting",
      "Computer Vision Pipelines",
      "Language Models Beyond Prompting",
      "Retrieval-Augmented Generation (RAG)",
      "Agents, Tools & Workflows",
      "Evaluation Harnesses & Experiment Tracking",
      "Fine-Tuning vs Prompting vs RAG",
      "Bias Audits & Fairness Metrics",
      "Privacy, Security & Model Abuse",
      "MLOps Lite: Deploy, Monitor, Drift",
      "Multimodal & Tool-Using Systems",
      "Capstone Studio: Build Your AI System",
      "Capstone: Demo, Audit & Defend",
    ],
    lessonSynopses: [
      "Define a problem worth solving with AI — task type, success metric, and where a human stays in the loop.",
      "Prepare data for learning: features, labels, leakage risks, and how biased datasets shape unfair models.",
      "Train a first classifier and read a confusion matrix — precision, recall, and when accuracy lies.",
      "Build intuition for neural nets: layers, overfitting, and why evaluation on held-out data matters.",
      "Walk a computer-vision pipeline and check privacy risks when models see faces and scenes.",
      "Go past prompting into tokens, embeddings, hallucination failure modes, and how to evaluate LLM output.",
      "Use retrieval-augmented generation so answers cite a corpus instead of inventing facts.",
      "Design tool-using agents with budgets, permissions, and human gates before action.",
      "Build a simple evaluation harness and track experiments so improvements are measurable.",
      "Choose among prompting, RAG, and fine-tuning — and justify the stack for cost, risk, and quality.",
      "Run a fairness-minded audit with concrete metrics and mitigation options.",
      "Defend against prompt injection, data leakage, and common model-abuse patterns.",
      "Ship with MLOps lite: deploy, monitor, and watch for drift after launch.",
      "Orchestrate multimodal and tool-using systems without losing accountability.",
      "Build a narrow vertical-slice AI system with a problem brief, method, and eval table.",
      "Demo your system, present the audit, and defend limitations like a professional.",
    ],
    image: "/images/product/path-card-advanced-ai.png",
    overviewImage: "/images/product/overview-photo-advanced-ai.png",
    detailCallouts: [
      {
        title: "Built as a specialty pathway",
        body: "Designed above AI Literacy and beside Python & AI — aligned to CSTA AI specialty / creator outcomes (data, ML, evaluation, and impact), not a watered-down survey of chatbots.",
      },
    ],
  },
  {
    slug: "ap-csp-prep",
    name: "AP CSP Prep",
    shortName: "AP CSP Prep",
    lessons: 16,
    subtitle:
      "College Board–aligned exam prep — Big Ideas, Create PT studio, and AP-style practice",
    outcome:
      "Instructor-built AP Computer Science Principles prep: all five Big Ideas, Create Performance Task practice, two 30-question practice tests, and a 40-question final exam. Prep only — not an official AP course; students still take the College Board exam through their school.",
    learnOutcomes: [
      "Master AP CSP Big Ideas: creative development, data, programming, systems & networks, and impact",
      "Trace College Board–style pseudocode — variables, conditionals, loops, lists, and procedures",
      "Practice Create Performance Task requirements (list, procedure, selection, iteration, PPR)",
      "Build exam stamina with two 30-question practice tests and a 40-question final",
      "Review with Big Idea score breakdowns and AP-style select-two items",
      "Walk into the official May exam more prepared — then pursue college credit where accepted",
    ],
    skills: [
      "AP Big Ideas coverage",
      "Create PT studio",
      "2 practice tests",
      "40-question final",
      "Exam readiness",
    ],
    capstone: "Create PT + Exam Gauntlet",
    marketingAngle:
      "Built by experienced IT instructors for the real AP CSP exam — Create PT practice, two practice tests, and a final so high schoolers can earn a score colleges respect.",
    whoFor:
      "High school students preparing for the AP Computer Science Principles exam — self-paced or with a cohort.",
    prerequisite:
      "Not an official College Board AP course. Kanam prepares you; you still register for and take the official exam (and submit Create PT) through your school / College Board.",
    weeklyThemes: [
      "Creative Development",
      "Data",
      "Programming I",
      "Programming II",
      "Programming III",
      "Systems & Networks",
      "Impact of Computing",
      "Create PT & Exams",
    ],
    weeklyFocus: [
      "Purpose, collaboration, iteration, testing, and documentation (Big Idea 1).",
      "Bits/binary, abstraction, compression, metadata, bias, and insight from data (Big Idea 2).",
      "Variables, expressions, strings, conditionals, and Boolean logic (Big Idea 3).",
      "Iteration, lists, and traversal — patterns you’ll need on the Create PT.",
      "Procedures, parameters, abstraction, algorithms, and efficiency tradeoffs.",
      "Hardware/software, fault tolerance, packets, protocols, DNS, and HTTPS (Big Idea 4).",
      "Innovations, equity, legal/ethical issues, IP, and privacy (Big Idea 5).",
      "Create Performance Task studio, then gated practice tests and a final exam after all lessons.",
    ],
    lessonTitles: [
      "Creative Development: Purpose, Collaboration & Iteration",
      "Development Process, Testing & Documentation",
      "Bits, Binary & Data Abstraction",
      "Compression, Metadata, Bias & Insight from Data",
      "Variables, Expressions & Strings",
      "Conditionals & Boolean Logic",
      "Iteration & Loops",
      "Lists & Traversal",
      "Procedures, Parameters & Abstraction",
      "Algorithms, Efficiency, Searching & Sorting",
      "Computing Systems & Fault Tolerance",
      "The Internet: Packets, Protocols & Trust",
      "Computing Innovations, Society & Equity",
      "Legal & Ethical Issues: IP, Privacy & Open Source",
      "Create Performance Task Studio",
      "AP-Style Practice Gauntlet & Exam Readiness",
    ],
    lessonSynopses: [
      "Explain purpose vs function, collaboration value, and iterative development the way AP CSP rewards.",
      "Document, test, and refine — knowing testing finds errors but never proves a program is perfect.",
      "Convert between binary and decimal, explain overflow vs roundoff, and use abstraction with data.",
      "Compare lossless vs lossy compression, read metadata, and separate correlation from causation.",
      "Use variables, expressions, and strings with College Board–style pseudocode conventions.",
      "Trace conditionals and Boolean logic — including nested IF patterns common on the exam.",
      "Master REPEAT n TIMES, REPEAT UNTIL, and FOR EACH — plus off-by-one and infinite-loop traps.",
      "Work with lists: APPEND/INSERT/REMOVE, traversal, filter, and accumulate patterns.",
      "Write procedures with parameters that change behavior — procedural vs data abstraction.",
      "Compare linear vs binary search, reasonable vs unreasonable time, heuristics, and undecidable problems.",
      "Explain computing systems, redundancy, and fault tolerance in AP-ready language.",
      "Trace packets, IP/TCP, DNS, HTTP vs HTTPS, bandwidth vs latency, and certificate trust.",
      "Evaluate computing innovations for equity, access, and unintended consequences.",
      "Apply IP, Creative Commons, open source, PII, encryption, MFA, and phishing concepts.",
      "Practice a Create PT program with list + procedure + selection + iteration and PPR-ready segments.",
      "Run a mixed AP-style gauntlet and leave with a clear exam-readiness plan.",
    ],
    image: "/images/product/path-card-ap-csp-prep.png",
    overviewImage: "/images/product/overview-photo-ap-csp-prep.png",
    detailCallouts: [
      {
        title: "What’s included beyond the 16 lessons",
        body: "Two timed practice tests (30 AP-style questions each) and a 40-question final exam — unlocked after the lessons. Includes select-two items and Big Idea score breakdowns. Prep simulations only — not official College Board exams or scores.",
      },
      {
        title: "College credit & what families can save",
        body: "AP CSP is designed as a first-semester intro college computing course for nonmajors. 1,200+ colleges publish credit or placement policies for qualifying scores — often 3–4 credit hours (policies vary; check College Board’s AP Credit Policy Search). When a college awards credit, families commonly avoid roughly $1,200–$3,000+ in tuition for that course at many public universities, and more at private schools. Official AP exam fee is separate (~$99 in the U.S.). Kanam prep does not itself award college credit.",
      },
    ],
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
      "Master the tools of modern life — search, privacy, collaboration, and digital judgment that travel with you.",
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
    weeklyFocus: [
      "How devices, software, and the internet actually work — and how to manage your files.",
      "Search smart, then tell reliable information from misinformation.",
      "Communicate clearly and kindly online and work together in the cloud.",
      "Your digital footprint, reputation, and being a positive digital citizen.",
      "Make and edit content, and use it legally with proper credit.",
      "Strong security habits and protecting your privacy and personal data.",
      "Healthy tech habits, plus troubleshooting tech problems like a pro.",
      "Workplace-ready digital skills and your personal digital toolkit.",
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
    lessonSynopses: [
      "Understand the basic parts of a computer (hardware vs software), what an operating system does, and how the internet, web, and cloud move information.",
      "Organize files in folders, understand file types and extensions, know the difference between save and save-as, and use cloud storage with sync and backups.",
      "Find reliable information quickly using strong keywords, search operators, and filters — and know why the top result isn't always the best.",
      "Evaluate the credibility of online information, spot misinformation, and fact-check using lateral reading and the SIFT method.",
      "Communicate effectively and respectfully across email, chat, and posts — understanding tone, audience, netiquette, and the difference between casual and professional messages.",
      "Work together effectively using shared documents, comments, version history, and video meetings — the way modern schools and workplaces operate.",
      "Understand what a digital footprint is, that online actions can be permanent and public, and how to manage your online reputation for school, jobs, and life.",
      "Act responsibly, safely, and kindly in online communities — showing empathy, standing up to cyberbullying, reporting harm, and contributing positively.",
      "Create and edit clear, well-designed digital content — documents, images, and audio/video — using simple formatting and design principles, make it accessible to everyone, and export the right formats for school, college apps, and first jobs.",
      "Use other people's content legally and ethically — understand copyright, licenses, Creative Commons, public domain, and fair use, avoid plagiarism, and give proper credit (including for AI-generated work) in school projects, scholarship videos, and portfolios.",
      "Protect your accounts and devices with strong unique passwords, password managers, and two-factor authentication — and learn to spot phishing, scams, and malware before they catch you, including fake internship and college-portal messages.",
      "Understand how your personal data is collected and used online, and take control with privacy settings, smart app permissions, and more careful sharing — including what colleges, scholarships, and employers can see.",
      "Build healthy technology habits — balancing screen time, protecting your focus and sleep, caring for your mental health, and using your body well — including during college apps, exams, and first-job remote work.",
      "Solve everyday technology problems with a calm, logical process — the same problem-solving pros use — and know how to find help and ask good questions when college portals, job sites, or shared docs break.",
      "Build the digital skills employers expect in almost every modern job — professional communication and email, a positive online presence, productivity and spreadsheet basics, remote collaboration, and readiness for college apps, internships, and first jobs.",
      "Pull the whole Digital Literacy track together — review the big areas, self-assess your digital habits, and build a personal 'digital readiness' action plan for school, life, college apps, first jobs, and a future career in tech.",
    ],
    image: "/images/product/path-card-digital-literacy.png",
    overviewImage: "/images/product/overview-photo-digital-literacy-v3.png",
  },
  {
    slug: "ai-python",
    name: "Python & AI Foundations",
    shortName: "Python & AI",
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
      "Write and run real Python in the browser — then ship a working AI helper you built yourself.",
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
    weeklyFocus: [
      "Output, variables, and input — your AI says hello and listens.",
      "Conditionals: if / else and chained if / elif / else rules.",
      "for loops and combining a loop with a rule to make patterns.",
      "Loops that build up a value (counters/accumulators) + a checkpoint review.",
      "Lists and dictionaries — storing many values and looking them up by name.",
      "Functions and parameters — package a skill once, reuse it everywhere.",
      "Rules inside functions, then plan your capstone NPC.",
      "Craft an NPC brain, then ship a Quest Adventure Bot that combines the whole track.",
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
    lessonSynopses: [
      "Write your first Python program: use a variable + print() to introduce your AI helper.",
      "Use input() to collect information and respond using the user’s input.",
      "Use if / else to make your AI respond differently based on input.",
      "Use if / elif / else to make your AI follow multiple rules in order.",
      "Use a for loop to repeat instructions a specific number of times.",
      "Combine a loop + a rule to create a predictable pattern.",
      "Use a loop + a changing value to create a pattern you can predict.",
      "Use a list to remember multiple choices over time.",
      "Use a dictionary (key → value) to store information with meaning.",
      "Use functions to package a skill and reuse it without rewriting code.",
      "Use a parameter so one function can work with different details.",
      "Use if/else rules inside a function to control behavior based on the parameter.",
      "Modify a rule-based NPC, add memory, and explain which rule ran — like a real game AI builder.",
      "Invent your own adventure, build a rule-based AI bot people can talk to, then play it live in Adventure mode — your final AI + Python product.",
    ],
    image: "/images/product/path-card-ai-python.png",
    overviewImage: "/images/product/overview-photo-ai-python-v2.png",
  },
  {
    slug: "data-analyst",
    name: "Data Analyst",
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
      "Ask better questions of real data — SQL, charts, and a story you can defend.",
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
    weeklyFocus: [
      "Rows, columns, and your first SELECT queries.",
      "Pick the columns you need and filter rows with WHERE.",
      "ORDER BY for ranking, then COUNT / SUM / AVG with GROUP BY.",
      "JOIN two tables, then layer WHERE + GROUP BY + HAVING.",
      "Bar charts (compare categories) and pie charts (parts of a whole).",
      "Line charts (change over time) and histograms (distributions).",
      "Scatter plots (are two numbers related?) + plan your capstone.",
      "Run a full investigation: explore → join → summarize → visualize → conclude.",
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
    lessonSynopses: [
      "Learn rows, columns, and your first SQL commands — one exercise at a time, then put them together.",
      "Write and run complete SQL queries — see every row, use LIMIT, and pick the columns you care about.",
      "Choose exactly the columns you want, control their order, and use DISTINCT to remove duplicates.",
      "Use WHERE to filter rows — match text, compare numbers, and combine conditions with AND / OR.",
      "Use ORDER BY to sort rows, flip the direction with DESC, and combine with LIMIT to find top results.",
      "Turn many rows into one answer with COUNT, SUM, and AVG — then break totals down by group with GROUP BY.",
      "Use JOIN to connect two tables — match orders to the students who placed them with a shared key.",
      "Stack clauses together — filter, group, and use HAVING to ask sharper questions of your data.",
      "Shape query results into a chart — a label column and a number column — and let sorting tell the story.",
      "Use a pie chart to show how each item is a slice of all the orders — and learn when a pie helps and when it misleads.",
      "Use a line chart to show how a number changes over time — and read the trend, peaks, and dips across a week.",
      "Use a histogram to see how a set of numbers is spread out — where scores cluster, and how high and low they reach.",
      "Use a scatter plot to see whether two numbers are related — does more studying go with higher scores?",
      "Put it all together — explore, join, summarize, and rank to answer a real question: who spent the most?",
    ],
    image: "/images/product/path-card-data-analyst.png",
    overviewImage: "/images/product/overview-photo-data-analyst.png",
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
    capstone: "Defend & Justify",
    marketingAngle:
      "Defend systems, data, and people — practical cyber fundamentals without the hacker fantasy.",
    whoFor:
      "Teens and beginners who want practical cyber defense skills for school, work, and everyday life online.",
    weeklyThemes: [
      "Principles & Ethics",
      "Threats & Human Risk",
      "Identity & Access Control",
      "Networks & Defense Architecture",
      "Cryptography & Trust Models",
      "Hardening & Incident Response",
      "Attacks, Privacy & Tradeoffs",
      "Risk Analysis & Capstone",
    ],
    weeklyFocus: [
      "Define cybersecurity goals, evaluate ethical constraints, and apply the CIA triad with authentication.",
      "Analyze how malware and social engineering affect sensitive data — and recommend first responses.",
      "Compare credential protections (hashing, MFA) and design least-privilege access with usability tradeoffs.",
      "Evaluate network reliability (routers, switches, topology, addressing) and recommend firewall/config controls.",
      "Compare encryption and hashing approaches, then evaluate HTTPS/certificate trust and its limits.",
      "Recommend hardening/patching priorities, then design logging, monitoring, and incident workflows.",
      "Map attack patterns and program-security issues, then evaluate OSINT/privacy risks and legal-ethical tradeoffs.",
      "Select and justify controls by feasibility, ethics, and usability — then defend a full scenario plan.",
    ],
    lessonTitles: [
      "Cybersecurity Principles & Ethics",
      "CIA Triad, Auth & Tradeoffs",
      "Malware Impact on Sensitive Data",
      "Social Engineering Defense",
      "Credentials, Hashing & MFA",
      "Access Control & Least Privilege",
      "Network Architecture for Defenders",
      "Firewalls, Ports & Secure Config",
      "Cryptography & Secure Transmission",
      "HTTPS, Certificates & Trust",
      "System Hardening & Patching",
      "Logging, Monitoring & Incidents",
      "Attack Patterns & Program Security",
      "OSINT, Privacy & Ethics",
      "Risk Analysis & Control Selection",
      "Capstone: Defend & Justify",
    ],
    lessonSynopses: [
      "Evaluate ethical and social impacts of cybersecurity choices; explain tradeoffs among protecting data, systems, and people; and justify why authorized use is a non-negotiable professional and legal boundary.",
      "Recommend authentication measures that protect CIA goals; compare usability vs. security tradeoffs across passwords, MFA, biometrics, and tokens; and explain how weak auth cascades into Confidentiality, Integrity, and Availability failures.",
      "Analyze how malware categories affect the Confidentiality, Integrity, and Availability of sensitive data; give case-based examples of impact; and recommend feasible defender responses that reduce risk without unauthorized experimentation.",
      "Analyze how social engineering and phishing impact accounts and sensitive data; recommend layered, feasible defenses; and justify verify-and-report habits that protect individuals and school communities.",
      "Compare MFA types, hashing+salting, and password-manager approaches; recommend credential protections with usability tradeoffs; and explain how developers protect stored credentials without exposing secrets.",
      "Recommend least-privilege designs with usability tradeoffs; compare RBAC approaches and admin vs standard accounts; and evaluate shared-account risks for accountability and offboarding.",
      "Evaluate how routers, switches, servers, topology, and addressing affect network scalability and reliability; describe impacts of bandwidth, load, delay, and topology; and diagnose path failures like DNS vs link issues — without attack techniques.",
      "Recommend firewall and secure-configuration measures; compare default-deny vs default-allow; and explain security vs usability/availability tradeoffs for ports, exposure, and segmentation.",
      "Compare symmetric encryption, asymmetric encryption, and hashing; model how software protects data in secure transmission; and evaluate tradeoffs of crypto choices (speed, key distribution, integrity vs confidentiality) — without treating crypto as a complete defense.",
      "Evaluate what the padlock and certificates actually prove (and their trust limits); compare HTTPS with other security measures and with physical protections; and recommend layered checks when a warning, lookalike domain, or untrusted network appears.",
      "Recommend hardening and patching actions by feasibility and ethics; explain tradeoffs such as uptime vs timely patching and usability vs lockdown; and justify prioritization, change management, and recovery plans for school/club systems.",
      "Recommend detection and incident-response measures for realistic scenarios by efficiency and feasibility; design a simple IR playbook with clear roles; and justify what to log, preserve, escalate, and practice before a real incident.",
      "Analyze how common attack patterns affect sensitive data and availability; explain program-security issues that can compromise software (unsafe input handling, insecure secret storage, dependency risk, misconfiguration) from a defender/developer-hygiene view; and map each pattern to layered controls — without learning how to exploit.",
      "Evaluate privacy concerns from automated and nonevident data collection; evaluate social, economic, legal, and ethical implications of privacy versus safety; and recommend defensive minimization habits — without offensive OSINT recipes or targeting others.",
      "Analyze risk with assets, threats, vulnerabilities, likelihood, and impact; recommend controls by efficiency, feasibility, and ethics; compare alternative measures; and explain tradeoffs among mitigate, avoid, transfer, and accept — including residual risk.",
      "Synthesize the cybersecurity track into a justified security plan for a school club — recommend prioritized controls, compare alternatives, and justify each choice with feasibility, usability, and ethics tradeoffs, not just a control checklist.",
    ],
    image: "/images/product/path-card-cybersecurity.png",
    overviewImage: "/images/product/overview-photo-cybersecurity.png",
  },
  {
    slug: "financial-literacy",
    name: "Financial Literacy",
    shortName: "Financial Literacy",
    lessons: 16,
    subtitle: "Budgets, credit, investing, and money decisions for real life",
    outcome:
      "Money goals, needs vs wants, paychecks and taxes, banking, budgeting, credit, debt, saving, investing basics, insurance, scams, college costs, and a first-year money plan capstone.",
    learnOutcomes: [
      "Set money goals and tell needs from wants with clear tradeoffs",
      "Read a paycheck and understand income, taxes, and banking basics",
      "Build a budget, track spending, and start an emergency fund habit",
      "Explain credit scores, interest, loans, and common debt traps",
      "Compare saving vs investing and recognize consumer scams",
      "Create a first-year money plan they can explain to a parent or mentor",
    ],
    skills: [
      "Budgeting & cash flow",
      "Credit & debt awareness",
      "Saving & growth basics",
      "Consumer protection",
      "College & job money decisions",
    ],
    capstone: "Your First-Year Money Plan",
    marketingAngle:
      "Budgets, credit, investing, and big decisions — money skills for real independence.",
    whoFor:
      "Teens and families who want clear, responsible money skills for school, work, and the first years of independence.",
    weeklyThemes: [
      "Money & Goals",
      "Income & Banking",
      "Budgeting & Cash Flow",
      "Credit & Debt",
      "Saving & Investing",
      "Protection & Consumer Rights",
      "Taxes, College & Big Decisions",
      "Capstone: First-Year Money Plan",
    ],
    weeklyFocus: [
      "What money is for, goals, values, and smart needs-vs-wants decisions.",
      "Paychecks and taxes basics, then checking, savings, and debit vs credit cards.",
      "Build a real budget, track spending, and start an emergency fund.",
      "Credit scores and reports, then interest, loans, and avoiding debt traps.",
      "Compound growth, saving strategies, and investing basics with risk in mind.",
      "Insurance basics, then scams, fraud, and consumer rights.",
      "First-job taxes and pay stubs, then college costs, aid, and student loan awareness.",
      "Big money tradeoffs, then ship your First-Year Money Plan.",
    ],
    lessonTitles: [
      "Money, Goals & You",
      "Needs, Wants & Tradeoffs",
      "Paychecks, Income & Taxes",
      "Banks, Accounts & Cards",
      "Build a Budget That Works",
      "Spending Tracking & Emergency Funds",
      "Credit Scores & Reports",
      "Interest, Loans & Debt Traps",
      "Saving & Compound Growth",
      "Investing Basics & Risk",
      "Insurance: Protecting What Matters",
      "Scams, Fraud & Consumer Rights",
      "Taxes & Your First Job",
      "College Costs, Aid & Loans",
      "Big Money Decisions",
      "Capstone: Your First-Year Money Plan",
    ],
    lessonSynopses: [
      "Explain money as a tool (not an identity), tell short-, medium-, and long-term goals apart, and write SMART-ish money goals that fit a high school life.",
      "Tell needs from wants in everyday teen decisions, explain opportunity cost, spot advertising's influence, and practice delayed gratification without pretending wants are \\\"bad.\\\"",
      "Distinguish gross pay from net pay, recognize common paycheck deductions at a teen level, understand what a W-4 is for, and see how your human capital shapes future income — without filing taxes for you.",
      "Compare checking and savings, explain debit vs. credit at a conceptual level, spot common fees, and describe FDIC (and NCUA) insurance in plain English.",
      "Build a simple budget with clear categories, try 50/30/20 as one model (not the only one), and understand zero-based budgeting in plain English.",
      "Track spending without obsessive guilt, use sinking funds for planned irregular costs, and start a small emergency fund for true surprises.",
      "Explain what credit is, summarize major FICO factor categories at overview level, describe free annual credit reports, and bust common credit myths.",
      "Define APR and principal, explain how interest grows balances, and recognize debt traps like payday loans, risky BNPL use, and minimum-payment cycles — educational awareness only.",
      "Explain interest, compounding, pay-yourself-first, and the time value of money — and build habits that let your savings grow without get-rich promises.",
      "Describe stocks, bonds, and funds at a high level; explain diversification and risk vs return; and frame investing as a long-horizon habit for teens — not day trading.",
      "Explain insurance as risk transfer; define premium and deductible; and apply auto, renters, and health insurance concepts at a teen-appropriate level.",
      "Spot phishing and money scams, understand identity theft basics, practice compare-before-you-buy habits, and know conceptual paths for consumer complaints.",
      "Explain why taxes exist, lightly compare W-2 vs 1099 work, build awareness of filing basics, and bust common refund myths — educational, not tax advice.",
      "Distinguish sticker price from net price, compare grants vs loans, build FAFSA awareness, and practice comparing financial aid offers carefully.",
      "Apply decision frameworks to cars, phones, and housing tradeoffs — weighing total cost, opportunity cost, and flexibility without prestige pressure.",
      "Synthesize the Financial Literacy track into a practical 12-month plan for your first year after high school — college, work, or a mix — without get-rich promises.",
    ],
    image: "/images/product/path-card-financial-literacy.png",
    overviewImage: "/images/product/overview-photo-financial-literacy.png",
  },
];

export const TOTAL_LESSONS = LEARNING_PATHS.reduce((sum, p) => sum + p.lessons, 0);

/** Marketing total across all paths (16×6 + 14×2). */
export const LESSONS_COUNT_LABEL = String(TOTAL_LESSONS);

export const PATHS_COUNT_LABEL = String(LEARNING_PATHS.length);

export const PATHS_LIST_SHORT =
  "AI Literacy, Advanced AI, AP CSP Prep, Digital Literacy, Cybersecurity, Financial Literacy, Python & AI, and Data Analyst";

export const PROOF_POINTS = [
  {
    value: "Industry trainers",
    label: "Instructors with real tech experience",
  },
  {
    value: "CSTA + AP prep",
    label: "School-ready standards and exam prep tracks",
  },
  {
    value: `${LESSONS_COUNT_LABEL} lessons`,
    label: "Eight complete paths with real capstones",
  },
  {
    value: "Progress you see",
    label: "Roadmap, XP, and badges adults can trust",
  },
  {
    value: "Live + async",
    label: "Guided instruction or self-paced tracks",
  },
  {
    value: "No install",
    label: "Chromebook & mobile ready in the browser",
  },
] as const;

/** Designed pacing — always pair with flexibility language in UI copy. */
export const PACING_DESIGNED =
  "Designed as 16 sessions over 8 weeks (~2 sessions per week)";

export const PACING_FLEXIBLE =
  "The schedule flexes to your classroom, family, or self-paced needs";

export const PACING_BLURB = `${PACING_DESIGNED} — ${PACING_FLEXIBLE.toLowerCase()}.`;

export const PACING_SHORT =
  "Flexible schedule — 16 sessions over 8 weeks";

export const PACING_LABEL = "Flexible — 16 sessions · 8 weeks";

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
  focus: string;
  lessons: Array<{ title: string; synopsis: string }>;
};

export function groupLessonsByWeek(path: LearningPath): WeekModule[] {
  const weeks = path.weeklyThemes.length || 1;
  const titles = path.lessonTitles;
  const synopses = path.lessonSynopses;
  const base = Math.floor(titles.length / weeks);
  const remainder = titles.length % weeks;
  let cursor = 0;

  return path.weeklyThemes.map((theme, index) => {
    const count = base + (index < remainder ? 1 : 0);
    const slice = titles.slice(cursor, cursor + count);
    const lessons = slice.map((title, i) => ({
      title,
      synopsis: synopses[cursor + i] ?? "",
    }));
    cursor += count;
    return {
      week: index + 1,
      theme,
      focus: path.weeklyFocus[index] ?? "",
      lessons,
    };
  });
}

/** CSTA alignment — use these consistently on marketing surfaces. */
export const CSTA_SHORT = "CSTA-aligned";

export const CSTA_LABEL =
  "Built to align with CSTA K–12 Computer Science Standards";

export const STANDARDS_BLURB =
  "Kanam Academy is built to align with the CSTA K–12 Computer Science Standards (2017), Levels 2 and 3A — so schools and programs can adopt with confidence. Also mapped to the K–12 CS Framework, ISTE Standards for Students (2024), Common Core Math statistics/probability (Data track), Jump$tart/CEE 2021 (Financial Literacy), and a forward map to the 2026 CSTA PK–12 Standards. Request the Foundations Standards Alignment packet for accreditation conversations.";

export const STANDARDS_SHORT =
  "Built to align with CSTA K–12 CS Standards · standards packet available";
