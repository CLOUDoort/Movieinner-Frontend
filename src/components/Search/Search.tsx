import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { apiInstance } from "../../apis/setting"
import { SearchBox, SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"
import { IoIosArrowRoundBack } from 'react-icons/io'

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState({
        movie: [],
        actor: []
    })

    const handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [search])

    useEffect(() => {
        const getResponse = async () => {
            try {
                if (search) {
                    const movieSearch = await apiInstance.get(`/search/movie`, {
                        params: {
                            search: search,
                            searchPage: 1
                        }
                    })
                    const actorSearch = await apiInstance.get(`/search/actor`, {
                        params: {
                            search: search,
                            searchPage: 1
                        }
                    })
                    console.log('actor', actorSearch.data.search)
                    setSearchList({ ...searchList, movie: movieSearch.data.search, actor: actorSearch.data.search })
                }
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [search])
    const clickBack = () => {
        router.back()
    }
    return <>
        <SearchBox onClick={clickBack}>
            <SearchContainer onClick={(e) => e.stopPropagation()}>
                <div>
                    <IoIosArrowRoundBack size={35} onClick={clickBack} />
                    <input type="text" placeholder="검색" value={search} onChange={handleChange} autoComplete='off' autoFocus />
                </div>
                <SearchResult searchList={searchList} />
            </SearchContainer>
        </SearchBox>
    </>
}

export default Search
