import { FormContainer, FormDiv, LoginContainerDiv, LoginDiv, LoginFailText, LoginSecondDiv, LoginSustainDiv, SubmitInput } from './Login.style'

import { CheckText } from '../Signup/Signup.style'
import Link from 'next/link'
import Router from 'next/router'
import SocialLogin from './SocialLogin'
import { apiInstance } from '../../../apis/setting'
import axios from 'axios'
import { setToken } from '../../../store/reducers/logintokenSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const JWT_EXPIRY_TIME = 3600 * 1000
const Login = () => {
    axios.defaults.baseURL = 'https://www.movie-inner.click'

    const [check, setCheck] = useState({
        user: true,
        login: true,
    })
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
        console.info('login')
    }

    // accessToken 재발급 & 로그인 함수
    // 만료 1분전 토큰 재발급
    const onSilentRefresh = async () => {
        try {
            const response = await apiInstance.post('/auth/refresh')
            onLoginSuccess(response)
            console.info('silent-success')
        } catch (e) {
            console.log(e.response)
        }
    }

    // 일반로그인 시 email, password 입력 => true 나오면 토큰 발급, false 나오면 로그인 실패 알림(email,password) => 잘못된 이메일, 잘못된 비밀번호 확인
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // 이메일 유무 확인
            const response = await apiInstance.post('/users/login', { email: values.email, password: values.pw })
            console.log(response)
            // 로그인 성공 유무
            if (response.data.isEmailEqual) {
                if (response.data.isPasswordEqual) {
                    try {
                        const tokenResponse = await apiInstance.post('/auth', { email: values.email })
                        console.log('token', tokenResponse)
                        onLoginSuccess(tokenResponse)
                        Router.replace('/')
                        toast.success('로그인되었습니다!')
                    } catch (e) {
                        console.log(e.response)
                    }
                } else {
                    setCheck({
                        ...check,
                        login: false,
                        user: true,
                    }) // 로그인 실패, 이메일이나 비밀번호 확인
                    toast.error('비밀번호가 다릅니다!')
                }
            } else {
                toast.error('이메일이 존재하지 않습니다!')
                setCheck({
                    ...check,
                    login: false,
                    user: false,
                }) // 존재하지 않는 이메일
            }
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
                        <div>
                            <input type='checkbox' />
                            <div>로그인 유지하기</div>
                        </div>
                        <LoginFailText>
                            {!check.login && check.user && <CheckText check={false}>잘못된 비밀번호 입니다. </CheckText>}
                            {!check.user && !check.login && <CheckText check={false}>존재하지 않는 이메일입니다.</CheckText>}
                        </LoginFailText>
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
            <SocialLogin />
        </LoginContainerDiv>
    )
}

export default Login

/* 로그인 유지 기능
next.js는 ssr이기 때문에 front에서 localstorage를 사용할 수 없다.
-> 쿠키로부터 토큰을 관리하는 방법 사용

로그인 -> 액세스 토큰과 리프레시 토큰을 받음 -> 쿠키와 리덕스에 토큰 저장 -> 헤더에 액세스 토큰 기입 -> 새로고침 시 프론트 서버에 있는 쿠키를 바탕으로 내 정보를 불러옴

*/
