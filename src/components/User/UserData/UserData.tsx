import { UserDataBox } from "./UserData.style"
import UserLikedMovie from "./UserLikedMovie"
import UserLikedTheme from "./UserLikedTheme"
import UserNotifications from "./UserNotifications"
import UserPostList from "./UserPostList"
import UserWatched from "./UserWatched"

const UserData = (props) => {
    const { userPostList, userLikedTheme, userLikedMovie, userIdx } = props
    return (
        <UserDataBox>
            <div>
                <UserPostList userPostList={userPostList} />
                <UserNotifications userIdx={userIdx} />
            </div>
            <UserLikedMovie userLikedMovie={userLikedMovie} />
            <UserLikedTheme userLikedTheme={userLikedTheme} />
            <UserWatched />
        </UserDataBox>
    )
}

export default UserData