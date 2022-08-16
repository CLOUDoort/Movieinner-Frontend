import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Container, ContainerBtn, ContainerProfile, ContainerText, ContainerTitle, FailText } from './SignupVerify.style'
import { apiInstance } from '../../../apis/setting'

const SignupVerify = () => {
    const router = useRouter()
    const { key } = router.query
    const [verification, setVerification] = useState({
        success: false,
        isVerified: false,
    })

    //라우터 필드가 클라이언트 측에서 업데이트되고 사용할 준비가 되었는지 여부.
    //useEffect 메소드 내에서만 사용해야하며 서버에서 조건부로 렌더링 하는 데에 사용해야한다.
    useEffect(() => {
        if (!router.isReady) return
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
    }, [])
    console.log(verification)

    const userData: UserDataState = useSelector((state: RootState) => state.user.user)
    const [image, setImage] = useState('/blank.png')
    const handleClick = async () => {
        try {
            await apiInstance.post('/verify', userData.email)
            console.log('success')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            {/* 인증 성공했을 때, index페이지로 이동 */}
            {verification.isVerified && router.replace('/')}
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
                <FailText>{verification.success ? <p>인증에 실패했습니다!</p> : null}</FailText>
                <ContainerBtn>
                    <Link href='/'>
                        <button>Home</button>
                    </Link>
                    <button onClick={handleClick}>인증 메일 다시 보내기</button>
                </ContainerBtn>
            </Container>
        </>
    )
}

export default SignupVerify
