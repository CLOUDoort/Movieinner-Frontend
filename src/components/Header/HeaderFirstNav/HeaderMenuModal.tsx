import Link from "next/link"
import { useEffect, useState } from "react"
import { HeaderMenuModalBox, HeaderMenuModalContainer } from "./HeaderMenuModal.style"

const HeaderMenuModal = (props) => {
    const { nickname, clickMenu } = props
    const [height, setHeight] = useState(false)
    useEffect(() => { setHeight(true) }, [])
    return (
        <HeaderMenuModalContainer onClick={clickMenu}>
            <HeaderMenuModalBox height={height}>
                <div>
                    <Link href='/'>홈</Link>
                    <Link href='/community/feed/1'>커뮤니티</Link>
                    <Link href='/theme'>테마</Link>
                    {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
                </div>
            </HeaderMenuModalBox>
        </HeaderMenuModalContainer>
    )
}

export default HeaderMenuModal