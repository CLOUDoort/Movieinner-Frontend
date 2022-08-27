import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'

const KakaoLogin = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    const REDIRECT_URI = 'http://localhost:3000/login/kakao'
    const grant_type = 'authorization_code'
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const KAKAO_CODE = new URL(window.location.href).searchParams.get('code')
        const postCode = async () => {
            try {
                const response = await apiInstance.post('/auth/kakao', null, { params: { authorizationCode: KAKAO_CODE } })
                console.log(response.data.success.properties.nickname)
                setValid(true)
            } catch (e) {
                console.log(e)
            }
        }
        postCode()
        // const getKakaoToken = async () => {
        //     try {
        //         const response = await axios.post(
        //             `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        //             {
        //                 headers: {
        //                     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        //                 },
        //             }
        //         )
        //         setValid(true)
        //         console.log(response.data)
        //     } catch (e) {
        //         console.log(e.response)
        //     }
        // }
        // getKakaoToken()
    }, [])

    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default KakaoLogin
