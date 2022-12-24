import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import CurrentStatusFirst from '../CurrentStatus/CurrentStatusFirst'
import { CheckText, EmailDiv, ProgressBtn, SignupContainerDiv } from './Signup.style'
import { emailRegExp } from '../../../Lib/EmailRegExp'
import SocialLogin from '../Login/SocialLogin'

const Signup = (props) => {
    const { dispatch } = props
    // 이메일 정규식 확인
    const [emailValid, setEmailValid] = useState({
        touch: false,
        valid: false,
    })
    const [checkEmail, setCheckEmail] = useState(false) // 이메일 중복 여부
    const [email, setEmail] = useState('')

    // email 작성 완료
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch(setUser({ key: 'email', value: email }))
        dispatch(setSignup('Signuppw'))
    }

    // 이메일 정규식 확인, 중복여부 확인 focus
    const handleFocus = () => {
        setEmailValid({
            ...emailValid,
            touch: true,
        })
    }

    // 이메일 정규식 확인, 이메일 중복 여부 확인
    const handleChange = async (e) => {
        const { value } = e.target
        setEmail(value)
        if (email.match(emailRegExp)) {
            setEmailValid({
                ...emailValid,
                valid: true,
            })
            try {
                const response = await apiInstance.post('/users/check/email', { email: email })
                if (response.data.isEmailExisted) setCheckEmail(true)
                else setCheckEmail(false)
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
                    autoComplete='off'
                />
                <div>
                    {emailValid.touch === true &&
                        email.length > 0 &&
                        (emailValid.valid === true ? (
                            checkEmail === true ? (
                                <CheckText check={false}>존재하는 이메일입니다.</CheckText>
                            ) : (
                                <CheckText check={true}>올바른 이메일 형식입니다.</CheckText>
                            )
                        ) : (
                            <CheckText check={false}>올바르지 않은 이메일 형식입니다.</CheckText>
                        ))}
                </div>
            </EmailDiv>
            <ProgressBtn disabled={email === '' || !email.match(emailRegExp) || checkEmail} onClick={handleClick}>
                다음
            </ProgressBtn>
            <SocialLogin />
        </SignupContainerDiv>
    )
}

export default Signup
