import styled from '@emotion/styled'

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.25rem;
    > div {
        border-bottom: 1px solid white;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        > button {
            border: none;
            margin: 1rem;
            margin-left: 3.4rem;
            margin-bottom: 0.5rem;
            font-size: 0.8rem;
            color: #06de06;
            background-color: black
        }
    }
`

export const CommentUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const CommentContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    > :first-of-type {
        display: flex;
        align-items: center;
        > div {
            margin-left: 0.625rem;
            > :first-of-type {
                font-weight: bold;
            }
        }
    }
    > :last-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        > button {
            border: none;
            margin-left: 0.625rem;
            padding: 0.313rem 0.625rem;
            font-size: 0.75rem;
            color: white;
            background-color: black
        }
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
        margin-top: 1.25rem;
    }
`
