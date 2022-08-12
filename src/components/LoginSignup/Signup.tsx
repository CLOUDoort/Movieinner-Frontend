import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { setPage } from '../../store/reducers/pageSlice'
import { RootState } from '../../store/store'
import CurrentStatusFirst from './CurrentStatus/CurrentStatusFirst'
import Signupinfo from './Signupinfo'
import Signuppw from './Signuppw'
import {
    EmailForm,
    FailText,
    ProgressBtn,
    SignupContainerDiv,
    SuccessText,
} from './Signup_pw.style'
import { useSelector, useDispatch } from 'react-redux'

const Signup = () => {
    const pageValue = useSelector((state: RootState) => state.page.pageValue)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [successText, setSuccessText] = useState('')
    const [failText, setFailText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await apiInstance.post('/signup', email)
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusFirst />
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='이메일을 입력해주세요'
                        onChange={handleChange}
                    />
                    <button>인증 메일 발송!</button>
                </EmailForm>
                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
