import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiInstance } from '../../../apis/setting'
import { setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import Signupinfo from '../Signup/Signupinfo'
import { toast } from 'react-toastify'
import LoadingLogo from '../../LoadingLogo'

const NaverLogin = () => {
    const [valid, setValid] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const NAVER_CODE = new URL(window.location.href).searchParams.get('code')
        const postCode = async () => {
            try {
                const response = await apiInstance.post('/auth/naver', null, {
                    params: {
                        authorizationCode: NAVER_CODE,
                    },
                })
                const userEmail = response.data.success.response.email
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
                console.log(e.repsonse)
            }
        }
        postCode()
    }, [dispatch])

    return <>{valid ? <Signupinfo /> : <LoadingLogo />}</>
}

export default NaverLogin
