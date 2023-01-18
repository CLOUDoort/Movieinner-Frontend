import { SearchBox, SearchListItem, SearchListTitle } from "./Search.style"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import router from "next/router"
import { useEffect, useState } from "react"


const SearchResultMovie = (props) => {
    const { movieSearch } = props
    const [clickSearch, setClickSearch] = useState(false)
    useEffect(() => { setClickSearch(false) }, [movieSearch])

    return <>
        <SearchListTitle clickSearch={clickSearch} onClick={() => setClickSearch(!clickSearch)}>
            Movie {movieSearch?.total_results}<IoIosArrowForward size={35} /></SearchListTitle>
        <SearchBox>
            {clickSearch && movieSearch?.search?.map((list) => (
                <SearchListItem key={list.id}>
                    <div>
                        <Image onClick={() => router.push(`/movie/${list.id}`)} src={list.poster_path ? `https://image.tmdb.org/t/p/w780${list.poster_path}` : '/no-photo-available.png'} alt={list?.title}
                            width={150}
                            height={180}
                            objectFit='contain'
                        />
                        <div>
                            <div onClick={() => router.push(`/movie/${list.id}`)}>{list.title}</div>
                            <div>{list.genre[0]} &#183; {list.release_date}</div>
                        </div>
                    </div>
                </SearchListItem>
            ))}
        </SearchBox>
    </>
}

export default SearchResultMovie