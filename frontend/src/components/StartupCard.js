
import React, { useState } from 'react';

const StartupCard = ({ startup, onCardClick }) => {
  const { StartupName, CityLocation, Date, AmountInUSD, IndustryVertical, SubVertical, InvestorsName, InvestmentType } = startup;

  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
  
    setShowDetails(!showDetails);
  };

  return (
    <div className={`startup-card ${showDetails ? 'card-expanded' : ''}`} onClick={onCardClick}>
      <div className="card__header">
        <h3 className="card__title">{StartupName}</h3>
        <button className="button" onClick={handleButtonClick}>Click me</button>
      </div>

      {showDetails && (
        <div className="card__overlay">
          <div className="card__header-text">
            <p><strong>City:</strong> {CityLocation}</p>
            <p><strong>Date:</strong> {Date}</p>
            <p><strong>Funding Amount:</strong> ${parseInt(AmountInUSD.replace(/,/g, ''), 10).toLocaleString()}</p>
            <p><strong>Industry:</strong> {IndustryVertical}</p>
            <p><strong>Sub-Vertical:</strong> {SubVertical}</p>
            <p><strong>Investors:</strong> {InvestorsName}</p>
            <p><strong>Investment Type:</strong> {InvestmentType}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupCard;
