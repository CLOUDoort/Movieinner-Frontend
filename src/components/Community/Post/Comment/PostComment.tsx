import { CommentArea } from './PostComment.style'
import PostCommentLists from './PostCommentLists'
import PostRootWrite from './PostRootWrite'
import { RootState } from '../../../../store/store'
import { useSelector } from 'react-redux'

const PostComment = (props) => {
    const { idx, commentList, refreshFunction } = props
    const accessToken = useSelector((state: RootState) => state.token.token)
    const userIdx = useSelector((state: RootState) => state.idx.idx)

    return (
        <CommentArea>
            <PostCommentLists refreshFunction={refreshFunction} commentList={commentList} accessToken={accessToken} />
            <PostRootWrite refreshFunction={refreshFunction} accessToken={accessToken} contentIdx={idx} userIdx={userIdx} />
        </CommentArea>
    )
}

export default PostComment
