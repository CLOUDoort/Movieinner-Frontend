import { UserModifyNickname, UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'

const UserProfile = (props) => {
    const { nickname, email } = props
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)
    const clickModifyImg = () => {
        setModify(!modify)
        setnewNickname(nickname)
    }
    const handleChange = (e) => {
        setnewNickname(e.target.value)
    }
    const clickModify = async () => {
        try {
            const modifyNickname = await apiInstance.put(`/users/change/nickname`, { nickname: nickname, email: email, newNickname: newNickname })
            console.log(modifyNickname.data.success)
            if (modifyNickname.data.success) {
                setModify(!modify)
            }
        } catch (e) {
            console.error(e.response)
        }
    }
    return (
        <UserProfileBox>
            <UserProfileContainer>
                <UserProfileInfo>
                    <Image src={`/blank.png`} width={60} height={60} />
                    {modify ?
                        <UserModifyNickname><input type='text' value={newNickname} onChange={handleChange} />
                            <button onClick={clickModify}>수정</button></UserModifyNickname>
                        : <span>{nickname}</span>}
                    {!modify ? <span onClick={clickModifyImg}><BsFillPencilFill size={20} /></span> : null}
                    {modify ? <span onClick={clickModifyImg}>취소</span> : null}
                </UserProfileInfo>
                <UserProfileData>
                    <div>개인정보 수정</div>
                    <div>로그아웃</div>
                </UserProfileData>
            </UserProfileContainer>
        </UserProfileBox>
    )
}

export default UserProfile
