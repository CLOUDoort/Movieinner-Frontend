import LoadingLogo from '../Common/Loading/LoadingLogo'
import { RootState } from '../../store/store'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'
import useGetUserLiked from '../../react-query/UserData/UserLiked'
import useGetUserPosts from '../../react-query/UserData/UserPosts'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const userIdx = useSelector((state: RootState) => state.idx.idx)

    const userPosts = useGetUserPosts(userIdx).data
    const userLikedMovie = useGetUserLiked('movie', userIdx).data
    const userLikedTheme = useGetUserLiked('theme', userIdx).data
    const movieLoading = useGetUserLiked('movie', userIdx).isLoading
    const themeLoading = useGetUserLiked('theme', userIdx).isLoading

    let number = 1;
    const userPostsList = userPosts?.data?.response.map((obj) => ({
        ...obj, number: number++
    }))

    return (
        <>
            {!movieLoading && !themeLoading && userPostsList ? <UserBox>
                <UserProfile nickname={nickname} />
                <UserData userPostList={userPostsList} userLikedMovie={userLikedMovie?.data?.liked} userLikedTheme={userLikedTheme?.data?.liked} userIdx={userIdx} />
            </UserBox> : <LoadingLogo />}
        </>
    )
}

export default User
