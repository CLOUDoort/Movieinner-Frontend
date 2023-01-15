import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PostBox, PostContainer } from './Post.style'
import PostModifyModal from './PostModifyModal'
import PostComment from './Comment/PostComment'
import PostContent from './PostContent'
import { apiInstance } from '../../../apis/setting'
import LoadingLogo from '../../Common/Loading/LoadingLogo'
import useGetPostCommentData from '../../../apis/CommunityData/PostCommentData'
import useGetPostData from '../../../apis/CommunityData/PostData'

const Post = () => {
    const router = useRouter()
    const { idx } = router.query
    const [showModal, setShowModal] = useState(false)
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    const commentList = useGetPostCommentData(idx ? idx : null).data
    const commentRefetch = useGetPostCommentData(idx ? idx : null).refetch

    useEffect(() => {
        const getResponse = async () => {
            try {
                const hitResponse = await apiInstance.put(`/community/content/hit/${idx}`)
                console.log('hit', hitResponse.data)
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [idx])

    const clickModify = () => {
        setShowModal(!showModal)
    }

    const refreshFunction = () => {
        commentRefetch()
    }
    return (
        <>
            {idx && !isLoading ? (
                <PostBox>
                    <PostContainer>
                        <PostContent data={data?.data?.content} clickModify={clickModify} />
                        <PostComment refreshFunction={refreshFunction} commentList={commentList?.data?.contents} idx={idx} />
                        {showModal ? <PostModifyModal idx={idx} clickModify={clickModify} /> : null}
                    </PostContainer>
                </PostBox>
            ) : (
                <LoadingLogo />
            )}
        </>
    )
}

export default Post
