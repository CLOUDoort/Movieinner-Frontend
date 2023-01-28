import { HeaderContainer } from './Header.style'
import HeaderFirstNav from './HeaderFirstNav/HeaderFirstNav'
import HeaderSecondNav from './HeaderSecondNav/HeaderSecondNav'
import { RootState } from '../../store/store'
import useGetUserImage from '../../react-query/UserData/UserImage'
import { useSelector } from 'react-redux'

const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const userImage = useGetUserImage(userIdx).data?.data


    return (
        <HeaderContainer>
            <HeaderFirstNav nickname={nickname} />
            <HeaderSecondNav loginToken={loginToken} nickname={nickname} userImage={userImage} />
        </HeaderContainer>
    )
}

export default Header
