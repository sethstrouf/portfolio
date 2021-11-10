import React from 'react'

const ListItem = ({ itemStyle, faStyle, icon, link }) => {
  return (
    <li className={itemStyle} >
      <a href={link}>
        <i className={`${faStyle} fa-${icon} mx-2 lg:mx-3 2xl:mx-4`}></i>
      </a>
    </li>
  )
}

export default ListItem
