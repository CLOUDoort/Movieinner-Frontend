import { useSelector } from 'react-redux'
import useGetUserImage from '../../apis/react-query/UserImage'
import { RootState } from '../../store/store'
import { HeaderContainer } from './Header.style'
import HeaderFirstNav from './HeaderFirstNav/HeaderFirstNav'
import HearderSecondNav from './HeaderSecondNav/HearderSecondNav'


const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const userImage = useGetUserImage(userIdx).data?.data


    return (
        <HeaderContainer>
            <HeaderFirstNav nickname={nickname} />
            <HearderSecondNav loginToken={loginToken} nickname={nickname} userImage={userImage} />
        </HeaderContainer>
    )
}

export default Header
