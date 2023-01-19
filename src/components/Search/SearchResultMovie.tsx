import { SearchBox, SearchListItem } from "./Search.style"
import Image from "next/image"
import router from "next/router"
import useGetMovieSearch from "../../apis/MovieData/MovieSearch"
import { useRef } from "react"
import { useObserver } from "../Common/UseObserver"
import LoadingCircle from "../Common/Loading/LoadingCircle"

const SearchResultMovie = (props) => {
    const { search, click } = props
    const { data, fetchNextPage } = useGetMovieSearch(search)
    const bottom = useRef(null)
    const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage()
    // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
    useObserver({
        target: bottom,
        onIntersect,
    })
    return (
        <>
            {click && <SearchBox>
                {data?.pages?.map((pages) => (
                    pages?.data?.search?.map((list) => (
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
                    ))
                ))}
                <div ref={bottom} />
            </SearchBox>}
        </>

    )
}

export default SearchResultMovie