import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-start items-start bg-[#111418] dark text-white gap w-screen">
      {children}
    </div>
  );
}

//child
function Header({ children }: { children: ReactNode }) {
  return (
    <header className="w-full flex justify-between border-b border-solid border-b-[#293038] px-8 py-5">
      {children}
    </header>
  );
}
function Body({ children }: { children: ReactNode }) {
  return (
    <main className="w-full max-w-7xl flex flex-col items-start  flex-1 px-12 min-m:px-24 gap-12">
      {children}
    </main>
  );
}
function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex justify-center flex-1  flex-wrap  w-full ">
      {children}
    </footer>
  );
}
PageLayout.Header = Header;
PageLayout.Body = Body;
PageLayout.Footer = Footer;

export default PageLayout;
