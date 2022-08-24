import { useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { EmailForm, ForgotContainer } from './Forgot.style'
import { ContainerText } from './Signup/SignupVerify.style'
import { GreenText, RedText } from './Signup/Signup_pw.style'

const Forgot = () => {
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState({
        click: false,
        send: false,
    })

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await apiInstance.post('/verify/password', { email: email, type: 'password' })
            if (response.data.isEmailExist) setValid({ ...valid, click: true, send: true })
            console.log(response)
            console.log('success')
        } catch (e) {
            setValid({ ...valid, click: true })
            console.log(e)
        }
    }
    return (
        <>
            <ForgotContainer>
                <p>비밀번호 찾기</p>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='example@company.com' onChange={handleChange} />
                    <button disabled={email === ''}>인증 메일 발송!</button>
                </EmailForm>
                {valid.click === true &&
                    (valid.send ? (
                        <div>
                            <ContainerText>
                                <GreenText>인증 메일이 {email}&#40;으&#41;로 전송되었습니다&#33;</GreenText>
                                <GreenText>받으신 이메일을 열어 링크로 접속하시면 비밀번호 재성성 창으로 이동합니다.</GreenText>
                            </ContainerText>
                        </div>
                    ) : (
                        <div>
                            <RedText>인증 메일 발송 실패&#33;</RedText>
                        </div>
                    ))}
            </ForgotContainer>
        </>
    )
}

export default Forgot
