import { useRouter } from "next/router"
import { HeaderMenuModalContainer } from "../HeaderFirstNav/HeaderMenuModal.style"
import { CommonLogout } from "../../Common/CommonLogout"

import { HeaderSettingBox } from "./HeaderSecondNav.style"

const HeaderSettingModal = (props) => {
    const { clickSetting } = props
    const router = useRouter()
    const clickLogout = () => CommonLogout()
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