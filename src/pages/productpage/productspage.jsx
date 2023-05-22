import React from 'react';
import './productspage.css';
import { Navbar, Productsmod } from '../../components';

function Productspage() {
  return (
    <>
    <div className="mycv__navbar">
      <Navbar />
    </div>
    <div className="productmod__tailwind-container">
      <Productsmod/>
    </div>
    </>
  )
}

export default Productspage
