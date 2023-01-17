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

export const FeedListArea = styled.div`
    width: 700px;
    border: 1px solid gray;
    border-radius: 0.313rem;
    > hr {
        margin: 0;
    }
`

export const FeedListContainer = styled.div`
    padding: 12px 1.25rem;
    display: flex;
    justify-content: space-between;
`

export const FeedListFirstType = styled.div`
    display: flex;
    > div {
        margin-right: 0.625rem;
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
        margin-left: 0.313rem;
        width: 50px;
        text-align: center;
    }
    > :first-of-type {
        width: 100px;
    }
    > :nth-of-type(2) {
        width: 200px;
    }
`

export const FeedRemoteBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 21%;
    bottom: 25%;
    z-index: 1;
    > svg {
        cursor: pointer;
        margin-top: 1.25rem;
        border: 1px solid gray;
        border-radius: 40%;
        padding: 0.625rem;
        transition: color 0.4s;
    }
    > svg:hover {
        color: rgb(222, 109, 109);
    }
`
type PaginationProps = {
    currentPage: number
}

export const FeedPaginationContainer = styled.div<PaginationProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    > div > span {
        margin-left: 0.6rem;
        font-size: 1.2rem;
        border: 1px solid gray;
        border-radius: 0.625rem;
        padding: 0.3rem 0.6rem;
        color: #c9c9c9;
        width: 2.3rem;
        cursor: pointer;
        :hover {
            background-color: red;
        }
    }
    > button {
        all: unset;
        display: flex;
        align-items: center;
        border-radius: 22px;
        padding: 0.25rem;
        :hover {
            background-color: red;
        }
    }
    >:last-child {
        margin-left: 0.625rem;
    }
`
