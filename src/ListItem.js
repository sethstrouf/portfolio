import React from 'react'

const ListItem = ({ itemStyle, faStyle, icon, link, children }) => {
  return (
    <li className={itemStyle} >
      <i className={`${faStyle} fa-${icon}`}></i>
      <a href={link}>{children}</a>
    </li>
  )
}

export default ListItem
