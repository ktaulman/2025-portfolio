"use client";
import AvatarIcon from "../(home)/components/icons/avatar-icon";
import Navigation from "../_components/navigation";
import { useScreenWidthContext } from "../_providers/screen-width-provider";

export default function NavigationTopBar() {
  const { screenWidth } = useScreenWidthContext();
  if (screenWidth < 650) return <AvatarIcon />;
  return (
    <Navigation>
      <Navigation.NavLink href="about">About</Navigation.NavLink>
      <Navigation.NavLink href="projects">Projects</Navigation.NavLink>
      <Navigation.NavLink href="skills">Skills</Navigation.NavLink>
      <Navigation.NavLink href="jobs">Jobs</Navigation.NavLink>
      <Navigation.NavLink href="contact">Contact</Navigation.NavLink>
      <AvatarIcon />
    </Navigation>
  );
}
