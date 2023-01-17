import styled from '@emotion/styled'

export const SignupContainerDiv = styled.div`
    margin: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        display: flex;
        font-size: 1.875rem;
        margin-bottom: 1.25rem;
    }
`
export const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    > label {
        margin-bottom: 0.625rem;
    }
    > input {
        width: 600px;
        font-size: 1.25rem;
        padding: 8px 1rem;
        background-color: black;
        border: 1px solid gray;
        margin-bottom: 0.625rem;
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
    padding: 0.625rem;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
`

export const SubmitInput = styled.input`
    width: 300px;
    border: none;
    background-color: gray;
    font-size: 0.938rem;
    padding: 0.625rem;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    cursor: pointer;
    :hover {
        background-color: white;
    }
`
type CheckTextType = {
    check: boolean
}

export const CheckText = styled.p<CheckTextType>`
    margin: 0.625rem 0;
    color: ${(props) => props.check ? '#08cf08' : 'red'};
`
