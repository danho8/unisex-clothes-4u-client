import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCloseSearch: false,
};

export const loadingSearch = createSlice({
    name: 'toggleSearch',
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.isCloseSearch = !state.isCloseSearch
        }

    },
});

export const { toggleSearch } = loadingSearch.actions;
export default loadingSearch.reducer;