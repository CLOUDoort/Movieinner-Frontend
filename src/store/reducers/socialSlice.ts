import { createSlice } from '@reduxjs/toolkit'

export interface SocialLoginState {
    socialEmail: string
}

const initialState: SocialLoginState = {
    socialEmail: '',
}

export const socialSlice = createSlice({
    name: 'social',
    initialState,
    reducers: {
        setSocialEmail: (state, action) => {
            state.socialEmail = action.payload
        },
    },
})

export const { setSocialEmail } = socialSlice.actions
export default socialSlice.reducer
