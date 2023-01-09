import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiInstance } from '../../apis/setting'
import { HearderNaveSecondBox } from './Header.style'
import HeaderNoti from './HeaderNofi'
import { setToken, setNickname, setEmail, setIdx } from '../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../store/reducers/socialSlice'
import { toast } from 'react-toastify'
import HeaderSearch from './HeaderSearch'


const HearderSecondNav = (props) => {
    const { loginToken } = props
    const dispatch = useDispatch()
    const [loginToggle, setLoginToggle] = useState('로그인')
    const router = useRouter()

    // 브라우저에 refreshToken이 있으면 무조건 액세스 토큰이 재발급되니 UI는 로그아웃으로 변경
    // 브라우저에 refreshToken이 있으면 액세스 토큰 재발급
    useEffect(() => {
        const refreshTokenCheck = async () => {
            const refreshTokenResponse = await apiInstance.get('/auth')
            const { isRefreshToken } = refreshTokenResponse.data
            if (isRefreshToken) {
                try {
                    setLoginToggle('로그아웃')
                    const response = await apiInstance.post('/auth/refresh')
                    dispatch(setToken(response.data.accessToken))
                    console.log('reload-silent-success')
                } catch (e) {
                    console.log(e.response)
                }
            } else {
                console.log('none-refreshToken')
                setLoginToggle('로그인')
            }
        }
        refreshTokenCheck()
    }, [])

    // 클릭시 로그아웃이면 accessToken 없앰, 로그인UI로 변경
    // 클릭시 로그인이면 accessToken이 없다는 것이니
    const clickLogin = async () => {
        if (loginToggle === '로그아웃') {
            try {
                const response = await apiInstance.post('/users/logout')
                if (response.data.logout) {
                    dispatch(setToken(''))
                    dispatch(setNickname(''))
                    dispatch(setSocialEmail(''))
                    dispatch(setEmail(''))
                    dispatch(setIdx(0))
                    setLoginToggle('로그인')
                    router.replace('/')
                    toast.success('로그아웃되었습니다!')
                }
            } catch (e) {
                console.log(e.response)
            }
        } else router.push('/login')
    }

    // login/logout UI 변경
    useEffect(() => {
        const getResponse = async () => {
            if (loginToken) {
                setLoginToggle('로그아웃')
                const tokenPayload = await apiInstance.post('/auth/verify', { token: loginToken })
                dispatch(setNickname(tokenPayload.data.payload.nickname))
                dispatch(setSocialEmail(tokenPayload.data.payload.email))
                dispatch(setEmail(tokenPayload.data.payload.email))
                dispatch(setIdx(tokenPayload.data.payload.idx))
            }
        }
        getResponse()
    }, [loginToken])

    return (
        <HearderNaveSecondBox>
            {!loginToken ? <button onClick={() => router.push('/signup')}>회원가입</button> : <button onClick={clickLogin}>{loginToggle}</button>}
            <HeaderNoti />
            <HeaderSearch />
        </HearderNaveSecondBox>
    )
}

export default HearderSecondNav
