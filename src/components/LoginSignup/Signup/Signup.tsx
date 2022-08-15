import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../../apis/setting'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'
import { RootState } from '../../../store/store'
import CurrentStatusFirst from '../CurrentStatus/CurrentStatusFirst'
import Signupinfo from './Signupinfo'
import Signuppw from './Signuppw'
import SignupVerify from './SignupVerify'
import { EmailDiv, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'

const Signup = () => {
    const signupComponent = useSelector((state: RootState) => state.component.component)
    const userData = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')

    const handleClick = async (e) => {
        dispatch(setUser({ key: 'email', value: email }))
        e.preventDefault()
        dispatch(setComponent('Signuppw'))
        // await apiInstance.post('/verify', { email: email })
    }

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }
    return (
        <>
            {signupComponent === 'Signup' && (
                <SignupContainerDiv>
                    <CurrentStatusFirst />
                    <p>이메일 입력</p>
                    <EmailDiv>
                        <div>Email</div>
                        <input type='email' name='email' value={email} placeholder='example@company.com' onChange={handleChange} />
                    </EmailDiv>
                    <ProgressBtn disabled={email === ''} onClick={handleClick}>
                        다음
                    </ProgressBtn>
                </SignupContainerDiv>
            )}
            {signupComponent === 'Signuppw' && <Signuppw />}
            {signupComponent === 'Signupinfo' && <Signupinfo />}
            {signupComponent === 'SignupVerify' && <SignupVerify />}
        </>
    )
}

export default Signup
