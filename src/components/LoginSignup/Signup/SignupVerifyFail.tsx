import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container, ContainerBtn, ContainerTitle, FailText, Loading, LoadingContainer, LoadingText, VerifyFailText } from './SignupVerify.style'
import { apiInstance } from '../../../apis/setting'
import { GreenText, RedText } from './Signup_pw.style'

const SignupVerifyFail = () => {
    const router = useRouter()
    const { email, key } = router.query
    const [verification, setVerification] = useState({
        success: false,
        isVerified: false,
    })
    const [sendEmail, setSendEmail] = useState(1)

    //라우터 필드가 클라이언트 측에서 업데이트되고 사용할 준비가 되었는지 여부.
    //useEffect 메소드 내에서만 사용해야하며 서버에서 조건부로 렌더링 하는 데에 사용해야한다.
    useEffect(() => {
        if (!router.isReady) return
        else {
            const getRequest = async () => {
                try {
                    const response = await apiInstance.get('/verify', { params: { key: key } })
                    setVerification({
                        success: true, // router query가 담긴 링크 받고 접속 성공
                        isVerified: response.data.isVerified, // 시간 내에 접속 성공
                    })
                } catch (e) {
                    console.log(e)
                    setVerification({
                        success: true,
                        isVerified: false, // 링크 접속은 했으나 시간 제한 걸림 => 백으로부터 return 못 받음
                    })
                }
            }
            getRequest()
        }
    }, [key, router.isReady])
    console.log(verification)
    const handleClick = async () => {
        try {
            await apiInstance.post('/verify', { email: email })
            setSendEmail(2)
            console.log('success')
        } catch (e) {
            setSendEmail(3)
            console.log(e)
        }
    }
    const signupSuccess = async () => {
        await apiInstance.post('/users')
        router.replace('/welcome')
    }
    if (!verification.success && !verification.isVerified) {
        return (
            <>
                <LoadingContainer>
                    <Loading></Loading>
                    <LoadingText>Loading</LoadingText>
                </LoadingContainer>
            </>
        )
    } else if (verification.isVerified) {
        return signupSuccess()
    } else {
        return (
            <>
                <Container>
                    <ContainerTitle>이메일 인증 실패</ContainerTitle>
                    {!verification.isVerified && (
                        <VerifyFailText>
                            <p>인증에 실패했습니다!</p>
                        </VerifyFailText>
                    )}
                    <ContainerBtn>
                        <div>
                            <Link href='/'>
                                <button>Home</button>
                            </Link>
                            <button onClick={handleClick}>인증 메일 다시 보내기</button>
                        </div>
                        <div>
                            {sendEmail === 2 && <GreenText>다시 보내기 성공!</GreenText>}
                            {sendEmail === 3 && <RedText>에러 발생!</RedText>}
                        </div>
                    </ContainerBtn>
                </Container>
            </>
        )
    }
}

export default SignupVerifyFail
