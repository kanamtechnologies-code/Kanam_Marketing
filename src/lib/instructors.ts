export type Instructor = {
  slug: string;
  name: string;
  /** Role at Kanam Academy */
  role: string;
  /** Short line under the name */
  headline: string;
  location: string;
  linkedIn: string;
  /** Initials for avatar placeholder until a headshot is added */
  initials: string;
  /** Optional headshot path under /public */
  image?: string;
  bio: string[];
  focus: string[];
  credentials: string[];
};

/**
 * Live instructors featured on /instructors.
 * Bios summarize public LinkedIn profiles; keep LinkedIn links as source of truth.
 */
export const INSTRUCTORS: Instructor[] = [
  {
    slug: "tory-thompson",
    name: "Tory Thompson",
    role: "President & CEO · Live Instructor",
    headline: "Senior developer and instruction leader — ships code, builds curriculum, coaches teachers",
    location: "Atlanta, GA",
    linkedIn: "https://www.linkedin.com/in/tory-thompson-2021",
    initials: "TT",
    bio: [
      "Tory is President & CEO of Kanam Academy, and he still gets in the classroom. He’s a senior software developer who also directs the software engineering and data analyst tracks at a national nonprofit — the rare mix of someone who can write the code, design the curriculum, and coach other instructors to teach it well.",
      "He came up teaching CompTIA A+, IT Fundamentals, and Microsoft Office, then moved into full software engineering and data pathways. Those early credentials aren’t the ceiling — they’re how he learned to turn “industry standard” into something a real person can practice, mess up, and master.",
      "Whether he’s shaping a Kanam path or mentoring an instructor, the goal is the same: senior-level rigor, clear feedback, and progress you can see.",
    ],
    focus: [
      "Full-stack software engineering — web apps, APIs, and systems built the way teams ship in the real world",
      "Python for beginners through working programs — clear logic, practice, and projects that run",
      "Data analyst pathways — SQL, analysis, and turning questions into clear answers",
      "Senior developer practices: debugging, code review, architecture thinking, and building things that actually ship",
      "Curriculum design that takes learners from first concepts to advanced, career-ready work",
    ],
    credentials: [
      "Directs software engineering and data analyst tracks at a national nonprofit",
      "Senior developer who still ships — and teaches from that experience",
      "Built CompTIA IT Fundamentals and Microsoft Office curricula still in use today",
      "Years teaching A+, IT Fundamentals, software engineering, and data to adult learners",
      "Mentors instructor teams — not just slides and scripts",
      "ScrumMaster and Google Generative AI Leader",
    ],
  },
  {
    slug: "paul-chapman",
    name: "Paul Chapman",
    role: "Live Instructor",
    headline: "Senior full-stack developer, data analyst, and high-energy tech educator",
    location: "Atlanta, GA",
    linkedIn: "https://www.linkedin.com/in/paul-chapman-pc",
    initials: "PC",
    bio: [
      "Paul is a senior software engineer who teaches the way he builds — with energy, precision, and zero fluff. He leads immersive software engineering for a national nonprofit and for General Assembly, helping learners push past foundations into real full-stack work.",
      "His career spans shipping as a freelance engineer, senior data analysis at Delta Air Lines, and years of immersive tech instruction. Learners remember his mindset as much as his code: it may be difficult, but not impossible.",
    ],
    focus: [
      "Senior full-stack development — APIs, databases, front-end, and systems that hang together",
      "Python that goes beyond tutorials — write it, run it, debug it, and build something real",
      "Engineering depth beyond intro lessons: debugging, patterns, and production habits",
      "Data analysis and SQL tied to questions that matter, not worksheet drills",
      "High-energy cohort teaching that keeps people engaged when concepts get heavy",
      "Capstone and portfolio projects that look like real work, not busywork",
      "The mindset piece: stick with it — difficult isn’t the same as impossible",
    ],
    credentials: [
      "Senior full-stack engineer who still ships freelance and teaches from that experience",
      "Leads software engineering instruction at a national nonprofit",
      "Lead instructor for immersive coding cohorts at General Assembly",
      "Senior data analyst experience at Delta Air Lines — SQL, metrics, and real business questions",
      "Years working with youth and families before tech — patience is part of the craft",
    ],
  },

  {
    slug: "jasmin-smith",
    name: "Jasmin Smith",
    role: "Live Instructor",
    headline: "Software engineer and digital measure programmer with a designer’s eye for clarity",
    location: "Macon, GA",
    linkedIn: "https://www.linkedin.com/in/jasmincsmith",
    initials: "JS",
    bio: [
      "Jasmin brings industry software engineering and a designer’s communication style to live Kanam sessions — making technical ideas concrete without dumbing them down.",
      "As a Digital Measure Programmer at NCQA and a Per Scholas software engineering graduate, she pairs real production experience with classroom empathy from years as a substitute teacher and creative director.",
    ],
    focus: [
      "Software engineering fundamentals explained in plain language",
      "Digital literacy — tools, habits, and judgment for school and everyday tech",
      "Visual teaching that makes abstract ideas click without watering them down",
      "Healthcare tech and data quality thinking from real production work",
      "Patient classroom energy — she knows what it feels like to learn something new",
    ],
    credentials: [
      "Writes production software for healthcare quality measures at NCQA",
      "Trained in software engineering through Per Scholas",
      "Graphic design degree from Pace — explains with visuals, not jargon",
      "Real K–12 classroom time as a substitute teacher",
      "Ran client creative work — campaigns, web, and video — for years alongside tech",
    ],
  },
] as const;

export function getInstructor(slug: string): Instructor | undefined {
  return INSTRUCTORS.find((i) => i.slug === slug);
}
