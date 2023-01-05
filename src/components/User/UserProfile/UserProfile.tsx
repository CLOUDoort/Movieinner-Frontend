import { UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import Image from "next/image"
import { apiInstance } from '../../../apis/setting'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { setNickname, setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import useGetUserImage from '../../react-query/UserImage'
import LoadingLogo from '../../Common/Loading/LoadingLogo'

const UserProfile = (props) => {
    const { nickname, email } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const router = useRouter()
    const dispatch = useDispatch()
    const userImage = useGetUserImage(userIdx).data
    const isLoading = useGetUserImage(userIdx).isLoading


    const clickLogout = async () => {
        try {
            const response = await apiInstance.post('/users/logout')
            if (response.data.logout) {
                dispatch(setToken(''))
                dispatch(setNickname(''))
                dispatch(setSocialEmail(''))
                router.replace('/')
                toast.success('로그아웃되었습니다!')
            }
        } catch (e) {
            console.log(e.response)
        }
    }
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

