import styled from '@emotion/styled'

export const UserDataBox = styled.div`
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
`

export const UserDataContainer = styled.div`
    border: 1px solid white;
    border-radius: 0.625rem;
    width: 50rem;
    @media screen and ( max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and ( max-width: 37.5em) {
        width: 23rem;
    }
    > :first-of-type {
        margin: 1.25rem;
        font-weight: bold;
    }
`

export const UserDataList = styled.div`
    border-radius: 0.625rem;
    margin: 1.25rem;
    > div {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        margin-left: 0.625rem;
        > div{
            display: flex;
            text-align: center;
            > :first-of-type {
                width: 1.875rem;
            }
            > :nth-of-type(2) {
                flex: 1;
                display: inline-block;
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