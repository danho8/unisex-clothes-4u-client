import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isToggleCart: false,
    isToggleSaleCode: false
};

export const cartDrawer = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isToggleCart = !state.isToggleCart
        },
        toggleSaleCode: (state) => {
            state.isToggleSaleCode = !state.isToggleSaleCode
        }
    },
});

export const { toggleCart, toggleSaleCode } = cartDrawer.actions;
export default cartDrawer.reducer;