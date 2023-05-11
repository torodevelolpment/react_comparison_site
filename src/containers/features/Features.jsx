import React from 'react';
import './features.css';
import { Feature } from '../../components';


const featuresData = [
  {
    title: 'International Studies',
    text: 'Universidad Santa María. Caracas, Venezuela.'
  },
  {
    title: 'Master en Dirección de Marketing, Branding, Entorno Digital y Sostenibilidad',
    text: 'Universitat de Barcelona. Barcelona, España.'
  },
] 

const Features = () => {
  return (
    <div className="mycv__features section__padding" id="suagatam">
      <div className="mycv__features-heading">
        <h1 className="gradient__text">
          Here's my Academic History</h1>
        
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