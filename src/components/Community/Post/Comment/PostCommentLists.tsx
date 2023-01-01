import { CommentList } from './PostComment.style'
import PostReplyComment from './PostReplyComment'
import PostSingleComment from './PostSingleComment'

const PostCommentLists = (props) => {
    const { accessToken, commentList, refreshFunction, nickname, userIdx } = props
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
                                    nickname={nickname}
                                    refreshFunction={refreshFunction}
                                    userIdx={userIdx}
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
        </CommentList>
    )
}

export default PostCommentLists
