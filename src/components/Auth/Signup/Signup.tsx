import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../../apis/setting'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import { RootState } from '../../../store/store'
import CurrentStatusFirst from '../CurrentStatus/CurrentStatusFirst'
import Signupinfo from './Signupinfo'
import Signuppw from './Signuppw'
import SignupVerify from './SignupVerify'
import { EmailDiv, GreenText, ProgressBtn, RedText, SignupContainerDiv } from './Signup_pw.style'
import { emailRegExp } from '../SignupLogic'

const Signup = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)
    const dispatch = useDispatch()
    const [emailValid, setEmailValid] = useState({
        // 이메일 정규식 확인
        touch: false,
        valid: false,
    })
    const [checkEmail, setCheckEmail] = useState(false) // 이메일 중복 여부
    const [email, setEmail] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch(setUser({ key: 'email', value: email }))
        dispatch(setSignup('Signuppw'))
    }

    const handleFocus = () => {
        setEmailValid({
            ...emailValid,
            touch: true,
        })
    }
    const handleChange = async (e) => {
        const { value } = e.target
        setEmail(value)
        if (email.match(emailRegExp)) {
            setEmailValid({
                ...emailValid,
                valid: true,
            })
            try {
                const response = await apiInstance.post('/users/email', { email: email })
                if (response.data.isEmailExisted) setCheckEmail(true)
                else setCheckEmail(false)
                console.log(response)
            } catch (e) {
                console.log(e.response)
                setCheckEmail(false)
            }
        } else {
            setEmailValid({
                ...emailValid,
                valid: false,
            })
        }
    }
    return (
        <>
            {signupComponent === 'Signup' && (
                <SignupContainerDiv>
                    <CurrentStatusFirst />
                    <p>이메일 입력</p>
                    <EmailDiv>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            placeholder='example@company.com'
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                        <div>
                            {emailValid.touch === true &&
                                (emailValid.valid === true ? (
                                    checkEmail === true ? (
                                        <RedText>존재하는 이메일입니다.</RedText>
                                    ) : (
                                        <GreenText>올바른 이메일 형식입니다.</GreenText>
                                    )
                                ) : (
                                    <RedText>올바르지 않은 이메일 형식입니다.</RedText>
                                ))}
                        </div>
                    </EmailDiv>
                    <ProgressBtn disabled={email === '' || !email.match(emailRegExp) || checkEmail} onClick={handleClick}>
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
