import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { EmailForm, ForgotContainer } from './Forgot.style'

const Forgot = () => {
    const [email, setEmail] = useState('')
    const [vaild, setValid] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const response = await apiInstance.post('/verify/password', { email: email, type: 'password' })
            if (response.data.isEmailExist) setValid(true)
            console.log('success')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <ForgotContainer>
                <p>비밀번호 찾기</p>
                <EmailForm>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='example@company.com' onChange={handleChange} />
                    <button onClick={handleClick} disabled={email === ''}>
                        인증 메일 발송!
                    </button>
                </EmailForm>
            </ForgotContainer>
        </>
    )
}

export default Forgot
