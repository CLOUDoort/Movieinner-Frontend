import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { MdNightlight } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { apiInstance } from '../../apis/setting'
import { setToken } from '../../store/reducers/logintokenSlice'
import { RootState } from '../../store/store'
import { FirstHeaderDiv, HeaderContainer, NavDiv, SecondHearderDiv, SecondHearderNav, SecondHearderSearchDiv, TitleDiv } from './Header.style'

const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const dispatch = useDispatch()
    const [loginToggle, setLoginToggle] = useState('로그인')
    useEffect(() => {
        if (loginToken) {
            setLoginToggle('로그아웃')
        } else setLoginToggle('로그인')
    }, [loginToken])

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
                    location.reload()
                }
            } catch (e) {
                console.log(e.response)
            }
        } else {
            // refreshToken 유무 확인 true 나오면 auth-refresh로 아니면 로그인 페이지로
            Router.push('/login')
        }
    }

    // 액세스 토큰이 있으면 로그아웃 / 없으면 로그인 버튼

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
                        <Link href='/theme'>마이페이지</Link>
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
