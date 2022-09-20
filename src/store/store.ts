import { configureStore } from '@reduxjs/toolkit'
import signupComponentReducer from './reducers/signupSlice'
import userReducer from './reducers/signupSlice'
import tokenReducer from './reducers/logintokenSlice'
import socialEmailReducer from './reducers/socialSlice'

export const store = configureStore({
    reducer: {
        signup: signupComponentReducer,
        user: userReducer,
        token: tokenReducer,
        socialEmail: socialEmailReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
