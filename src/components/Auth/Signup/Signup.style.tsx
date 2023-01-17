import styled from '@emotion/styled'

export const SignupContainerDiv = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        display: flex;
        font-size: 30px;
        margin-bottom: 20px;
    }
`
export const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    > label {
        margin-bottom: 10px;
    }
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: 1px solid gray;
        margin-bottom: 10px;
        color: white;
        :hover {
            background-color: #161616;
        }
    }
`

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    background-color: #f6f6f6;
    font-size: 0.938rem;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const SubmitInput = styled.input`
    width: 300px;
    border: none;
    background-color: gray;
    font-size: 0.938rem;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    :hover {
        background-color: white;
    }
`
type CheckTextType = {
    check: boolean
}

export const CheckText = styled.p<CheckTextType>`
    margin: 10px 0;
    color: ${(props) => props.check ? '#08cf08' : 'red'};
`
