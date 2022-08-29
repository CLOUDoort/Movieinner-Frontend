import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'

const NaverLogin = () => {
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const NAVER_CODE = new URL(window.location.href).searchParams.get('code')
        console.log(NAVER_CODE)
        const postCode = async () => {
            try {
                const response = await apiInstance.post('/auth/naver', null, {
                    params: {
                        authorizationCode: NAVER_CODE,
                    },
                })
                console.log(response)
            } catch (e) {
                console.log(e.repsonse)
            }
        }
        postCode()
    }, [])

    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default NaverLogin
