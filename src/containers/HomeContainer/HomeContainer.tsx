import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./HomeContainer.css";

function HomeContainer() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default HomeContainer;
