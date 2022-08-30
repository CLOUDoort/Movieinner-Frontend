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
    margin-top: 50px;
    margin-bottom: 30px;
    > a > div {
        border: none;
        border-radius: 5px;
        margin-bottom: 30px;
        width: 350px;
        display: flex;
        cursor: pointer;
    }
    > a > img {
        cursor: pointer;
    }
`

export const GoogleLogin = styled.div`
    background-color: #4285f4;
    > label {
        cursor: pointer;
        color: white;
        display: flex;
        align-items: center;
        border: none;
        font-weight: 500;
        margin-left: 70px;
        font-size: 18px;
        padding: 8px 16px;
    }
`
export const NaverLogin = styled.div`
    background-color: white;
    > label {
        cursor: pointer;
        color: black;
        display: flex;
        align-items: center;
        border: none;
        font-weight: 500;
        margin-left: 92px;
        font-size: 18px;
    }
`
