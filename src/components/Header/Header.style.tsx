import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4b4242;
    color: white;
    padding: 10px;
`
export const SecondHearderNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
`

export const TitleDiv = styled.div`
    width: 150px;
    margin-left: 50px;
    flex-shrink: 0;
`

export const NavDiv = styled.div`
    > a {
        float: left;
    }
    > a::after {
        content: '|';
        float: right;
        color: #ccc;
        margin-right: 17px;
        margin-left: 17px;
    }
    > a:last-child::after {
        content: '';
    }
`

export const SecondHearderSearchDiv = styled.div`
    justify-content: end;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    > button {
        border: none;
        background-color: white;
        width: 36px;
        margin-right: 10px;
        transition: background-color, 0.2s;
    }
    > button:hover {
        background-color: #a2a1a1;
    }
    > svg {
        width: 36px;
    }
    > input {
        border: none;
        color: white;
        background-color: #4b4242;
        margin-right: 50px;
        font-size: 20px;
        cursor: pointer;
    }
`
