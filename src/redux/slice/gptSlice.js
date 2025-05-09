import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesName: null,
        moviesResult: null
    },

    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult: (state, action) => {
            const { moviesName, moviesResult } = action.payload;

            state.moviesName = moviesName;
            state.moviesResult = moviesResult;
        }
    }
});

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
