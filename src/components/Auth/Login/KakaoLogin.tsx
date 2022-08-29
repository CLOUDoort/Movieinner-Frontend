import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'

const KakaoLogin = () => {
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
    }, [])

    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default KakaoLogin
