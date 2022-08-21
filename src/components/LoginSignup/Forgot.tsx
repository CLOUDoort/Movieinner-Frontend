import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComponent } from '../../store/reducers/signupSlice'
import { RootState } from '../../store/store'
import { EmailForm, ForgotContainer } from './Forgot.style'
import Forgotvalid from './Forgotvalid'
import { apiInstance } from '../../apis/setting'
import { setForgot } from '../../store/reducers/forgotSlice'

const Forgot = () => {
    const [email, setEmail] = useState('')
    const signupComponent = useSelector((state: RootState) => state.component.component)
    const forgot = useSelector((state: RootState) => state.forgot.forgot)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch(setForgot({ key: 'email', value: email }))
        dispatch(setComponent('Forgot'))
    }
    return (
        <>
            {signupComponent === 'Signup' && (
                <ForgotContainer>
                    <p>비밀번호 찾기</p>
                    <EmailForm>
                        <div>Email</div>
                        <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                        <button onClick={handleClick} disabled={email === ''}>
                            인증 메일 발송!
                        </button>
                    </EmailForm>
                </ForgotContainer>
            )}
            {signupComponent === 'Forgot' && <Forgotvalid />}
        </>
    )
}

export default Forgot
