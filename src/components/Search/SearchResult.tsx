import { useEffect, useState } from "react"
import { IoIosArrowForward } from "react-icons/io"
import { SearchListTitle, SearchResultBox } from "./Search.style"
import SearchResultActor from "./SearchResultActor"
import SearchResultGenre from "./SearchResultGenre"
import SearchResultMovie from "./SearchResultMovie"

const SearchResult = (props) => {
    const { movieSearch, actorSearch, genreSearch, genreName } = props
    const [movie, setMovie] = useState(true);
    const [actor, setActor] = useState(true);
    useEffect(() => { setMovie(true) }, [movieSearch])
    useEffect(() => { setActor(true) }, [actorSearch])

    return (
        <>
            {
                genreSearch && genreName ?
                    <SearchResultGenre genreSearch={genreSearch} genreName={genreName} /> :
                    <SearchResultBox>
                        <div>
                            <SearchListTitle movie={movie} actor={actor}>
                                <div>Movie {movieSearch?.total_results}<IoIosArrowForward onClick={() => setMovie(!movie)} size={35} /></div>
                                <div>Creator &#38; Actor {actorSearch?.total_results} <IoIosArrowForward onClick={() => setActor(!actor)} size={35} /></div>
                            </SearchListTitle>
                        </div>
                        <SearchResultMovie movieSearch={movieSearch} click={movie} />
                        <SearchResultActor actorSearch={actorSearch} click={actor} />
                    </SearchResultBox>
            }
        </>
    )

}

export default SearchResult

function setclick(arg0: boolean) {
    throw new Error("Function not implemented.")
}
