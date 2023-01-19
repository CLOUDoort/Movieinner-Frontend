import styled from '@emotion/styled'

export const RankingArea = styled.div`
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    border: 1px solid rgba(100, 100, 100, 0.6);
    border-radius: 0.313rem;
    padding-bottom: 1rem;
`
export const RankingSubtitle = styled.p`
    font-size: 1.25rem;
    padding: 1rem 24px;
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
