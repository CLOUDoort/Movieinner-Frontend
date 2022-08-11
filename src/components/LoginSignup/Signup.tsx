import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import CurrentStatus from './CurrentStatus'
import { EmailForm, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'

const Signup = () => {
    const [email, setEmail] = useState('')

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
                <CurrentStatus />
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
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
