import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../apis/setting'
import {
    CircleBox,
    CircleDiv,
    CurrentStatusDiv,
    CurrentTextDiv,
    EmailForm,
    HorizontalRule,
    ProgressBtn,
    SignupContainerDiv,
    StatusCircleDiv,
} from './Signup.style'

const Signup = () => {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)
        await apiInstance
            .post('/verify', { email: email })
            .then(() => toast.success('post success'))
            .catch(() => {
                toast.error('post fail')
            })
    }
    return (
        <>
            <SignupContainerDiv>
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='이메일을 입력해주세요'
                        onChange={handleChange}
                    />
                    <input
                        className='submitBtn'
                        type='submit'
                        value='인증메일 발송'
                    />
                </EmailForm>
                <CurrentStatusDiv>
                    <CurrentTextDiv>
                        <div>이메일 인증</div>
                        <div>비밀번호 설정</div>
                        <div>유저 정보</div>
                    </CurrentTextDiv>
                    <HorizontalRule>
                        <hr />
                    </HorizontalRule>
                    <CircleBox>
                        <StatusCircleDiv></StatusCircleDiv>
                        <CircleDiv></CircleDiv>
                        <CircleDiv></CircleDiv>
                    </CircleBox>
                </CurrentStatusDiv>
                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
