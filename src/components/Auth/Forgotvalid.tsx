import { useState } from 'react'
import { EmailForm, ForgotContainer } from './Forgot.style'
import { GreenText, ProgressBtn, RedText } from './Signup/Signup_pw.style'

const Forgotvalid = () => {
    const [password, setPassword] = useState({
        first: '',
        second: '',
    })

    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setPassword({ ...password, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <ForgotContainer>
                <p>비밀번호 찾기</p>
                <EmailForm onSubmit={handleSubmit}>
                    <div>새 비밀번호 입력</div>
                    <input type='password' name='first' value={password.first} placeholder='6자리 이상 입력해 주세요.' onChange={handleChange} />
                    {password.first.length >= 6 ? <GreenText>알맞은 비밀번호 입니다.</GreenText> : <RedText>아직 6자리가 아니에요.</RedText>}
                    <div>비밀번호 확인</div>
                    <input type='password' name='second' value={password.second} placeholder='다시 한번 입력해 주세요.' onChange={handleChange} />
                    {password.first !== password.second ? <RedText>두 비밀번호가 달라요&#33;</RedText> : <GreenText>일치합니다.</GreenText>}
                </EmailForm>
                <ProgressBtn disabled={password.first === '' || password.first !== password.second}>비밀번호 재설정</ProgressBtn>
            </ForgotContainer>
        </>
    )
}

export default Forgotvalid
