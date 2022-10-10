import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
    token: string
    nickname: string
}

const initialState: LoginState = {
    token: '',
    nickname: '',
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
    },
})

export const { setToken, setNickname } = logintokenSlice.actions
export default logintokenSlice.reducer
