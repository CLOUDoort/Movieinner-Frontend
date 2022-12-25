import styled from '@emotion/styled'

export const UserProfileBox = styled.div`
    margin-top: 20px;
    min-width: 800px;
    `
export const UserProfileContainer = styled.div`
    border-radius: 10px;
    padding: 30px 24px;
    min-width: 800px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserProfileInfo = styled.div`
    display: flex;
    align-items: center;
    > span {
        border-radius: 50%;
        >img {
            margin-right: 20px;
        }
    }
    > :nth-of-type(2) {
        margin-left: 10px;
        font-weight: bold;
        cursor: pointer;
    }
    > :nth-of-type(3) {
        margin-left: 10px;
        margin-top: 5px;
        transition: color 0.5s;
        :hover {
            color: red;
        }
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