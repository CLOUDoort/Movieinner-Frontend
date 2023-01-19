import { PostModal, PostModalTitle, PostModalBox, PostModalContainer, PostModalContents } from './PostModal.style'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import PostConfirmModal from './PostConfirmModal'
import { useRouter } from 'next/router'

const PostModifyModal = (props) => {
    const { clickModify, idx, post } = props
    const [confirmModal, setConfirmModal] = useState(false)
    const router = useRouter()
    const clickCheck = () => {
        setConfirmModal(!confirmModal)
    }
    return (
        <PostModal onClick={clickModify}>
            <PostModalContainer onClick={(e) => e.stopPropagation()}>
                <PostModalBox>
                    <PostModalTitle>
                        <div></div>
                        <div>게시글</div>
                        <button>
                            <IoMdClose onClick={clickModify} size={25} />
                        </button>
                    </PostModalTitle>
                    <PostModalContents>
                        <li>
                            <button
                                onClick={() => {
                                    router.push(`/community/modify/${idx}`)
                                }}
                            >
                                수정하기
                            </button>
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
