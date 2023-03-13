import React from 'react';
import './header.css';
import people from '../../Assets/people.png';
import ai from '../../Assets/ai.png';

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Compare the best tech sites tools with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
          Indulgence way everything joy alteration boisterous the attachment. 
          Party we years to order allow asked of.</p>
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
          <img src={ai} alt="Artificial Intelligence" />
      </div>
    </div>
  )
}

export default Header

//preguntar chatgpt por un request por get o por post formdata.append