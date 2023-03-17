import React from 'react';
import './featuretitle.css';

const Featuretitle = ( { title, text } ) => {
  return (
    <div className="gpt__features-container__featuretitle">
      <div className="gpt__features-container__featuretitle-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt__features-container__featuretitle-text">
        {text}
      </div>
    </div>
  )
}

export default Featuretitle