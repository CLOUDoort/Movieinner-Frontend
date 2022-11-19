import { useRouter } from "next/router"
import { useState } from "react"
import { apiInstance } from "../../apis/setting"
import { SearchBox, SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"
import { IoIosArrowRoundBack } from 'react-icons/io'

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const handleChange = async (e) => {
        setSearch(e.target.value)
        try {
            if (search) {
                const getSearch = await apiInstance.get(`/search/movie`, {
                    params: {
                        search: search,
                        searchPage: 1
                    }
                })
                setSearchList(getSearch.data.search)
                console.log('get', getSearch)
            }
        } catch (e) {
            console.error(e.response)
        }
    }
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
