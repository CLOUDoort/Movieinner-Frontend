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

const handleSubmit = (e) => {
    e.preventDefault()
}

const Signup = () => {
    return (
        <>
            <SignupContainerDiv>
                <div>회원가입</div>
                <EmailForm onSubmit={handleSubmit}>
                    <input type='email' name='email' placeholder='이메일을 입력해주세요' />
                    <button>인증 메일 발송!</button>
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
