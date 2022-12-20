import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"
import { IoIosArrowBack } from 'react-icons/io'
import useGetMovieSearch from "../react-query/MovieSearch"
import useGetActorSearch from "../react-query/ActorSearch"
import useGetGenreData from "../react-query/GenreData"

const Search = () => {
    const router = useRouter()
    const { search, page, genre, name } = router.query
    const movieSearch = useGetMovieSearch(search, page ? page : 1).data
    const actorSearch = useGetActorSearch(search, page ? page : 1).data
    const genreSearch = useGetGenreData(genre, 1).data
    const [darktransition, setDarktransition] = useState(false)
    const [message, setMessage] = useState(false)
    useEffect(() => {
        setDarktransition(true)
    })
    return (
        <SearchContainer darktransition={darktransition} onClick={(e) => e.stopPropagation()}>
            <SearchResult movieSearch={movieSearch?.data} actorSearch={actorSearch?.data} genreSearch={genreSearch?.data} genreName={name} />
        </SearchContainer>
    )
}

export default Search
