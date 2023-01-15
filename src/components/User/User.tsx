import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import LoadingLogo from '../Common/Loading/LoadingLogo'
import useGetUserPosts from '../../apis/react-query/UserData/UserPosts'
import { UserBox } from './User.style'
import UserData from './UserData/UserData'
import UserProfile from './UserProfile/UserProfile'
import useGetUserLiked from '../../apis/react-query/UserData/UserLiked'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const email = useSelector((state: RootState) => state.email.email)

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
