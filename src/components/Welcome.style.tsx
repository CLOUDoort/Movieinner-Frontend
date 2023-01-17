import styled from '@emotion/styled'

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeBox = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    > hr {
        width: 600px;
    }
    > div > button {
        margin-right: 0.313rem;
        margin-left: 0.313rem;
        margin-top: 20px;
        padding: 8px 16px;
        font-size: 0.938rem;
        border: none;
    }
`
export const WelcomeTitle = styled.div`
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`
export const WelcomeText = styled.div`
    margin-top: 20px;
    > div {
        margin-bottom: 10px;
    }
`
