import styled from '@emotion/styled'

export const ForgotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    > p {
        margin-bottom: 1.25rem;
        font-size: 30px;
    }
    > div {
        margin-top: 1.25rem;
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
        font-size: 1.25rem;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 30px;
        color: white;
    }
    > button {
        width: 300px;
        border: none;
        background-color: #f6f6f6;
        font-size: 0.938rem;
        padding: 10px;
        margin: auto;
    }
`
