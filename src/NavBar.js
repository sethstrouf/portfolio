import React from 'react';
import ListItem from './ListItem';

const NavBar = ({ listStyle, itemStyle }) => {
  return (
    <ul className={listStyle} >
      <p 
        className={`text-gray-50 flex-1 text-left hover:none text-xl md:text-2xl xl:text-4xl`}>
        <strong>Seth Strouf</strong>
      </p>
      <ListItem 
        itemStyle={itemStyle}
        faStyle="fas"
        icon="envelope" 
        link="mailto:seth.strouf@gmail.com"
      >
      </ListItem>
      <ListItem 
        itemStyle={itemStyle}
        faStyle="fab"
        icon="github" 
        link="https://github.com/sethstrouf"
       >
      </ListItem>
      <ListItem
        itemStyle={itemStyle}
        faStyle="fab"
        icon="linkedin" 
        link="https://www.linkedin.com/in/sethstrouf"
      >
      </ListItem>
      <ListItem
        itemStyle={itemStyle}
        faStyle="fas"
        icon="file" 
        link="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
      >  
      </ListItem>
  </ul>
  )
}

export default NavBar;
