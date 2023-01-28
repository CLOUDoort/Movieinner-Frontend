import { SettingBox, SettingContainer } from "./Setting.style"

import { RootState } from "../../store/store"
import SettingDelete from "./SettingDelete"
import SettingPassword from "./SettingPassword"
import SettingProfile from "./SettingProfile"
import useGetUserImage from "../../react-query/UserData/UserImage"
import { useSelector } from "react-redux"

const Setting = () => {
    const email = useSelector((state: RootState) => state.email.email)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const socialEmail = useSelector((state: RootState) => state.socialEmail.socialEmail)
    const userImage = useGetUserImage(userIdx).data
    const userImageRefetch = useGetUserImage(userIdx).refetch
    const imageLoading = useGetUserImage(userIdx).isLoading
    const refetchImage = () => userImageRefetch()

    return (
        <SettingContainer>
            <SettingBox>
                <SettingProfile refetchImage={refetchImage} userImage={userImage?.data.image_URL} loading={imageLoading} email={email} userIdx={userIdx} nickname={nickname} />
                <SettingPassword socialEmail={socialEmail} userIdx={userIdx} />
                <SettingDelete email={email} userIdx={userIdx} />
            </SettingBox>
        </SettingContainer>
    )
}

export default Setting