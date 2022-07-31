import Image from 'next/image'
import Link from 'next/link'
import search from '../../../public/search.png'
import { FirstHeaderDiv, HeaderContainer, SecondHearderDiv, SecondHearderNavDiv, SecondHearderSearchDiv } from './Header.style'

const Header = () => {
    return (
        <HeaderContainer>
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
                    <Image src={search} width={36} height={36} alt='This picture is search button' />
                    <input type='button' value='검색하기' />
                </SecondHearderSearchDiv>
            </SecondHearderDiv>
        </HeaderContainer>
    )
}

export default Header
