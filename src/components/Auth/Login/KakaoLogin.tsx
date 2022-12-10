import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiInstance } from '../../../apis/setting'
import { setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'
import { toast } from 'react-toastify'

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
                }
                setValid(true)
            } catch (e) {
                console.log(e)
            }
        }
        postCode()
    }, [dispatch])

    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default KakaoLogin
