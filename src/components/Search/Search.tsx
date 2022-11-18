import { useState } from "react"
import { apiInstance } from "../../apis/setting"
import { SearchBox, SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"

const Search = () => {
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const handleChange = async (e) => {
        setSearch(e.target.value)
        try {
            if (search) {
                const getSearch = await apiInstance.get(`/search/movie`, {
                    params: {
                        searach: search,
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
    return <>
        <SearchBox>
            <SearchContainer>
                <input type="text" placeholder="검색" value={search} onChange={handleChange} autoComplete='off' autoFocus />
                <SearchResult searchList={searchList} />
            </SearchContainer>
        </SearchBox>
    </>
}

export default Search
