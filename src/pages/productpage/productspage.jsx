import React from 'react';
import './productspage.css';
import { Navbar, Productsmod, Productspecs } from '../../components';

function Productspage() {
  return (
    <>
    <div className="mycv__navbar">
      <Navbar />
    </div>
    <div className="productmod__tailwind-container">
      <div className="productmod__tailwind-cards">
        <Productsmod/>
      </div>
      <div className="productmod__tailwind-specs">
        <Productspecs/>
      </div>
    </div>
    </>
  )
}

export default Productspage
