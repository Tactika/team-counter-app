import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import altCounterReducer from '../slice/altCounterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    altcounter: altCounterReducer
  },
});
