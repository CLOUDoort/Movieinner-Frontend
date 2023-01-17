import styled from '@emotion/styled'

export const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    > p {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        font-size: 1.3rem;
        font-weight: bold;
    }
    @media screen and (max-width: 37.5em) {
        > p {font-size: 0.9rem;}
    }
`

export const ThemeSlideContainer = styled.div`
    position: relative;
    > img {
        border-radius: 1.25rem;
    }
    > div {
        position: absolute;
        bottom: 1.875rem;
        left: 6.25rem;
        mix-blend-mode: difference;
        font-size: 1.25rem;
    }
`

export const ThemeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.875rem;
    @media screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
    }
`
export const ThemeItemContainer = styled.div`
    width: 21rem;
    height: 12rem;
    position: relative;
    margin-bottom: 1.875rem;
    @media screen and (max-width: 50em) {
        width: 18rem;
        height: 10rem;
        > div {
            font-size: 1rem;
        }
    }
    > span {
        cursor: pointer;
        border-radius: 0.313rem;
    }
    > div {
        position: absolute;
        bottom: 1rem;
        left: 1.875rem;
        font-size: 1.25rem;
        mix-blend-mode: difference;
    }
`