import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComponent } from '../../store/reducers/signupSlice'
import { RootState } from '../../store/store'
import { EmailForm, ForgotContainer } from './Forgot.style'
import Forgotvalid from './Forgotvalid'

const Forgot = () => {
    const [email, setEmail] = useState('')
    const signupComponent = useSelector((state: RootState) => state.component.component)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setComponent('Forgot'))
    }
    return (
        <>
            {signupComponent === 'Signup' && (
                <ForgotContainer>
                    <div>비밀번호 찾기</div>
                    <EmailForm onSubmit={handleSubmit}>
                        <div>Email</div>
                        <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                        <input type='submit' value='인증 메일 발송!' disabled={email === ''} />
                    </EmailForm>
                </ForgotContainer>
            )}
            {signupComponent === 'Forgot' && <Forgotvalid />}
        </>
    )
}

export default Forgot
