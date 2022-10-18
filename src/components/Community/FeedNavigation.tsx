import { FeedTableContainer } from './Feed.style'
import Link from 'next/link'

const FeedNavigation = () => {
    return (
        <FeedTableContainer>
            <tbody>
                <tr>
                    <td>
                        <Link href={'/community/feed/1'}>1</Link>
                    </td>
                    <td>
                        <Link href={'/community/feed/2'}>2</Link>
                    </td>
                    <td>
                        <Link href={'/community/feed/1'}>3</Link>
                    </td>
                </tr>
            </tbody>
        </FeedTableContainer>
    )
}

export default FeedNavigation
