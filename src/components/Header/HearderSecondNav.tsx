import { useSelector } from 'react-redux'
import { HearderNaveSecondBox } from './Header.style'
import HeaderNoti from './HeaderNoti'
import HeaderSearch from './HeaderSearch'
import useGetUserImage from '../react-query/UserImage'
import { RootState } from '../../store/store'
import HeaderUser from './HeaderUser'


const HearderSecondNav = (props) => {
    const { loginToken } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const userImage = useGetUserImage(userIdx).data?.data

    return (
        <HearderNaveSecondBox>
            <HeaderSearch />
            <HeaderNoti />
            <HeaderUser loginToken={loginToken} userImage={userImage} />
        </HearderNaveSecondBox>
    )
}

export default HearderSecondNav
