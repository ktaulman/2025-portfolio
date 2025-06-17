import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">
      {children}
    </h2>
  );
}
