import Link from 'next/link'
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { Container, ContainerBtn, ContainerTitle, VerifyFailText } from './SignupVerify.style'
import { GreenText, RedText } from './Signup_pw.style'

const SignupVerifyFail = (props) => {
    const [sendEmail, setSendEmail] = useState({
        click: false,
        send: false,
    })
    const { email } = props
    const handleClick = async () => {
        try {
            await apiInstance.post('/verify', { email: email })
            setSendEmail({
                ...sendEmail,
                click: true,
                send: true,
            })
            console.log('success')
        } catch (e) {
            setSendEmail({
                ...sendEmail,
                click: true,
            })
            console.log(e)
        }
    }
    return (
        <>
            <Container>
                <ContainerTitle>이메일 인증 실패</ContainerTitle>
                <VerifyFailText>
                    <p>인증에 실패했습니다!</p>
                </VerifyFailText>
                <ContainerBtn>
                    <div>
                        <Link href='/'>
                            <button>Home</button>
                        </Link>
                        <button onClick={handleClick}>인증 메일 다시 보내기</button>
                    </div>
                    <div>
                        {sendEmail.click === true && sendEmail.send === true && <GreenText>다시 보내기 성공!</GreenText>}
                        {sendEmail.click === true && sendEmail.send === false && <RedText>에러 발생!</RedText>}
                    </div>
                </ContainerBtn>
            </Container>
        </>
    )
}

export default SignupVerifyFail
