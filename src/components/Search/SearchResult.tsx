import Image from "next/image"
import Link from "next/link"
import { SearchListItem } from "./Search.style"
import SearchResultActor from "./SearchResultActor"
import SearchResultMovie from "./SearchResultMovie"

const SearchResult = (props) => {
    const { movieSearch, actorSearch } = props
    return <>
        <div>
            <SearchResultMovie movieSearch={movieSearch} />
            <SearchResultActor actorSearch={actorSearch} />
        </div>
    </>
}

export default SearchResult