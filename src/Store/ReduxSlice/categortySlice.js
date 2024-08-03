import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:'category1',
        title:'categort title 1',
    },

    {
        id:'category2',
        title:'categort title 2',
    },

    {
        id:'category3',
        title:'categort title 3',
    },

    {
        id:'category4',
        title:'categort title 4',
    },

    {
        id:'category5',
        title:'categort title 5',
    },

    {
        id:'category6',
        title:'categort title 6',
    },
]

const categorySlice = createSlice({
    name:'Category',
    initialState,
    reducers:{
       
    }

})

export default categorySlice.reducer;