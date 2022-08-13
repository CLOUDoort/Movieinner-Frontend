import { useState } from 'react'
import { EmailDiv, SignupContainerDiv } from './Signup/Signup_pw.style'

const Forgot = () => {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <SignupContainerDiv>
                <div>비밀번호 찾기</div>
                <EmailDiv onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                    <button>인증 메일 발송!</button>
                </EmailDiv>
            </SignupContainerDiv>
        </>
    )
}

export default Forgot
