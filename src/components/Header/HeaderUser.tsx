import { setToken, setNickname, setEmail, setIdx } from '../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../store/reducers/socialSlice'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { apiInstance } from '../../apis/setting'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { HeaderUserBox } from './HeaderSecondNav.style'

const HeaderUser = (props) => {
    const { loginToken, userImage } = props
    const [loginToggle, setLoginToggle] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()


    // 브라우저에 refreshToken이 있으면 무조건 액세스 토큰이 재발급되니 UI는 로그아웃으로 변경
    // 브라우저에 refreshToken이 있으면 액세스 토큰 재발급
    useEffect(() => {
        const refreshTokenCheck = async () => {
            const refreshTokenResponse = await apiInstance.get('/auth')
            const { isRefreshToken } = refreshTokenResponse.data
            if (isRefreshToken) {
                try {
                    setLoginToggle(true)
                    const response = await apiInstance.post('/auth/refresh')
                    dispatch(setToken(response.data.accessToken))
                    console.log('reload-silent-success')
                } catch (e) {
                    console.log(e.response)
                }
            } else {
                console.log('none-refreshToken')
                setLoginToggle(false)
            }
        }
        refreshTokenCheck()
    }, [])

    // 클릭시 로그아웃이면 accessToken 없앰, 로그인UI로 변경
    // 클릭시 로그인이면 accessToken이 없다는 것이니
    const clickLogin = async () => {
        if (loginToggle) {
            try {
                const response = await apiInstance.post('/users/logout')
                if (response.data.logout) {
                    dispatch(setToken(''))
                    dispatch(setNickname(''))
                    dispatch(setSocialEmail(''))
                    dispatch(setEmail(''))
                    dispatch(setIdx(0))
                    setLoginToggle(false)
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
                setLoginToggle(true)
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
        <HeaderUserBox>
            {!loginToken ? <><button onClick={clickLogin}>{loginToggle ? '로그아웃' : '로그인'}</button><button onClick={() => router.push('/signup')}>회원가입</button></> : <Image src={userImage?.image_URL} width={45} height={45} />}
        </HeaderUserBox>
    )
}

export default HeaderUser