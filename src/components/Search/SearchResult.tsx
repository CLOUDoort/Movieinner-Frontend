import { useEffect, useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import useGetActorSearch from "../../apis/MovieData/ActorSearch"
import useGetMovieSearch from "../../apis/MovieData/MovieSearch"
import { SearchListTitle, SearchResultBox } from "./Search.style"
import SearchResultActor from "./SearchResultActor"
import SearchResultGenre from "./SearchResultGenre"
import SearchResultMovie from "./SearchResultMovie"

const SearchResult = (props) => {
    const { search, genreName, genre } = props
    const actorSearch = useGetActorSearch(search).data
    const movieSearch = useGetMovieSearch(search).data
    const [movie, setMovie] = useState(true);
    const [actor, setActor] = useState(true);
    useEffect(() => { setMovie(true) }, [movieSearch])
    useEffect(() => { setActor(true) }, [actorSearch])

    return (
        <>
            {
                genre && genreName ?
                    <SearchResultGenre genre={genre} genreName={genreName} /> :
                    <SearchResultBox>
                        <div>
                            <SearchListTitle movie={movie} actor={actor}>
                                <div>Movie {movieSearch?.pages[0]?.data?.total_results}<IoIosArrowForward onClick={() => setMovie(!movie)} size={35} /></div>
                                <div>Creator &#38; Actor {actorSearch?.pages[0]?.data?.total_results} <IoIosArrowForward onClick={() => setActor(!actor)} size={35} /></div>
                            </SearchListTitle>
                        </div>
                        <SearchResultMovie search={search} click={movie} />
                        <SearchResultActor search={search} click={actor} />
                    </SearchResultBox>
            }
        </>
    )

}

export default SearchResult