import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "counter",
    initialState : { counter : 0},
    reducers : {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action ){
            state.counter--;
        },
        addBy(state, action){
            state.counter += action.payload;
        },
        resetCount(state, action){
            state.counter = 0; 
        }
    }
})

export const actions = counterSlice.actions;
//configure the store by using the configureStore in index.js

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;