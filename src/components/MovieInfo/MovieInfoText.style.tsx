import styled from '@emotion/styled'

export const MovieInfoMiddleContainer = styled.div`
    display: flex;
    width: 50rem;
    height: 21rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
        height: 18rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
        height: 13rem;
    }
`

export const MovieTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    > div {
        margin-top: 0.625rem;
    }
    > p {
        font-weight: bold;
        font-size: large;
        margin-top: 0.625rem;
        @media screen and (max-width: 37.5em) {
        display: none;
        }
    }
`

export const MovieTextTitle = styled.div`
    display: flex;
    > p {
        font-weight: bold;
        font-size: large;
    }
    > div {
        margin-left: 0.625rem;
        margin-right: 0.625rem;
    }
`

export const MovieTextOverview = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    @media screen and (max-width: 37.5em) {
        display: none;
    }
    > div {
        margin-right: 1rem;
    }
`

export const MovieFosterImgContainer = styled.div`
    width: 12.5rem;
    height: 18.75rem;
    position: relative;
    @media screen and (max-width: 37.5em) {
        width: 8rem;
        height: 11rem;
    }
    > span {
        border-radius: 0.625rem !important;
        border: 1px solid black !important;
    }
`