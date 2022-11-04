import { PostCommentArea, PostCommentList, PostCommentWrite } from './Post.style'

const PostComment = () => {
    return (
        <PostCommentArea>
            <PostCommentWrite>
                <textarea></textarea>
                <div>
                    <button>작성하기</button>
                </div>
            </PostCommentWrite>
            <PostCommentList></PostCommentList>
        </PostCommentArea>
    )
}

export default PostComment
