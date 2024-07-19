import React from 'react';
import './Assets.css';
import { FaBitcoin } from "react-icons/fa6";

const Assets: React.FC = () => {
  return (
    <div className="assets-container">
      <div className='row1'>

      <div className="asset-item">
        <span className="asset-name">BTC</span>
        <span className="asset-value">$24,300.40</span>
        <span className="asset-percentage">1.2%</span>
      </div>
      <div className="asset-item">
        <span className="asset-name">

          UST</span>
        <span className="asset-value">$13,400.20</span>
          <span className="asset-percentage">1.2%</span>
      </div>
      </div>

      <div className='row1'>

      <div className="asset-item">
        <span className="asset-name">ETH</span>
        <span className="asset-value">$4,000.80</span>
          <span className="asset-percentage">1.2%</span>
      </div>
      <div className="asset-item">
        <span className="asset-name">CAR</span>
        <span className="asset-value">$1,900.10</span>
          <span className="asset-percentage">1.2%</span>
      </div>
      </div>
    </div>
  );
}

export default Assets;