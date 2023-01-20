import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../../apis/setting'
import useGetNotiData from '../../../../apis/UserData/NotificationData'
import { RootState } from '../../../../store/store'
import { CommentWrite } from './PostComment.style'

const PostReplyWrite = (props) => {
    const { accessToken, contentIdx, reply, refreshFunction, clickReply } = props
    const [comment, setComment] = useState('')
    const userIdx = useSelector((state: RootState) => state.idx.idx)

    const refetchNotiData = useGetNotiData(userIdx).refetch
    const refetchNoti = () => refetchNotiData()

    const handleChange = (e) => {
        const { value } = e.target
        setComment(value)
    }
    const handleClick = async () => {
        if (accessToken) {
            try {
                const postComment = await apiInstance.post('/community/comment', {
                    contentIdx: contentIdx,
                    userIdx: userIdx,
                    comment: comment,
                    responseTo: reply,
                })
                const { content_writer_idx, comment_writer_idx, content_idx, idx } = postComment.data.comments
                const postNoti = await apiInstance.post(`/community/notification`, {
                    userIdx: content_writer_idx,
                    writerIdx: comment_writer_idx,
                    contentIdx: content_idx,
                    notType: "reply",
                    notTypeIdx: idx
                })
                setComment('') // teaxarea value 초기화
                refreshFunction() // 작성 댓글 업데이트
                refetchNoti()
                clickReply()
            } catch (e) {
                console.error(e.response)
                toast.error('댓글 작성 실패!')
            }
        } else toast.error('로그인이 필요합니다!')
    }
    return (
        <CommentWrite>
            <textarea value={comment} onChange={handleChange} placeholder='댓글 작성해주세요!'></textarea>
            <div>
                <button onClick={handleClick}>작성하기</button>
            </div>
        </CommentWrite>
    )
}

export default PostReplyWrite
