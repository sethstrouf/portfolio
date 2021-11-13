import React from 'react';

const NavItem = ({ itemStyle, faStyle, icon, link }) => {
  return (
    <li className={itemStyle} >
      <a href={link}>
        <i className={`${faStyle} fa-${icon}`}></i>
      </a>
    </li>
  )
}

export default NavItem;
