import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-[#111418] dark text-white">
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
    <main className="w-full max-w-5xl flex flex-col items-center  flex-1">
      {children}
    </main>
  );
}
function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex justify-center flex-1  flex-wrap ">
      {children}
    </footer>
  );
}
PageLayout.Header = Header;
PageLayout.Body = Body;
PageLayout.Footer = Footer;

export default PageLayout;
