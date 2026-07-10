import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Curriculum | Kanam Academy",
  description: "Kanam Academy learning paths and curriculum overview.",
};

/** Legacy /curriculum URL — learning paths are the source of truth. */
export default function CurriculumRedirectPage() {
  redirect("/learning-paths");
}
