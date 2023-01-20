import styled from '@emotion/styled'

export const CommentArea = styled.div`
    margin-bottom: 1.25rem;
`

export const CommentWrite = styled.div`
    margin-top: 1.25rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    > textarea {
        width: 100%;
        resize: none;
        outline: none;
        height: 6.25rem;
        @media screen and (max-width: 53.13em) {
            height: 5rem;
        }
        @media screen and (max-width: 37.5em) {
            height: 4rem;
        }
        border-radius: 0.1rem;
        padding: 0.313rem 0.5rem;
        font-size: 0.938rem;
    }
    > div {
        display: flex;
        justify-content: end;
        margin-right: 0.625rem;
        margin-top: 0.625rem;
        > button {
            border: none;
            padding: 8px 1rem;
            margin-left: 0.625rem;
            background-color: #fbfbfb;
        }
    }
`

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.25rem;
    > div {
        border-bottom: 1px solid white;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
    }
`

export const CommentUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        display: flex;
        > :first-of-type {
            margin-left: 0.625rem;
            /* font-weight: bold; */
        }
        > div {
            margin-left: 0.625rem;
            margin-top: 0.625rem;
            > :first-of-type {
                font-weight: bold;
            }
            > button {
                border: none;
                margin-left: 0.625rem;
                padding: 0.313rem 0.625rem;
                margin-bottom: 0.313rem;
            }
        }   
    } 
    > div > button {
        border: none;
        margin-left: 0.625rem;
        padding: 0.313rem 0.625rem;
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
        margin-top: 1.25rem;
    }
`
