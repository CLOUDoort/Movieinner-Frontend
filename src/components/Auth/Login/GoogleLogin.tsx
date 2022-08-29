import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_PASSWORD } from './LoginConfig'

const GoogleLogin = () => {
    const [valid, setValid] = useState(false)
    useEffect(() => {
        const GOOGLE_CODE = new URL(window.location.href).searchParams.get('code')
        console.log(GOOGLE_CODE)

        const postCode = async () => {
            try {
                await apiInstance.post('/auth/google', null, { params: { authorizationCode: GOOGLE_CODE } })
                setValid(true)
            } catch (e) {
                console.log(e.response)
            }
        }
        postCode()
        // const getAccessToken = async () => {
        //     try {
        //         const response = await axios.post(
        //             `https://oauth2.googleapis.com/token?code=${GOOGLE_CODE}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_PASSWORD}&redirect_uri=${GOOGLE_REDIRECT_URI}&grant_type=${GOOGLE_GRANT_TYPE}`,
        //             null,
        //             {
        //                 headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //             }
        //         )
        //         console.log(response)
        //         // setValid(true)
        //     } catch (e) {
        //         console.log(e.response)
        //     }
        // }
        // getAccessToken()
    }, [])
    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default GoogleLogin
