import styled from '@emotion/styled'

export const CommentArea = styled.div`
    width: 100%;
    height: 10rem;
`

export const CommentWrite = styled.div`
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

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
`

export const CommentUser = styled.div`
    display: flex;
`
