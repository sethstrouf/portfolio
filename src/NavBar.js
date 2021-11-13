import React from 'react';
import NavItem from './NavItem';

const NavBar = ({ itemStyle }) => {
  return (
    <ul className="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-1 px-4 space-x-4
                     md:space-x-6 xl:space-x-8
                     md:text-lg xl:text-xl">
      <p 
        className="text-gray-50 flex-1 text-left hover:none 
                   text-xl md:text-2xl xl:text-4xl">
        <strong>Seth Strouf</strong>
      </p>
      <NavItem 
        itemStyle={itemStyle}
        faStyle="fas"
        icon="envelope" 
        link="#contact-form"
      >
      </NavItem>
      <NavItem 
        itemStyle={itemStyle}
        faStyle="fab"
        icon="github" 
        link="https://github.com/sethstrouf"
       >
      </NavItem>
      <NavItem
        itemStyle={itemStyle}
        faStyle="fab"
        icon="linkedin" 
        link="https://www.linkedin.com/in/sethstrouf"
      >
      </NavItem>
      <NavItem
        itemStyle={itemStyle}
        faStyle="fas"
        icon="file" 
        link="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
      >  
      </NavItem>
  </ul>
  )
}

export default NavBar;
