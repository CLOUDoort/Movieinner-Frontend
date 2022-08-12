import { createSlice } from '@reduxjs/toolkit'

export interface TempState {
    pageValue: string
}

const initialState: TempState = {
    pageValue: 'Signup',
}

export const pageSlice = createSlice({
    name: 'page', // slice의 이름
    initialState, // 초기화
    reducers: {
        // 객체로 반환, 모두 함수로 구성
        setPage: (state, action) => {
            state.pageValue = action.payload
        },
        // action 발생 후의 값 변화, 단순한 JS문법 기능 삽입 가능
        // 하지만 시간 걸리는 비동기 작업은 안된다는 약간의 제약 존재
    },
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer
// store에 전달
