import { FormContainer, FormDiv, LoginContainerDiv, LoginDiv } from './Login.style'

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
                    <input type='email' name='email' placeholder='이메일을 입력하세요' />
                    <input type='password' name='pw' placeholder='비밀번호를 입력하세요' />
                    <input type='submit' />
                </FormContainer>
            </FormDiv>
            <div></div>
            <div></div>
        </LoginContainerDiv>
    )
}

export default Login
