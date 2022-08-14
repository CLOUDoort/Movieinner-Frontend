import { TitleDiv, UserInfoDiv, ProgressBtn, UserProfile, UserInfo, UserSex, SignupInfo, BirthInfo } from './Signupinfo.style'
import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

import { toast } from 'react-toastify'
import { apiInstance } from '../../../apis/setting'
import CurrentStatusThird from '../CurrentStatus/CurrentStatusThird'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'
import { Calendar } from 'react-date-range'
import moment from 'moment'
import ko from 'date-fns/locale/ko'

const Signupinfo = () => {
    const [gender, setGender] = useState([])
    const [info, setInfo] = useState({
        nickname: '사람',
        name: '강준석',
        image_URL: 'abc',
        gender: '남자',
        birth: '',
    })
    const [showCalendar, setShowCalendar] = useState<boolean>(false) // 캘린더 토글
    const today = moment().toDate()
    const [date, setDate] = useState<Date>(today) // date 선언하고 기본갓을 오늘 날짜로 지정
    const onChangeDate = useCallback(
        (date: Date): void | undefined => {
            if (!date) {
                return
            }
            setDate(date)
            // const dateTimestamp = Date.parse(String(date))
            setShowCalendar(false)
            setInfo({ ...info, birth: date.toLocaleDateString().replaceAll(' ', '') })
        },
        [date]
    )
    const handleCalendar = () => {
        setShowCalendar(true)
    }

    const signupComponent = useSelector((state: RootState) => {
        state.component.component
    })
    const userData = useSelector((state: RootState) => state.user.user)
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

    const handleClick = async () => {
        dispatch(setUser({ key: 'nickname', value: info.nickname }))
        dispatch(setUser({ key: 'name', value: info.name }))
        dispatch(setUser({ key: 'birth', value: info.birth }))
        dispatch(setUser({ key: 'image_URL', value: info.image_URL }))
        dispatch(setUser({ key: 'gender', value: info.gender }))
        console.log(userData)
        await apiInstance.post('/users', userData)
        dispatch(setComponent('SignupVerify'))
    } // form data 서버전송
    const handleChange = (e) => {
        e.preventDefault()
    }

    return (
        <SignupInfo>
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
                    <input type='text' placeholder='닉네임을 입력하세요' name='profileName' onChange={handleChange} />
                    <label htmlFor='input-file'>이미지 선택</label>
                    <input type='file' name='profile_img' id='input-file' accept='image/*' style={{ display: 'none' }} ref={fileInput} onChange={handleImage} />
                </UserInfoDiv>
            </UserProfile>
            <UserInfo>
                <div>이름</div>
                <input type='text' name='name' placeholder='이름을 입력하세요' onChange={handleChange} />
                <div>성별</div>
                <UserSex>
                    <label>
                        남자
                        <input type='radio' value='남자' onChange={handleChange} />
                    </label>
                    <label>
                        여자
                        <input type='radio' value='여자' onChange={handleChange} />
                    </label>
                </UserSex>
                <div>생년월일</div>
                <BirthInfo>
                    <button onClick={handleCalendar}>생년월일 선택</button>
                    {showCalendar && (
                        <Calendar locale={ko} months={1} maxDate={new Date()} date={date} onChange={onChangeDate} dateDisplayFormat={'yyyy.mm.dd'} />
                    )}
                    <span>내 생일: </span>
                    <p>{date.toLocaleDateString()}</p>
                </BirthInfo>
            </UserInfo>
            <ProgressBtn onClick={handleClick}>완료</ProgressBtn>
        </SignupInfo>
    )
}

export default Signupinfo
