import { useRouter } from 'next/router'
import useGetPostData from '../react-query/PostData'
import WysiwygEditor from './WysiwygEditor'

const ModifyPost = () => {
    const router = useRouter()
    const { idx } = router.query
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    console.log('postData', data)
    return (
        <>
            <WysiwygEditor />
        </>
    )
}

export default ModifyPost
