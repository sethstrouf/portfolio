import React from 'react';

const NavItem = ({ itemStyle, faStyle, icon, link }) => {
  return (
    <li className={itemStyle} >
      <a href={link} className="focused">
        <i className={`${faStyle} fa-${icon} px-2 md:mx-1 lg:mx-2 2xl:mx-4`}></i>
      </a>
    </li>
  )
}

export default NavItem;
