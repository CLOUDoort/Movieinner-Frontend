import styled from '@emotion/styled'

export const PostConfirmModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1002;
    > div {
        border: 1px solid white;
        padding: 1.875rem 3.125rem;
        border-radius: 0.313rem;
        background-color: black;
        > div {
            margin-top: 0.625rem;
            display: flex;
            justify-content: space-between;
            > button {
                border: none;
                padding: 0.5rem 1rem;
                background-color: white;
                :hover {
                    background-color: red;
                }
            }
        }
    }
`