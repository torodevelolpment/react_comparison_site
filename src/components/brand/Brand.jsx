import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';


const Brand = () => {
  return (
    <div className="gpt__brand section__pading">
      <div>
        <img src={google} alt="google"/>
        <img src={slack} alt="slack"/>
        <img src={atlassian} alt="atlassian"/>
        <img src={dropbox} alt="dropbox"/>
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  )
}

export default Brand