import React from 'react';
import './header.css';
import people from '../../Assets/people.png';
import logotext from '../../Assets/logotext.png';

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Compare the best tech sites tools with GPT-3 OpenAI
        </h1>
        <p>Our website offers a detailed comparison of tools for designers and developers, helping you choose the best option for your needs</p>
        <div className="gpt__header-content__input">
          <input type="search" placeholder="Start comparing tech tools"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 creators & developers compared different tools in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt__header-image">
          <img src={logotext} alt="Artificial Intelligence"/>
      </div>
    </div>
  )
}

export default Header

