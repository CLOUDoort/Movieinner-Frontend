import styled from '@emotion/styled'

export const PostBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    background-color: #313131;
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
      max-height: 95%;
    }
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.313rem;
    margin-bottom: 1.25rem;
    position: relative;
    height: 100%;
`
export const PostContentArea = styled.div`
    margin-top: 1.875rem;
    padding: 1.25rem;
    width: 750px;
    display: flex;
    flex-direction: column;
    border: 3px solid black;
    border-radius: 0.313rem;
    > hr {
        width: 700px;
        border: none;
        border-top: 3px solid black;
    }
`
export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 24px;
    font-size: 17px;
    > div {
        display: flex;
        > svg {
            margin-right: 0.625rem;
            cursor: pointer;
        }
        > div {
            margin-right: 0.625rem;
        }
    }
`

export const PostContents = styled.div`
    padding: 1rem 24px;
    width: 700px;
    > :first-of-type {
        padding-bottom: 0.625rem;
    }
`
