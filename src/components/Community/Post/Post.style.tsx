import styled from '@emotion/styled'

export const PostContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostBox = styled.div`
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    color: white;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    border-radius: 0.625rem;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.313rem;
        height: 1.25rem;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: red;
    }
`

export const PostContentArea = styled.div`
    margin-top: 1.875rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 0.313rem;
    > :last-of-type {
        padding-top: 1.5rem;
    }
`
export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
    padding-bottom: 1.5rem;
    >:first-of-type {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    >:last-of-type {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        >:first-of-type {
            display: flex;
            > div {
                margin-right: 0.5rem;
            }
        }
        >:last-of-type {
            display: flex;
            align-items: center;
            > * { 
                margin-left: 0.5rem;
                cursor: pointer;
            }
        }
    }
`