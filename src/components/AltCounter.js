import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  altincrement,
  altdecrement,
  incrementAmountBy,
  incrementAltAsync,
  incrementIfEven,
} from "../redux/slice/altCounterSlice";
import { incrementByAmount } from "../redux/slice/counterSlice";
import logo from "../logo.svg";

const AltCounter = () => {
  const altcount = useSelector((state) => state.altcounter.value);
  const dispatch = useDispatch();
  const [altIncrementAmount, setAltIncrementAmount] = useState(2);

  const changeIncrementAmount = (incrementAmount) => {
    var intIncrementAmount = parseInt(incrementAmount) || 0;
    setAltIncrementAmount(intIncrementAmount);
  };

  return (
    <div className="flex flex-wrap flex-col w-1/2 max-h-full bg-black content-center md:w-screen">
      <img src={logo} className="h-64 z-0 animate-App-logo-float" alt="logo" />
      <div className="flex items-center justify-center">
        <button
          className="px-3 pb-1 w-12 h-12 text-4xl border-solid border-2 border-purple-600 text-purple-600 "
          aria-label="increment alt value"
          onClick={() => dispatch(altincrement())}
        >
          +
        </button>
        <span className="text-7xl pl-10 pr-10 text-purple-600">{altcount}</span>
        <button
          className="pl-3 pr-3 pb-1 w-12 h-12 text-4xl border-solid border-2 border-purple-600 text-purple-600"
          aria-label="decrement alt value"
          onClick={() => dispatch(altdecrement())}
        >
          -
        </button>
      </div>
      <div className="flex align-middle flex-col justify-center">
        <input
          className="mb-8 text-4xl border-solid border-purple-600 text-center"
          aria-label="Set Increment Amount"
          value={altIncrementAmount}
          onChange={(e) => changeIncrementAmount(e.target.value)}
        />
        <button
          className=" pb-1 text-4xl border-solid border-2 border-purple-600 text-purple-600 mb-3"
          onClick={() => {
            dispatch(incrementAmountBy(altIncrementAmount));
          }}
        >
          Add Amount
        </button>
        <button
          className=" pb-1 text-4xl border-solid border-2 border-purple-600 text-purple-600 mb-3"
          onClick={() => {
            dispatch(incrementByAmount(altIncrementAmount));
          }}
        >
          Add To White
        </button>
        <button
          className=" pb-1 text-4xl border-solid border-2 border-purple-600 text-purple-600 mb-3"
          onClick={() => {
            dispatch(incrementAltAsync(altIncrementAmount));
          }}
        >
          Add Async
        </button>
        <button
          className=" pb-1 text-4xl border-solid border-2 border-purple-600 text-purple-600"
          onClick={() => {
            dispatch(incrementIfEven(altIncrementAmount));
          }}
        >
          Add If Even
        </button>
      </div>
    </div>
  );
};

export default AltCounter;
