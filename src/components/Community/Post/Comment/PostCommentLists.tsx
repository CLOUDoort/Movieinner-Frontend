import { CommentList } from './PostComment.style'
import PostReplyComment from './PostReplyComment'
import PostSingleComment from './PostSingleComment'

const PostCommentLists = (props) => {
    const { accessToken, commentList, refreshFunction } = props
    return (
        <CommentList>
            {commentList &&
                commentList.map(
                    (comment: any) =>
                        !comment?.response_to && (
                            <div key={comment.idx}>
                                <PostSingleComment
                                    comment={comment}
                                    accessToken={accessToken}
                                    idx={comment?.content_idx}
                                    nickname={comment?.nickname}
                                    refreshFunction={refreshFunction}
                                />
                            </div>
                        )
                )}
            <PostReplyComment />
        </CommentList>
    )
}

export default PostCommentLists
