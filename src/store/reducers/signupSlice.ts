import { createSlice } from '@reduxjs/toolkit'

export interface TempState {
    component: string
    user: {}
}

const initialState: TempState = {
    component: 'Signup',
    user: {},
}

export const signupSlice = createSlice({
    name: 'signup', // slice의 이름
    initialState, // 초기화
    reducers: {
        // 객체로 반환, 모두 함수로 구성
        setComponent: (state, action) => {
            state.component = action.payload
        },
        setUser: (state, action) => {
            state.user[action.payload.key] = action.payload.value
        },
        // 이게 맞나? => 잘못됨
        // action 발생 후의 값 변화, 단순한 JS문법 기능 삽입 가능
        // 하지만 시간 걸리는 비동기 작업은 안된다는 약간의 제약 존재
    },
})

export const { setComponent, setUser } = signupSlice.actions
export default signupSlice.reducer
// store에 전달
