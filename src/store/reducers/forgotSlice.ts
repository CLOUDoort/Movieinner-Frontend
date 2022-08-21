import { createSlice } from '@reduxjs/toolkit'

export interface ForgotState {
    forgot: {}
}

const initialState: ForgotState = {
    forgot: {},
}

export const forgotSlice = createSlice({
    name: 'forgot',
    initialState,
    reducers: {
        setForgot: (state, action) => {
            state.forgot[action.payload.key] = action.payload.value
        },
    },
})

export const { setForgot } = forgotSlice.actions
export default forgotSlice.reducer
