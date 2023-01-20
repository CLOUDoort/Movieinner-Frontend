import Avatar from '@mui/material/Avatar'
import { CommentContent, CommentUser, } from './PostCommentList.style'
import { useState } from 'react'
import PostReplyWrite from './PostReplyWrite'
import { apiInstance } from '../../../../apis/setting'
import { toast } from 'react-toastify'
import { CommentWrite } from './PostComment.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'

const PostSingleComment = (props) => {
    const [openReply, setOpenReply] = useState(false)
    const { comment, accessToken, idx, refreshFunction, clickView, userIdx, image } = props
    const [modify, setModify] = useState(false)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const [modifyComment, setModifyComment] = useState(comment.comment)
    const deleteComment = '삭제된 댓글입니다.'
    const [deleteState, setDeleteState] = useState(false)


    console.log('comment', comment)
    const clickReply = () => {
        setOpenReply(!openReply)
    }
    const clickModify = async () => {
        try {
            const getResponse = await apiInstance.put('/community/comment', { idx: comment.idx, comment: modifyComment })
            console.log('modi', getResponse.data)
            toast.success('수정 완료')
            setModify(false)
        } catch (e) {
            console.error(e.response)
        }
    }
    const handleChange = (e) => setModifyComment(e.target.value)
    const handleModify = () => setModify(!modify)
    const clickDelete = async (e) => {
        try {
            if (confirm('정말로 삭제하시겠습니까?') === true) {
                alert('삭제되었습니다.')
                setDeleteState(true)
            }
            const getResponse = await apiInstance.put('/community/comment', { idx: comment.idx, comment: deleteComment })
        } catch (e) {
            console.error(e.response)
        }
    }
    return (
        <>
            {!modify ? (
                !deleteState ? (
                    <>
                        <CommentUser>
                            <CommentContent>
                                <div>
                                    <Avatar alt='User Image' src={image ? image : '/blank.png'} />
                                    <div>
                                        <div>{comment.nickname}</div>
                                        <div>{modifyComment}</div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        nickname == comment.nickname && <><button onClick={handleModify}>수정</button>
                                            <button onClick={clickDelete}>삭제</button></>
                                    }

                                </div>
                            </CommentContent>
                        </CommentUser>
                        <button onClick={clickReply}>답글 달기</button>
                    </>
                ) : (
                    <div>{deleteComment}</div>
                )
            ) : (
                <CommentWrite>
                    <textarea value={modifyComment} onChange={handleChange} placeholder='댓글 작성해주세요!'></textarea>
                    <div>
                        <button onClick={handleModify}>취소</button>
                        <button onClick={clickModify}>수정</button>
                    </div>
                </CommentWrite>
            )}
            {openReply && (
                <PostReplyWrite
                    clickReply={clickReply}
                    refreshFunction={refreshFunction}
                    reply={comment?.idx}
                    accessToken={accessToken}
                    contentIdx={idx}
                    nickname={comment.nickname}
                    clickView={clickView}
                />
            )}
        </>
    )
}

export default PostSingleComment
