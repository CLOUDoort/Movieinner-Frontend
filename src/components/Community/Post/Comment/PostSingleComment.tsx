import Avatar from '@mui/material/Avatar'
import { CommentUser } from './PostComment.style'
import { useState } from 'react'
import PostReplyWrite from './PostReplyWrite'

const PostSingleComment = (props) => {
    const [openReply, setOpenReply] = useState(false)
    const { comment, accessToken, idx, nickname, refreshFunction, clickView } = props

    const clickReply = () => {
        setOpenReply(!openReply)
    }
    return (
        <>
            <CommentUser>
                <Avatar alt='User Image' src='/topgun.jpeg' />
                <span>이름: {nickname}</span>
                <span>내용: {comment?.comment}</span>
                <button onClick={clickReply}>Reply to</button>
            </CommentUser>
            {openReply && (
                <PostReplyWrite
                    clickReply={clickReply}
                    refreshFunction={refreshFunction}
                    reply={comment?.idx}
                    accessToken={accessToken}
                    idx={idx}
                    nickname={nickname}
                    clickView={clickView}
                />
            )}
        </>
    )
}

export default PostSingleComment
