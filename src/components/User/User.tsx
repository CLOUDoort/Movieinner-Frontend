import { useRouter } from 'next/router'
import useGetUserLiked from '../react-query/UserLiked'
import useGetUserPosts from '../react-query/UserPosts'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const userPosts = useGetUserPosts(nickname).data
    const userLikedMovie = useGetUserLiked('movie', nickname).data
    const userLikedTheme = useGetUserLiked('theme', nickname).data


    console.log('movie', userLikedMovie?.data?.liked)
    console.log('theme', userLikedTheme?.data?.liked)

    return (
        <UserBox>
            <UserProfile nickname={nickname} />
            <UserData nickname={nickname} userPostList={userPosts?.data?.response} userLikedMovie={userLikedMovie?.data?.liked} userLikedTheme={userLikedTheme?.data?.liked} />
        </UserBox>
    )
}

export default User
