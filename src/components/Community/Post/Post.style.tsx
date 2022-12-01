import styled from '@emotion/styled'

export const PostBox = styled.div`
    width: 850px;
    min-width: 750px;
    margin: auto;
    background-color: #313131;
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 10px;
    overflow: auto;
    height: 100vh;
    &::-webkit-scrollbar {
      width: 5px;
      height: 20px;
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
    margin-top: 5px;
    margin-bottom: 20px;
    position: relative;
    height: 100%;
`
export const PostContentArea = styled.div`
    padding: 20px;
    width: 750px;
    display: flex;
    flex-direction: column;
`
export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    > div {
        display: flex;
        > svg {
            cursor: pointer;
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
