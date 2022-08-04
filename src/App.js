import React from 'react';
import Counters from './features/Counters';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Weather from './features/weather/Weather'

function App() {
  return (
    <div className="App">
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
