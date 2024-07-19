import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import MarketOverview from "../../components/MarketOverview/MarketOverView";
import Assets from "../../components/Assets/Assets";
import Transaction from "../../components/Transaction/Transaction";
import Operation from "../../components/Operation/Operation";
import "./HomeContainer.css";

const HomeContainer: React.FC = () => {
    return (
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          <Header />
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
            <MarketOverview />
            <Assets />
            </div>
            <div className="transaction-operation">
              <Transaction />
              <Operation />
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomeContainer;
