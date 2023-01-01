import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { RootState } from "../../store/store"
import { SettingBox, SettingContainer, SettingDeleteUser } from "./Setting.style"
import { UserModifyNickname, UserProfileInfo } from "../User/UserProfile/UserProfile.style"
import Image from "next/image"
import { useState } from "react"
import { BsFillPencilFill } from "react-icons/bs"

const Setting = () => {
    const email = useSelector((state: RootState) => state.email.email)
    const nickname = useSelector((state: RootState) => state.nickname.nickname)
    const router = useRouter()
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)

    const deleteUser = async () => {
        if (confirm("정말 탈퇴하시겠습니까?")) {
            const response = await apiInstance.delete(`/users/delete`, {
                params: {
                    email: email, userIdx: userIdx
                }
            })
            toast.success('탈퇴 성공')
            router.replace('/')
            console.log('deleteResponse', response.data)
        }
    }
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
            // 닉네임 변경 시 리프레시 토큰 재발급
            await apiInstance.post(`/auth`, { email: email })
            // dispatch(setNickname(newNickname))
            if (modifyNickname.data.success) {
                setModify(!modify)
            }
            router.reload()
        } catch (e) {
            console.error(e.response)
        }
    }
    return (
        <SettingContainer>
            <SettingBox>
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
                <div>비밀번호 변경</div>
                <SettingDeleteUser>
                    <span>회원 탈퇴</span>
                    <span onClick={deleteUser}>회원 탈퇴</span>
                </SettingDeleteUser>
            </SettingBox>
        </SettingContainer>
    )
}

export default Setting