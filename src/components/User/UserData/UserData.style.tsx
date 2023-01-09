import styled from '@emotion/styled'

export const UserDataBox = styled.div`
    margin-top: 20px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    > :nth-of-type(1) {
        display: flex;
        justify-content: space-between;
    }
    > :last-of-type {
        margin-bottom: 20px;
    }
`

export const UserDataContainer = styled.div`
    min-width: 380px;
    border: 1px solid gray;
    border-radius: 10px;
    > :nth-of-type(1) {
        margin: 20px;
    }
`

export const UserDataList = styled.div`
    min-width: 250px;
    border-radius: 10px;
    border: 1px solid gray;
    margin: 20px;
    > div {
        display: flex;
        flex-direction: column;
        padding: 8px;
        margin-left: 10px;
        > div{
            display: flex;
            text-align: center;
            > :first-of-type {
                width: 30px;
            }
            > :nth-of-type(2) {
                flex: 1;
                cursor: pointer;
            }
            > :last-of-type {
                width: 130px;
            }
        }
        > :nth-of-type(2) {
            margin-top: 10px;
            >:nth-of-type(2) {
                cursor: pointer;
            }
        }
    }
`