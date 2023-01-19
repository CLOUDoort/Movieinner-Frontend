import styled from '@emotion/styled'

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeBox = styled.div`
    margin: 1.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    > hr {
        width: 37.5rem;
    }
    > div > button {
        margin-right: 0.313rem;
        margin-left: 0.313rem;
        margin-top: 1.25rem;
        padding: 8px 1rem;
        font-size: 0.938rem;
        border: none;
    }
`
export const WelcomeTitle = styled.div`
    font-size: 1.875rem;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
`
export const WelcomeText = styled.div`
    margin-top: 1.25rem;
    > div {
        margin-bottom: 0.625rem;
    }
`
