import altCounterReducer, {
    altincrement,
    altdecrement,
  } from '../redux/slice/altCounterSlice';
  
  describe("altcounter reducer", () => {
    const initialState = {
      value: 3,
      status: "idle",
    };
    it("should handle alt initial state", () => {
      expect(altCounterReducer(undefined, { type: "unknown" })).toEqual({
        value: 0,
        status: "idle",
      });
    });
  
    it("should handle alt increment", () => {
      const actual = altCounterReducer(initialState, altincrement());
      expect(actual.value).toEqual(4);
    });
  
    it("should handle alt decrement", () => {
      const actual = altCounterReducer(initialState, altdecrement());
      expect(actual.value).toEqual(2);
    });
  
    // add if odd test
    // add if even test
    // add sync state test
    // add async delay time test
  
  });
  