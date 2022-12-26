import { TitleDiv, ProgressBtn, SignupInfoContainer } from './Signupinfo.style'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import CurrentStatusThird from '../CurrentStatus/CurrentStatusThird'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'
import Router from 'next/router'
import SignupUserProfile from './SignupUserProfile'
import SignupUserInfo from './SignupUserInfo'

const Signupinfo = (props) => {
    const userData: UserDataState = useSelector((state: RootState) => state.user.user)
    const [select, setSelect] = useState(false)
    const socialEmail = useSelector((state: RootState) => state.socialEmail.socialEmail)

    const dispatch = useDispatch()
    // 소셜 로그인일 경우 이메일 입력받음
    useEffect(() => {
        if (socialEmail) {
            dispatch(setUser({ key: 'email', value: socialEmail }))
        }
    })

    // 유저 정보 입력
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
                console.error(e.response.data)
            }
        }
    }
    console.log(userData)
    return (
        <SignupInfoContainer>
            <CurrentStatusThird />
            <TitleDiv>회원 정보 입력</TitleDiv>

            {/* 닉네임, 이미지 입력 */}
            <SignupUserProfile info={info} handleChange={handleChange} dispatch={dispatch} />
            {/* 이름, 성별, 생일 입력 */}
            <SignupUserInfo dispatch={dispatch} info={info} select={select} setSelect={setSelect} handleChange={handleChange} />

            <ProgressBtn disabled={info.nickname === '' || info.name === '' || info.gender === '' || !select} onClick={handleClick}>
                완료
            </ProgressBtn>
        </SignupInfoContainer>
    )
}

export default Signupinfo
