import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'
import { EmailDiv, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'
import CurrentStatusSecond from '../CurrentStatus/CurrentStatusSecond'

const Signuppw = () => {
    const dispatch = useDispatch()
    const [password, setPassword] = useState({
        first: '',
        second: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPassword({ ...password, [name]: value })
    }
    const handleClick = (e) => {
        dispatch(setUser({ key: 'password', value: password.first }))
        e.preventDefault()
        dispatch(setComponent('Signupinfo'))
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <p>비밀번호 설정</p>
                <EmailDiv>
                    <div>비밀번호</div>
                    <input type='password' name='first' required value={password.first} onChange={handleChange} placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='password' name='second' required value={password.second} onChange={handleChange} placeholder='비밀번호를 다시 입력해주세요' />
                </EmailDiv>
                <ProgressBtn disabled={password.first === '' || password.first !== password.second} onClick={handleClick}>
                    다음
                </ProgressBtn>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
