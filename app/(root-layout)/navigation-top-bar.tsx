"use client";
import { useState } from "react";
import Navigation from "../_components/navigation";
import { useScreenWidthStore } from "../_providers/screen-width-provider";

export default function NavigationTopBar() {
  const { screenWidth } = useScreenWidthStore();
  const [isOpen, setIsOpen] = useState(false);
  if (screenWidth < 650)
    return (
      <div
        className="w-full h-16 flex justify-end gap-2 relative "
        onClick={() => setIsOpen(false)}
      >
        <button
          className="h-full w-12 flex flex-col gap-3 justify-center "
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <div className="h-0.5 w-full bg-white"></div>
          <div className="h-0.5 w-full bg-white"></div>
          <div className="h-0.5 w-full bg-white"></div>
        </button>

        {isOpen && (
          <nav
            // onClick={() => setIsOpen(false)}
            className="w-full p-2 px-12 items-center rounded-sm absolute z-20 top-16 flex flex-col gap-2 text-blue border-2 text-left  border-white bg-gray-800"
          >
            <Navigation.NavLink
              cssClass={"font-semibold tracking-wider !text-lg"}
              href="about"
            >
              About
            </Navigation.NavLink>
            <Navigation.NavLink
              cssClass={"font-semibold tracking-wider !text-lg"}
              href="projects"
            >
              Projects
            </Navigation.NavLink>
            <Navigation.NavLink
              cssClass={"font-semibold tracking-wider !text-lg"}
              href="skills"
            >
              Skills
            </Navigation.NavLink>
            <Navigation.NavLink
              cssClass={"font-semibold tracking-wider !text-lg"}
              href="jobs"
            >
              Jobs
            </Navigation.NavLink>
            <Navigation.NavLink
              cssClass={"font-semibold tracking-wider !text-lg"}
              href="contact"
            >
              Contact
            </Navigation.NavLink>
          </nav>
        )}
      </div>
    );
  else
    return (
      <Navigation>
        <Navigation.NavLink href="about">About</Navigation.NavLink>
        <Navigation.NavLink href="projects">Projects</Navigation.NavLink>
        <Navigation.NavLink href="skills">Skills</Navigation.NavLink>
        <Navigation.NavLink href="jobs">Jobs</Navigation.NavLink>
        <Navigation.NavLink href="contact">Contact</Navigation.NavLink>
        {/* <AvatarIcon /> */}
      </Navigation>
    );
}
