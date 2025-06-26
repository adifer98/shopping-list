import itemsSlice from "./ItemsSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: itemsSlice
});

export type AppDispatch = typeof store.dispatch;

export default store;