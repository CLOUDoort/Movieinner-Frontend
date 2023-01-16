import { FeedPaginationContainer } from './Feed.style'
import { IoMdArrowBack } from 'react-icons/io'
import { IoMdArrowForward } from 'react-icons/io'

const FeedNavigation = (props) => {
    const { currentPage, setCurrentPage, maxPage } = props
    let pageNumbers = []
    for (let i = 1; i <= maxPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <FeedPaginationContainer currentPage={currentPage}>
            <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}><IoMdArrowBack size={25} /></button>
            <div>
                {pageNumbers.map((page) => (
                    <span onClick={() => setCurrentPage(page)} key={page}>{page}</span>
                ))}
            </div>
            <button disabled={currentPage >= maxPage} onClick={() => setCurrentPage(currentPage + 1)}><IoMdArrowForward size={25} /></button>
        </FeedPaginationContainer>
    )
}

export default FeedNavigation
