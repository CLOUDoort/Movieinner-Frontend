import { PostCommentSettingBox, PostCommentSettingContainer } from "./PostCommentSetting.style"

const PostCommentSetting = (props) => {
    const { handleModify, clickDelete } = props

    return (
        <PostCommentSettingContainer>
            <PostCommentSettingBox>
                <button onClick={handleModify}>수정하기</button>
                <button onClick={clickDelete}>삭제하기</button>
            </PostCommentSettingBox>
        </PostCommentSettingContainer>
    )
}

export default PostCommentSetting