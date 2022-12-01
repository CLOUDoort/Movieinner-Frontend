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

export const RankingList = styled.div`
    width: 100%;
    display: flex;
    > div > :nth-of-type(2) {
        cursor: pointer;
    }
    > div > span {
        padding-left: 20px;
    }
`
