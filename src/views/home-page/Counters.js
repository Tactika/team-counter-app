import Counter from "../../components/Counter";
import AltCounter from "../../components/AltCounter";
import React from "react";

const Counters = () => {
  return (
    <div className="flex w-screen">
      <Counter />
      <AltCounter />
    </div>
  );
};

export default Counters;
