import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isVisible:false
}
const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible
        }
    }
})
export default uiSlice.reducer;

export  const  uiAction = uiSlice.actions;