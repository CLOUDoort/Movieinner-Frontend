import styled from '@emotion/styled'

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 250px;
    row-gap: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 900px;
    border: 1px solid gray;
`
export const PostContentArea = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    height: 250px;
    border-radius: 5px;
`

export const PostCommentArea = styled.div``

export const PostFirstType = styled.div`
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
