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
    z-index: 9999;
    > div {
        padding: 1.875rem 50px;
        width: 500px;
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
            border: 1px solid gray;
            padding: 8px 1rem;
        }
        > div {
            display: flex;
            justify-content: space-evenly;
            margin-top: 1.25rem;
            > button {
                border: none;
                padding: 0.313rem 0.625rem;
                width: 70px;
                height: 50px;
            }
            > :nth-of-type(2) {
                background-color: #e15050;
            }
        }
    }
`
