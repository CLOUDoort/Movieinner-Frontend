import styled from '@emotion/styled'

export const FeedContainer = styled.div`
    display: grid;
    grid-template-rows: 250px 1fr;
    row-gap: 50px;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
`
export const RankingArea = styled.div`
    width: 700px;
    border: 1px solid gray;
    height: 250px;
    border-radius: 5px;
`
export const RankingSubtitle = styled.p`
    font-size: 20px;
    padding: 16px 24px;
`

export const PostArea = styled.div`
    width: 700px;
`

export const FeedRemote = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 150px;
    left: 900px;
    right: 0;
    bottom: 0;
    > svg {
        cursor: pointer;
        margin-top: 20px;
        border: 1px solid gray;
        border-radius: 40%;
        padding: 10px;
    }
`
