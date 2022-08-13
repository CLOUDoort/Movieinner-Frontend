import styled from '@emotion/styled'

export const SignupContainerDiv = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
`
export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
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
        margin-bottom: 10px;
        color: white;
        cursor: pointer;
        :hover {
            background-color: #161616;
        }
    }
`

export const SubmitInput = styled.input`
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
export const SuccessText = styled.p`
    color: #2ecf14;
    margin-top: 20px;
    font-size: 20px;
`

export const FailText = styled.p`
    color: red;
    margin-top: 20px;
    font-size: 20px;
`
