import { useState } from "react"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { RootState } from "../../store/store"
import useGetNotiData from "../react-query/NotificationData"
import HeaderNotiModal from "./HeaderNotiModal"
import { HeaderNotiBox } from "./HeaderSecondNav.style"

const HeaderNoti = () => {
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const commentNotiData = useGetNotiData(userIdx, "comment").data
    const replytNotiData = useGetNotiData(userIdx, "reply").data
    const [modal, setModal] = useState(false)
    const controlModal = () => setModal(!modal)
    const deleteNoti = async () => {
        try {
            const response = await apiInstance.delete(`/community/notification`, {
                data: {
                    userIdx: userIdx,
                    notIdx: 1
                }
            })
            console.log('delete response', response.data)
            toast.success('알람 삭제 성공')
        } catch (e) {
            console.error(e.response)
        }
    }

    console.log('notiheader', commentNotiData?.data)
    console.log('replyheader', replytNotiData?.data)
    return (
        <HeaderNotiBox modal={modal}>
            <IoIosNotificationsOutline onClick={controlModal} size={40} />
            {modal ? <HeaderNotiModal modal={modal} controlModal={controlModal} /> : null}
        </HeaderNotiBox>
    )

}

export default HeaderNoti