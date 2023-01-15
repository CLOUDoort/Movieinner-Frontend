import Link from "next/link"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { apiInstance } from "../../apis/setting"
import HeaderCategory from "./HeaderCategory"
import { HeaderFirstNavList, HeaderFirstNavTitle, HearderFirstNavBox } from "./HeaderFirstNav.style"
import HeaderMenuModal from "./HeaderMenuModal"


const HeaderFirstNav = (props) => {
    const { nickname } = props
    const [list, setList] = useState([])

    const [categoryModal, showCategoryModal] = useState(false)
    const [menuModal, showMenuModal] = useState(false)
    const clickCategory = () => showCategoryModal(!categoryModal)
    const clickMenu = () => showMenuModal(!menuModal)

    useEffect(() => {
        const getResponse = async () => {
            const getGenreList = await apiInstance.get(`/movies/genre`)
            setList(getGenreList.data)
        }
        getResponse()
    }, [categoryModal])

    return (
        <HearderFirstNavBox>
            <HeaderFirstNavTitle>Movie Inner</HeaderFirstNavTitle>
            <GiHamburgerMenu onClick={clickMenu} size={30} />
            {menuModal ? <HeaderMenuModal clickMenu={clickMenu} nickname={nickname} /> : null}
            <HeaderFirstNavList>
                <Link href='/'>홈</Link>
                <button onClick={clickCategory}>카테고리</button>
                {categoryModal && <HeaderCategory clickModal={clickCategory} list={list} modal={categoryModal} />}
                <Link href='/community/feed/1'>커뮤니티</Link>
                <Link href='/theme'>테마</Link>
                {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
            </HeaderFirstNavList>
        </HearderFirstNavBox>
    )
}

export default HeaderFirstNav