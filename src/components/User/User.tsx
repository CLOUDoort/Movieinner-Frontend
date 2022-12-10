import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Loading from '../Loading'
import useGetUserLiked from '../react-query/UserLiked'
import useGetUserPosts from '../react-query/UserPosts'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const email = useSelector((state: RootState) => state.socialEmail.socialEmail)

    const userPosts = useGetUserPosts(nickname).data
    const userLikedMovie = useGetUserLiked('movie', nickname).data
    const userLikedTheme = useGetUserLiked('theme', nickname).data
    const movieLoading = useGetUserLiked('movie', nickname).isLoading
    const themeLoading = useGetUserLiked('theme', nickname).isLoading
    const postsLoading = useGetUserPosts(nickname).isLoading

    console.log('post', userPosts?.data)

    let number = 1;
    const userPostsList = userPosts?.data?.response.map((obj) => ({
        ...obj, number: number++
    }))

    return (
        <>
            {!movieLoading && !themeLoading && userPostsList ? <UserBox>
                <UserProfile nickname={nickname} email={email} />
                <UserData nickname={nickname} userPostList={userPostsList} userLikedMovie={userLikedMovie?.data?.liked} userLikedTheme={userLikedTheme?.data?.liked} />
            </UserBox> : <Loading />}
        </>
    )
}

export default User
