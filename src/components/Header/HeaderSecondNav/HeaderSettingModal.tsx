import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../../../apis/setting"
import { setEmail, setIdx, setNickname, setToken } from "../../../store/reducers/logintokenSlice"
import { setSocialEmail } from "../../../store/reducers/socialSlice"
import { HeaderMenuModalContainer } from "../HeaderFirstNav/HeaderMenuModal.style"

import { HeaderSettingBox } from "./HeaderSecondNav.style"

const HeaderSettingModal = (props) => {
    const { clickSetting } = props
    const router = useRouter()
    const dispatch = useDispatch()
    const clickLogout = async () => {
        try {
            const response = await apiInstance.post('/users/logout')
            if (response.data.logout) {
                dispatch(setToken(''))
                dispatch(setNickname(''))
                dispatch(setSocialEmail(''))
                dispatch(setEmail(''))
                dispatch(setIdx(0))
                router.replace('/')
                toast.success('로그아웃되었습니다!')
            }
        } catch (e) {
            console.log(e.response)
        }
    }

    return (
        <HeaderMenuModalContainer onClick={clickSetting}>
            <HeaderSettingBox>
                <div>
                    <button onClick={() => router.push('/setting')}>설정</button>
                    <button onClick={clickLogout}>로그아웃</button>
                </div>
            </HeaderSettingBox>
        </HeaderMenuModalContainer>
    )
}

export default HeaderSettingModal