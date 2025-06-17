import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};
export default function SectionDescription({ children }: Children) {
  return (
    <p className=" text-base font-normal leading-normal pb-3 pt-1 px-4">
      {children}
    </p>
  );
}
