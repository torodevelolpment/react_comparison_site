import React from 'react';
import './navbar.css';
//react icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.png'

//We're writing the css classnames in a specific naming condition named BEM
//BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt_navbar-links_logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar