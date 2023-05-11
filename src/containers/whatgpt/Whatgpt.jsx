import React from 'react';
import './whatgpt.css';
import { Feature, Featuretitle } from '../../components';
import logotext from '../../Assets/logotext.png';

const Whatgpt = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="whatgpt">
      <div className="gpt__whatgpt-feature">
        <Featuretitle title="Who am i as a professional?" text="As a Performance Marketing Professional, I have developed a range of skills and proficiencies that enable me to manage digital marketing campaigns effectively. I am experienced in campaign management across channels such as search, social media, display advertising, and email marketing, and I am skilled in using analytics tools to track performance and make data-driven decisions. My basic knowledge of new technologies and programming languages like HTML, CSS, and JS allows me to understand and get involved better into the IT sector and create the right sinergy between marketing and technology. I have worked in a variety of industries, and I am always eager to learn new skills to stay on top of industry trends." />
        <div className="gpt__whatgpt-feature-img">
            <img src={logotext} alt="photopapita"/>
        </div>
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          "Luck is when opportunity meets preparation"
        </h1>
      </div>
      <div className="gpt__whatgpt-container">
        <Feature title="Education" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature title="Experience" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        <Feature title="Skills" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
      </div>
    </div>
  )
}

export default Whatgpt