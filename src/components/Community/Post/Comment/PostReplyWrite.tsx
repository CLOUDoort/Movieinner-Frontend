import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../../apis/setting'
import { CommentWrite } from './PostComment.style'

const PostReplyWrite = (props) => {
    const { accessToken, idx, nickname, reply, refreshFunction, clickReply, userIdx } = props
    const [comment, setComment] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setComment(value)
    }
    const handleClick = async () => {
        if (accessToken) {
            try {
                const postComment = await apiInstance.post('/community/comment', {
                    contentIdx: idx,
                    comment: comment,
                    userIdx: userIdx,
                    responseTo: reply,
                })
                toast.success('댓글 작성 완료!')
                setComment('') // teaxarea value 초기화
                refreshFunction() // 작성 댓글 업데이트
                clickReply()
                // clickView()
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
