import { setEmail, setIdx, setNickname, setToken } from "../../../store/reducers/logintokenSlice"

import { CommonLogout } from "../../Common/CommonLogout"
import { HeaderMenuModalContainer } from "../HeaderFirstNav/HeaderMenuModal.style"
import { HeaderSettingBox } from "./HeaderUser.style"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const HeaderSettingModal = (props) => {
    const { clickSetting } = props
    const dispatch = useDispatch()
    const router = useRouter()
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