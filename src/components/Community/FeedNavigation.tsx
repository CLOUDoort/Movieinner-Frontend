import { FeedTableContainer } from './Feed.style'
import Link from 'next/link'
import { Pagination } from '@material-ui/lab'

const FeedNavigation = (props) => {
    const { totalPage } = props

    return (
        <>
            <Pagination count={totalPage} variant='outlined' color='primary' />
        </>

        // <FeedTableContainer>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <Link href={'/community/feed/1'}>1</Link>
        //             </td>
        //             <td>
        //                 <Link href={'/community/feed/2'}>2</Link>
        //             </td>
        //             <td>
        //                 <Link href={'/community/feed/3'}>3</Link>
        //             </td>
        //         </tr>
        //     </tbody>
        // </FeedTableContainer>
    )
}

export default FeedNavigation
