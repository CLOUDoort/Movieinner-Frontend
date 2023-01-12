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
    const notiData = useGetNotiData(userIdx).data
    const refetchNotiData = useGetNotiData(userIdx).refetch
    const [modal, setModal] = useState(false)
    const controlModal = () => setModal(!modal)
    const number = notiData?.data?.response?.length ? 1 : 0

    const refetchNoti = () => refetchNotiData()

    return (
        <HeaderNotiBox modal={modal}>
            <HeaderNotiNum number={number}> {notiData?.data?.response?.length ? notiData?.data?.response?.length : null}</HeaderNotiNum>
            <IoIosNotificationsOutline onClick={controlModal} size={40} />
            {modal ? <HeaderNotiModal refetchNoti={refetchNoti} userIdx={userIdx} notiData={notiData?.data?.response} modal={modal} controlModal={controlModal} /> : null}
        </HeaderNotiBox>
    )

}

export default HeaderNoti