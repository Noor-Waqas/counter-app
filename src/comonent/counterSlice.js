import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;





// const initialState = {
//     count: 0
//   };
  
//   const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return {
//           ...state,
//           count: state.count + 1
//         };
//       case 'DECREMENT':
//         return {
//           ...state,
//           count: state.count - 1
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default counterReducer;

  