import { useEffect, useState } from 'react'

import LoadingLogo from '../../Common/Loading/LoadingLogo'
import Router from 'next/router'
import Signupinfo from '../Signup/Signupinfo'
import { apiInstance } from '../../../apis/setting'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import { setToken } from '../../../store/reducers/logintokenSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const KakaoLogin = () => {
    const [valid, setValid] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const KAKAO_CODE = new URL(window.location.href).searchParams.get('code')
        const postCode = async () => {
            try {
                const response = await apiInstance.post('/auth/kakao', null, { params: { authorizationCode: KAKAO_CODE } })
                const userEmail = response.data.success.kakao_account.email
                const checkUser = await apiInstance.post('/users/check/email', { email: userEmail })
                dispatch(setSocialEmail(userEmail))
                if (checkUser.data.isEmailExisted) {
                    // 이미 있는 계정
                    try {
                        // 액세스 토큰 받고 홈으로
                        const tokenResponse = await apiInstance.post('/auth', { email: userEmail })
                        const { accessToken } = tokenResponse.data
                        dispatch(setToken(accessToken))
                        Router.replace('/')
                        toast.success('로그인되었습니다!')
                    } catch (e) {
                        console.log(e.response)
                    }
                } else {
                    console.error("error")
                    toast.error("error")
                }
                setValid(true)
            } catch (e) {
                console.log(e)
            }
        }
        postCode()
    }, [dispatch])

    return <>{valid ? <Signupinfo /> : <LoadingLogo />}</>
}

export default KakaoLogin
