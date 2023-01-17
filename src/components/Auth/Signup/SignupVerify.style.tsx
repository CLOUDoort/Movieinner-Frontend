import styled from '@emotion/styled'

export const SignupVerifyBox = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SignupVerifyContainer = styled.div`
color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 700px;
    height: 500px;
    background-color: #e4e2e2;
    border-radius: 12px;
    > div > span {
        border-radius: 50%;
        margin-bottom: 20px;
    }
`

export const ContainerTitle = styled.div`
    font-size: 30px;
`

export const ContainerProfile = styled.div`
    > div {
        margin-top: 0.938rem;
    }
`
export const FailText = styled.div`
    > p {
        color: red;
    }
`

export const ContainerText = styled.div`
    > div {
        margin-bottom: 10px;
    }
`

export const ContainerBtn = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    > div {
        display: flex;
        justify-content: center;
    }
    > div > button {
        background-color: white;
        padding: 8px 16px;
        border: none;
        margin-left: 10px;
    }
    > div > p {
        font-size: 20px;
        margin-top: 20px;
    }
`
export const VerifyFailText = styled.div`
    > p {
        color: red;
        font-size: 20px;
    }
`
