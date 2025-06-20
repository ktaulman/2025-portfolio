import Card from "@/app/_components/card/card";
import Column from "@/app/_components/layout/column";
import SectionHeader from "@/app/_components/text/section-header";
import { listProjects, Project } from "@/app/_db/listProjects";
import ProjectListingOptimizedImage from "./project-listing-optimized-image";

export default async function ProjectListings() {
  const projectsData: Project[] = await listProjects();
  return (
    <Column>
      <SectionHeader>Projects</SectionHeader>
      <div className="flex gap-10 flex-col min-md:flex-row">
        {projectsData.map(({ id, title, summary, imageSrc, href }) => {
          return (
            <Card key={id}>
              {/* <Card.Image src={imageSrc} alt={title} width={350} height={300} />
               */}
              <ProjectListingOptimizedImage imageSrc={imageSrc} alt={title} />{" "}
              {/**/}
              <Card.Title>{title}</Card.Title>
              <Card.Description>{summary}</Card.Description>
              {id === 0 && (
                <p className="text-xs text-blue-900">Under Development</p>
              )}
              {id !== 0 && <Card.Link href={href}>Live Website</Card.Link>}
            </Card>
          );
        })}
      </div>
    </Column>
  );
}
