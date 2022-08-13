import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './reducers/signupSlice'
import userReducer from './reducers/signupSlice'

export const store = configureStore({
    reducer: {
        component: componentReducer,
        user: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
