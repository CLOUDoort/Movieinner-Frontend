import { UserDataContainer, UserDataList } from "./UserData.style"

const UserPostList = (props) => {
    return (
        <UserDataContainer>
            <div>작성한 게시물</div>
            <UserDataList></UserDataList>
        </UserDataContainer>
    )
}

export default UserPostList