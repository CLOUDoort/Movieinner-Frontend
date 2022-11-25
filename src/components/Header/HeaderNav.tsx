import Link from "next/link"
import { NavDiv, SecondHearderNav, TitleDiv } from "./Header.style"

const HeaderNav = (props) => {
    const { nickname } = props
    return (
        <SecondHearderNav>
            <TitleDiv>Movie Inner</TitleDiv>
            <NavDiv>
                <Link href='/'>홈</Link>
                <Link href='/'>카테고리</Link>
                <Link href='/community/feed/1'>커뮤니티</Link>
                <Link href='/theme'>테마</Link>
                {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
            </NavDiv>
        </SecondHearderNav>
    )
}

export default HeaderNav