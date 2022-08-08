import Counter from './counter/Counter'
import AltCounter from './altcounter/AltCounter'
import React from "react";

const Counters = () => {
    return (
        <div className='flex w-screen' >
            <Counter />
            <AltCounter />
        </div>
    )
}

export default Counters
