import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { apiInstance } from "../../apis/setting"
import { SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"
import { IoIosArrowBack } from 'react-icons/io'

const Search = () => {
    const router = useRouter()
    const { search } = router.query
    console.log('ro', router.query)
    const [searchList, setSearchList] = useState({
        movie: [],
        actor: []
    })
    const [darkmode, setDarkmode] = useState(false)
    useEffect(() => {
        const getResponse = async () => {
            try {
                setDarkmode(true)
                if (router.isReady) {
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
                    console.log('movie', movieSearch.data)
                    setSearchList({ ...searchList, movie: movieSearch.data, actor: actorSearch.data })
                } else return
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [search])
    const clickBack = () => {
        router.back()
    }
    return (
        <SearchContainer darkmode={darkmode} onClick={(e) => e.stopPropagation()}>
            <div>
                <IoIosArrowBack size={35} onClick={clickBack} />
            </div>
            <SearchResult searchList={searchList} />
        </SearchContainer>
    )
}

export default Search
