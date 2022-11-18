import { SearchListContainer } from "./Search.style"

const SearchResult = (props) => {
    const { searchList } = props
    return <>
        <SearchListContainer>
            {searchList.map((list) => (
                <div key={list.id}>
                    <div>
                        {list.title}
                        {list.release_date}
                        {list.poster_path}
                    </div>
                </div>
            ))}
        </SearchListContainer>
    </>
}

export default SearchResult