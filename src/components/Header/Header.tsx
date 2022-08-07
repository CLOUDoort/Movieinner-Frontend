import Link from 'next/link'
import { FirstHeaderDiv, HeaderContainer, NavDiv, SecondHearderDiv, SecondHearderNav, SecondHearderSearchDiv, TitleDiv } from './Header.style'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstHeaderDiv>
                <Link href='/login'>로그인</Link>
                <Link href='/signup'>회원가입</Link>
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
