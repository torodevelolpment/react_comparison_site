import React from 'react';
import './brand.css';
import { discord, instagram, linkedin, whatsapp, github } from './imports';


const Brand = () => {
  return (
    <div className="gpt__brand section__pading">
      <div>
        <a href="#discord"><img src={discord} alt="discord"/></a>
        <a href="#instagram"><img src={instagram} alt="instagram"/></a>
        <a href="#linkedin"><img src={linkedin} alt="linkedin"/></a>
        <a href="#whatsapp"><img src={whatsapp} alt="whatsapp"/></a>
        <a href="#github"><img src={github} alt="github"/></a>
      </div>
    </div>
  )
}

export default Brand