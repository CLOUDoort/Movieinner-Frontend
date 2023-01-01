import router from "next/router"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { SettingDeleteUser } from "./Setting.style"

const SettingDelete = (props) => {
    const { email, userIdx } = props

    const deleteUser = async () => {
        if (confirm("정말 탈퇴하시겠습니까?")) {
            const response = await apiInstance.delete(`/users/delete`, {
                params: {
                    email: email, userIdx: userIdx
                }
            })
            toast.success('탈퇴 성공')
            router.replace('/')
        }
    }

    return (
        <SettingDeleteUser>
            <span>회원 탈퇴</span>
            <span onClick={deleteUser}>회원 탈퇴</span>
        </SettingDeleteUser>
    )
}

export default SettingDelete