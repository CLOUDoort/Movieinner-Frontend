import { CommentList } from './PostComment.style'
import PostReplyComment from './PostReplyComment'
import PostSingleComment from './PostSingleComment'

const PostCommentLists = () => {
    return (
        <CommentList>
            <PostSingleComment />
            <PostReplyComment />
        </CommentList>
    )
}

export default PostCommentLists
