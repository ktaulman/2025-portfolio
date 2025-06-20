import Jobs from "../_components/jobs/jobs";
import PageLayout from "../_components/page-layout";
import { listJobs } from "../_db/listJobs";

export default async function Page() {
  const jobsData = await listJobs();
  return (
    <PageLayout.Body>
      <div className="w-full h-8" />
      <Jobs>
        {jobsData.map(
          (
            { id, company, title, startMonthYear, endMonthYear, description },
            i
          ) => {
            const isLastItem = i === jobsData.length - 1;
            return (
              <Jobs.Item key={id} lineToNextJob={!isLastItem}>
                <Jobs.ItemTitle>{title}</Jobs.ItemTitle>
                <Jobs.ItemDescription>
                  {company} | {startMonthYear} - {endMonthYear}
                </Jobs.ItemDescription>

                <ul className="list-disc">
                  {description.map((paragraph, i) => (
                    <li
                      className="text-white text-sm py-3 ml-6"
                      key={`paragraph_${id}_${i}`}
                    >
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </Jobs.Item>
            );
          }
        )}
      </Jobs>
    </PageLayout.Body>
  );
}
