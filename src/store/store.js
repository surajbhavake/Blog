import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"

// and we use redux for storing temperory data its like we take data
// from database and place it in store and then all the files can access it from store

const store = configureStore({
    // A function that receives the current state and an action,
    //  then decides how the state should change so basically its a state updater cause only he is allowed
    reducer:{
        auth : authSlice
    }
});

export default store;