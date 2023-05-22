import React from 'react';
import './whatgpt.css';
import { Heroproduct, Feature, Featuretitle } from '../../components';
import logotext from '../../Assets/logotext.png';


const Whatgpt = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="whatgpt">
      <div className="gpt__whatgpt-feature">
        <Heroproduct/>
      </div>
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          "Luck is when opportunity meets preparation"
        </h1>
      </div>
    </div>
  )
}

export default Whatgpt