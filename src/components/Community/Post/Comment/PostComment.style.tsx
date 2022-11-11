import styled from '@emotion/styled'

export const CommentArea = styled.div`
    width: 100%;
    height: 10rem;
`

export const CommentWrite = styled.div`
    margin-top: 20px;
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
            margin-left: 10px;
            background-color: #adf8f8;
        }
    }
`

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        margin-top: 20px;
    }
`

export const CommentUser = styled.div`
    display: flex;
    > div > span {
        ::after {
            padding-left: 5px;
            content: '|';
        }
        margin-left: 10px;
    }
    > div > button {
        border: none;
        margin-left: 10px;
        padding: 8px 16px;
        background-color: #adf8f8;
    }
`

export const CommentReply = styled.div`
    > span {
        cursor: pointer;
        width: 80%;
        margin-left: 40px;
    }
    > div {
        width: 80%;
        margin-left: 40px;
        margin-top: 20px;
    }
`
