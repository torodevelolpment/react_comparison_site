import React from 'react';
import './header.css';
import people from '../../Assets/people.png';
import logotext from '../../Assets/vallencantado1.png';

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1>
          Valle Encantado Produce
        </h1>
        <p>Welcome to my online CV/Portfolio, this is an example of good practices and my basic knowledge using the REACT framework, programming languages such as JS, and styles and markup languages such as HTML & CSS. Here you'll find all my academic career, job experiences and skills.</p>
        {/* <div className="gpt__header-content__input">
          <input type="search" placeholder="Start comparing tech tools"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people"/>
          <p>My friends are my best references</p>
        </div> */}
      </div>
      <div className="gpt__header-image">
          <img src={logotext} alt="Toro Agency Marketing and Branding"/>
      </div>
    </div>
  )
}

export default Header

