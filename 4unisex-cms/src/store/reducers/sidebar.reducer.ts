import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    update: true,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state) => {
            state.update = !state.update
        }

    },
});

export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;