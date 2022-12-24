import Link from 'next/link'
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { CheckText } from './Signup.style'
import { SignupVerifyContainer, ContainerBtn, ContainerTitle, VerifyFailText } from './SignupVerify.style'

const SignupVerifyFail = (props) => {
    const [sendEmail, setSendEmail] = useState({
        click: false,
        send: false,
    })
    const { email } = props
    const handleClick = async () => {
        try {
            await apiInstance.post('/verify', { email: email, type: 'email' })
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
        <SignupVerifyContainer>
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
                    {sendEmail.click === true && sendEmail.send === true && <CheckText check={true}>다시 보내기 성공!</CheckText>}
                    {sendEmail.click === true && sendEmail.send === false && <CheckText check={false}>에러 발생!</CheckText>}
                </div>
            </ContainerBtn>
        </SignupVerifyContainer>
    )
}

export default SignupVerifyFail
