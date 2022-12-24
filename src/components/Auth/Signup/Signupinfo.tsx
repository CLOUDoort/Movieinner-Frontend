import { TitleDiv, UserInfoDiv, ProgressBtn, UserProfile, UserInfo, UserSex, SignupInfo } from './Signupinfo.style'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../apis/setting'
import CurrentStatusThird from '../CurrentStatus/CurrentStatusThird'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import Router from 'next/router'
import { CheckText } from './Signup.style'
import UserBirth from './UserBirth'

const Signupinfo = () => {
    const userData: UserDataState = useSelector((state: RootState) => state.user.user)
    const [userBirth, setUserBirth] = useState(false)
    const dispatch = useDispatch()
    const socialEmail = useSelector((state: RootState) => state.socialEmail.socialEmail)
    useEffect(() => {
        if (socialEmail) {
            dispatch(setUser({ key: 'email', value: socialEmail }))
        }
    })
    const [info, setInfo] = useState({
        nickname: '',
        name: '',
        gender: '',
        image_URL: '',
    })

    // 닉네임 중복 여부
    const [checkNickname, setCheckNickname] = useState({
        click: false,
        valid: false,
    })
    useEffect(() => {
        const check = async () => {
            try {
                const response = await apiInstance.post('/users/check/nickname', { nickname: info.nickname })
                if (response.data.isNicknameExisted)
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
    }, [info.nickname])

    // profile_img
    const [image, setImage] = useState('/blank.png')
    const fileInput = useRef(null)
    const handleImage = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        // 이미지 화면에 띄우기
        const reader = new FileReader()
        reader.readAsDataURL(file) // 파일에서 불러오는 메서드 / 종료되는 시점에 readyState는 Done(2)가 되고 onload 시작
        reader.onload = (e: any) => {
            if (reader.readyState === 2) {
                // 파일 읽는 것이 성공했을 때, 2 반환 / 진행 중은 1, 실패는 0
                setImage(e.target.result)
            }
        }

        // 이미지 s3에 보내고 url 받기
        const formData = new FormData()
        formData.append('image', file)
        try {
            const imageRes = await apiInstance.post('/image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            const image_URL = imageRes.data.imageURL
            console.log(image_URL)
            dispatch(setUser({ key: 'image_URL', value: image_URL }))
            toast.success('success')
        } catch (e) {
            console.log(e)
            toast.error('error')
        }
        // await apiInstatnce.delete('/image', {params: {imageName: ''}}) 이미지 삭제
    }
    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInfo({ ...info, [name]: value })
        dispatch(setUser({ key: name, value: value }))
    }

    // 완료버튼, 이메일을 백엔드로 전송
    // 패스워드가 없으면 소셜회원가입(이메일 인증x), 패스워드가 있으면 일반 회원가입
    const handleClick = async () => {
        // 패스워드 입력이 없은 소셜 로그인
        if (userData.password === undefined) {
            try {
                await apiInstance.post('/users', userData)
                Router.replace('/welcome')
            } catch (e) {
                console.error(e.response)
            }
        }
        // 이메일, 패스워드 입력 받는 일반 로그인 + 인증 이메일
        else {
            try {
                await apiInstance.post('/verify', { email: userData.email, type: 'email' })
                dispatch(setSignup('SignupVerify'))
                await apiInstance.post('/users', userData)
            } catch (e) {
                toast.error(e.response.data)
                console.log(e)
            }
        }
    }
    console.log(userData)
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
                    <Image src={image} width={150} height={150} alt='프로필 이미지입니다.' />
                </a>
                <UserInfoDiv>
                    <input
                        type='text'
                        placeholder='닉네임을 입력하세요'
                        name='nickname'
                        value={info.nickname}
                        onChange={handleChange}
                        onFocus={() => {
                            setCheckNickname({ ...checkNickname, click: true })
                        }}
                    />
                    {checkNickname.click &&
                        info.nickname.length > 0 &&
                        (checkNickname.valid ? <CheckText check={false}>중복된 닉네임입니다.</CheckText> : <CheckText check={true}>사용 가능한 닉네임입니다.</CheckText>)}
                    <label htmlFor='input-file'>이미지 선택</label>
                    <input type='file' name='image_URL' id='input-file' accept='image/*' style={{ display: 'none' }} ref={fileInput} onChange={handleImage} />
                </UserInfoDiv>
            </UserProfile>
            <UserInfo>
                <div>이름</div>
                <input type='text' name='name' value={info.name} placeholder='이름을 입력하세요' onChange={handleChange} autoComplete='off' />
                <div>성별</div>
                <UserSex>
                    <label>
                        남성
                        <input type='radio' value='남성' name='gender' onChange={handleChange} checked={info.gender === '남성'} />
                    </label>
                    <label>
                        여성
                        <input type='radio' value='여성' name='gender' onChange={handleChange} checked={info.gender === '여성'} />
                    </label>
                </UserSex>
                <UserBirth setUserBirth={setUserBirth} />
            </UserInfo>
            <ProgressBtn disabled={info.nickname === '' || info.name === '' || info.gender === '' || userBirth} onClick={handleClick}>
                완료
            </ProgressBtn>
        </SignupInfo>
    )
}

export default Signupinfo
