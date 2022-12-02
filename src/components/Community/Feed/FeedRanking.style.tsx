import styled from '@emotion/styled'

export const RankingArea = styled.div`
    width: 750px;
    border: 1px solid gray;
    height: 250px;
    border-radius: 5px;
`
export const RankingSubtitle = styled.p`
    font-size: 20px;
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
        padding-left: 20px;
    }
`
