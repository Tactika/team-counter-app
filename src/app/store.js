import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import altCounterReducer from '../features/altcounter/altCounterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    altCounter: altCounterReducer
  },
});
