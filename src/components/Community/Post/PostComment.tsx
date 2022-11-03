import { PostCommentArea, PostCommentList, PostCommentWrite } from './Post.style'

const PostComment = () => {
    return (
        <PostCommentArea>
            <PostCommentWrite>
                <input type='textarea' placeholder='댓글 입력' />
            </PostCommentWrite>
            <PostCommentList></PostCommentList>
        </PostCommentArea>
    )
}

export default PostComment
