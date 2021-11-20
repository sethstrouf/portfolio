import React from "react";

const NavItem = ({ faStyle, icon, link }) => {
  return (
    <li className="text-gray-50 hover:text-green-200">
      <a href={link} className="focused">
        <i
          className={`${faStyle} fa-${icon} px-2 md:mx-1 lg:mx-2 2xl:mx-4`}
        ></i>
      </a>
    </li>
  );
};

export default NavItem;
