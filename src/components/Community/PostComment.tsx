import { PostCommentArea, PostCommentList, PostCommentWrite } from './Post.style'

const PostComment = () => {
    return (
        <>
            <PostCommentArea>
                <PostCommentWrite></PostCommentWrite>
                <PostCommentList></PostCommentList>
            </PostCommentArea>
        </>
    )
}

export default PostComment
