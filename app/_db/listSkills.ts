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
  "Next.js",
  "Zustand",
  "React Router",
  "Postgres",
  "SQL",
  "Vue",
  "Svelte",
  "Zod",
  "AWS",
  "GCP",
].map((description, i) => ({ id: i, description }));

export async function listSkills() {
  return SKILLS;
}
