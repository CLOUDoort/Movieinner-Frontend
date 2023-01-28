import { CommentWrite } from './PostComment.style'
import { apiInstance } from '../../../../apis/setting'
import { toast } from 'react-toastify'
import useGetNotiData from '../../../../react-query/UserData/NotificationData'
import { useState } from 'react'

const PostRootWrite = (props) => {
    const { accessToken, contentIdx, refreshFunction, userIdx } = props
    const [comment, setComment] = useState('')
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
                    comment: comment,
                    userIdx: userIdx,
                })
                const { content_writer_idx, comment_writer_idx, content_idx, idx } = postComment.data.comments
                const postNoti = await apiInstance.post(`/community/notification`, {
                    userIdx: content_writer_idx,
                    writerIdx: comment_writer_idx,
                    contentIdx: content_idx,
                    notType: "comment",
                    notTypeIdx: idx
                })
                setComment('') // teaxarea value 초기화
                refreshFunction() // 작성 댓글 업데이트
                refetchNoti() // 알람 업데이트
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
                <button onClick={handleClick}>
                    댓글 작성
                </button>
            </div>
        </CommentWrite>
    )
}

export default PostRootWrite
