import { ReactNode } from "react";

export default function Column({ children }: { children: ReactNode }) {
  return <section className="flex flex-col w-full">{children}</section>;
}
