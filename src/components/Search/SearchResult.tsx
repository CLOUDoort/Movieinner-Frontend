import Image from "next/image"
import Link from "next/link"
import { SearchListItem } from "./Search.style"

const SearchResult = (props) => {
    const { searchList } = props
    return <>
        <div>
            {searchList?.movie?.map((list) => (
                <SearchListItem key={list.id}>
                    <div>
                        <Link href={`/movie/${list.id}`}>
                            <Image src={`https://image.tmdb.org/t/p/w780${list.poster_path}`} alt={list?.title}
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
            {searchList?.actor?.map((list) => (
                <SearchListItem key={list.id}>
                    <div>
                        <Image src={list.profile_path ? `https://image.tmdb.org/t/p/w185${list.profile_path}` : '/blank.png'} alt={list?.name}
                            width={46}
                            height={62}
                            objectFit='contain' />

                        <div>
                            <Link href={`/movie/${list.id}`}>
                                <div>{list.name}</div>
                            </Link>
                            <div>{list.department}</div>
                        </div>
                    </div>
                </SearchListItem>
            ))}
        </div>
    </>
}

export default SearchResult