import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiInstance } from '../../../apis/setting'
import { setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import Signupinfo from '../Signup/Signupinfo'
import { toast } from 'react-toastify'
import LoadingLogo from '../../LoadingLogo'

const GoogleLogin = () => {
    const [valid, setValid] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const GOOGLE_CODE = new URL(window.location.href).searchParams.get('code')
        console.log(GOOGLE_CODE)
        const postCode = async () => {
            try {
                const response = await apiInstance.post('/auth/google', null, { params: { authorizationCode: GOOGLE_CODE } })
                console.log(response)
                const userEmail = response.data.success.email
                dispatch(setSocialEmail(userEmail))
                const checkUser = await apiInstance.post('/users/check/email', { email: userEmail })
                if (checkUser.data.isEmailExisted) {
                    // 이미 있는 이메일이라면
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

                    setValid(true)
                }
            } catch (e) {
                console.log(e.response)
            }
        }
        postCode()
    }, [dispatch])
    return <>{valid ? <Signupinfo /> : <LoadingLogo />}</>
}

export default GoogleLogin
