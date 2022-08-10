import React from 'react';
import Counters from './views/home-page/Counters';
import './styles/App.scss';
import { Routes, Route } from "react-router-dom";
import Weather from './views/weather-page/Weather';
import Navbar from './components/Navbar'
import NotFoundPage from './views/not-found-page/NotFoundPage';
import AboutUs from './views/about-us-page/AboutUs';
import WebCam from './views/web-cam-page/WebCam';


function App() {
  return (
    <div className="items-center, body" >
      <Navbar />
        <Routes>
          <Route path='/' element={<Counters />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/aboutus' element={<AboutUs />} />    
          <Route path='/webcam' element={<WebCam />}/> 
          <Route path='*' element={<NotFoundPage />}/> 
        </Routes>
    </div>
  );
}

export default App;
