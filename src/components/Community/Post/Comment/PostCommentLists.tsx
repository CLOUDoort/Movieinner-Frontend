import { CommentList } from './PostComment.style'
import PostReplyComment from './PostReplyComment'
import PostSingleComment from './PostSingleComment'

const PostCommentLists = (props) => {
    const { accessToken, idx, nickname, commentList, refreshFcuntion } = props
    return (
        <CommentList>
            {commentList &&
                commentList.map(
                    (comment: any) =>
                        !comment.resposeTo && (
                            <PostSingleComment
                                key={comment.idx}
                                comment={comment}
                                accessToken={accessToken}
                                idx={idx}
                                nickname={nickname}
                                refreshFcuntion={refreshFcuntion}
                            />
                        )
                )}
            <PostReplyComment />
        </CommentList>
    )
}

export default PostCommentLists
