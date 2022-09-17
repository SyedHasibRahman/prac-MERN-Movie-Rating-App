import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {},
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default moviesSlice.reducer