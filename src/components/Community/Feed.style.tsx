import styled from '@emotion/styled'

export const FeedContainer = styled.div`
    display: grid;
    grid-template-rows: 250px 1fr;
    row-gap: 50px;
    align-items: center;
    justify-content: center;
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

export const FeedListArea = styled.div`
    width: 700px;
    border: 1px solid gray;
    border-radius: 5px;
    > hr {
        margin: 0;
    }
`

export const FeedListContainer = styled.div`
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
`

export const FeedListFirstType = styled.div`
    display: flex;
    > div {
        margin-right: 10px;
        text-align: center;
    }
    > :first-of-type {
        width: 60px;
    }
    > :last-of-type {
        max-width: 400px;
    }
`

export const FeedListLastType = styled.div`
    display: flex;
    > div {
        margin-left: 5px;
        width: 50px;
        text-align: center;
    }
`

export const FeedRemote = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1;
    > svg {
        cursor: pointer;
        margin-top: 20px;
        border: 1px solid gray;
        border-radius: 40%;
        padding: 10px;
        transition: color 0.4s;
    }
    > svg:hover {
        color: rgb(222, 109, 109);
    }
`
