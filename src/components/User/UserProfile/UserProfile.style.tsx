import styled from '@emotion/styled'

export const UserProfileBox = styled.div`
    margin-top: 1.25rem;
    width: 50rem;
    @media screen and ( max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and ( max-width: 37.5em) {
        width: 23rem;
    }
`
export const UserProfileContainer = styled.div`
    border-radius: 0.625rem;
    padding: 1.875rem 1.5rem;
    border: 1px solid white;
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
        margin-left: 1.25rem;
        > svg {
            margin-top: 6px;
        }
    }
    > div {
        margin-left: 1.25rem;
        font-size: 1.25rem;
    }
`
export const UserModifyNickname = styled.div`
    margin-left: 0.625rem;
    >input {
        border: 1px solid white;
        padding: 0.313rem;
    }
    >button {
        margin-left: 0.313rem;
        border: none;
        background-color: black;
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }
`
export const UserProfileData = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        cursor: pointer;
        margin-top: 0.313rem;
        margin-bottom: 0.313rem;
    }
`