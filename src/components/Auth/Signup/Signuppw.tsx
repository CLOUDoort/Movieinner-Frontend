import { CheckText, EmailDiv, ProgressBtn, SignupContainerDiv } from './Signup.style'
import { setSignup, setUser } from '../../../store/reducers/signupSlice'

import CurrentStatusSecond from '../CurrentStatus/CurrentStatusSecond'
import { useState } from 'react'

const Signuppw = (props) => {
    const { dispatch } = props
    const [password, setPassword] = useState({
        first: '',
        second: '',
    })
    const [touchedPw, setTouchedPw] = useState({
        first: false,
        second: false,
    })

    // 응답값 고정 usememo
    // 함수값 고정 usecallback
    const handleChange = (e) => {
        const { name, value } = e.target
        setPassword({ ...password, [name]: value })
    }
    const handleFocus = (e) => {
        const { name } = e.target
        setTouchedPw({
            ...touchedPw,
            [name]: true,
        })
    }
    const handleClick = (e) => {
        dispatch(setUser({ key: 'password', value: password.first }))
        dispatch(setSignup('Signupinfo'))
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <p>비밀번호 설정</p>
                <EmailDiv>
                    <label>비밀번호 입력</label>
                    <input
                        type='password'
                        name='first'
                        required
                        value={password.first}
                        onChange={handleChange}
                        placeholder='6자리 이상 입력해 주세요.'
                        onFocus={handleFocus}
                    />
                    {touchedPw.first === true &&
                        (password.first.length >= 6 ? <CheckText check={true}>알맞은 비밀번호 입니다.</CheckText> : <CheckText check={false}>아직 6자리가 아니에요.</CheckText>)}
                    <label>비밀번호 확인</label>
                    <input
                        type='password'
                        name='second'
                        required
                        value={password.second}
                        onChange={handleChange}
                        placeholder='다시 한번 입력해 주세요.'
                        onFocus={handleFocus}
                    />
                    {touchedPw.second === true &&
                        (password.first !== password.second ? <CheckText check={false}>두 비밀번호가 달라요&#33;</CheckText> : <CheckText check={true}>일치합니다.</CheckText>)}
                </EmailDiv>
                <ProgressBtn disabled={password.first === '' || password.first !== password.second} onClick={handleClick}>
                    다음
                </ProgressBtn>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
