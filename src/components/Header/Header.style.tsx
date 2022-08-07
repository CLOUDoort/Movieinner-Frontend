import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    flex-direction: column;
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
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4b4242;
    color: white;
`
export const SecondHearderNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    a {
        margin-right: 20px;
    }
`

export const TitleDiv = styled.div`
    width: 150px;
    margin-left: 50px;
    flex-shrink: 0;
`

export const NavDiv = styled.div`
    width: auto;
    @media (max-width: 810px) {
    }
`

export const SecondHearderSearchDiv = styled.div`
    justify-content: end;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
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
