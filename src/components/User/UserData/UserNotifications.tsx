import { UserDataContainer, UserDataList } from "./UserData.style"

const UserNotifications = (props) => {
    return (
        <UserDataContainer>
            <div>알림</div>
            <UserDataList></UserDataList>
        </UserDataContainer>
    )
}

export default UserNotifications