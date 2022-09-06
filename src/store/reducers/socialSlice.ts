import { createSlice } from '@reduxjs/toolkit'

export interface SocialLoginState {
    socialEmail: string
    socialToken: string
}

const initialState: SocialLoginState = {
    socialEmail: '',
    socialToken: '',
}

export const socialSlice = createSlice({
    name: 'social',
    initialState,
    reducers: {
        setSocialEmail: (state, action) => {
            state.socialEmail = action.payload
        },
        setSocialToken: (state, action) => {
            state.socialToken = action.payload
        },
    },
})

export const { setSocialEmail, setSocialToken } = socialSlice.actions
export default socialSlice.reducer
