import { CommentList } from './PostCommentList.style'
import PostReplyComment from './PostReplyComment'
import PostSingleComment from './PostSingleComment'

const PostCommentLists = (props) => {
    const { accessToken, commentList, refreshFunction, userIdx } = props
    return (
        <CommentList>
            {commentList &&
                commentList?.map(
                    (comment: any) =>
                        !comment?.response_to && (
                            <div key={comment.idx}>
                                <PostSingleComment
                                    comment={comment}
                                    accessToken={accessToken}
                                    idx={comment?.content_idx}
                                    nickname={comment.nickname}
                                    refreshFunction={refreshFunction}
                                    userIdx={userIdx}
                                    image={comment?.image_URL}
                                />
                                <PostReplyComment
                                    commentList={commentList}
                                    accessToken={accessToken}
                                    refreshFunction={refreshFunction}
                                    parentComment={comment.idx}
                                    nickname={comment.nickname}
                                    image={comment?.image_URL}
                                />
                            </div>
                        )
                )}
        </CommentList>
    )
}

export default PostCommentLists
