import Link from "next/link"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { apiInstance } from "../../apis/setting"
import Category from "../Category"
import { HeaderFirstNavList, HeaderFirstNavTitle, HearderFirstNavBox } from "./HeaderFirstNav.style"
import HeaderMenuModal from "./HeaderMenuModal"


const HeaderFirstNav = (props) => {
    const { nickname } = props
    const [modal, showModal] = useState(false)
    const [menuModal, showMenuModal] = useState(false)
    const [list, setList] = useState([])
    const clickModal = () => showModal(!modal)
    const clickMenu = () => showMenuModal(!menuModal)
    useEffect(() => {
        const getResponse = async () => {
            const getGenreList = await apiInstance.get(`/movies/genre`)
            setList(getGenreList.data)
        }
        getResponse()
    }, [modal])

    return (
        <HearderFirstNavBox>
            <HeaderFirstNavTitle onClick={clickMenu}>Movie Inner</HeaderFirstNavTitle>
            <GiHamburgerMenu onClick={clickMenu} size={30} />
            {menuModal ? <HeaderMenuModal clickModal={clickModal} modal={modal} clickMenu={clickMenu} list={list} nickname={nickname} /> : null}
            <HeaderFirstNavList>
                <Link href='/'>홈</Link>
                <button onClick={clickModal}>카테고리</button>
                {modal && <Category clickModal={clickModal} list={list} modal={modal} />}
                <Link href='/community/feed/1'>커뮤니티</Link>
                <Link href='/theme'>테마</Link>
                {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
            </HeaderFirstNavList>
        </HearderFirstNavBox>
    )
}

export default HeaderFirstNav