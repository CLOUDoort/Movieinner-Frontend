import { useEffect } from 'react'
export const KaKao_login = () => {
    const REST_API_KEY = 'aec1459c80488d662071908fe414ca54'
    const REDIRECT_URL = 'http://localhost:3000/login'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code')
        console.log(code)
    })
    return (
        <a id='custom-login-btn' href={KAKAO_AUTH_URL}>
            <img
                src='//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg'
                width='500'
                alt='카카오 로그인 버튼'
            />
        </a>
    )
}
