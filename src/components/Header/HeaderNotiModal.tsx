import { useEffect, useState } from "react"
import { HeaderNotiModalBox, HeaderNotiModalContainer, HeaderNotiModalList } from "./HeaderNotiModal.style"
import Image from "next/image"
import { MdDelete } from "react-icons/md"
import { apiInstance } from "../../apis/setting"
import { toast } from "react-toastify"

const HeaderNotiModal = (props) => {
    const { modal, controlModal, commentNotiData, replyNotiData, userIdx } = props
    const [transition, setTransition] = useState(false)
    const [deleteIdx, setDeleteIdx] = useState(0);
    useEffect(() => {
        setTransition(!transition)
    }, [modal])

    const deleteNoti = async () => {
        try {
            const response = await apiInstance.delete(`/community/notification`, {
                data: {
                    userIdx: userIdx,
                    notIdx: deleteIdx
                }
            })
            console.log('delete response', response.data)
            toast.success('알람 삭제 성공')
        } catch (e) {
            console.error(e.response)
        }
    }
    console.log("delete", deleteIdx)

    return (
        <HeaderNotiModalContainer onClick={controlModal}>
            <HeaderNotiModalBox transition={transition} onClick={(e) => e.stopPropagation()}>
                <div>알림</div>
                {commentNotiData?.map((obj) => (
                    <HeaderNotiModalList key={obj.idx} onMouseEnter={() => setDeleteIdx(obj.idx)} onMouseLeave={() => setDeleteIdx(0)} >
                        <div>
                            <Image src={obj.image_URL} width={30} height={30} />
                            <div>
                                <div>{obj.nickname}님의 댓글 :</div>
                                <div>{obj.comment}</div>
                            </div>
                        </div>
                        <MdDelete onClick={deleteNoti} size={20} />
                    </HeaderNotiModalList>
                ))}
                {replyNotiData?.map((obj) => (
                    <HeaderNotiModalList key={obj.idx} onMouseEnter={() => setDeleteIdx(obj.idx)} onMouseLeave={() => setDeleteIdx(0)}>
                        <div>
                            <Image src={obj.image_URL} width={30} height={30} />
                            <div>
                                <div>{obj.nickname}님의 답글 :</div>
                                <div>{obj.reply}</div>
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