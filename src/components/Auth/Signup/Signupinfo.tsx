import { TitleDiv, ProgressBtn, UserInfoContainer, UserSex, SignupInfoContainer } from './Signupinfo.style'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../../apis/setting'
import CurrentStatusThird from '../CurrentStatus/CurrentStatusThird'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import Router from 'next/router'
import SignupUserBirth from './SignupUserBirth'
import SignupUserProfile from './SignupUserProfile'

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
        <SignupInfoContainer>
            <CurrentStatusThird />
            <TitleDiv>회원 정보 입력</TitleDiv>

            {/* 닉네임과 이미지 입력 */}
            <SignupUserProfile info={info} handleChange={handleChange} />

            <UserInfoContainer>
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
                <SignupUserBirth setUserBirth={setUserBirth} />
            </UserInfoContainer>
            <ProgressBtn disabled={info.nickname === '' || info.name === '' || info.gender === '' || userBirth} onClick={handleClick}>
                완료
            </ProgressBtn>
        </SignupInfoContainer>
    )
}

export default Signupinfo
