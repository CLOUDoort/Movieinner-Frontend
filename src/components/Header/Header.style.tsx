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
    button {
        margin-right: 20px;
        background-color: black;
        color: white;
        border: none;
    }
`

export const SecondHearderDiv = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
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
type SearchProps = {
    click: boolean
}

export const SecondHearderSearchDiv = styled.div`
    display: flex;
`

export const SearchContainer = styled.div<SearchProps>`
    display: flex;
    border: ${(props) => (props.click ? '1px solid white;' : 'none')};
    background-color: ${(props) => (props.click ? 'black' : 'none')};
    padding: 5px;
    > input {
        width: ${(props) => (props.click ? '275px' : 0)};
        background-color: ${(props) => (props.click ? 'black' : 'none')};
        color: white;
        transition: 0.3s width linear;
        border: none;
        outline: none;
        opacity: ${(props) => (props.click ? '1' : 0)};
        margin-left: 10px;
        padding: 5px;
    }
`
