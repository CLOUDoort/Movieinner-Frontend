import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { SearchContainer, SecondHearderSearchDiv } from './Header.style'

const HearderSearch = () => {
    const router = useRouter()
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState('')

    const handleSearchValue = useCallback((e) => {
        setSearch(e.target.value)
    }, [search])
    useEffect(() => {
        try {
            router.push({
                pathname: `/search`,
                query: {
                    search: search
                }
            })
            window.history.pushState(window.history.state,
                '',
                window.location.pathname + '?' + `/search?search=${search}`,)
        } catch (e) {
            console.error(e.response)
        }
    }, [search])
    const clickSearchImg = () => {
        setClick(!click)
    }
    return (
        <>
            <SecondHearderSearchDiv>
                <SearchContainer click={click}>
                    <BsSearch onClick={clickSearchImg} size={30} />
                    <input type='text' placeholder='제목, 사람' autoFocus autoComplete='off' value={search} onChange={handleSearchValue} />
                </SearchContainer>
            </SecondHearderSearchDiv>
        </>
    )
}

export default HearderSearch
