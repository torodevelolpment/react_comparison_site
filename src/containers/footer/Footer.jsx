import React from 'react';
import './footer.css';
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <div className="section__footer section__padding">
      <div className="section__footer-links">
        <div className="section__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>address: Lima, Perú</p>
        </div>
        <div className="section__footer-social">
          <h4>Links</h4>
          <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
        <div className="section__footer-links_legal">
          <h4>Links</h4>
          <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
        <div className="section__footer-links_contact">
          <h4>Links</h4>
          <ul>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
      </div>
      <div className="section__footer-copyright">
        <p>2023 Valle Encantado Produce S.A.C. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer