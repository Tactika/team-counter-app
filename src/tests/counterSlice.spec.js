import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
<<<<<<< HEAD
<<<<<<< HEAD
} from "./counterSlice";
=======
} from '../redux/slice/counterSlice';
>>>>>>> 019e3881aa99a25e185cd34c1d999ecd19c2292f
=======
} from './counterSlice';
>>>>>>> main

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
<<<<<<< HEAD
  // add if odd test
  // add if even test
  // add sync state test
  // add async delay time test
=======
>>>>>>> main
});
