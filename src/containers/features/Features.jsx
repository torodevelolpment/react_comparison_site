import React from 'react';
import './features.css';
import { Feature } from '../../components';


const featuresData = [
  {
    title: 'From the ground to your table',
    text: 'From Valle Encantado Produce we want to contribute to the development of a modern, fair and sustainable agriculture that adds value to the result of the hard work of small, medium and large producers; in addition to being an inspiration for the new leaders of agriculture through an ambitious, responsible and respectful business model with the earth.'
  },
] 

const Features = () => {
  return (
    <div className="mycv__features section__padding" id="suagatam">
      <div className="mycv__features-heading">
        <h1 className="gradient__text">
          Our Commitment with you</h1>
        
      </div>
      <div className="mycv__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ) 
        )}
      </div>
    </div>
  )
}

export default Features