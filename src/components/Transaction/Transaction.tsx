import React from 'react';
import './Transaction.css';

const Transaction: React.FC = () => {
  return (
    <div className="transaction">
      <div className='upper-heading'>
      <h2>Transaction</h2>
      <span >see all</span>
      </div>
      

      <div className="transaction-item">
        <span>Bitcoin</span>
        <div className='transaction-date'>
        <span>10:34AM</span>
        <span className='grey'>2 Nov 2023</span>
        </div>
        <div className='transaction-date'>
          <span>+0.431 BTC</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        
        <span>completed</span>
      </div>

      <div className="transaction-item">
        <span>Bitcoin</span>
        <div className='transaction-date'>
        <span>10:34AM</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <div className='transaction-date'>
          <span>+0.431 BTC</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <span>completed</span>
      </div>

      <div className="transaction-item">
        <span>Bitcoin</span>
        <div className='transaction-date'>
        <span>10:34AM</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <div className='transaction-date'>
          <span>+0.431 BTC</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <span>completed</span>
      </div>

      <div className="transaction-item">
        <span>Bitcoin</span>
        <div className='transaction-date'>
        <span>10:34AM</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <div className='transaction-date'>
          <span>+0.431 BTC</span>
          <span className='grey'>2 Nov 2023</span>
        </div>
        <span>completed</span>
      </div>
      
    </div>
  );
}

export default Transaction;
