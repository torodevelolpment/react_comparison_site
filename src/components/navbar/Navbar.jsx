import React, { useState } from 'react';
//react icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.png';
import './navbar.css';
import { Link } from "react-router-dom";

const Menu = () => (
  <>
  <p><Link to="/home">Home</Link></p>
  <p><Link to="/about">About Us</Link></p>
  <p><Link to="/products">Our Products</Link></p>
  <p><Link to="/contact">Contact</Link></p>
  </>
)


//We're writing the css classnames in a specific naming condition named BEM
//BEM -> Block Element Modifier
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState (false)
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
          <button type="button">Contact Us</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={()=> setToggleMenu(true)} />
        
        }
        {toggleMenu &&(
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <Menu />
              <div className="gpt__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar