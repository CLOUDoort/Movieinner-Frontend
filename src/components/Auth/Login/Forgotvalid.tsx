import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { EmailForm, ForgotContainer } from './Forgot.style'
import { GreenText, ProgressBtn, RedText } from '../Signup/Signup_pw.style'

const Forgotvalid = () => {
    const router = useRouter()
    const { email, key, type } = router.query
    const [password, setPassword] = useState({
        first: '',
        second: '',
    })
    // const [verification, setVeri]

    useEffect(() => {
        const checkEmailKey = async () => {
            const response = await apiInstance.get('/verify/password', { params: { key: key, type: type } })
            // if(response.data.isVerified)
        }
        checkEmailKey()
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setPassword({ ...password, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await apiInstance.put('/users/password', { email: email, newPassword: password.first })
            console.log('success')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <ForgotContainer>
                <p>비밀번호 재생성</p>
                <EmailForm onSubmit={handleSubmit}>
                    <div>새 비밀번호 입력</div>
                    <input type='password' name='first' value={password.first} placeholder='6자리 이상 입력해 주세요.' onChange={handleChange} />
                    {password.first.length >= 6 ? <GreenText>알맞은 비밀번호 입니다.</GreenText> : <RedText>아직 6자리가 아니에요.</RedText>}
                    <div>비밀번호 확인</div>
                    <input type='password' name='second' value={password.second} placeholder='다시 한번 입력해 주세요.' onChange={handleChange} />
                    {password.first !== password.second ? <RedText>두 비밀번호가 달라요&#33;</RedText> : <GreenText>일치합니다.</GreenText>}
                    <ProgressBtn disabled={password.first === '' || password.first !== password.second}>비밀번호 재설정</ProgressBtn>
                </EmailForm>
            </ForgotContainer>
        </>
    )
}

export default Forgotvalid
