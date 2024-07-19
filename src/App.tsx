import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers';
import  {Login}  from './components';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeContainer />} />
      </Routes>
    </div>
  );
}

export default App;
