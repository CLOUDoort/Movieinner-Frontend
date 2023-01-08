import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../../apis/setting'
import { CommentWrite } from './PostComment.style'

const PostRootWrite = (props) => {
    const { accessToken, contentIdx, nickname, refreshFunction, userIdx } = props
    const [comment, setComment] = useState('')

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
                toast.success('댓글 작성 완료!')
                setComment('') // teaxarea value 초기화
                refreshFunction() // 작성 댓글 업데이트
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
                <button type='reset' onClick={handleClick}>
                    작성하기
                </button>
            </div>
        </CommentWrite>
    )
}

export default PostRootWrite
