import { UserModifyNickname, UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from '../UserProfile/UserProfile.style'
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { setNickname, setToken } from '../../../store/reducers/logintokenSlice'
import { setSocialEmail } from '../../../store/reducers/socialSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const UserProfile = (props) => {
    const { nickname, email } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const [modify, setModify] = useState(false)
    const [newNickname, setnewNickname] = useState(nickname)
    const router = useRouter()
    const dispatch = useDispatch()
    const clickModifyImg = () => {
        setModify(!modify)
        setnewNickname(nickname)
    }
    const handleChange = (e) => {
        setnewNickname(e.target.value)
    }
    const clickModify = async () => {
        try {
            // 결과값으로 중복값 확인
            const modifyNickname = await apiInstance.put(`/users/change/nickname`, { userIdx: userIdx, newNickname: newNickname })
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
                    <div onClick={() => router.push('/setting')}>개인정보 수정</div>
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

