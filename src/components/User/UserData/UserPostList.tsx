import { UserDataContainer, UserDataList } from "./UserData.style"

const UserPostList = (props) => {
    const { userPostList } = props
    return (
        <UserDataContainer>
            <div>작성한 게시물</div>
            <UserDataList>
                {userPostList.map((obj) => (
                    <div>

                    </div>
                ))}
            </UserDataList>
        </UserDataContainer>
    )
}

export default UserPostList