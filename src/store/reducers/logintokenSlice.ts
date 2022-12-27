import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
    token: string
    nickname: string
    email: string
    idx: number
}

const initialState: LoginState = {
    token: '',
    nickname: '',
    email: '',
    idx: 0
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
        },
        setIdx:(state, action) => {
            state.idx = action.payload
        }
    },
})

export const { setToken, setNickname, setEmail } = logintokenSlice.actions
export default logintokenSlice.reducer
