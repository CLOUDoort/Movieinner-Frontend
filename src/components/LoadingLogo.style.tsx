import styled from '@emotion/styled'

type LoadingLogoContainer = {
    darkTransition: boolean
}

export const LoadingLogoContainer = styled.div<LoadingLogoContainer>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    opacity: ${(props) => props.darkTransition ? 1 : 0};
    transition: opacity 0.3s;
`

export const LoadingLogoDiv = styled.div`
    color: white;
    font-weight: bold;
    transition: all 0.3s;
    font-size: 20px;
`