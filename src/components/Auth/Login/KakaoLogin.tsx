import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'

const KakaoLogin = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    const REDIRECT_URI = 'http://localhost:3000/login/kakao'
    const grant_type = 'authorization_code'
    const [valid, setValid] = useState(false)
    const [kakaoInfo, setKakaoInfo] = useState({
        name: '',
        gender: '',
        profile_image: '',
    })
    useEffect(() => {
        const KAKAO_CODE = new URL(window.location.href).searchParams.get('code')
        const STATE = new URL(window.location.href).searchParams.get('state')
        console.log(KAKAO_CODE, STATE)
        const getKakaoInfo = async () => {
            try {
                const response = await axios.post(
                    `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
                    {
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
                    }
                )
                const userInfo = await axios.get('https://kapi.kakao.com/v2/user/me', {
                    headers: {
                        Authorization: `Bearer ${response.data.access_token}`,
                    },
                })
                setValid(true)
                setKakaoInfo({
                    ...kakaoInfo,
                    name: response.data.properties.ninckname,
                    gender: response.data.kakao_account.gender,
                    profile_image: response.data.properties.profile_image,
                })

                // const userIdToken = await axios.post('https://kauth.kakao.com/oauth/tokeninfo', null, {
                //     // body값이 없고 두 개의 query값
                //     headers: {
                //         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                //     },
                //     params: {
                //         id_token: `${response.data.id_token}`,
                //     },
                // })
                console.log(response.data)
                console.log(userInfo)
                // console.log(userIdToken)
            } catch (e) {
                console.log(e.response)
            }
        }
        getKakaoInfo()
    }, [])

    return <>{valid ? <Signupinfo kakaoName={kakaoInfo.name} kakaogGender={kakaoInfo.gender} kakaoImage_URL={kakaoInfo.profile_image} /> : <Loading />}</>
}

export default KakaoLogin
