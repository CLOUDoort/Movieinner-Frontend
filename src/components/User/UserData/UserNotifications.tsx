import { UserDataContainer, UserNotiDataList } from "./UserData.style"

const UserNotifications = (props) => {
    return (
        <UserDataContainer>
            <div>알림</div>
            <UserNotiDataList></UserNotiDataList>
        </UserDataContainer>
    )
}

export default UserNotifications