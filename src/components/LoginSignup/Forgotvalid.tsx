import { useState } from 'react'
import { EmailForm, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'

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
                <EmailForm onSubmit={handleSubmit}>
                    <input type='email' name='email' value={email} placeholder='새 비밀번호를 입력하세요' onChange={handleChange} />
                    <input type='email' name='email' value={email} placeholder='새 비밀번호를 다시 입력하세요' onChange={handleChange} />
                </EmailForm>
                <div>
                    <ProgressBtn>완료</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Forgotvalid
