import { createSlice } from '@reduxjs/toolkit';


export const imgFocus = createSlice({
    name: 'imgFocus',
    initialState: [],
    reducers: {
        setImgFocus(state, action) {
            state = action.payload
            return state
        }
    },
});

export const { setImgFocus } = imgFocus.actions;
export default imgFocus.reducer;