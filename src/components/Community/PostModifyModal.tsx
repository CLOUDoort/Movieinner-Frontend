import { PostModalBox, PostModalContainer } from './Post.style'
import { AiFillCloseSquare } from 'react-icons/ai'

const PostModifyModal = (props) => {
    return (
        <>
            <PostModalContainer>
                <PostModalBox>
                    <div>
                        <div></div>
                        <button>
                            <AiFillCloseSquare size={30} />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <button>수정하기</button>
                        </li>
                        <li>
                            <button>삭제하기</button>
                        </li>
                    </ul>
                </PostModalBox>
            </PostModalContainer>
        </>
    )
}

export default PostModifyModal
