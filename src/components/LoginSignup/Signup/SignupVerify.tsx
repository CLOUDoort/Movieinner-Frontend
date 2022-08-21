import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Container, ContainerBtn, ContainerProfile, ContainerText, ContainerTitle, FailText } from './SignupVerify.style'
import { apiInstance } from '../../../apis/setting'
import { GreenText, RedText } from './Signup_pw.style'

const SignupVerify = () => {
    const userData: UserDataState = useSelector((state: RootState) => state.user.user)
    const [sendEmail, setSendEmail] = useState(false)
    console.log(userData)
    const [image, setImage] = useState('/blank.png')
    const handleClick = async () => {
        try {
            await apiInstance.post('/verify', { email: userData.email })
            setSendEmail(true)
            console.log('success')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Container>
                <ContainerTitle>인증 이메일 전송 완료</ContainerTitle>
                <ContainerProfile>
                    <Image src={image} width={150} height={150} alt='프로필 이미지입니다.' />
                    <div>{userData.nickname}님 환영합니다 &#33;</div>
                </ContainerProfile>
                <ContainerText>
                    <div>인증 메일이 {userData.email}&#40;으&#41;로 전송되었습니다.</div>
                    <div>받으신 이메일을 열어 링크로 접속하시면 가입이 완료됩니다.</div>
                </ContainerText>
                <ContainerBtn>
                    <div>
                        <Link href='/'>
                            <button>Home</button>
                        </Link>
                        <button onClick={handleClick}>인증 메일 다시 보내기</button>
                    </div>
                    <div>{sendEmail ? <GreenText>다시 보내기 성공!</GreenText> : <RedText>에러 발생!</RedText>}</div>
                </ContainerBtn>
            </Container>
        </>
    )
}

export default SignupVerify
