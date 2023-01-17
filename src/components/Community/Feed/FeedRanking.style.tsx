import styled from '@emotion/styled'

export const RankingArea = styled.div`
    width: 42rem;
    @media screen and (max-width: 50em) {
        width: 30rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 20rem;
    }
    border: 1px solid gray;
    border-radius: 0.313rem;
    padding-bottom: 1rem;
`
export const RankingSubtitle = styled.p`
    font-size: 1.25rem;
    padding: 16px 24px;
`

export const RankingList = styled.ul`
    width: 100%;
    display: flex;
    > li > :nth-of-type(1) {
        font-style: italic;
    }
    > li > :nth-of-type(2) {
        cursor: pointer;
    }
    > li > span {
        padding-left: 1.25rem;
    }
`
