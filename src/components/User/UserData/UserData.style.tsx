import styled from '@emotion/styled'

export const UserDataBox = styled.div`
    margin-top: 1.25rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 53.13em) {
        width: 37.5rem;
    }
    @media screen and ( max-width: 41.25em) {
        width: 28.125rem;
    }
    @media screen and ( max-width: 29.38em) {
        width: 20rem;
    }
`

export const UserDataContainer = styled.div`
    border: 1px solid gray;
    border-radius: 0.625rem;
    > :first-of-type {
        margin: 1.25rem;
        font-weight: bold;
    }
`

export const UserDataList = styled.div`
    border-radius: 0.625rem;
    border: 1px solid gray;
    margin: 1.25rem;
    > div {
        display: flex;
        flex-direction: column;
        padding: 8px;
        margin-left: 0.625rem;
        > div{
            display: flex;
            text-align: center;
            > :first-of-type {
                width: 1.875rem;
            }
            > :nth-of-type(2) {
                flex: 1;
                cursor: pointer;
            }
            > :last-of-type {
                width: 8.125rem;
            }
        }
        > :nth-of-type(2) {
            margin-top: 0.625rem;
            >:nth-of-type(2) {
                cursor: pointer;
            }
        }
    }
`