import Link from 'next/link'
import {
    FormContainer,
    FormDiv,
    GoogleLogin,
    HorizontalRule,
    KakaoLogin,
    LoginContainerDiv,
    LoginDiv,
    LoginSecondDiv,
    LoginSustainDiv,
    NaverLogin,
    SocialLoginServiceDiv,
    SubmitInput,
} from './Login.style'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { RiKakaoTalkFill } from 'react-icons/ri'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Login = () => {
    return (
        <LoginContainerDiv>
            <LoginDiv>
                <p>로그인</p>
            </LoginDiv>
            <FormDiv>
                <FormContainer onSubmit={handleSubmit}>
                    <div>EMAIL</div>
                    <input type='email' name='email' placeholder='이메일을 입력하세요' />
                    <div>PW</div>
                    <input type='password' name='pw' placeholder='비밀번호를 입력하세요' />
                    <LoginSustainDiv>
                        <div>로그인 유지하기</div>
                        <input type='checkbox' />
                    </LoginSustainDiv>
                    <SubmitInput type='submit' value='로그인' />
                </FormContainer>
            </FormDiv>
            <LoginSecondDiv>
                <Link href='/forgot'>
                    <button>비밀번호 찾기</button>
                </Link>
                <Link href='/signup'>
                    <button>회원가입</button>
                </Link>
            </LoginSecondDiv>
            <HorizontalRule />
            <SocialLoginServiceDiv>
                <GoogleLogin>
                    <FcGoogle size={20} />
                    <input type='button' value='Google 계정 로그인' />
                </GoogleLogin>
                <NaverLogin>
                    <SiNaver size={20} />
                    <input type='button' value='네이버 계정 로그인' />
                </NaverLogin>
                <KakaoLogin>
                    <RiKakaoTalkFill color='black' size={20} />
                    <input type='button' value='카카오 계정 로그인' />
                </KakaoLogin>
            </SocialLoginServiceDiv>
        </LoginContainerDiv>
    )
}

export default Login
