import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="counter">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </div>
        <div id="altCounter" className="counter">
          <img src={logo} className="App-logo" alt="logo" />

        </div>

      </header>
    </div>
  );
}

export default App;
