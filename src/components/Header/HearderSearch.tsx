import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { BsFillEraserFill, BsSearch } from 'react-icons/bs'
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
            if (search) {
                router.replace({
                    pathname: '/search',
                    query: {
                        search: search,
                        page: 1
                    }
                }, undefined, { shallow: true })
            }
        }
        catch (e) {
            console.error(e.response)
        }
    }, [search])
    const clickSearchImg = () => {
        setClick(!click)
    }
    const backPage = () => {
        router.replace('/')
        setSearch('')
        setClick(false)
    }
    return (
        <>
            <SecondHearderSearchDiv>
                <SearchContainer click={click}>
                    <BsSearch onClick={clickSearchImg} size={30} />
                    <input type='text' placeholder='제목, 사람' autoFocus autoComplete='off' value={search} onChange={handleSearchValue} />
                    {search && <BsFillEraserFill onClick={backPage} size={30} />}
                </SearchContainer>
            </SecondHearderSearchDiv>
        </>
    )
}

export default HearderSearch
