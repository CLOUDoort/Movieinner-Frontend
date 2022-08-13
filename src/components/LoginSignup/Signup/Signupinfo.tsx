import { SignupInfoForm, TitleDiv, UserInfoDiv, ProgressBtn, UserProfile, UserInfo, UserSex } from './Signupinfo.style'
import { useRef, useState } from 'react'
import Image from 'next/image'

import { toast } from 'react-toastify'
import { apiInstance } from '../../../apis/setting'
import CurrentStatusThird from '../CurrentStatus/CurrentStatusThird'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'

const Signupinfo = () => {
    const [info, setInfo] = useState({
        profileName: '',
        sex: '',
        birth: '',
    })

    const signupComponent = useSelector((state: RootState) => {
        state.component.component
    })
    const dispatch = useDispatch()

    const [image, setImage] = useState('/blank.png')
    const fileInput = useRef(null)

    const handleImage = async (e: any) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
        } else {
            setImage(image)
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(file) // 파일에서 불러오는 메서드 / 종료되는 시점에 readyState는 Done(2)가 되고 onload 시작
        reader.onload = (e: any) => {
            if (reader.readyState === 2) {
                // 파일 읽는 것이 성공했을 때, 2 반환 / 진행 중은 1, 실패는 0
                setImage(e.target.result)
            }
        }
        const formData = new FormData()
        formData.append('image', file)
        try {
            const imageRes = await apiInstance.post('/profile_image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            toast.success('success')
        } catch (e) {
            console.log(e)
            toast.error('error')
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setComponent('SignupVerify'))
        dispatch(setUser({}))
    }

    return (
        <SignupInfoForm>
            <CurrentStatusThird />
            <TitleDiv>회원 정보 입력</TitleDiv>
            <UserProfile>
                <a
                    href='#'
                    onClick={() => {
                        fileInput.current.click()
                    }}
                >
                    <Image src={image} width={150} height={150} alt='이미지입니다.' />
                </a>
                <UserInfoDiv>
                    <input type='text' placeholder='닉네임을 입력하세요' />
                    <label htmlFor='input-file'>이미지 선택</label>
                    <input type='file' name='profile_img' id='input-file' accept='image/*' style={{ display: 'none' }} ref={fileInput} onChange={handleImage} />
                </UserInfoDiv>
            </UserProfile>
            <UserInfo>
                <div>이름</div>
                <input type='text' name='name' placeholder='이름을 입력하세요' />
                <div>성별</div>
                <UserSex>
                    <button>남자</button>
                    <button>여자</button>
                </UserSex>
                <div>생년월일</div>
                <input type='date' name='birth' placeholder='생년월일을 입력하세요' />
            </UserInfo>
            <ProgressBtn onClick={handleClick}>완료</ProgressBtn>
        </SignupInfoForm>
    )
}

export default Signupinfo
