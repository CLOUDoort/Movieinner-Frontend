import { IoIosArrowForward } from "react-icons/io"
import { SearchBox, SearchGenreTitle, SearchListItem } from "./Search.style"
import Image from "next/image"
import Link from "next/link"
import { useObserver } from "../Common/UseObserver"
import { useRef } from "react"
import useGetGenreData from "../../apis/MovieData/GenreData"

const SearchResultGenre = (props) => {
    const { genreName, genre } = props
    const { data, fetchNextPage } = useGetGenreData(genre)
    const bottom = useRef(null)

    console.log('genreData', data)
    const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage()

    // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
    useObserver({
        target: bottom,
        onIntersect,
    })

    return (
        <div>
            <SearchGenreTitle>
                <div>{genreName}{data?.pages[0]?.data?.total_results}</div>
                <IoIosArrowForward size={35} /></SearchGenreTitle>
            <SearchBox>
                {data?.pages?.map((pages) => (
                    pages?.data?.search?.map((list) => (
                        <SearchListItem key={list.id}>
                            <div>
                                <Link href={`/movie/${list.id}`}>
                                    <Image src={list.poster_path ? `https://image.tmdb.org/t/p/w780${list.poster_path}` : '/no-photo-available.png'} alt={list?.title}
                                        width={150}
                                        height={180}
                                        objectFit='contain'
                                    />
                                </Link>
                                <div>
                                    <Link href={`/movie/${list.id}`}>
                                        <div>{list.title}</div>
                                    </Link>
                                    <div>{list.genre[0]} &#183; {list.release_date}</div>
                                </div>
                            </div>
                        </SearchListItem>
                    ))
                ))}
                <div ref={bottom} />
            </SearchBox>
        </div>
    )
}

export default SearchResultGenre