import Link from "next/link"
import { SearchBox, SearchListItem, SearchListTitle } from "./Search.style"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { useEffect, useState } from "react"


const SearchResultActor = (props) => {
    const { actorSearch } = props
    const [clickSearch, setClickSearch] = useState(false)
    useEffect(() => { setClickSearch(false) }, [actorSearch])

    return (
        <>
            <SearchListTitle clickSearch={clickSearch} onClick={() => setClickSearch(!clickSearch)}>
                Creator &#38; Actor {actorSearch?.total_results} <IoIosArrowForward size={35} /></SearchListTitle>
            <SearchBox>
                {clickSearch && actorSearch?.search?.map((list) => (
                    <SearchListItem key={list.id}>
                        <div>
                            <Image src={list.profile_path ? `https://image.tmdb.org/t/p/w185${list.profile_path}` : '/blank.png'} alt={list?.name}
                                width={150}
                                height={180}
                                objectFit='contain' />

                            <div>
                                <Link href={`/movie/${list.id}`}>
                                    <div>{list.name} &#91;{list.gender}&#93;</div>
                                </Link>
                                <div>{list.department}</div>
                            </div>
                        </div>
                    </SearchListItem>
                ))}
            </SearchBox>
        </>
    )
}

export default SearchResultActor