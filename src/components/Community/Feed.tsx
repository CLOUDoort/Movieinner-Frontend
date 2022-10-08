import Link from 'next/link'
import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(() => import('./WysiwygEditor'), { ssr: false })

const Feed = () => {
    return <Link href='/community/write'>글 작성하기</Link>
}

export default Feed
