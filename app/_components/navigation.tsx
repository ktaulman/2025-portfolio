import Link from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
};

function Navigation({ children }: { children: ReactNode }) {
  return <nav className="flex items-center gap-4 ">{children}</nav>;
}

function NavLink({ children, href }: LinkProps) {
  return (
    <Link href={href} className="text-white text-sm font-bold leading-normal">
      {children}
    </Link>
  );
}
function ExternalLink({ children, href }: LinkProps) {
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
}
Navigation.NavLink = NavLink;
Navigation.ExternalLink = ExternalLink;

export default Navigation;
