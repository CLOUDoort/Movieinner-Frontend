import { PostModal, PostModalTitle, PostModalBox, PostModalContainer, PostModalContents } from './Post.style'
import { IoMdClose } from 'react-icons/io'

const PostModifyModal = (props) => {
    return (
        <PostModal>
            <PostModalContainer>
                <PostModalBox>
                    <PostModalTitle>
                        <div>게시글</div>
                        <button>
                            <IoMdClose size={25} />
                        </button>
                    </PostModalTitle>
                    <PostModalContents>
                        <li>
                            <button>수정하기</button>
                        </li>
                        <li>
                            <button>삭제하기</button>
                        </li>
                    </PostModalContents>
                </PostModalBox>
            </PostModalContainer>
        </PostModal>
    )
}

export default PostModifyModal
