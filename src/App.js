import React from 'react';
import Counters from './features/Counters';
import './styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Weather from './features/weather/Weather';
import Navbar from './features/navbar'

function App() {
  return (
    <div className="items-center" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Counters />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>

    </div>
  );
}

export default App;
