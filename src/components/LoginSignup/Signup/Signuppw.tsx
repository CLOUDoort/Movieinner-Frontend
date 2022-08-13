import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'
import { RootState } from '../../../store/store'
import CurrentStatusSecond from '../CurrentStatus/CurrentStatusSecond'

import { EmailDiv, ProgressBtn, SignupContainerDiv, SubmitInput } from './Signup_pw.style'

const Signuppw = () => {
    const signupComponent = useSelector((state: RootState) => {
        state.component.component
    })
    const [isValid, setIsvalid] = useState(false)
    const userData = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setPassword(value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setUser({ key: 'password', value: password }))
        dispatch(setComponent('Signupinfo'))
        console.log(userData)
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <p>비밀번호 설정</p>
                <EmailDiv>
                    <div>비밀번호</div>
                    <input type='password' name='password' onChange={handleChange} placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='password' name='pwCheck' onChange={handleChange} placeholder='비밀번호를 다시 입력해주세요' />
                </EmailDiv>
                <ProgressBtn onClick={handleClick}>다음</ProgressBtn>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
