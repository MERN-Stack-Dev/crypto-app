import { Assets, MarketOverView, Operation, Transaction } from 'components';
import React, { useEffect } from 'react';
import { getAllCryptoData } from 'store/api';

function Home() {
  
  useEffect(() => {
    // getAllCryptoData()
  }, [])

  return (
    <div className="main-content">
      <div className="dashboard-header">

        <div className="total-asset-value">
          <p className='total-asset-value-text'>Total asset value</p>
          <h2 className='total-asset-value-text'>$ 345,045.31</h2>
          <p className='total-asset-value-text'>~ 13.4578 BTC</p>
        </div>
        <div className="assets-header">
          <h2>Assets</h2>
          {/* <a href="#">See All</a> */}
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