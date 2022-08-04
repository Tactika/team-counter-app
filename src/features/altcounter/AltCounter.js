import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { altincrement, altdecrement, incrementAmountBy } from './altCounterSlice'
import styles from './AltCounter.module.css'
import { incrementByAmount } from '../counter/counterSlice'


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
    <div>
      <div className={styles.altRow}>
        <button
          className={styles.altButton}
          aria-label='increment alt value'
          onClick={() => dispatch(altincrement())}
        >+</button>
        <span className={styles.altValue}>{altcount}</span>
        <button
          className={styles.altButton}
          aria-label='decrement alt value'
          onClick={() => dispatch(altdecrement())}
        >-</button>
      </div>
      <div className={styles.column}>
        <input type="text" className={styles.altTextbox} aria-label="Set Increment Amount" value={altIncrementAmount} onChange={(e) => changeIncrementAmount(e.target.value)} />
        <button className={styles.altButton} onClick={() => { dispatch(incrementAmountBy(altIncrementAmount)) }}>
          Add Amount
        </button>
        <button className={styles.altButton} onClick={() => { dispatch(incrementByAmount(altIncrementAmount)) }}>
          Add To White
        </button>
      </div>
    </div>
  )
}

export default AltCounter