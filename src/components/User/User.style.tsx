import styled from '@emotion/styled'

export const UserBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    color: white;
`

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
    > :first-of-type {
        border-radius: 50%;
    }
    > :nth-of-type(2) {
        margin-left: 20px;
        font-weight: bold;
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
export const UserProfileData = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserDataBox = styled.div`
    min-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`