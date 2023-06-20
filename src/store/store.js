import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers"

const rootReducer = combineReducers({
    movie: movieSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export default store 