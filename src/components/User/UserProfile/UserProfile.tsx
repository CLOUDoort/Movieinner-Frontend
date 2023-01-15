import { UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import Image from "next/image"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import LoadingLogo from '../../Common/Loading/LoadingLogo'
import useGetUserImage from '../../../apis/UserData/UserImage'
import { CommonLogout } from '../../Common/CommonLogout'

const UserProfile = (props) => {
    const { nickname } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const router = useRouter()
    const userImage = useGetUserImage(userIdx).data
    const isLoading = useGetUserImage(userIdx).isLoading
    const clickLogout = async () => CommonLogout()
    return (
        <>
            {!isLoading ? <UserProfileBox>
                <UserProfileContainer>
                    <UserProfileInfo>
                        <Image src={userImage?.data.image_URL ? userImage?.data.image_URL : `/blank.png`} width={60} height={60} />
                        <div>{nickname}</div>
                    </UserProfileInfo>
                    <UserProfileData>
                        <div onClick={() => router.push('/setting')}>개인정보 수정</div>
                        <div onClick={clickLogout}>로그아웃</div>
                    </UserProfileData>
                </UserProfileContainer>
            </UserProfileBox> : <LoadingLogo />}
        </>

    )
}

export default UserProfile
function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}

