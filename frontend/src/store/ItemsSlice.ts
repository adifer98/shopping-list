import type {StateType} from "../interfaces/StateType.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {Item} from "../interfaces/Item.ts";



const initialState : StateType = {
    categories: [],
    items: {},
    loading: true,
    totalItems: 0,
    savedSuccessfully: null,
}

const storeSlice = createSlice({
    name: "items-with-categories",
    initialState,
    reducers: {
        addItem: (state, action : {payload: {category: string, item: string}}) => {
            const category = action.payload.category;
            const item = action.payload.item.trim();
            
            if (state.items[category][item]) {
                state.items[category][item]++;
            } else {
                state.items[category][item] = 1;
            }
            state.totalItems++;
        },
        openAlert: (state, action: {payload: boolean}) => {
            state.savedSuccessfully = action.payload;
        },
        closeAlert: (state) => {
            state.savedSuccessfully = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchItems.fulfilled, (state, action) => {
                let totalItems = 0;
                for (const {category, quantity, name} of action.payload) {
                    state.items[category][name] = quantity;
                    totalItems += quantity;
                }
                state.totalItems = totalItems;
                state.loading = false;
            })
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = [...action.payload];
                for (const category of action.payload) {
                    state.items[category] = {};
                }
            })
    }
    
})

export const fetchItems = createAsyncThunk(
    "store/fetchItems",
    async () => {
        const response = await fetch("http://localhost:5010/api/ShoppingItems");
        return await response.json() as Item[];
    }
)

export const fetchCategories = createAsyncThunk(
    "store/fetchCategories",
    async () => {
        const response = await fetch("http://localhost:5010/api/Categories");
        return await response.json() as string[];
    }
)

export const {
    addItem,
    openAlert,
    closeAlert
} = storeSlice.actions;

export default storeSlice.reducer;