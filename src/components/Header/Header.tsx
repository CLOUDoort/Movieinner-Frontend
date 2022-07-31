import Image from 'next/image'
import Link from 'next/link'
import search from '../../../public/search.png'
import { FirstHeaderDiv, SecondHearderDiv, SecondHearderNavDiv, SecondHearderSearchDiv } from './Header.style'

const Header = () => {
    return (
        <header>
            <FirstHeaderDiv>
                <Link href='/signIn'>로그인</Link>
                <Link href='/signUp'>회원가입</Link>
            </FirstHeaderDiv>
            <SecondHearderDiv>
                <SecondHearderNavDiv>
                    <div>Movie Inner</div>
                    <div>
                        <Link href='/'>홈</Link>
                        <Link href='/'>카테고리</Link>
                        <Link href='/community'>리뷰</Link>
                        <Link href='/community'>커뮤니티</Link>
                        <Link href='/theme'>테마</Link>
                        <Link href='/theme'>마이페이지</Link>
                    </div>
                </SecondHearderNavDiv>
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
        </header>
    )
}

export default Header
