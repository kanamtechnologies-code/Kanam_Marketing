import type { Metadata } from "next";
import { HomeStory } from "@/components/site/HomeStory";

export const metadata: Metadata = {
  title: "Kanam Academy | Live, instructor-led Python + AI for kids",
  description:
    "Live Zoom instruction with real instructors. Beginner-friendly, project-based Python + AI learning for ages 11–14 that teaches understanding, not prompt-generated shortcuts.",
};

export default function HomePage() {
  return (
    <HomeStory />
  );
}

