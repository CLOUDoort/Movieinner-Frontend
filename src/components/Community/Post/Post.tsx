import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loading from '../../Loading'
import { PostContainer } from './Post.style'
import PostModifyModal from './PostModifyModal'
import useGetPostData from '../../react-query/PostData'
import PostComment from './PostComment'
import PostContent from './PostContent'
import { apiInstance } from '../../../apis/setting'

const Post = () => {
    const router = useRouter()
    const { idx } = router.query
    const [showModal, setShowModal] = useState(false)
    const { data, isLoading } = useGetPostData(idx ? idx : null)

    useEffect(() => {
        const getResponse = async () => {
            try {
                const hitResponse = await apiInstance.put(`/community/content/hit/${idx}`)
                console.log('hit', hitResponse.data)
                // const getCommentList = await apiInstance.get(`/community/comment/${idx}`)
                // console.log('comment', getCommentList.data)
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [])

    const clickModify = () => {
        if (showModal) setShowModal(false)
        else setShowModal(true)
    }

    return (
        <>
            {idx && !isLoading ? (
                <PostContainer>
                    <PostContent data={data?.data?.content} clickModify={clickModify} />
                    <PostComment idx={idx} />
                    {showModal ? <PostModifyModal idx={idx} clickModify={clickModify} /> : null}
                </PostContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Post
