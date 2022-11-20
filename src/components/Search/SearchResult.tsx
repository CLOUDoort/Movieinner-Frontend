import Image from "next/image"
import Link from "next/link"
import { SearchListItem } from "./Search.style"
import SearchResultActor from "./SearchResultActor"
import SearchResultMovie from "./SearchResultMovie"

const SearchResult = (props) => {
    const { searchList } = props
    return <>
        <div>
            <SearchResultMovie movieList={searchList?.movie} />
            <SearchResultActor actorList={searchList?.actor} />
        </div>
    </>
}

export default SearchResult