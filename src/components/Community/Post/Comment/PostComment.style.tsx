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