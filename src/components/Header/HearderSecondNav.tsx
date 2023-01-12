import { useSelector } from 'react-redux'
import HeaderNoti from './HeaderNoti'
import HeaderSearch from './HeaderSearch'
import useGetUserImage from '../../apis/react-query/UserImage'
import { RootState } from '../../store/store'
import HeaderUser from './HeaderUser'
import { HearderSecondNavBox } from './HeaderSecondNav.style'


const HearderSecondNav = (props) => {
    const { loginToken } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const userImage = useGetUserImage(userIdx).data?.data

    return (
        <HearderSecondNavBox>
            <HeaderSearch />
            <HeaderNoti />
            <HeaderUser loginToken={loginToken} userImage={userImage} />
        </HearderSecondNavBox>
    )
}

export default HearderSecondNav
