import styled from '@emotion/styled'

export const CommentArea = styled.div`
    min-width: 750px;
    border-top: 1px solid rgba(210, 208, 208, 0.4);
    margin-bottom: 20px;
`

export const CommentWrite = styled.div`
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    > textarea {
        width: 100%;
        resize: none;
        border: none;
        outline: none;
        height: 6.25rem;
        border-radius: 2px;
        padding: 0.313rem 8px;
        font-size: 0.938rem;
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
    margin: 20px;
    > div {
        border-bottom: 1px solid rgba(210, 208, 208, 0.4);
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

export const CommentUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        display: flex;
        > :first-of-type {
            margin-left: 10px;
            /* font-weight: bold; */
        }
        > div {
            margin-left: 10px;
            margin-top: 10px;
            > :first-of-type {
                font-weight: bold;
            }
            > button {
                border: none;
                margin-left: 10px;
                padding: 0.313rem 10px;
                margin-bottom: 0.313rem;
            }
        }   
    } 
    > div > button {
        border: none;
        margin-left: 10px;
        padding: 0.313rem 10px;
        margin-bottom: 0.313rem;
        background-color: white
    }
    > :last-of-type {
        display: flex;
        flex-direction: column;
    }
`

export const CommentReply = styled.div`
    > span {
        cursor: pointer;
        width: 80%;
        margin-left: 60px;
    }
    > div {
        width: 80%;
        margin-left: 40px;
        margin-top: 20px;
    }
`
