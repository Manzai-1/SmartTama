import React from 'react';

const Stats = ({ hunger, happiness, name }) => {
  return (
    <div className="stats-card">
      <h5>Name: {name}</h5>
      <div className="gochi-stats">
        Hunger:
        <div className="stats-container">
          {hunger && (
            <div className="stats-meter" style={{ width: hunger + '%' }}></div>
          )}
        </div>
      </div>
      <div className="gochi-stats">
        Happiness:
        <div className="stats-container">
          {happiness && (
            <div
              className="stats-meter"
              style={{ width: happiness + '%' }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
