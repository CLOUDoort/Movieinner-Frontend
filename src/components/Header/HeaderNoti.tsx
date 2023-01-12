import { useState } from "react"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import useGetNotiData from "../react-query/NotificationData"
import HeaderNotiModal from "./HeaderNotiModal"
import { HeaderNotiNum } from "./HeaderNotiModal.style"
import { HeaderNotiBox } from "./HeaderSecondNav.style"

const HeaderNoti = () => {
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const commentNotiData = useGetNotiData(userIdx, "comment").data
    const replytNotiData = useGetNotiData(userIdx, "reply").data
    const refetchCommentNotiData = useGetNotiData(userIdx, "comment").refetch
    const refetchReplytNotiData = useGetNotiData(userIdx, "reply").refetch
    const [modal, setModal] = useState(false)
    const controlModal = () => setModal(!modal)

    const refetchNoti = () => {
        refetchCommentNotiData()
        refetchReplytNotiData()
    }



    console.log('notiheader', commentNotiData?.data)
    console.log('replyheader', replytNotiData?.data)
    return (
        <HeaderNotiBox modal={modal}>
            <HeaderNotiNum>{commentNotiData?.data?.response?.length + replytNotiData?.data?.response?.length ? commentNotiData?.data?.response?.length + replytNotiData?.data?.response?.length : null}</HeaderNotiNum>
            <IoIosNotificationsOutline onClick={controlModal} size={40} />
            {modal ? <HeaderNotiModal refetchNoti={refetchNoti} userIdx={userIdx} commentNotiData={commentNotiData?.data?.response} replyNotiData={replytNotiData?.data?.response} modal={modal} controlModal={controlModal} /> : null}
        </HeaderNotiBox>
    )

}

export default HeaderNoti