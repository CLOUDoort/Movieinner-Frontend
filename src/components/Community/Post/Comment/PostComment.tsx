import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import PostRootWrite from './PostRootWrite'
import { CommentArea } from './PostComment.style'
import PostCommentLists from './PostCommentLists'

const PostComment = (props) => {
    const { idx, commentList, refreshFunction } = props
    const accessToken = useSelector((state: RootState) => state.token.token)
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    console.log('userIDx', userIdx)

    return (
        <CommentArea>
            <PostCommentLists nickname={nickname} refreshFunction={refreshFunction} commentList={commentList} accessToken={accessToken} userIdx={userIdx} />
            <PostRootWrite refreshFunction={refreshFunction} accessToken={accessToken} contentIdx={idx} nickname={nickname} userIdx={userIdx} />
        </CommentArea>
    )
}

export default PostComment
