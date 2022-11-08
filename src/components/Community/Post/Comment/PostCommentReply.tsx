import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../../apis/setting'
import { CommentWrite } from './PostComment.style'

const PostCommentReply = (props) => {
    const { accessToken, idx, nickname, reply, refreshFcuntion } = props
    const [comment, setComment] = useState('')
    const router = useRouter()
    const textRef = useRef(null)

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
                    nickname: nickname,
                    responseTo: reply,
                })
                toast.success('댓글 작성 완료!')
                router.replace(router.asPath)
                console.log('댓글 작성', postComment.data.success)
                textRef.current.value = '' // teaxarea value 초기화
                refreshFcuntion(postComment.data.contents) // 작성 댓글 업데이트
            } catch (e) {
                console.error(e.response)
                toast.error('댓글 작성 실패!')
            }
        } else toast.error('로그인이 필요합니다!')
    }
    return (
        <CommentWrite>
            <textarea ref={textRef} onChange={handleChange} placeholder='댓글 작성해주세요!'></textarea>
            <div>
                <button onClick={handleClick}>작성하기</button>
            </div>
        </CommentWrite>
    )
}

export default PostCommentReply
