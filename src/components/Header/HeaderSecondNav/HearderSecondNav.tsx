import HeaderNoti from './HeaderNoti'
import HeaderSearch from './HeaderSearch'
import HeaderUser from './HeaderUser'
import { HearderSecondNavBox } from './HeaderSecondNav.style'

const HearderSecondNav = (props) => {
    const { loginToken, nickname, userImage } = props

    return (
        <HearderSecondNavBox>
            <HeaderSearch />
            <HeaderNoti loginToken={loginToken} />
            <HeaderUser loginToken={loginToken} userImage={userImage} nickname={nickname} />
        </HearderSecondNavBox>
    )
}

export default HearderSecondNav
