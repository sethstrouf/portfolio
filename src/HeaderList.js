import React from 'react';
import ListItem from './ListItem';

const HeaderList = ({ listStyle, itemStyle }) => {
  return (
    <ul className={listStyle} >
      <ListItem 
        itemStyle={itemStyle}
        faStyle="fas"
        icon="envelope" 
        link="mailto:seth.strouf@gmail.com"
      >
        Send me a message
      </ListItem>
      <ListItem 
        itemStyle={itemStyle}
        faStyle="fab"
        icon="github" 
        link="https://github.com/sethstrouf"
       >
         Check out my code
      </ListItem>
      <ListItem
        itemStyle={itemStyle}
        faStyle="fab"
        icon="linkedin" 
        link="https://www.linkedin.com/in/sethstrouf"
      >
        Connect with me on LinkedIn
      </ListItem>
      <ListItem
        itemStyle={itemStyle}
        faStyle="fas"
        icon="file" 
        link="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
      >  
        View my resume 
      </ListItem>
  </ul>
  )
}

export default HeaderList;
