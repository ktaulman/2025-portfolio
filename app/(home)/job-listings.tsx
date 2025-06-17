import Jobs from "../_components/jobs/jobs";
import { listJobs } from "../_db/listJobs";
import { Job } from "../_db/listJobs";
export default async function JobListings() {
  const jobsData: Job[] = await listJobs();
  return (
    <Jobs>
      {jobsData.map(
        ({ id, company, title, startMonthYear, endMonthYear }, i) => {
          const isLastItem = i === jobsData.length - 1;
          return (
            <Jobs.Item key={id} lineToNextJob={!isLastItem}>
              <Jobs.ItemTitle>{title}</Jobs.ItemTitle>
              <Jobs.ItemDescription>
                {company} | {startMonthYear} - {endMonthYear}
              </Jobs.ItemDescription>
            </Jobs.Item>
          );
        }
      )}
    </Jobs>
  );
}
