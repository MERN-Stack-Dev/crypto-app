import { Assets, MarketOverView, Operation, Transaction } from 'components';
import React from 'react';

function Home() {
  return (
    <div className="main-content">
      <div className="dashboard-header">

        <div className="total-asset-value">
          <p>Total asset value</p>
          <h2>$ 345,045.31</h2>
          <p>~ 13.4578 BTC</p>
        </div>
        <div className="assets-header">
          <h2>Assets</h2>
          <a href="#">See All</a>
        </div>
      </div>
      <div className="marketoverview-assets">
        <MarketOverView />
        <Assets />
      </div>
      <div className="transaction-operation">
        <Transaction />
        <Operation />
      </div>
    </div>
  )
}

export default Home