import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({
  activeMenu,
  label,
  link,
  onClick,
}) => {
  let className = 'main-menu-item'

  if (activeMenu === label) {
    className += ' active'
  }

  return (
    <Link to={link}
      className={className}
      onClick={() => onClick()}>
      <div className="item-inner">{label}</div>
    </Link>
  )
}

export default MenuItem;