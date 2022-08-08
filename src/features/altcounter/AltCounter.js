import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { altincrement, altdecrement, incrementAmountBy, incrementAltAsync, incrementIfEven } from './altCounterSlice'
// import styles from './AltCounter.module.css'
import { incrementByAmount } from '../counter/counterSlice'
import logo from '../../logo.svg'

const AltCounter = () => {
  const altcount = useSelector((state) => state.altcounter.value)
  const dispatch = useDispatch()
  const [altIncrementAmount, setAltIncrementAmount] = useState(2)

  const changeIncrementAmount = (incrementAmount) => {
    var intIncrementAmount = parseInt(incrementAmount);
    console.log(typeof intIncrementAmount);
    setAltIncrementAmount(intIncrementAmount);
  }


  return (
    <div className="counter" id="altCounter">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="altRow">
        <button
          className="altButton"
          aria-label='increment alt value'
          onClick={() => dispatch(altincrement())}
        >+</button>
        <span className="altValue">{altcount}</span>
        <button
          className="altButton"
          aria-label='decrement alt value'
          onClick={() => dispatch(altdecrement())}
        >-</button>
      </div>
      <div className="column">
        <input type="text" className="altTextbox" aria-label="Set Increment Amount" value={altIncrementAmount} onChange={(e) => changeIncrementAmount(e.target.value)} />
        <button className="altButton" onClick={() => { dispatch(incrementAmountBy(altIncrementAmount)) }}>
          Add Amount
        </button>
        <button className="altButton" onClick={() => { dispatch(incrementByAmount(altIncrementAmount)) }}>
          Add To White
        </button>
        <button className="altButton" onClick={() => { dispatch(incrementAltAsync(altIncrementAmount)) }}>
          Add Async
        </button>
        <button className="altButton" onClick={() => { dispatch(incrementIfEven(altIncrementAmount)) }}>
          Add If Even
        </button>
      </div>
    </div>
  )
}

export default AltCounter