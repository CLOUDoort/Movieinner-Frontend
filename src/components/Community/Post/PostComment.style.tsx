import styled from '@emotion/styled'

export const PostCommentArea = styled.div`
    width: 100%;
    height: 10rem;
`

export const PostCommentWrite = styled.div`
    > textarea {
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        height: 6.25rem;
        border-radius: 5px;
        padding: 5px 8px;
        font-size: 15px;
    }
    > div {
        display: flex;
        justify-content: end;
        margin-right: 10px;
        margin-top: 10px;
        > button {
            border: none;
            padding: 8px 16px;
            background-color: skyblue;
        }
    }
`

export const PostCommentList = styled.div`
    display: flex;
    flex-direction: column;
`
