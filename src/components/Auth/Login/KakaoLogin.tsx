import axios from 'axios'
import { useEffect } from 'react'
import Loading from '../../Loading'

const KakaoLogin = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    const REDIRECT_URI = 'http://localhost:3000/login/kakao'
    const grant_type = 'authorization_code'
    useEffect(() => {
        const KAKAO_CODE = new URL(window.location.href).searchParams.get('code')
        const STATE = new URL(window.location.href).searchParams.get('state')
        console.log(KAKAO_CODE, STATE)
        const getKakaoToken = async () => {
            try {
                const response = await axios.post(
                    `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
                    {
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
                    }
                )
                console.log(response.data)
            } catch (e) {
                console.log(e.response)
            }
        }
        getKakaoToken()
    }, [])
    return (
        <>
            <Loading />
        </>
    )
}

export default KakaoLogin
