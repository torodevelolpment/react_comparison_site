import React from 'react';
import './brand.css';
import { discord, instagram, linkedin, whatsapp, github } from './imports';


const Brand = () => {
  return (
    <div className="gpt__brand section__pading">
      <div>
        <img src={discord} alt="discord"/>
        <img src={instagram} alt="instagram"/>
        <img src={linkedin} alt="linkedin"/>
        <img src={whatsapp} alt="whatsapp"/>
        <img src={github} alt="github"/>
      </div>
    </div>
  )
}

export default Brand