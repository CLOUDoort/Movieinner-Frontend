import styled from '@emotion/styled'

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeBox = styled.div`
    width: 50rem;
    height: 21rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
        height: 18rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
        height: 13rem;
    }
    > div > button {
        margin-right: 0.313rem;
        margin-left: 0.313rem;
        margin-top: 1.25rem;
        padding: 8px 1rem;
        font-size: 0.938rem;
        border: none;
        background-color: #9ff89f;
    }
`
export const WelcomeTitle = styled.div`
    font-size: 1.875rem;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
`