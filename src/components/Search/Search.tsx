import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SearchContainer } from "./Search.style"
import SearchResult from "./SearchResult"

const Search = () => {
    const router = useRouter()
    const { search, genre, name } = router.query

    const [darktransition, setDarktransition] = useState(false)
    useEffect(() => { setDarktransition(true) })
    return (
        <SearchContainer darktransition={darktransition} onClick={(e) => e.stopPropagation()}>
            <SearchResult search={search} genre={genre} genreName={name} />
        </SearchContainer>
    )
}

export default Search
