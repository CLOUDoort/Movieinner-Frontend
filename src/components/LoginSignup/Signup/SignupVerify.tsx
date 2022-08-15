import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Container, HomeLink } from './SignupVerify.style'

const SignupVerify = () => {
    const userData = useSelector((state: RootState) => state.user.user)
    console.log(userData)
    return (
        <>
            <Container>
                <div>인증 이메일 전송 완료</div>
                <div>
                    <div>{}</div>
                </div>
                <div>인증 메일이 {}&#40;으&#41;로 전송되었습니다.</div>
                <div>받으신 이메일을 열어 링크로 접속하시면 가입이 완료됩니다.</div>
                <div>
                    <HomeLink href='/'>Home</HomeLink>
                </div>
            </Container>
        </>
    )
}

export default SignupVerify
