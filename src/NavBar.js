import React from "react";
import NavItem from "./NavItem";
import Pdf from "./Resume.pdf";

const NavBar = () => {
  return (
    <ul
      className="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-2 xl:py-4 px-4"
    >
      <NavItem faStyle="fas" icon="envelope" link="#contact-form" />
      <NavItem
        faStyle="fab"
        icon="github"
        link="https://github.com/sethstrouf?tab=repositories"
      />
      <NavItem
        faStyle="fab"
        icon="linkedin"
        link="https://www.linkedin.com/in/sethstrouf"
      />
      <NavItem
        faStyle="fa"
        icon="youtube"
        link="https://www.youtube.com/moose2006lp"
      />
      <NavItem faStyle="fas" icon="file" link={Pdf} />
    </ul>
  );
};

export default NavBar;
