import styled from '@emotion/styled'

export const LoginContainerDiv = styled.div`
    margin: 1.25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.875rem;
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
        margin-bottom: 0.625rem;
    }
    > input {
        font-size: 1.25rem;
        padding: 8px 16px;
        background-color: black;
        border: 1px solid gray;
        margin-bottom: 0.625rem;
        border-radius: 0.313rem;
        color: white;
    }
`

export const LoginSustainDiv = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
        align-items: baseline;
    }
`

export const LoginFailText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.625rem;
    line-height: 7px;
    text-align: center;
`

export const SubmitInput = styled.input`
    width: 200px;
    margin: auto;
    margin-top: 1.25rem;
    cursor: pointer;
    transition: opacity, 0.3;
    :hover {
        opacity: 0.4;
    }
`

export const LoginSecondDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
    > button {
        font-size: 18px;
        background-color: #2e2e2e;
        color: #b0aeae;
        border: 1px solid gray;
        margin-left: 0.625rem;
        border-radius: 0.313rem;
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
    margin-bottom: 1.875rem;
    > a > div {
        border: none;
        border-radius: 0.313rem;
        margin-bottom: 1.875rem;
        width: 350px;
        display: flex;
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
