import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.scss";
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
const Sidebar = () => {
  return (
    <div>
       <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={logoS} alt="logo" />
          <img src={logoSubtitle} alt="Slobodan" className="sub-logo" />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
