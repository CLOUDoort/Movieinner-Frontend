import { Pagination } from '@material-ui/lab'

const FeedNavigation = (props) => {
    const { totalPage, page, handleChange } = props

    return <Pagination count={totalPage?.data?.contents?.totalPage} variant='outlined' color='primary' page={page} onChange={handleChange} />
}

export default FeedNavigation
