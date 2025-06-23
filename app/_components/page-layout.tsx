import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-start items-start bg-[#111418] dark text-white gap w-screen h-screen">
      {children}
    </div>
  );
}

//child
function Header({ children }: { children: ReactNode }) {
  return (
    <header className="w-full flex justify-between border-b border-solid border-b-[#293038] bg-[#111418]  px-8 py-5">
      {children}
    </header>
  );
}
function Body({ children }: { children: ReactNode }) {
  return (
    <main className="w-full flex flex-col items-start  flex-1 px-12 min-md:px-40 gap-10 min-md:gap-4 bg-[#111418] ">
      {children}
    </main>
  );
}
function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex justify-center bg-[#111418]  flex-wrap  w-full">
      {children}
    </footer>
  );
}
PageLayout.Header = Header;
PageLayout.Body = Body;
PageLayout.Footer = Footer;

export default PageLayout;
