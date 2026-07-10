import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/** Legacy /programs and /programs/[slug] → /learning-paths */
export default async function ProgramsRedirectPage({ params }: Props) {
  const { slug } = await params;
  if (slug?.length) redirect(`/learning-paths/${slug[0]}`);
  redirect("/learning-paths");
}
