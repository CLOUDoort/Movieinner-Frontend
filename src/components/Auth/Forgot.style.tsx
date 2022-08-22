import styled from '@emotion/styled'

export const ForgotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    > p {
        margin-bottom: 20px;
        font-size: 30px;
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
    }
    > button {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        color: white;
    }
`
