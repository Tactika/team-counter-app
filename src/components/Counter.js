import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../redux/slice/counterSlice";
import logo from "../logo.svg";
import { incrementAmountBy } from "../redux/slice/altCounterSlice";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  const incrementValue = Number(incrementAmount) || 0;

  return (

    <div className='flex flex-wrap flex-col w-1/2 max-h-full bg-white content-center mt-12 md:w-screen'>
      <img src={logo} className="h-64 z-0 animate-App-logo-float" alt="logo" />
      <div className="flex items-center justify-center">
        <button
          className="pl-3 pr-3 w-12 h-12 appearance-none bg-none text-4xl  outline-none border-2 border-solid border-transparent text-purple-600 pb-4 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-7xl pl-10 pr-10  mt-2 text-purple-600">
          {count}
        </span>
        <button
          className="pl-3 pr-3 w-12 h-12 appearance-none bg-none text-4xl  outline-none border-2 border-solid border-transparent text-purple-600 pb-4 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex align-middle flex-col justify-center">
        <input
          className="mb-8 text-4xl border-solid border-purple-600  text-purple-600 "
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="appearance-none bg-none text-4xl pl-12 pr-12 outline-none border-2 border-solid border-transparent text-purple-600 mb-3 pb-1 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="appearance-none bg-none text-4xl pl-12 pr-12 outline-none border-2 border-solid border-transparent text-purple-600 mb-3 pb-1 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
          onClick={() => {
            dispatch(incrementAmountBy(incrementAmount));
          }}
        >
          Add To Black
        </button>
        <button
          className="appearance-none bg-none text-4xl pl-12 pr-12 outline-none border-2 border-solid border-transparent text-purple-600 mb-3 pb-1 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="appearance-none bg-none text-4xl pl-12 pr-12 outline-none border-2 border-solid border-transparent text-purple-600 mb-3 pb-1 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2 "
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
