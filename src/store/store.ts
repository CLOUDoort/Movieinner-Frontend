import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './reducers/signupSlice'
import userReducer from './reducers/signupSlice'
import forgotReducer from './reducers/forgotSlice'

export const store = configureStore({
    reducer: {
        component: componentReducer,
        user: userReducer,
        forgot: forgotReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
