import { useState } from "react"
import { IoIosNotificationsOutline } from "react-icons/io"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import useGetNotiData from "../react-query/NotificationData"
import HeaderNotiModal from "./HeaderNotiModal"
import { HeaderNotiBox, HeaderNotiNum } from "./HeaderSecondNav.style"

const HeaderNoti = () => {
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const commentNotiData = useGetNotiData(userIdx, "comment").data
    const replytNotiData = useGetNotiData(userIdx, "reply").data
    const [modal, setModal] = useState(false)
    const controlModal = () => setModal(!modal)

    console.log('notiheader', commentNotiData?.data)
    console.log('replyheader', replytNotiData?.data)
    return (
        <HeaderNotiBox modal={modal}>
            <HeaderNotiNum>{commentNotiData?.data?.response?.length + replytNotiData?.data?.response?.length}</HeaderNotiNum>
            <IoIosNotificationsOutline onClick={controlModal} size={40} />
            {modal ? <HeaderNotiModal userIdx={userIdx} commentNotiData={commentNotiData?.data?.response} replyNotiData={replytNotiData?.data?.response} modal={modal} controlModal={controlModal} /> : null}
        </HeaderNotiBox>
    )

}

export default HeaderNoti