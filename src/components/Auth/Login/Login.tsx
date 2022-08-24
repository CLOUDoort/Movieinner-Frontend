import Link from 'next/link'
import {
    FormContainer,
    FormDiv,
    GoogleLoginImg,
    KakaoLoginImg,
    LoginContainerDiv,
    LoginDiv,
    LoginSecondDiv,
    LoginSustainDiv,
    NaverLoginImg,
    SocialLoginServiceDiv,
    SubmitInput,
} from './Login.style'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import KakaoLogin from './KakaoLogin'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        pw: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await apiInstance.post('/login', {
            email: values.email,
            pw: values.pw,
        })
    }

    const handleChange = (e) => {
        e.preventDefault()

        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <LoginContainerDiv>
            <LoginDiv>
                <p>로그인</p>
            </LoginDiv>
            <FormDiv>
                <FormContainer onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' onChange={handleChange} placeholder='이메일을 입력하세요' />
                    <div>Password</div>
                    <input type='password' name='pw' onChange={handleChange} placeholder='비밀번호를 입력하세요' />
                    <LoginSustainDiv>
                        <input type='checkbox' />
                        <div>로그인 유지하기</div>
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
            <SocialLoginServiceDiv>
                <GoogleLoginImg>
                    <FcGoogle size={20} />
                    <input type='button' value='Google 계정 로그인' />
                </GoogleLoginImg>
                <NaverLoginImg>
                    <SiNaver size={20} />
                    <input type='button' value='네이버 계정 로그인' />
                </NaverLoginImg>
                <KakaoLoginImg src='/kakao_login_medium_wide.png' alt='카카오 로그인' onClick={() => <KakaoLogin />} />
            </SocialLoginServiceDiv>
        </LoginContainerDiv>
    )
}

export default Login

/* 로그인 유지 기능
next.js는 ssr이기 때문에 front에서 localstorage를 사용할 수 없다.
-> 쿠키로부터 토큰을 관리하는 방법 사용

로그인 -> 액세스 토큰과 리프레시 토큰을 받음 -> 쿠키와 리덕스에 토큰 저장 -> 헤더에 액세스 토큰 기입 -> 새로고침 시 프론트 서버에 있는 쿠키를 바탕으로 내 정보를 불러옴

*/
