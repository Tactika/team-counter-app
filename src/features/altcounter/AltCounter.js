import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './altCounterSlice'
import styles from './AltCounter.module.css'


const AltCounter = () => {
    const altcount = useSelector ((state) => state.altcounter.value)
    const dispatch = useDispatch()
    
  return (
    <div>AltCounter</div>
  )
}

export default AltCounter