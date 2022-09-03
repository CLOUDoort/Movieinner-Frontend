import { configureStore } from '@reduxjs/toolkit'
import signupComponentReducer from './reducers/signupSlice'
import userReducer from './reducers/signupSlice'
import tokenReducer from './reducers/logintokenSlice'

export const store = configureStore({
    reducer: {
        signup: signupComponentReducer,
        user: userReducer,
        token: tokenReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
