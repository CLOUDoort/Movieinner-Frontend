import styled from '@emotion/styled'

export const SignupInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 20px;
`

export const UserProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > a > span {
        z-index: -1;
        border-radius: 50%;
        margin: 20px;
    }
`

export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 20px;
    > label {
        width: 200px;
        display: inline-block;
        padding: 8px;
        background-color: #3b3939;
        color: white;
        cursor: pointer;
        font-size: 20px;
    }
    > input {
        width: 400px;
        border: none;
        font-size: 20px;
        padding: 10px;
        background-color: #3b3939;
        margin-bottom: 20px;
        color: white;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-top: 50px;
    > div {
        text-align: start;
        margin-bottom: 10px;
    }
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        color: white;
        margin-bottom: 20px;
    }
`
export const UserSex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > button {
        border: none;
        color: white;
        background-color: black;
        padding: 8px 12px;
        font-size: 20px;
        width: 250px;
        margin-bottom: 20px;
    }
`

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    background-color: gray;
    font-size: 15px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    :hover {
        background-color: white;
    }
`
