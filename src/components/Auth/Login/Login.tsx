import Link from 'next/link'
import {
    FormContainer,
    FormDiv,
    GoogleLogin,
    KakaoLogin,
    LoginContainerDiv,
    LoginDiv,
    LoginSecondDiv,
    LoginSustainDiv,
    NaverLogin,
    SocialLoginServiceDiv,
    SubmitInput,
} from './Login.style'
import { SiNaver } from 'react-icons/si'
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Image from 'next/image'
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

    // kakao_login
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    const KAKAO_REDIRECT_URI = 'http://localhost:3000/login/kakao'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`

    // google_login
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY
    const GOOGLE_REDIRECT_URL = 'http://localhost:3000/login/google'
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=https://www.googleapis.com/auth/userinfo.email`

    // naver_login
    const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY
    const NAVER_REDIRECT_URL = 'http://localhost:3000/login/naver'
    const STATE = 'Movie-inner'
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URL}
    `
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
                <Link href={GOOGLE_AUTH_URL}>
                    <GoogleLogin>
                        <Image src='/btn_google.svg' width={40} height={40} alt='Google 로그인' />
                        <label>Google 로그인</label>
                    </GoogleLogin>
                </Link>
                <Link href={NAVER_AUTH_URL}>
                    <div>
                        <Image src='/btnW_완성형.png' width={200} height={40} alt='네이버 로그인' />
                    </div>
                </Link>
                <Link href={KAKAO_AUTH_URL}>
                    <KakaoLogin>
                        <Image src='/kakaoballon.png' width={40} height={40} alt='카카오 로그인' />
                        <label>카카오 로그인</label>
                    </KakaoLogin>
                </Link>
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
