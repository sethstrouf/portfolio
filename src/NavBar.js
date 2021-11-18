import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  const itemStyle = "text-gray-50 hover:text-green-200"

  return (
    <ul className="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-2 xl:py-4 px-4 space-x-4
                     md:space-x-6 xl:space-x-8 2xl:space-x-12
                     md:text-lg xl:text-xl 2xl:text-3xl">
      <NavItem 
        itemStyle={itemStyle}
        faStyle="fas"
        icon="envelope" 
        link="#contact-form"
      />
      <NavItem 
        itemStyle={itemStyle}
        faStyle="fab"
        icon="github" 
        link="https://github.com/sethstrouf"
       />
      <NavItem
        itemStyle={itemStyle}
        faStyle="fab"
        icon="linkedin" 
        link="https://www.linkedin.com/in/sethstrouf"
      />
      <NavItem
        itemStyle={itemStyle}
        faStyle="fa"
        icon="youtube" 
        link="https://www.youtube.com/moose2006lp"
      />
      <NavItem
        itemStyle={itemStyle}
        faStyle="fas"
        icon="file" 
        link="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
      />  
  </ul>
  )
}

export default NavBar;
