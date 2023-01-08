import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { RootState } from "../../store/store"
import useGetNotiData from "../react-query/NotificationData"

const HeaderNoti = () => {
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const commentNotiData = useGetNotiData(userIdx, "comment").data
    const replytNotiData = useGetNotiData(userIdx, "reply").data
    const deleteNumber = commentNotiData?.data?.response[0]?.idx
    const deleteNoti = async () => {
        try {
            const response = await apiInstance.delete(`/community/notification`, {
                data: {
                    userIdx: userIdx,
                    notIdx: deleteNumber
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

        <div onClick={deleteNoti}>삭제</div>)

}

export default HeaderNoti