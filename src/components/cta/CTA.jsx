import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className="mycv__cta">
      <div className="mycv__cta-content">
        <h3>You can download my CV here</h3>
      </div>
      <div className="mycv__cta-btn">
        <button type="button">Download PDF</button>
      </div>
    </div>
  )
}

export default CTA