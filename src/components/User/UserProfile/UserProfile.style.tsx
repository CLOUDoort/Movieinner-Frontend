import styled from '@emotion/styled'

export const UserProfileBox = styled.div`
    margin-top: 20px;
    width: 800px;
    @media screen and ( max-width: 850px) {
        width: 600px;
    }
    @media screen and ( max-width: 660px) {
        width: 450px;
    }
    @media screen and ( max-width: 470px) {
        width: 320px;
    }
`
export const UserProfileContainer = styled.div`
    border-radius: 10px;
    padding: 30px 24px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserProfileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    > span {
        border-radius: 50%;
        cursor: pointer;
        margin-left: 20px;
        > svg {
            margin-top: 6px;
        }
    }
    > div {
        margin-left: 20px;
        font-size: 20px;
    }
`
export const UserModifyNickname = styled.div`
    margin-left: 10px;
    >input {
        border: 1px solid gray;
        padding: 5px;
    }
    >button {
        margin-left: 5px;
        border: none;
        background-color: black;
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
`
export const UserProfileData = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        cursor: pointer;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`