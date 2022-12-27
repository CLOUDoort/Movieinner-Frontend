import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import LoadingLogo from '../Common/Loading/LoadingLogo'
import useGetUserLiked from '../react-query/UserLiked'
import useGetUserPosts from '../react-query/UserPosts'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const email = useSelector((state: RootState) => state.email.email)

    const userPosts = useGetUserPosts(nickname).data
    const userLikedMovie = useGetUserLiked('movie', nickname).data
    const userLikedTheme = useGetUserLiked('theme', nickname).data
    const movieLoading = useGetUserLiked('movie', nickname).isLoading
    const themeLoading = useGetUserLiked('theme', nickname).isLoading

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
            </UserBox> : <LoadingLogo />}
        </>
    )
}

export default User
