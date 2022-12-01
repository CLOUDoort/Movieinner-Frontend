import Link from "next/link"
import { useEffect, useState } from "react"
import { apiInstance } from "../../apis/setting"
import Category from "../Category"
import { NavDiv, SecondHearderNav, TitleDiv } from "./Header.style"

const HeaderNav = (props) => {
    const { nickname } = props
    const [modal, showModal] = useState(false)
    const [list, setList] = useState([])
    const clickModal = () => {
        showModal(!modal)
    }
    useEffect(() => {
        const getResponse = async () => {
            const getGenreList = await apiInstance.get(`/movies/genre`)
            setList(getGenreList.data)
        }
        getResponse()
    })
    return (
        <SecondHearderNav>
            <TitleDiv>Movie Inner</TitleDiv>
            <NavDiv>
                <Link href='/'>홈</Link>
                <button onClick={clickModal}>카테고리</button>
                {modal && <Category clickModal={clickModal} list={list} />}
                <Link href='/community/feed/1'>커뮤니티</Link>
                <Link href='/theme'>테마</Link>
                {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
            </NavDiv>
        </SecondHearderNav>
    )
}

export default HeaderNav