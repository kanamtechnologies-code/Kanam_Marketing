import type { Metadata } from "next";
import { HomeStory } from "@/components/site/HomeStory";

export const metadata: Metadata = {
  title: "Kanam Academy | Real tech skills for teens and anyone ready to learn",
  description:
    "Coding, AI, data, cybersecurity, financial literacy, and digital skills — live instruction or structured async classes. Chromebook and mobile ready. Flexible schedule. Try the guided lesson — no account needed.",
};

export default function HomePage() {
  return (
    <HomeStory />
  );
}

