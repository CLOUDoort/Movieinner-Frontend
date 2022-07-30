import Image from 'next/image'
import Link from 'next/link'
import search from '../../../public/search.png'
import { FirstHeaderDiv, HeaderContainer, SecondHearderDiv } from './Header.style'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstHeaderDiv>
                <Image src={search} alt='Picture of Search' width={40} height={40} />
                <input type='button' value='검색' />
            </FirstHeaderDiv>
            <SecondHearderDiv>
                <Link href='/'>홈</Link>
                <Link href='/'>카테고리</Link>
                <Link href='/theme'>테마</Link>
                <p>Movie Inner</p>
                <Link href='/community'>리뷰</Link>
                <Link href='/community'>커뮤니티</Link>
                <Link href='/signIn'>로그인</Link>
            </SecondHearderDiv>
        </HeaderContainer>
    )
}

export default Header
