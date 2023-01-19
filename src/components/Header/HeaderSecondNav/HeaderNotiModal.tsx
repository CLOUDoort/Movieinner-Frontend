import { useEffect, useState } from "react"
import { HeaderNotiModalBox, HeaderNotiModalContainer, HeaderNotiModalList } from "./HeaderNotiModal.style"
import Image from "next/image"
import { MdDelete } from "react-icons/md"
import { apiInstance } from "../../../apis/setting"
import router from "next/router"

const HeaderNotiModal = (props) => {
    const { controlModal, notiData, userIdx, refetchNoti } = props
    const [transition, setTransition] = useState(false)
    const [deleteIdx, setDeleteIdx] = useState(0);
    useEffect(() => { setTransition(!transition) }, [])

    const deleteNoti = async () => {
        try {
            const response = await apiInstance.delete(`/community/notification`, {
                data: {
                    userIdx: userIdx,
                    notIdx: deleteIdx
                }
            })
            refetchNoti()
        } catch (e) {
            console.error(e.response)
        }
    }
    return (
        <HeaderNotiModalContainer onClick={controlModal}>
            <HeaderNotiModalBox transition={transition} onClick={(e) => e.stopPropagation()}>
                <div>알림</div>
                {notiData?.map((obj) => (
                    <HeaderNotiModalList onClick={() => {
                        router.push(`/community/post/${obj.content_idx}`)
                        controlModal()
                    }} key={obj.idx} onMouseEnter={() => setDeleteIdx(obj.idx)} onMouseLeave={() => setDeleteIdx(0)} >
                        <div>
                            <Image src={obj.image_URL ? obj.image_URL : '/blank.png'} width={30} height={30} alt={obj.nickname} />
                            <div>
                                <div>{obj.nickname}님의 {obj.comment_idx ? "답글" : "댓글"} :</div>
                                <div>{obj.comment}</div>
                            </div>
                        </div>
                        <MdDelete onClick={deleteNoti} size={20} />
                    </HeaderNotiModalList>
                ))}
            </HeaderNotiModalBox>
        </HeaderNotiModalContainer>
    )
}

export default HeaderNotiModal