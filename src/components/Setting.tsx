import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../apis/setting"
import { RootState } from "../store/store"
import { SettingContainer, SettingDeleteUser } from "./Setting.style"

const Setting = () => {
    const email = useSelector((state: RootState) => state.email.email)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const router = useRouter()

    const deleteUser = async () => {
        if (confirm("정말 탈퇴하시겠습니까?")) {
            const response = await apiInstance.delete(`/users/delete`, {
                params: {
                    email: email, nickname: nickname
                }
            })
            toast.success('탈퇴 성공')
            router.replace('/')
            console.log('deleteResponse', response.data)
        }
    }
    return (
        <SettingContainer>
            <SettingDeleteUser onClick={deleteUser}>회원탈퇴</SettingDeleteUser>
        </SettingContainer>
    )
}

export default Setting