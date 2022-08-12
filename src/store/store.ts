import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './reducers/pageSlice'

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
