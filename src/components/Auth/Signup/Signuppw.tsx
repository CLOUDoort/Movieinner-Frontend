import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setComponent, setUser } from '../../../store/reducers/signupSlice'
import { EmailDiv, GreenText, ProgressBtn, RedText, SignupContainerDiv } from './Signup_pw.style'
import CurrentStatusSecond from '../CurrentStatus/CurrentStatusSecond'

const Signuppw = () => {
    const dispatch = useDispatch()
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
        e.preventDefault()
        dispatch(setComponent('Signupinfo'))
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
                        (password.first.length >= 6 ? <GreenText>알맞은 비밀번호 입니다.</GreenText> : <RedText>아직 6자리가 아니에요.</RedText>)}
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
                        (password.first !== password.second ? <RedText>두 비밀번호가 달라요&#33;</RedText> : <GreenText>일치합니다.</GreenText>)}
                </EmailDiv>
                <ProgressBtn disabled={password.first === '' || password.first !== password.second} onClick={handleClick}>
                    다음
                </ProgressBtn>
            </SignupContainerDiv>
        </>
    )
}

export default Signuppw
