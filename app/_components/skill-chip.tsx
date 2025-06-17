import { ReactNode } from "react";

export default function SkillChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
      <p className="text-white text-sm font-medium leading-normal">
        {children}
      </p>
    </div>
  );
}
