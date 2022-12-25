import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
    token: string
    nickname: string
    email: string
}

const initialState: LoginState = {
    token: '',
    nickname: '',
    email: ''
}

export const logintokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setNickname: (state, action) => {
            state.nickname = action.payload
        },
        setEmail:(state, action) => {
            state.email = action.payload
        }
    },
})

export const { setToken, setNickname, setEmail } = logintokenSlice.actions
export default logintokenSlice.reducer
