import { useEffect, useState } from 'react'
import { CommentReply } from './PostCommentList.style'
import PostSingleComment from './PostSingleComment'

const PostReplyComment = (props) => {
    const { commentList, nickname, parentComment, accessToken, refreshFunction } = props
    const [viewComments, setViewComments] = useState(false)
    const [childCommentNumber, setChildCommentNumber] = useState(0)

    useEffect(() => {
        let commentNumber = 0
        commentList.map((comment: any) => {
            if (parentComment === comment.response_to) commentNumber++
        })
        setChildCommentNumber(commentNumber)
    }, [commentList, parentComment])

    const clickView = () => {
        setViewComments(!viewComments)
    }
    return (
        <CommentReply>
            {childCommentNumber > 0 && <span onClick={clickView}>{childCommentNumber}개의 답글</span>}
            {viewComments &&
                commentList.map(
                    (comment: any) =>
                        parentComment === comment.response_to && (
                            <div key={comment.idx}>
                                <PostSingleComment
                                    comment={comment}
                                    accessToken={accessToken}
                                    idx={comment?.content_idx}
                                    nickname={nickname}
                                    refreshFunction={refreshFunction}
                                    clickView={clickView}
                                />
                                <PostReplyComment
                                    commentList={commentList}
                                    accessToken={accessToken}
                                    refreshFunction={refreshFunction}
                                    parentComment={comment.idx}
                                    nickname={nickname}
                                />
                            </div>
                        )
                )}
        </CommentReply>
    )
}

export default PostReplyComment
