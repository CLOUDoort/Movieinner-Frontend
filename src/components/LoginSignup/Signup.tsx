import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../apis/setting'
import { setComponent, setUser } from '../../store/reducers/signupSlice'
import { RootState } from '../../store/store'
import CurrentStatusFirst from './CurrentStatus/CurrentStatusFirst'
import Signupinfo from './Signupinfo'
import Signuppw from './Signuppw'
import { EmailForm, FailText, SignupContainerDiv, SuccessText } from './Signup_pw.style'

const Signup = () => {
    const signupComponent = useSelector((state: RootState) => state.component.component)
    const userData = useSelector((state: RootState) => state.user.user)
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
        await apiInstance
            .post('/signup', { email: email })
            .then(() => setSuccessText('메일을 전송하였습니다. 메일을 확인해주세요!'))
            .catch(() => setFailText('메일 전송 실패!'))
        dispatch(setUser({ email: email }))
        console.log(userData)
    }
    return (
        <>
            {signupComponent === 'Signup' && (
                <SignupContainerDiv>
                    <CurrentStatusFirst />
                    <div>회원 이메일 인증</div>
                    <EmailForm onSubmit={handleSubmit}>
                        <div>Email</div>
                        <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                        <input type='submit' value='인증 메일 발송!' />
                        <SuccessText>{successText}</SuccessText>
                        <FailText>{failText}</FailText>
                    </EmailForm>
                </SignupContainerDiv>
            )}
            {signupComponent === 'Signuppw' && <Signuppw />}
            {signupComponent === 'Signupinfo' && <Signupinfo />}
        </>
    )
}

export default Signup
