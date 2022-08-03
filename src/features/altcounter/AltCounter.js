import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { altincrement, altdecrement } from './altCounterSlice'
import styles from './AltCounter.module.css'


const AltCounter = () => {
    const altcount = useSelector ((state) => state.altcounter.value)
    const dispatch = useDispatch()
    
  return (
    <div id="altCounter">AltCounter
      <div>
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
    </div>
  )
}

export default AltCounter