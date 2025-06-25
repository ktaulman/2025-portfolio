import BriefcaseIcon from "@/app/_components/icons/briefcase-icon";
import { ReactNode } from "react";
import SectionHeader from "../text/section-header";

type Children = { children: ReactNode };
type Item = Children & {
  lineToNextJob?: boolean;
};

function Jobs({ children }: Children) {
  return (
    <article className="flex flex-col min-h min-lg">
      <SectionHeader>Jobs</SectionHeader>
      {children}
    </article>
  );
}

function Item({ children, lineToNextJob }: Item) {
  return (
    <section className="flex gap-5 min-h-18">
      <aside className="flex flex-col gap-1 items-center w-1/12">
        <BriefcaseIcon />
        {lineToNextJob && <div className="w-[1.5px] bg-[#3c4753] h-2 grow" />}
      </aside>
      <section className="w-11/12">{children}</section>
    </section>
  );
}

function ItemTitle({ children }: Children) {
  return (
    <p className="text-white text-base font-medium min-lg:text-3xl">
      {children}
    </p>
  );
}
function ItemDescription({ children }: Children) {
  return (
    <p className="text-[#9daab8] text-sm font-normal min-lg:text-lg">
      {children}
    </p>
  );
}

Jobs.Item = Item;
Jobs.ItemTitle = ItemTitle;
Jobs.ItemDescription = ItemDescription;

export default Jobs;
