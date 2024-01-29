// counterSlice.js

import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // You can add more actions as needed
  },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
