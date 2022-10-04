import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { MdNightlight } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../apis/setting'
import { setToken } from '../../store/reducers/logintokenSlice'
import { RootState } from '../../store/store'
import { FirstHeaderDiv, HeaderContainer, NavDiv, SecondHearderDiv, SecondHearderNav, SecondHearderSearchDiv, TitleDiv } from './Header.style'
import { toast } from 'react-toastify'

const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const dispatch = useDispatch()
    const [loginToggle, setLoginToggle] = useState('로그인')
    const [nickname, setNickname] = useState('')

    // login/logout UI 변경
    useEffect(() => {
        const getResponse = async () => {
            if (loginToken) {
                setLoginToggle('로그아웃')
                const tokenPayload = await apiInstance.post('/auth/verify', { token: loginToken })
                const nicknameResponse = tokenPayload.data.payload.nickname
                setNickname(nicknameResponse)
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
    }, [dispatch])

    // 클릭시 로그아웃이면 accessToken 없앰, 로그인UI로 변경
    // 클릭시 로그인이면 accessToken이 없다는 것이니
    const clickLogin = async () => {
        if (loginToggle === '로그아웃') {
            try {
                const response = await apiInstance.post('/users/logout')
                if (response.data.logout) {
                    dispatch(setToken(''))
                    setLoginToggle('로그인')
                    Router.replace('/')
                    toast.success('로그아웃되었습니다!')
                    setNickname('')
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
                <SecondHearderNav>
                    <TitleDiv>Movie Inner</TitleDiv>
                    <NavDiv>
                        <Link href='/'>홈</Link>
                        <Link href='/'>카테고리</Link>
                        <Link href='/community'>리뷰</Link>
                        <Link href='/community'>커뮤니티</Link>
                        <Link href='/theme'>테마</Link>
                        {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
                    </NavDiv>
                </SecondHearderNav>
                <SecondHearderSearchDiv>
                    <button>
                        <MdNightlight />
                    </button>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' className='humbleicons hi-search'>
                        <g xmlns='http://www.w3.org/2000/svg' stroke='currentColor' strokeWidth='2'>
                            <path strokeLinecap='round' d='M20 20l-6-6' />
                            <path d='M15 9.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z' />
                        </g>
                    </svg>
                    <input type='button' value='검색하기' />
                </SecondHearderSearchDiv>
            </SecondHearderDiv>
        </HeaderContainer>
    )
}

export default Header
