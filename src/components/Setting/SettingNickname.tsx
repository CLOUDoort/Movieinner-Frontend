import { UserModifyNickname, UserProfileInfo } from "../User/UserProfile/UserProfile.style"
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"
import { apiInstance } from "../../apis/setting"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import router from "next/router"
import { CheckText } from "../Auth/Signup/Signup.style"


const SettingNickname = (props) => {
    const { email, userIdx, nickname } = props
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)
    const [checkNickname, setCheckNickname] = useState({
        click: false,
        valid: false
    })

    useEffect(() => {
        const check = async () => {
            try {
                const response = await apiInstance.post('/users/check/nickname', { nickname: newNickname })
                if (!response.data.isNicknameExisted)
                    setCheckNickname({
                        ...checkNickname,
                        valid: true,
                    })
                else
                    setCheckNickname({
                        ...checkNickname,
                        valid: false,
                    })
            } catch (e) {
                setCheckNickname({
                    ...checkNickname,
                    valid: false,
                })
            }
        }
        check()
    }, [newNickname])

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
            console.log('success', modifyNickname.data.success)
            // 닉네임 변경 시 리프레시 토큰 재발급
            await apiInstance.post(`/auth`, { email: email })
            setModify(!modify)
            router.reload()
        } catch (e) {
            toast.error('영어 대소문, 한글, 숫자, 특수기호(-,_,.) 포함 2~12글자만 허용됩니다.')
        }
    }

    return (
        <div>
            <UserProfileInfo>
                <Image src={`/blank.png`} width={60} height={60} />
                {modify ?
                    <UserModifyNickname>
                        <input type='text' value={newNickname} onChange={handleChange} onFocus={() => setCheckNickname({ ...checkNickname, click: true })} autoComplete='off' />
                        <button onClick={clickNicknameModify}>수정</button>
                    </UserModifyNickname>
                    : <span>{nickname}</span>}
                {!modify ? <span onClick={clickNicknameModifyImg}><BsFillPencilFill size={20} /></span> : null}
                {modify ? <span onClick={clickNicknameModifyImg}>취소</span> : null}
            </UserProfileInfo>
            <div>
                {modify ?
                    <>
                        {checkNickname.click && newNickname != nickname && (checkNickname.valid ? <CheckText check={true}>사용 가능한 닉네임입니다.</CheckText> : <CheckText check={false}>중복된 닉네임입니다.</CheckText>)}
                    </> : null}
            </div>
        </div>
    )
}

export default SettingNickname