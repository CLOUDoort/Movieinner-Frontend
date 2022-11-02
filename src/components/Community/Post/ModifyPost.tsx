import { useRouter } from 'next/router'
import useGetPostData from '../../react-query/PostData'
import ModifyEditor from '../Write/ModifyEditor'

const ModifyPost = () => {
    const router = useRouter()
    const { idx } = router.query
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    console.log('postData', data)
    return <>{idx && data && !isLoading ? <ModifyEditor idx={idx} modifyPost={data?.data?.content} /> : null}</>
}

export default ModifyPost
