import { useState } from 'react'
import { PostCommentArea, PostCommentList, PostCommentWrite } from './PostComment.style'
import { apiInstance } from '../../../apis/setting'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { toast } from 'react-toastify'

const PostComment = (props) => {
    const { idx } = props
    const [comment, setComment] = useState('')
    const accessToken = useSelector((state: RootState) => state.token.token)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)

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
                })
                toast.success('댓글 작성 완료!')
                console.log('댓글 작성', postComment.data.success)
            } catch (e) {
                console.error(e.response)
            }
        } else toast.error('로그인이 필요합니다!')
    }
    return (
        <PostCommentArea>
            <PostCommentWrite>
                <textarea onChange={handleChange} placeholder='댓글 작성해주세요!'></textarea>
                <div>
                    <button onClick={handleClick}>작성하기</button>
                </div>
            </PostCommentWrite>
            <PostCommentList>
                <div></div>
            </PostCommentList>
        </PostCommentArea>
    )
}

export default PostComment
