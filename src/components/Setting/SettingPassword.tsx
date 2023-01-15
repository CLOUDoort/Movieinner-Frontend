import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { SettingPwInput, SettingPwModalBox, SettingPwModalContainer } from "./SettingPassword.style"

const SettingPassword = (props) => {
    const { userIdx, socialEmail } = props
    const [modal, setModal] = useState(false)
    const [pw, setPw] = useState({
        current: '',
        new: '',
        check: ''
    })
    useEffect(() => {
        const response = async () => {

        }
    }, [])
    const clickModal = async () => {
        try {
            const considerSocialLogin = await apiInstance.get(`/users/check/social/${userIdx}`)
            if (considerSocialLogin.data.IsSocial) toast.error('소셜 로그인은 비밀번호 변경이 없습니다!')
            else setModal(!modal)
        } catch (e) {
            console.error(e.response)
        }
    }
    const handleChange = (e) => {
        const { value, name } = e.target
        setPw({
            ...pw, [name]: value
        })
    }
    const clickModifyPw = async () => {
        if (pw.new == pw.check) {
            try {
                const response = await apiInstance.put(`/users/change/password`, { userIdx: userIdx, crtPassword: pw.current, newPassword: pw.new })
                if (response.data.success) {
                    toast.success('변경 성공!')
                    setModal(!modal)
                } else toast.error('변경 실패')
            } catch (e) {
                console.error(e.response)
            }
        } else toast.error("확인 비밀번호가 다릅니다!")
    }

    return (
        <div>
            <span>비밀번호 변경</span>
            <span onClick={clickModal}>비밀번호 변경</span>

            {modal && <SettingPwModalContainer onClick={clickModal}>
                <SettingPwModalBox onClick={(e) => e.stopPropagation()}>
                    <SettingPwInput>
                        <span>현재 비밀번호</span>
                        <input type="password" name="current" placeholder="현재 비밀번호 입력" autoComplete="off" onChange={handleChange} />
                    </SettingPwInput>
                    <SettingPwInput>
                        <span>새로운 비밀번호</span>
                        <input type="password" name="new" placeholder="새로운 비밀번호 입력" autoComplete="off" onChange={handleChange} />
                    </SettingPwInput>
                    <SettingPwInput>
                        <span>새로운 비밀번호 확인</span>
                        <input type="password" name="check" placeholder="새로운 비밀번호 확인 입력" autoComplete="off" onChange={handleChange} />
                    </SettingPwInput>
                    <button onClick={clickModifyPw}>비밀번호 변경</button>
                </SettingPwModalBox>
            </SettingPwModalContainer>}
        </div>
    )
}

export default SettingPassword