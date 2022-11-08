import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loading from '../../Loading'
import { PostContainer } from './Post.style'
import PostModifyModal from './PostModifyModal'
import useGetPostData from '../../react-query/PostData'
import PostComment from './Comment/PostComment'
import PostContent from './PostContent'
import { apiInstance } from '../../../apis/setting'

const Post = () => {
    const router = useRouter()
    const { idx } = router.query
    const [showModal, setShowModal] = useState(false)
    const { data, isLoading } = useGetPostData(idx ? idx : null)
    const [commentList, setCommentList] = useState([])

    useEffect(() => {
        const getResponse = async () => {
            try {
                const hitResponse = await apiInstance.put(`/community/content/hit/${idx}`)
                console.log('hit', hitResponse.data)
                const getCommentList = await apiInstance.get(`/community/comment/${idx}`)
                console.log('comment', getCommentList.data.contents)
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [])

    const clickModify = () => {
        setShowModal(!showModal)
    }

    const refreshFunction = (newComment) => {
        setCommentList(commentList.concat(newComment))
    }

    return (
        <>
            {idx && !isLoading ? (
                <PostContainer>
                    <PostContent data={data?.data?.content} clickModify={clickModify} />
                    <PostComment refreshFunction={refreshFunction} commentList={commentList} idx={idx} />
                    {showModal ? <PostModifyModal idx={idx} clickModify={clickModify} /> : null}
                </PostContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Post
