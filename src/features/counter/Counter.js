import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import logo from '../../logo.svg'
// import styles from './Counter.module.css';
import { incrementAmountBy } from '../altcounter/altCounterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="counter">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="column">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        < button
          className="button"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button >
        <button className="button" onClick={() => { dispatch(incrementAmountBy(incrementAmount)) }}>
          Add To Black
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div >
  );
}
