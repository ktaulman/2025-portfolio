export type Skill = {
  id: number;
  description: string;
};

const SKILLS: Skill[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Next.js",
  "Zustand",
  "React Router",
  "MUI (Material UI)",
  "AgGrid",
  "Postgres",
  "SQL",
  "Vue",
  "Svelte",
  "Zod",
  "GCP",
  "Google Maps",
  "AWS",
  "Cloudfront",
  "Route 53",
  "Stripe",
].map((description, i) => ({ id: i, description }));

export async function listSkills() {
  return SKILLS;
}
