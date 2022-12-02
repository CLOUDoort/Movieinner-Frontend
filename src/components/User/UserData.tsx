import Link from "next/link"
import StorageWatched from "./Storage/StorageWatched"
import { UserDataBox } from "./User.style"

const UserData = (props) => {
    const { nickname } = props
    return <>
        <UserDataBox>
            <Link href={`/user/${nickname}/storage`}>저장소</Link>
            <StorageWatched />
        </UserDataBox>
    </>
}

export default UserData