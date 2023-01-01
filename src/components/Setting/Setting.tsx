import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { SettingBox, SettingContainer } from "./Setting.style"
import SettingDelete from "./SettingDelete"
import SettingNickname from "./SettingNickname"
import SettingPassword from "./SettingPassword"

const Setting = () => {
    const email = useSelector((state: RootState) => state.email.email)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const userIdx = useSelector((state: RootState) => state.idx.idx)




    return (
        <SettingContainer>
            <SettingBox>
                <SettingNickname email={email} userIdx={userIdx} nickname={nickname} />
                <SettingPassword userIdx={userIdx} />
                <SettingDelete email={email} userIdx={userIdx} />
            </SettingBox>
        </SettingContainer>
    )
}

export default Setting