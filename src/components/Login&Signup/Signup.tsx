import { CurrentStatusDiv, EmailForm, SignupContainerDiv } from './Signup.style'

const Signup = () => {
    return (
        <>
            <SignupContainerDiv>
                <div>회원가입</div>
                <EmailForm>
                    <input type='email' name='email' placeholder='이메일을 입력해주세요' />
                    <button>인증 메일 발송!</button>
                </EmailForm>
                <CurrentStatusDiv>
                    <div></div>
                </CurrentStatusDiv>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
