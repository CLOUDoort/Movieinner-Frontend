import { useState } from 'react'
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
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <SignupContainerDiv>
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
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' value={email} placeholder='이메일을 입력해주세요' onChange={handleChange} />
                    <button>인증 메일 발송!</button>
                </EmailForm>
                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
