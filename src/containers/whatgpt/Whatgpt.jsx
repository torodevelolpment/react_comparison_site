import React from 'react';
import './whatgpt.css';
import { Carousel, Feature } from '../../components';


const featuresDataSection = [
  {
    title: 'Our Sustainable Values',
  },
] 

const Whatgpt = () => {
  return (
    <div className="gpt__whatgpt" id="whatgpt">
      <div className="gpt__whatgpt-feature">
        {/* <Heroproduct/> */}
        <Carousel/>
      </div>
      <div className="gpt__whatgpt-heading flex flex-col section__padding">
         {featuresDataSection.map((item, index) => (
          <Feature title={item.title} key={item.title + index}/>
        ) 
        )}
        <p className="text-black mt-2.5">At Valle Encantado Produce we believe that the quality and sustainability of our products depend on our direct commitment to our farmers. Through innovative and modern techniques that have been duly tested, we train our partners in field management and traceability in order to increase productivity and achieve high-quality products.</p>
      </div>
    </div>
  )
}

export default Whatgpt