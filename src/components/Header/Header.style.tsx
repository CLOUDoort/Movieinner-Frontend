import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    height: 110px;
`
export const FirstHeaderDiv = styled.div`
    background-color: black;
    height: 30px;
    color: white;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    a {
        margin-right: 20px;
    }
`

export const SecondHearderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4b4242;
    height: 70px;
    color: white;
    > p {
        font-weight: bold;
        font-size: 50px;
    }
`
export const SecondHearderNavDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    div {
        margin-left: 50px;
    }
    a {
        margin-right: 20px;
    }
`

export const SecondHearderSearchDiv = styled.div`
    > input {
        border: none;
        color: white;
        background-color: #4b4242;
        margin-right: 20px;
        font-size: 20px;
    }
`
