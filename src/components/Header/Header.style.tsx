import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
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
`
export const SecondHearderNavDiv = styled.div`
    max-width: 900px;
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
    display: flex;
    flex-direction: row;
    > svg {
        width: 36px;
    }
    > input {
        border: none;
        color: white;
        background-color: #4b4242;
        margin-right: 50px;
        font-size: 20px;
    }
`
