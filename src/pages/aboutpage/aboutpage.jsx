import React from 'react';
import './aboutpage.css';
import { Navbar, Productsmod } from '../../components';

function Aboutpage() {
  return (
    <>
    <div className="mycv__navbar">
      <Navbar />
    </div>
    <div className="aboutpage__tailwind-container">
      <Productsmod/>
    </div>
    </>
  )
}

export default Aboutpage