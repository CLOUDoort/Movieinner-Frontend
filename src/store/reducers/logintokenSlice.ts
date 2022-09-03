import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
    token: string
}

const initialState: LoginState = {
    token: '',
}

export const logintokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
})

export const { setToken } = logintokenSlice.actions
export default logintokenSlice.reducer
