import Link from 'next/link'
import {
    FormContainer,
    FormDiv,
    GoogleLogin,
    LoginContainerDiv,
    LoginDiv,
    LoginSecondDiv,
    LoginSustainDiv,
    NaverLogin,
    SocialLoginServiceDiv,
    SubmitInput,
} from './Login.style'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Image from 'next/image'
import { KAKAO_AUTH_URL, NAVER_AUTH_URL, GOOGLE_AUTH_URL } from '../../../Lib/SocialLoginData'
import axios from 'axios'
import { RootState } from '../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../../store/reducers/logintokenSlice'
import Router from 'next/router'

const JWT_EXPIRY_TIME = 3600 * 1000
const Login = () => {
    axios.defaults.baseURL = 'http://localhost:3000'

    const [values, setValues] = useState({
        email: '',
        pw: '',
    })
    const dispatch = useDispatch()
    const onLoginSuccess = (response) => {
        const { accessToken } = response.data
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}` // api요청할 때마다 accessToken을 헤더에 담아서 전송
        dispatch(setToken(accessToken))
        setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000) // 만료 1분 전에 재발급 함수
        console.log('login')
    }

    // accessToken 재발급 & 로그인 함수
    // 기한이 지나거나 페이지가 리로드될 때 함수 실행
    const onSilentRefresh = async () => {
        try {
            const response = await apiInstance.post('/auth/refresh')
            onLoginSuccess(response)
            console.log('silent-success')
        } catch (e) {
            console.log(e.response)
        }
    }
    // accessToken을 받고 api 요청
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await apiInstance.post('/auth', {
                email: values.email,
                password: values.pw,
            })
            onLoginSuccess(response)
            Router.replace('/')
        } catch (e) {
            console.log(e.response)
        }
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
                    <input type='email' name='email' onChange={handleChange} placeholder='이메일을 입력하세요' autoComplete='off' />
                    <div>Password</div>
                    <input type='password' name='pw' onChange={handleChange} placeholder='비밀번호를 입력하세요' autoComplete='off' />
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
                    <a>
                        <GoogleLogin>
                            <Image src='/btn_google.svg' width={50} height={50} alt='Google 로그인' />
                            <label>Google 로그인</label>
                        </GoogleLogin>
                    </a>
                </Link>
                <Link href={NAVER_AUTH_URL}>
                    <a>
                        <NaverLogin>
                            <Image src='/btn_naver.png' width={50} height={50} alt='네이버 로그인' />
                            <label>네이버 로그인</label>
                        </NaverLogin>
                    </a>
                </Link>
                <Link href={KAKAO_AUTH_URL}>
                    <a>
                        <Image src='/btn_kakao.png' width={350} height={50} alt='카카오 로그인' />
                    </a>
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
