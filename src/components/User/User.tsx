import { useRouter } from 'next/router'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query

    return (
        <UserBox>
            <UserProfile nickname={nickname} />
            <UserData nickname={nickname} />
        </UserBox>
    )
}

export default User
