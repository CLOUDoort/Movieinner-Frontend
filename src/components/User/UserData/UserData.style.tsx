import styled from '@emotion/styled'

export const UserDataBox = styled.div`
    margin-top: 20px;
    min-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 40px;
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
`