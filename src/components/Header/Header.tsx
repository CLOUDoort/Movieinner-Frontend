import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { HeaderContainer } from './Header.style'
import HeaderFirstNav from './HeaderFirstNav/HeaderFirstNav'
import HearderSecondNav from './HeaderSecondNav/HearderSecondNav'


const Header = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)

    return (
        <HeaderContainer>
            <HeaderFirstNav nickname={nickname} />
            <HearderSecondNav loginToken={loginToken} />
        </HeaderContainer>
    )
}

export default Header
