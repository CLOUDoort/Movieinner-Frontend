import styled from '@emotion/styled'

export const PostBox = styled.div`
    width: 850px;
    min-width: 750px;
    margin: auto;
    background-color: #313131;
    color: white;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    border-radius: 10px;
    overflow: auto;
    height: 100vh;
    &::-webkit-scrollbar {
      width: 0.313rem;
      height: 1.25rem;
    }
    &::-webkit-scrollbar-thumb {
     border-radius: 2px;
      background: gray;
      max-height: 95%;
    }
`

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 700px 250px;
    row-gap: 50px;
    justify-content: center;
    margin-top: 0.313rem;
    margin-bottom: 1.25rem;
    position: relative;
    height: 100%;
`
export const PostContentArea = styled.div`
    margin-top: 30px;
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
    padding: 16px 24px;
    font-size: 17px;
    > div {
        display: flex;
        > svg {
            margin-right: 10px;
            cursor: pointer;
        }
        > div {
            margin-right: 10px;
        }
    }
`

export const PostContents = styled.div`
    padding: 16px 24px;
    width: 700px;
    > :first-of-type {
        padding-bottom: 10px;
    }
`
