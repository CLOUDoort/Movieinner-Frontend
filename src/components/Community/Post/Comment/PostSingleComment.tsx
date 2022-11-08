import Avatar from '@mui/material/Avatar'
import { CommentUser } from './PostComment.style'
import { useState } from 'react'
import PostCommentReply from './PostCommentReply'

const PostSingleComment = (props) => {
    const [openReply, setOpenReply] = useState(false)
    const { comment, accessToken, idx, nickname, refreshFcuntion } = props

    const clickReply = () => {
        setOpenReply(!openReply)
    }
    return (
        <>
            <CommentUser>
                <Avatar alt='User Image' src='/topgun.jpeg' />
                <button onClick={clickReply}>Reply to</button>
            </CommentUser>
            {openReply && (
                <PostCommentReply refreshFcuntion={refreshFcuntion} reply={comment.resposneTo} accessToken={accessToken} idx={idx} nickname={nickname} />
            )}
        </>
    )
}

export default PostSingleComment
