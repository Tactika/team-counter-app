import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAltCount } from "../../API/altCounterApi";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAltAsync = createAsyncThunk(
  "altCounter/fetchAltCount",
  async (amount) => {
    const response = await fetchAltCount(amount);
    return response.data;
  }
);

export const altCounterSlice = createSlice({
  name: "altcounter",
  initialState,
  reducers: {
    altincrement: (state) => {
      state.value += 1;
    },
    altdecrement: (state) => {
      state.value -= 1;
    },
    incrementAmountBy: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAltAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAltAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { altincrement, altdecrement, incrementAmountBy } =
  altCounterSlice.actions;

export const selectAltCount = (state) => state.altcounter.value;

export const incrementIfEven = (amount) => (dispatch, getState) => {
  const altCurrentValue = selectAltCount(getState());
  if (altCurrentValue % 2 === 0) {
    dispatch(incrementAmountBy(amount));
  }
};

export default altCounterSlice.reducer;
