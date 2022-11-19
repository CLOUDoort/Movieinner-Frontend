import Image from "next/image"
import Link from "next/link"
import { SearchListItem } from "./Search.style"

const SearchResult = (props) => {
    const { searchList } = props
    return <>
        <div>
            {searchList?.map((list) => (
                <SearchListItem key={list.id}>
                    <div>
                        <Link href={`/movie/${list.id}`}>
                            <Image src={`https://image.tmdb.org/t/p/w1280${list.poster_path}`} alt={list?.title}
                                width={46}
                                height={62}
                                objectFit='contain'
                            />
                        </Link>
                        <div>
                            <Link href={`/movie/${list.id}`}>
                                <div>{list.title}</div>
                            </Link>
                            <div>{list.release_date}</div>
                        </div>
                    </div>
                </SearchListItem>
            ))}
        </div>
    </>
}

export default SearchResult