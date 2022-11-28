import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"
import { IoIosArrowBack } from 'react-icons/io'
import useGetMovieSearch from "../react-query/MovieSearch"
import useGetActorSearch from "../react-query/ActorSearch"

const Search = () => {
    const router = useRouter()
    const { search, page, genre } = router.query
    const movieSearch = useGetMovieSearch(search, page ? page : 1).data
    const actorSearch = useGetActorSearch(search, page ? page : 1).data
    const [darkmode, setDarkmode] = useState(false)
    const [message, setMessage] = useState(false)
    console.log('movie', movieSearch)
    useEffect(() => {
        setDarkmode(true)
        // if (movieSearch?.data?.total_results === 0 && actorSearch?.data?.total_results === 0) setMessage(true)
        // else setMessage(false)
    })
    const clickBack = () => {
        router.replace('/')
    }
    // if (searchList.movie.total_results === 0 && searchList.actor.total_pages === 0) setMessage(true)
    return (
        <SearchContainer darkmode={darkmode} onClick={(e) => e.stopPropagation()}>
            <div>
                <IoIosArrowBack size={35} onClick={clickBack} />
            </div>
            {message ? <div>결과가 없습니다</div> : <SearchResult movieSearch={movieSearch?.data} actorSearch={actorSearch?.data} />}
        </SearchContainer>
    )
}

export default Search
