import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import CurrentStatusFirst from './CurrentStatus/CurrentStatusFirst'
import { EmailForm, SignupContainerDiv } from './Signup_pw.style'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [submitText, setSubmitText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitText('메일을 전송하였습니다. 메일을 확인해주세요!')
        await apiInstance.post('/signup', email)
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusFirst />
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                    <input type='submit' value='인증 메일 발송!' />
                    <p>{submitText}</p>
                </EmailForm>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
