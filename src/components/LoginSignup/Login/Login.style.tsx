import styled from '@emotion/styled'

export const LoginContainerDiv = styled.div`
    margin: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    height: 100px;
`
export const FormDiv = styled.div`
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    > div {
        text-align: start;
        margin-bottom: 10px;
    }
    > input {
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
    }
`

export const LoginSustainDiv = styled.div`
    display: flex;
    align-items: baseline;
`

export const SubmitInput = styled.input`
    width: 200px;
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
`

export const LoginSecondDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
    > button {
        font-size: 18px;
        background-color: #2e2e2e;
        color: #b0aeae;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
        width: 213px;
        cursor: pointer;
    }
`

export const SocialLoginServiceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    margin-bottom: 30px;
    > div {
        cursor: pointer;
        width: 600px;
        border: none;
        border-radius: 5px;
        padding: 16px 32px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > div > input {
        border: none;
        font-size: 20px;
    }
    > input:hover {
        text-decoration-line: underline;
    }
`

export const GoogleLogin = styled.div`
    background-color: white;
    > input {
        background-color: white;
    }
`
export const NaverLogin = styled.div`
    background-color: #07c907;
    > input {
        color: white;
        background-color: #07c907;
    }
`
export const KakaoLogin = styled.div`
    background-color: #fceb02;
    > input {
        background-color: #fceb02;
        color: black;
    }
`
