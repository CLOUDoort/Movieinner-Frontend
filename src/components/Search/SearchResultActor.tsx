import { SearchBox, SearchListItem } from "./Search.style"
import Image from "next/image"

const SearchResultActor = (props) => {
    const { actorSearch, click } = props

    return (
        <SearchBox>
            {click && actorSearch?.search?.map((list) => (
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
            ))}
        </SearchBox>
    )
}

export default SearchResultActor