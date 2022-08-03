import styled from '@emotion/styled'

export const SignupContainerDiv = styled.div`
    height: 600px;
    margin: 20px;
    text-align: center;
    box-shadow: 1px 2px 6px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        height: 70px;
    }
`
export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
    }
    > button {
        width: 600px;
        margin-top: 20px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
    }
`

export const CurrentStatusDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`
