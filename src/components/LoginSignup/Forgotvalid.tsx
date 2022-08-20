import { useState } from 'react'
import { EmailForm, ForgotContainer } from './Forgot.style'
import { ProgressBtn } from './Signup/Signup_pw.style'

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
            <ForgotContainer>
                <div>비밀번호 찾기</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>새 비밀번호 입력</div>
                    <input type='password' name='first' value={email} placeholder='6자리 이상 입력해 주세요.' onChange={handleChange} />
                    <div>비밀번호 확인</div>
                    <input type='password' name='second' value={email} placeholder='다시 한번 입력해 주세요.' onChange={handleChange} />
                </EmailForm>
                <div>
                    <ProgressBtn>비밀번호 재설정</ProgressBtn>
                </div>
            </ForgotContainer>
        </>
    )
}

export default Forgotvalid
