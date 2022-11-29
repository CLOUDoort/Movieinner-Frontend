import SearchResultActor from "./SearchResultActor"
import SearchResultGenre from "./SearchResultGenre"
import SearchResultMovie from "./SearchResultMovie"

const SearchResult = (props) => {
    const { movieSearch, actorSearch, genreSearch, genreName } = props
    return <>
        <div>
            <SearchResultGenre genreSearch={genreSearch} genreName={genreName} />
            <SearchResultMovie movieSearch={movieSearch} />
            <SearchResultActor actorSearch={actorSearch} />
        </div>
    </>
}

export default SearchResult