import useGetNotiData from "../../react-query/NotificationData"
import { UserDataContainer, UserDataList } from "./UserData.style"

const UserNotifications = (props) => {
    const { userIdx } = props
    const { data } = useGetNotiData(userIdx, "comment")
    console.log('noti', data?.data)

    return (
        <UserDataContainer>
            <div>알림</div>
            <UserDataList>

            </UserDataList>
        </UserDataContainer>
    )
}

export default UserNotifications