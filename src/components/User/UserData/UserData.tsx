import { UserDataBox } from "./UserData.style"
import UserLikedMovie from "./UserLikedMovie"
import UserLikedTheme from "./UserLikedTheme"
import UserPostList from "./UserPostList"
import UserWatched from "./UserWatched"

const UserData = (props) => {
    const { userPostList, userLikedTheme, userLikedMovie } = props
    return (
        <UserDataBox>
            <UserPostList userPostList={userPostList} />
            <UserLikedMovie userLikedMovie={userLikedMovie} />
            <UserLikedTheme userLikedTheme={userLikedTheme} />
            <UserWatched />
        </UserDataBox>
    )
}

export default UserData