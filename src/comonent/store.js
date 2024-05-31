import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./counterSlice";
const store = configureStore({
    reducer:{
        counter:counterSlice,
    }
})
export default store
// import { createStore } from 'redux';
// import counterReducer from './reduser'; 

// const store = createStore(counterReducer);

// export default store;