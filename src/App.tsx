import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './containers';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<HomeContainer/>}></Route>
    </Routes>
  );
}

export default App;
