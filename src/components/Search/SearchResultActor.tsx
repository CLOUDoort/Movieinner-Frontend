import { SearchBox, SearchListItem } from "./Search.style"

import Image from "next/image"
import useGetActorSearch from "../../apis/MovieData/ActorSearch"
import { useObserver } from "../Common/UseObserver"
import { useRef } from "react"

const SearchResultActor = (props) => {
    const { search, click } = props
    const { data, fetchNextPage } = useGetActorSearch(search)
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
                                <Image src={list.profile_path ? `https://image.tmdb.org/t/p/w185${list.profile_path}` : '/blank.png'} alt={list?.name}
                                    width={150}
                                    height={180}
                                    objectFit='contain' />

                                <div>
                                    <div>{list.name} &#91;{list.gender}&#93;</div>
                                    <div>{list.department}</div>
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

export default SearchResultActor