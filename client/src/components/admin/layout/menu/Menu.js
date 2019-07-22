import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(initializeActiveMenu)
  const [boxPosition, setBoxPosition] = useState(initializeBox)

  useEffect(() =>
    menus.find((menu, index) =>
      menu.label === activeMenu ? setBoxPosition(index * 47) : ''),
    [activeMenu]);


  return (
    <div className="main-menu">
      <div className="menu-container">
        <div className="menu">
          <div id="active-box" className="active-box active" style={{ transform: `translateY(${boxPosition}px) translateZ(0)` }}>
            <div className="back"></div>
            <div className="front"></div>
          </div>
          {menus.map((menu) => (
            <MenuItem
              activeMenu={activeMenu}
              key={menu.label}
              label={menu.label}
              onClick={() => changeMenu(menu.label, setActiveMenu)}
              link={menu.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const changeMenu = (label, setActiveMenu) => {
  setActiveMenu(label)
}

const initializeActiveMenu = () => {
  const pathArray = window.location.pathname.split('/')
  const firstPath = pathArray[1]
  return firstPath
}

const initializeBox = () => {
  const pathArray = window.location.pathname.split('/')
  const firstPath = pathArray[1]
  switch (firstPath) {
    case 'admin/events':
      return 0
    case 'admin/views':
      return 47
    case 'admin/reports':
      return 94
    default:
      break;
  }
}

const menus = [
  {
    index: 0,
    label: 'events',
    link: '/admin/events'
  },
  {
    index: 1,
    label: 'views',
    link: '/admin/views'
  },
  {
    index: 2,
    label: 'reports',
    link: '/admin/reports'
  },
]

export default Menu;