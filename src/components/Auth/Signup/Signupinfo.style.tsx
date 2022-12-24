import styled from '@emotion/styled'

export const SignupInfoContainer = styled.div`
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

export const UserProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > a > span {
        border-radius: 50%;
        margin: 20px;
        object-fit: scale-down;
    }
`

export const UserProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 20px;
    > label {
        width: 200px;
        display: inline-block;
        padding: 8px;
        border: 1px solid gray;
        color: white;
        cursor: pointer;
        font-size: 20px;
        border-radius: 3px;
        border-top: none;
    }
    > input {
        width: 400px;
        border: none;
        font-size: 20px;
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
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: 1px solid gray;
        color: white;
        margin-bottom: 20px;
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
        border-radius: 5px;
        font-size: 20px;
        margin-bottom: 20px;
        margin-right: 20px;
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
        font-size: 15px;
        padding: 8px 16px;
        background-color: ${(props) => props.select ? 'green' : 'white'};
        border: none;
        border-radius: 5px;
        margin-right: 10px;
    }
    > p {
        margin-left: 10px;
        font-size: 20px;
    }
`

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    background-color: #f6f6f6;
    font-size: 15px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
`
