import Counter from "../../components/Counter";
import AltCounter from "../../components/AltCounter";
import React from "react";

const Counters = () => {
    return (
        <div className='flex w-screen md:block' >
            <Counter />
            <AltCounter />
        </div>
    )
}

export default Counters;