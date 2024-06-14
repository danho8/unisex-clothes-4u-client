import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggleDrawer: false,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state) => {
            state.toggleDrawer = !state.toggleDrawer
        }

    },
});

export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;