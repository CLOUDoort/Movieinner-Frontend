import styled from '@emotion/styled'

export const SignupInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1.25rem;
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 1.25rem;
`

export const UserProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > a > span {
        border-radius: 50%;
        margin: 1.25rem;
        object-fit: scale-down;
    }
`

export const UserProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 1.25rem;
    > label {
        width: 200px;
        display: inline-block;
        padding: 8px;
        border: 1px solid gray;
        color: white;
        cursor: pointer;
        font-size: 1.25rem;
        border-radius: 3px;
    }
    > input {
        width: 400px;
        border: none;
        font-size: 1.25rem;
        padding: 10px;
        border: 1px solid gray;
        background-color: black;
        color: white;
    }
`

export const UserInfoContainer = styled.div`
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
        font-size: 1.25rem;
        padding: 8px 16px;
        background-color: black;
        border: 1px solid gray;
        color: white;
        margin-bottom: 1.25rem;
    }
`
export const UserSex = styled.div`
    display: flex;
    align-items: center;
    > label {
        border: 1px solid gray;
        color: white;
        background-color: black;
        padding: 8px 12px;
        border-radius: 0.313rem;
        font-size: 1.25rem;
        margin-bottom: 1.25rem;
        margin-right: 1.25rem;
    }
`
type BirthInfoType = {
    select: Boolean
}
export const BirthInfo = styled.div<BirthInfoType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    > button {
        font-size: 0.938rem;
        padding: 8px 16px;
        background-color: ${(props) => props.select ? 'green' : 'white'};
        border: none;
        border-radius: 0.313rem;
        margin-right: 10px;
    }
    > p {
        margin-left: 10px;
        font-size: 1.25rem;
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
