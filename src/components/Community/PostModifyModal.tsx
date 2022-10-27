import { PostModal, PostModalTitle, PostModalBox, PostModalContainer, PostModalContents } from './Post.style'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import PostConfirmModal from './PostConfirmModal'

const PostModifyModal = (props) => {
    const { clickModify, idx } = props
    const [confirmModal, setConfirmModal] = useState(false)

    const clickCheck = () => {
        if (confirmModal) setConfirmModal(false)
        else setConfirmModal(true)
    }
    return (
        <PostModal onClick={clickModify}>
            <PostModalContainer onClick={(e) => e.stopPropagation()}>
                <PostModalBox>
                    <PostModalTitle>
                        <div>게시글</div>
                        <button>
                            <IoMdClose onClick={clickModify} size={25} />
                        </button>
                    </PostModalTitle>
                    <PostModalContents>
                        <li>
                            <button>수정하기</button>
                        </li>
                        <li>
                            <button onClick={clickCheck}>삭제하기</button>
                        </li>
                    </PostModalContents>
                </PostModalBox>
            </PostModalContainer>
            {confirmModal ? <PostConfirmModal idx={idx} confirmModal={confirmModal} clickCheck={clickCheck} /> : null}
        </PostModal>
    )
}

export default PostModifyModal
