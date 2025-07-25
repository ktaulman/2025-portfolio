export interface Project {
  id: number;
  title: string;
  summary: string;
  href: string;
  imageSrc: string;
  description: string[];
  startYear: number;
  endYear: number;
}

const projects: Project[] = [
  {
    title: "Steambook (Full-Stack)",
    summary: "A review site for finding and sharing trending Steam games.",
    description: [
      "Built with Next.js, TypeScript, and Tailwind CSS. Added a custom CMS for managing reviews and game data. Deployed on Vercel.",
      "Still in development, but the site is live and accepting reviews.",
      "The site is designed to help users discover trending games on Steam, with a focus on user-generated reviews and ratings.",
      "Implemented authentication for users to submit and edit their own reviews, and integrated Steam's public API for up-to-date game information.",
      "Prioritized accessibility and responsive design to ensure a seamless experience across devices.",
    ],
    href: "",
    imageSrc: "/images/project-steambook.webp",
    startYear: 2025,
    endYear: 2025,
  },
  {
    title: "Wedding Website (Full-Stack)",
    summary:
      "Designed by my wife, built by me. Used for RSVPs, meal selections, and event information.",
    description: [
      "Built to help manage RSVPs, meal choices, and plus ones for our wedding. Searchable by family name and any member could RSVP for the entire family.",
      "Searched and updated a Google Sheet with RSVPs, meal choices, and plus ones. that was editable by my wife and I.",
      "Written in Sveltekit. Deployed on Vercel infrastructure as an SSR application.",
    ],
    href: "https://wedding.talldev.cloud",
    imageSrc: "/images/project-wedding.webp",
    startYear: 2023,
    endYear: 2023,
  },
  {
    title: "Non-Profit IT Volunteer Work",
    summary:
      "Helped design, build, and deploy a website for fundraising, event management, and spreading the word. Stayed on another two years as Technology Director",
    description: [
      "Setup credit, debit, and ACH payments via Stripe on the href, Google Workspace for Nonprofits for email and secure collaboration on Google Drive, a Twilio phone number for event registrations and donations over voice or text, and building a small Sanity CMS UI for enabling self-service by board members.",
      "Registered non-profit accounts and secured non-profit discounting from our Twilio, AWS, Google, and Stripe.",
      "Developed a custom event registration system with automated email confirmations and reminders.",
      "Created a blog section for sharing updates and stories, managed by non-technical staff through the CMS.",
      "Ensured the site met accessibility standards and was optimized for search engines.",
    ],
    href: "https://www.thepavefoundation.org/",
    imageSrc: "/images/project-pave.webp",
    startYear: 2021,
    endYear: 2023,
  },
].map((project, index) => ({
  ...project,
  id: index,
})); //this is to mock the data, in a real app this would be fetched from a database or an API

export async function listProjects(): Promise<Project[]> {
  return projects;
}
export async function getProject(id: number): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
