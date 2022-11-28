import Link from "next/link"
import { SearchListItem, SearchListTitle } from "./Search.style"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"


const SearchResultActor = (props) => {
    const { actorSearch } = props

    return <>
        <SearchListTitle>
            Creator &#38; Actor {actorSearch?.total_results} <IoIosArrowForward size={35} /></SearchListTitle>
        {actorSearch?.search?.map((list) => (
            <SearchListItem key={list.id}>
                <div>
                    <Image src={list.profile_path ? `https://image.tmdb.org/t/p/w185${list.profile_path}` : '/blank.png'} alt={list?.name}
                        width={46}
                        height={62}
                        objectFit='contain' />

                    <div>
                        <Link href={`/movie/${list.id}`}>
                            <div>{list.name} &#91;{list.gender}&#93;</div>
                        </Link>
                        <div>{list.department}</div>
                    </div>
                </div>
            </SearchListItem>
        ))}</>
}

export default SearchResultActor