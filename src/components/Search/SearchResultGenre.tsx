import { IoIosArrowForward } from "react-icons/io"
import { SearchBox, SearchGenreTitle, SearchListItem } from "./Search.style"
import Image from "next/image"
import Link from "next/link"

const SearchResultGenre = (props) => {
    const { genreSearch, genreName } = props
    return (
        <div>
            <SearchGenreTitle>
                <div>{genreName}{genreSearch?.total_results}</div>
                <IoIosArrowForward size={35} /></SearchGenreTitle>
            <SearchBox>
                {genreSearch?.search?.map((list) => (
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
                ))}
            </SearchBox>
        </div>
    )
}

export default SearchResultGenre