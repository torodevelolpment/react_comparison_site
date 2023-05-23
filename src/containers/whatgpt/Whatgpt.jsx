import React from 'react';
import './whatgpt.css';
import { Heroproduct, Feature, Featuretitle, Carousel } from '../../components';
import logotext from '../../Assets/logotext.png';


const Whatgpt = () => {
  return (
    <div className="gpt__whatgpt" id="whatgpt">
      <div className="gpt__whatgpt-feature">
        {/* <Heroproduct/> */}
        <Carousel/>
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