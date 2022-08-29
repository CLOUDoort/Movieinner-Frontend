import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../../Loading'
import Signupinfo from '../Signup/Signupinfo'

const NaverLogin = () => {
    const [valid, setValid] = useState(false)

    const grant_type = 'authorization_code'
    const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY
    const CLIENT_SECRET = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET
    const state = 'Movie-inner'
    useEffect(() => {
        const NAVER_CODE = new URL(window.location.href).searchParams.get('code')
        console.log(NAVER_CODE)

        // const getAccessToken = async () => {
        //     try {
        //         const response = await axios.get(
        //             `https://nid.naver.com/oauth2.0/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${NAVER_CODE}&state=${state}`
        //         )
        //         console.log(response)
        //     } catch (e) {
        //         console.log(e.response)
        //     }
        // }
        // getAccessToken()
        // const postCode = async () => {
        //     try {
        //         const response = await axios.post('/auth/naver', null, {
        //             params: {
        //                 authorizationCode: NAVER_CODE,
        //             },
        //         })
        //         console.log(response)
        //         setValid(true)
        //     } catch (e) {
        //         console.log(e.repsonse)
        //     }
        // }
        // postCode()
    })

    return <>{valid ? <Signupinfo /> : <Loading />}</>
}

export default NaverLogin
