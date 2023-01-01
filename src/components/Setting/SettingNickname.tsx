import { UserModifyNickname, UserProfileInfo } from "../User/UserProfile/UserProfile.style"
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"
import { apiInstance } from "../../apis/setting"
import { toast } from "react-toastify"
import { useState } from "react"
import router from "next/router"


const SettingNickname = (props) => {
    const { email, userIdx, nickname } = props
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)

    const clickNicknameModifyImg = () => {
        setModify(!modify)
        setnewNickname(nickname)
    }
    const handleChange = (e) => {
        setnewNickname(e.target.value)
    }
    const clickNicknameModify = async () => {
        try {
            // 결과값으로 중복값 확인
            const modifyNickname = await apiInstance.put(`/users/change/nickname`, { userIdx: userIdx, newNickname: newNickname })
            if (!modifyNickname.data.success) toast.error('영어 대소문, 한글, 숫자, 특수기호(-,_,.) 포함 2~12글자만 허용됩니다.')
            else {
                // 닉네임 변경 시 리프레시 토큰 재발급
                await apiInstance.post(`/auth`, { email: email })
                setModify(!modify)
                router.reload()
            }
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <div>
            <UserProfileInfo>
                <Image src={`/blank.png`} width={60} height={60} />
                {modify ?
                    <UserModifyNickname><input type='text' value={newNickname} onChange={handleChange} />
                        <button onClick={clickNicknameModify}>수정</button></UserModifyNickname>
                    : <span>{nickname}</span>}
                {!modify ? <span onClick={clickNicknameModifyImg}><BsFillPencilFill size={20} /></span> : null}
                {modify ? <span onClick={clickNicknameModifyImg}>취소</span> : null}
            </UserProfileInfo>
        </div>
    )
}

export default SettingNickname