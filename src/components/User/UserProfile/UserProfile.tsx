import { UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import { setEmail, setIdx, setNickname, setToken } from '../../../store/reducers/logintokenSlice'

import { CommonLogout } from '../../Common/CommonLogout'
import Image from "next/image"
import LoadingLogo from '../../Common/Loading/LoadingLogo'
import { RootState } from '../../../store/store'
import { toast } from 'react-toastify'
import useGetUserImage from '../../../apis/UserData/UserImage'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const UserProfile = (props) => {
    const { nickname } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const router = useRouter()
    const userImage = useGetUserImage(userIdx).data
    const isLoading = useGetUserImage(userIdx).isLoading
    const clickLogout = () => {
        if (CommonLogout()) {
            dispatch(setToken(''))
            dispatch(setNickname(''))
            dispatch(setEmail(''))
            dispatch(setIdx(0))
            router.replace('/')
            toast.success('로그아웃되었습니다!')
        }
    }
    return (
        <>
            {!isLoading ? <UserProfileBox>
                <UserProfileContainer>
                    <UserProfileInfo>
                        <Image src={userImage?.data.image_URL ? userImage?.data.image_URL : `/blank.png`} width={60} height={60} alt='유저 이미지' />
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

