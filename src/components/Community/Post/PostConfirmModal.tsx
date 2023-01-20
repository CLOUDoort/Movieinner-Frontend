import { PostConfirmModalContainer } from './PostConfirmModal.style'
import { apiInstance } from '../../../apis/setting'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const PostConfirmModal = (props) => {
    const { clickCheck, idx } = props
    const router = useRouter()

    const clickDelete = async () => {
        try {
            const deleteResponse = await apiInstance.delete(`/community/content/${idx}`)
            console.log('delete', deleteResponse.data)
            toast.success('삭제 성공')
            router.replace('/community/feed')
        } catch (e) {
            toast.error('삭제 실패')
        }
    }

    return (
        <PostConfirmModalContainer onClick={clickCheck}>
            <div onClick={(e) => e.stopPropagation()}>
                <div>게시글을 삭제하시겠습니까?</div>
                <div>
                    <button onClick={clickCheck}>뒤로가기</button>
                    <button onClick={clickDelete}>삭제하기</button>
                </div>
            </div>
        </PostConfirmModalContainer>
    )
}

export default PostConfirmModal
