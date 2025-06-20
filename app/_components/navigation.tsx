import Link from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href: string;
  cssClass?: string;
};

function Navigation({ children }: { children: ReactNode }) {
  return <nav className="flex items-center gap-4 ">{children}</nav>;
}

function NavLink({ children, href, cssClass }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-white text-xs min-md:text-sm font-bold leading-normal ${
        cssClass ? cssClass : ""
      }`}
    >
      {children}
    </Link>
  );
}
function ExternalLink({ children, href, cssClass }: LinkProps) {
  return (
    <a href={href} className={cssClass ? cssClass : ""} target="_blank">
      {children}
    </a>
  );
}
Navigation.NavLink = NavLink;
Navigation.ExternalLink = ExternalLink;

export default Navigation;
