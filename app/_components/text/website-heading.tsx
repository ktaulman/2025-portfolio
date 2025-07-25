import { ReactNode } from "react";

export default function WebsiteHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] min-lg:text-4xl">
      {children}
    </h2>
  );
}
