import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isVisible: false,
    notification:null
}
const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message:action.payload.message,
            }
        }
    }
})
export default uiSlice.reducer;

export  const  uiAction = uiSlice.actions;