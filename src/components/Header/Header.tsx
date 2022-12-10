import Router from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../apis/setting'
import { setToken, setNickname } from '../../store/reducers/logintokenSlice'
import { RootState } from '../../store/store'
import { FirstHeaderDiv, HeaderContainer, SecondHearderDiv } from './Header.style'
import { toast } from 'react-toastify'
import HearderSearch from './HearderSearch'
import HeaderNav from './HeaderNav'
import { setSocialEmail } from '../../store/reducers/socialSlice'

const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const email = useSelector((state: RootState) => state.socialEmail.socialEmail)
    const dispatch = useDispatch()
    const [loginToggle, setLoginToggle] = useState('로그인')

    // login/logout UI 변경
    useEffect(() => {
        const getResponse = async () => {
            if (loginToken) {
                setLoginToggle('로그아웃')
                const tokenPayload = await apiInstance.post('/auth/verify', { token: loginToken })
                const nicknameResponse = tokenPayload.data.payload.nickname
                const emailResponse = tokenPayload.data.payload.email
                dispatch(setNickname(nicknameResponse))
                dispatch(setSocialEmail(emailResponse))
            }
        }
        getResponse()
    }, [loginToken])

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
    }, [dispatch, loginToggle])

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
                    setLoginToggle('로그인')
                    Router.replace('/')
                    toast.success('로그아웃되었습니다!')
                }
            } catch (e) {
                console.log(e.response)
            }
        } else Router.push('/login')
    }

    return (
        <HeaderContainer>
            <FirstHeaderDiv>
                <button onClick={clickLogin}>{loginToggle}</button>
                <button onClick={() => Router.push('/signup')}>회원가입</button>
            </FirstHeaderDiv>
            <SecondHearderDiv>
                <HeaderNav nickname={nickname} />
                <HearderSearch />
            </SecondHearderDiv>
        </HeaderContainer>
    )
}

export default Header
