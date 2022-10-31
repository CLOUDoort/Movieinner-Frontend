import { useState } from 'react'
import { useRouter } from 'next/router'
import Loading from '../Loading'
import { PostContainer } from './Post.style'
import PostModifyModal from './PostModifyModal'
import useGetPostData from '../react-query/PostData'
import PostComment from './PostComment'
import PostContent from './PostContent'

const Post = () => {
    const router = useRouter()
    const { idx } = router.query
    const [showModal, setShowModal] = useState(false)
    const { data, isLoading } = useGetPostData(idx ? idx : null)

    const clickModify = () => {
        if (showModal) setShowModal(false)
        else setShowModal(true)
    }

    return (
        <>
            {idx && !isLoading ? (
                <PostContainer>
                    <PostContent data={data} clickModify={clickModify} />
                    <PostComment />
                    {showModal ? <PostModifyModal idx={idx} clickModify={clickModify} /> : null}
                </PostContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Post
