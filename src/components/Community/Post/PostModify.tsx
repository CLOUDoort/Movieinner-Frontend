import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import useGetPostData from '../../../apis/react-query/CommunityData/PostData'

const PostModify = () => {
    const NoSsrModifyEditor = dynamic(() => import('../Write/ModifyEditor'), { ssr: false })
    const router = useRouter()
    const { idx } = router.query
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    console.log('postData', data)
    return <>{idx && data && !isLoading ? <NoSsrModifyEditor idx={idx} modifyPost={data?.data?.content} /> : null}</>
}

export default PostModify
