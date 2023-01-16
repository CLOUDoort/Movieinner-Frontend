import { FeedPaginationContainer } from './Feed.style'
import { IoMdArrowBack } from 'react-icons/io'
import { IoMdArrowForward } from 'react-icons/io'
import { useEffect, useState } from 'react'

const FeedNavigation = (props) => {
    const { currentPage, setCurrentPage, maxPage } = props
    let pageNumbers = []
    const [visiblePage, setVisiblePage] = useState(1)
    if (maxPage <= 10) {
        for (let i = 1; i <= maxPage; i++) {
            pageNumbers.push(i)
        }
    } else {
        for (let i = visiblePage; i <= visiblePage + 9; i++) {
            pageNumbers.push(i)
        }
    }
    useEffect(() => {
        for (let i = visiblePage; i <= visiblePage + 9; i++) {
            pageNumbers.push(i)
        }
    }, [visiblePage])
    console.log('page', pageNumbers)

    return (
        <FeedPaginationContainer currentPage={currentPage}>
            <button disabled={visiblePage <= 1} onClick={() => setVisiblePage(visiblePage - 10)}><IoMdArrowBack size={25} /></button>
            <div>
                {pageNumbers.map((page) => (
                    <span onClick={() => setCurrentPage(page)} key={page}>{page}</span>
                ))}
            </div>
            <button onClick={() => setVisiblePage(visiblePage + 10)}><IoMdArrowForward size={25} /></button>
        </FeedPaginationContainer>
    )
}

export default FeedNavigation
