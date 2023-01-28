import dynamic from 'next/dynamic'
import useGetPostData from '../../../react-query/CommunityData/PostData'
import { useRouter } from 'next/router'

const PostModify = () => {
    const NoSsrModifyEditor = dynamic(() => import('../Write/ModifyEditor'), { ssr: false })
    const router = useRouter()
    const { idx } = router.query
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    return <>{idx && data && !isLoading ? <NoSsrModifyEditor idx={idx} modifyPost={data?.data?.content} /> : null}</>
}

export default PostModify
