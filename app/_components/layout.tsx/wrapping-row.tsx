import { ReactNode } from "react";

export default function WrappingRow({ children }: { children: ReactNode }) {
  return <div className="flex gap-3 p-3 flex-wrap ">{children}</div>;
}
