import styled from '@emotion/styled'

export const MovieInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MovieBackdropImgContainer = styled.div`
    width: 50rem;
    height: 25rem;
    position: relative;
    margin: 1.25rem !important;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
        height: 20rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
        height: 13rem;
    }
    > span {
        border-radius: 0.625rem !important;
        border: 1px solid black !important;
        cursor: pointer;
    }
`
