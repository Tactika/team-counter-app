import React from 'react';
import Counters from './features/Counters';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Weather from './features/weather/Weather'; 
import Navbar from './features/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Counters />} />
          <Route path='/weather' element={<Weather />} />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
