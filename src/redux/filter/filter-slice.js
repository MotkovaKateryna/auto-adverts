import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    makeFilter:'',
    priceFilter: '',
}

const filterSlice = createSlice({
    name:"filter",
    initialState: INITIAL_STATE,
    reducers: {
        setMakeFilter: (state,{payload}) => {state.makeFilter = payload},
        setPriceFilter: (state,{payload}) => {state.priceFilter = payload},
    },
});

export const {setMakeFilter, setPriceFilter} = filterSlice.actions;

const filterReducer =filterSlice.reducer;

export default  filterReducer;