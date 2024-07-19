import React from 'react';
import './MarketOverView.css';

const MarketOverview: React.FC = () => {
  return (
    <div className="market-overview">
      <h2>Market Overview</h2>
      <div className="chart">
        {/* Chart content goes here */}
      </div>
      <div className="time-frame">
        <button>1D</button>
        <button>7D</button>
        <button>1M</button>
        <button>3M</button>
        <button>ALL</button>
      </div>
    </div>
  );
}

export default MarketOverview;
