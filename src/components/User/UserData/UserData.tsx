import Link from "next/link"
import { UserDataBox } from "./UserData.style"
import UserNotifications from "./UserNotifications"
import UserPostList from "./UserPostList"

const UserData = (props) => {
    const { nickname } = props
    return <>
        <UserDataBox>
            <UserPostList />
            <UserNotifications />
            <Link href={`/user/${nickname}/storage`}>저장소</Link>
        </UserDataBox>
    </>
}

export default UserData