import { UserModifyNickname, UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { setNickname, setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'

const UserProfile = (props) => {
    const { nickname, email } = props
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)
    const router = useRouter()
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
            console.log('nickname', newNickname)
            await apiInstance.post(`/auth/refresh`)
            router.push(router.asPath)
            if (modifyNickname.data.success) {
                setModify(!modify)
            }
        } catch (e) {
            console.error(e.response)
        }
    }
    const clickLogout = async () => {
        try {
            const response = await apiInstance.post('/users/logout')
            if (response.data.logout) {
                dispatch(setToken(''))
                dispatch(setNickname(''))
                dispatch(setSocialEmail(''))
                router.replace('/')
                toast.success('로그아웃되었습니다!')
            }
        } catch (e) {
            console.log(e.response)
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
                    <div onClick={clickLogout}>로그아웃</div>
                </UserProfileData>
            </UserProfileContainer>
        </UserProfileBox>
    )
}

export default UserProfile
function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}

