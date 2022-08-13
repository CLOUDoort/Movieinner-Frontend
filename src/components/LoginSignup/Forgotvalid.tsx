import { useState } from 'react'
import { EmailDiv, ProgressBtn, SignupContainerDiv } from './Signup/Signup_pw.style'

const Forgotvalid = () => {
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
                    <input type='email' name='email' value={email} placeholder='새 비밀번호를 입력하세요' onChange={handleChange} />
                    <input type='email' name='email' value={email} placeholder='새 비밀번호를 다시 입력하세요' onChange={handleChange} />
                </EmailDiv>
                <div>
                    <ProgressBtn>완료</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Forgotvalid
