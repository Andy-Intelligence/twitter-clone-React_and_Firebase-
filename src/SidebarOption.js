import './SidebarOption.css'
import React from 'react'

function SidebarOption({active,text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon/>
        <h1>{text}</h1>
    </div>
  )
}

export default SidebarOption