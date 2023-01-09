import Link from "next/link"
import { useEffect, useState } from "react"
import { apiInstance } from "../../apis/setting"
import Category from "../Category"
import { NavDiv, HearderNavFirstBox, TitleDiv } from "./Header.style"

const HeaderFirstNav = (props) => {
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
    }, [modal])
    return (
        <HearderNavFirstBox>
            <TitleDiv>Movie Inner</TitleDiv>
            <NavDiv>
                <div>
                    <Link href='/'>홈</Link>
                    <div></div>
                </div>
                <div>
                    <button onClick={clickModal}>카테고리</button>
                    <div></div>
                </div>
                {modal && <Category clickModal={clickModal} list={list} />}
                <div>
                    <Link href='/community/feed/1'>커뮤니티</Link>
                    <div></div>
                </div>
                <div>
                    <Link href='/theme'>테마</Link>
                    <div></div>
                </div>
                <div>
                    {nickname ? <Link href={`/user/${nickname}`}>마이페이지</Link> : <Link href='/login'>마이페이지</Link>}
                    <div></div>
                </div>
            </NavDiv>
        </HearderNavFirstBox>
    )
}

export default HeaderFirstNav