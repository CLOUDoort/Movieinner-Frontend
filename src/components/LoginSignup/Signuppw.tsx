import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../store/reducers/pageSlice'
import { RootState } from '../../store/store'
import CurrentStatusSecond from './CurrentStatus/CurrentStatusSecond'
import { EmailForm, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'

const Signuppw = () => {
    const pageValue = useSelector((state: RootState) => {
        state.page.pageValue
    })
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setPassword(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPage('Signupinfo'))
    }

    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <div>비밀번호 설정</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>비밀번호</div>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='password' name='pwCheck' placeholder='비밀번호를 다시 입력해주세요' />
                    <input type='submit' value='확인' />
                </EmailForm>

                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
