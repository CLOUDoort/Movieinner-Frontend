import { FeedPaginationContainer } from './Feed.style'
import { IoMdArrowBack } from 'react-icons/io'
import { IoMdArrowForward } from 'react-icons/io'

const FeedNavigation = (props) => {
    const { currentPage, setCurrentPage, maxPage } = props


    return (
        <FeedPaginationContainer>
            <button disabled={currentPage <= 1} onClick={() => setCurrentPage((page) => page - 1)}><IoMdArrowBack size={30} /></button>
            <div>
                <span onClick={() => setCurrentPage(1)}>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span onClick={() => setCurrentPage(6)}>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <button disabled={currentPage >= maxPage} onClick={() => setCurrentPage((page) => page + 1)}><IoMdArrowForward size={30} /></button>
        </FeedPaginationContainer>
    )
}

export default FeedNavigation
