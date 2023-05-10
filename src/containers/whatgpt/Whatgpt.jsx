import React from 'react';
import './whatgpt.css';
import { Feature, Featuretitle } from '../../components';

const Whatgpt = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="whatgpt">
      <div className="gpt__whatgpt-feature">
        <Featuretitle title="Who's this guy?" text="As a Performance Marketing Professional, I have developed a range of skills and proficiencies that enable me to manage digital marketing campaigns effectively. I am experienced in campaign management across channels such as search, social media, display advertising, and email marketing, and I am skilled in using analytics tools to track performance and make data-driven decisions. I am able to develop and execute digital marketing strategies that align with business goals, and I have experience with A/B testing and optimization to drive better results." />
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
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