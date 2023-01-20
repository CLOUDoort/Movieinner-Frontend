import styled from '@emotion/styled'

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > p {
        font-size: 2rem;
        text-align: start;
    }
    > * {
        margin-top: 1.25rem;
    }
`

export const FeedListArea = styled.div`
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    border-radius: 0.313rem;
    border: 1px solid white;
    > :first-of-type {
        border-bottom: 1px solid white;
    }
`

export const FeedListContainer = styled.div`
    padding: 0.6rem 0.1rem;
    display: flex;
    justify-content: space-between;
    
`

export const FeedListFirstType = styled.div`
    display: flex;
    > div {
        text-align: center;
    }
    > :first-of-type {
        width: 3.75rem;
    }
    > :last-of-type {
        flex: 1;
    }
`

export const FeedListLastType = styled.div`
    display: flex;
    > div {
        width: 6rem;
        text-align: center;
    }
    @media screen and (max-width: 37.5em) {
        >:nth-of-type(2) {
            display: none;
        }
        >:last-of-type {
            display: none;
        }
    }
`

export const FeedRemoteBox = styled.div`
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    display: flex;
    justify-content: end;
    align-items: center;
    > svg {
        cursor: pointer;
        border-radius: 1.375rem;
        padding: 0.625rem;
        transition: color 0.4s;
        margin-left: 1rem;
    }
    > svg:hover {
        background-color: rgb(194, 0, 0);
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
        border: 1px solid #313131;
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
