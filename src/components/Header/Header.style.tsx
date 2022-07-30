import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    height: 110px;
`
export const FirstHeaderDiv = styled.div`
    background-color: #faf4eb;
    height: 40px;
    > input {
        cursor: pointer;
        border: none;
        background-color: #faf4eb;
        margin-bottom: 30px;
    }
`

export const SecondHearderDiv = styled.div`
    display: flex;
    background-color: #faf4eb;
    height: 70px;
    justify-content: center;
    > Link {
        margin-right: 10px;
    }
    > p {
        font-weight: bold;
        font-size: 50px;
    }
`
