import { IoIosArrowForward } from "react-icons/io"
import { SearchListItem, SearchListTitle } from "./Search.style"
import Image from "next/image"
import Link from "next/link"

const SearchResultGenre = (props) => {
    const { genreSearch, genreName } = props
    return <>
        <SearchListTitle>
            {genreName} {genreSearch?.total_results}<IoIosArrowForward size={35} /></SearchListTitle>
        {genreSearch?.search?.map((list) => (
            <SearchListItem key={list.id}>
                <div>
                    <Link href={`/movie/${list.id}`}>
                        <Image src={list.poster_path ? `https://image.tmdb.org/t/p/w780${list.poster_path}` : '/blank.png'} alt={list?.title}
                            width={46}
                            height={62}
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
        ))}</>
}

export default SearchResultGenre