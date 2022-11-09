import { useState } from 'react'
import { CommentReply } from './PostComment.style'
import PostSingleComment from './PostSingleComment'

const PostReplyComment = (props) => {
    const { commentList, nickname, parentComment } = props
    const [viewComments, setViewComments] = useState(false)

    const clickView = () => {
        setViewComments(!viewComments)
    }
    return (
        <>
            <CommentReply>
                <span onClick={clickView}>View more comments</span>
                {commentList.map(
                    (comment: any) =>
                        parentComment.idx === comment.response_to && (
                            <div key={comment.idx}>
                                <PostSingleComment
                                    comment={comment}
                                    // accessToken={accessToken}
                                    idx={comment?.content_idx}
                                    nickname={nickname}
                                    // refreshFunction={refreshFunction}
                                />
                                <PostReplyComment commentList={commentList} nickname={nickname} />
                            </div>
                        )
                )}
                {/* {viewComments && <PostSingleComment />} */}
            </CommentReply>
        </>
    )
}

export default PostReplyComment
