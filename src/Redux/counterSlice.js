import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        allData: [],
    },
    reducers: {

        //submits all data(combined) into an array
        submitAllData: (state, action) => {
            state.allData = [...state.allData, action.payload];
            return state;
        },

        //updates updated array to allData
        updateAllData: (state, action) => {
            state.allData = action.payload;
            return state;
        },

        //delete users individually
        deleteUser: (state, action) => {
            state.allData = state.allData.filter((data,index) => index !== action.payload);
            return state;
        },

        //delete all the users at once
        deleteAll: (state) => {
          state.allData = [];
          return state;
        },
    },
});

export const { submitAllData, updateAllData, deleteUser, deleteAll } = counterSlice.actions;

export default counterSlice.reducer;