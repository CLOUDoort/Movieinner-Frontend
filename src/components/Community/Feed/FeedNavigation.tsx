import { Pagination } from '@material-ui/lab'
import { FeedPaginationContainer } from './Feed.style'

const FeedNavigation = (props) => {
    const { totalPage, page, handleChange } = props

    return (
        <FeedPaginationContainer>
            <Pagination
                count={totalPage?.data?.contents?.totalPage}
                variant='outlined'
                shape='rounded'
                color='primary'
                page={page}
                onChange={handleChange}
                size='medium'
            />
        </FeedPaginationContainer>
    )
}

export default FeedNavigation
