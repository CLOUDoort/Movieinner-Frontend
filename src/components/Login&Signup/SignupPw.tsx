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

const Signuppw = () => {
    return (
        <>
            <SignupContainerDiv>
                <div>비밀번호 설정</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>비밀번호</div>
                    <input type='pw' name='password' placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='pw' name='pwCheck' placeholder='비밀번호를 다시 입력해주세요' />
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
                        <StatusCircleDiv></StatusCircleDiv>
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

export default Signuppw
