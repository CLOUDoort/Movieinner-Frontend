import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import { RootState } from '../../../store/store'
import CurrentStatusFirst from '../CurrentStatus/CurrentStatusFirst'
import Signupinfo from './Signupinfo'
import Signuppw from './Signuppw'
import SignupVerify from './SignupVerify'
import { EmailDiv, GreenText, ProgressBtn, RedText, SignupContainerDiv } from './Signup_pw.style'

const Signup = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)
    const dispatch = useDispatch()
    const [emailValid, setEmailValid] = useState({
        touch: false,
        valid: false,
    })

    const [email, setEmail] = useState('')
    const emailRegExp =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

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

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
        if (emailRegExp.test(email)) {
            setEmailValid({
                ...emailValid,
                valid: true,
            })
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
                                    <GreenText>올바른 이메일 형식입니다.</GreenText>
                                ) : (
                                    <RedText>올바르지 않은 이메일 형식입니다.</RedText>
                                ))}
                        </div>
                    </EmailDiv>
                    <ProgressBtn disabled={email === '' || !emailRegExp.test(email)} onClick={handleClick}>
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
