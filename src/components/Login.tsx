import { FormContainer, FormDiv, LoginContainerDiv, LoginDiv, SubmitInput } from './Login.style'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Login = () => {
    return (
        <LoginContainerDiv>
            <LoginDiv>
                <p>로그인</p>
            </LoginDiv>
            <FormDiv>
                <FormContainer onSubmit={handleSubmit}>
                    <div>EMAIL</div>
                    <input type='email' name='email' placeholder='이메일을 입력하세요' />
                    <div>PW</div>
                    <input type='password' name='pw' placeholder='비밀번호를 입력하세요' />
                    <SubmitInput type='submit' value='로그인' />
                </FormContainer>
            </FormDiv>
            <div>
                <input type='button' value='비밀번호 찾기' />
                <input type='button' value='회원가입' />
            </div>
            <div></div>
        </LoginContainerDiv>
    )
}

export default Login
