import type { Metadata } from "next";
import { HomeStory } from "@/components/site/HomeStory";

export const metadata: Metadata = {
  title: "Kanam Academy | Real tech skills for teens and anyone ready to learn",
  description:
    "Coding, AI, data, and digital literacy in the browser — live instruction or structured async classes. Try the guided lesson — no account needed.",
};

export default function HomePage() {
  return (
    <HomeStory />
  );
}

