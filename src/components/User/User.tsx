import { useRouter } from 'next/router'
import useGetUserPosts from '../react-query/UserPosts'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const userPosts = useGetUserPosts(nickname).data
    console.log('post', userPosts)

    return (
        <UserBox>
            <UserProfile nickname={nickname} />
            <UserData nickname={nickname} userPostList={userPosts?.data?.response} />
        </UserBox>
    )
}

export default User
