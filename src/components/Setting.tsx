import { useSelector } from "react-redux"
import { apiInstance } from "../apis/setting"
import { RootState } from "../store/store"
import { SettingContainer, SettingDeleteUser } from "./Setting.style"

const Setting = () => {
    const email = useSelector((state: RootState) => state.email.email)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)

    const deleteUser = async () => {
        const response = await apiInstance.delete(`/users/delete`, {
            params: {
                email: email, nickname: nickname
            }
        })
        console.log('deleteResponse', response.data)
    }
    return (
        <SettingContainer>
            <SettingDeleteUser onClick={deleteUser}>회원탈퇴</SettingDeleteUser>
        </SettingContainer>
    )
}

export default Setting