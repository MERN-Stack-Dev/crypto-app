import React from 'react';
import './Operation.css';

function Operation() {
  return (
    <div className="operation">
      <div className="heading-op">
        
        <h2 className='heading-operation-header'>Operation</h2>
        
        <div className="trading">
          <div className="buy">Buy</div>
          <div className="sell">Sell</div>
          <div className="exchange">Exchange</div>
        </div>
      
      </div>

      <div className="operation-input">
        <div>You pay</div>
        <div className="input">
          <span className='currency'>UST</span>
          <span>$321</span>
        </div>

      </div>
      <div className="operation-input">
        <div>You get</div>
        <div className="input">
          <span className='currency'>BST</span>
          <span>$321</span>
        </div>

      </div>
      <div className="value">1 BTC = $2.345</div>
      <button className='buybutton'>Buy Button</button>
    </div>
  );
}

export default Operation;
