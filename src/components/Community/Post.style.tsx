import styled from '@emotion/styled'

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 700px 250px;
    row-gap: 50px;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`
export const PostContentArea = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 5px;
`

export const PostCommentArea = styled.div`
    width: 700px;
    border: 1px solid gray;
    height: 250px;
`

export const PostInfo = styled.div`
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

export const PostContents = styled.div`
    width: 700px;
    height: auto;
`

export const PostCommentWrite = styled.div``

export const PostCommentList = styled.div``