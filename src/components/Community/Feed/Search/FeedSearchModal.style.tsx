import styled from '@emotion/styled'

export const SearchModalBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        padding: 1.5rem 3rem;
        width: 28.125rem;
        border-radius: 0.313rem;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        > div:nth-of-type(1) {
            background-color: #c8c7c7;
            border-radius: 0.313rem;
        }
        > input {
            display: flex;
            align-items: center;
            margin-top: 0.625rem;
            border: 0.063rem solid gray;
            padding: 0.8rem 1rem;
            font-size: 1rem;
        }
        > div {
            display: flex;
            justify-content: space-evenly;
            margin-top: 1.25rem;
            > button {
                border: none;
                width: 6.875rem;
                padding: 0.8rem 1.8rem;
                font-size: 0.9rem;
            }
            > :nth-of-type(2) {
                background-color: #e15050;
            }
        }
    }
`
