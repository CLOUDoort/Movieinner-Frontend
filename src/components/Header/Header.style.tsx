import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-bottom: 1px solid red;
    padding-bottom: 15px;
    margin: 15px;
    button {
        margin-right: 20px;
        background-color: black;
        color: white;
        border: none;
    }
`
export const HearderNavFirstBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
`

export const HearderNaveSecondBox = styled.nav`
    display: flex;
`

export const TitleDiv = styled.div`
    width: 150px;
    margin-left: 50px;
    flex-shrink: 0;
`

export const NavDiv = styled.div`
    display: flex;
    > div {
        float: left;
        display: flex;
    }
    > div > div::after{
        content: '|';
        float: right;
        color: #ccc;
        margin-right: 17px;
        margin-left: 17px;
    }
    > div > button {
        all: unset;
        cursor: pointer;
    }
`
type SearchProps = {
    click: boolean
}


export const SearchContainer = styled.div<SearchProps>`
    display: flex;
    border: ${(props) => (props.click ? '1px solid white;' : 'none')};
    background-color: ${(props) => (props.click ? 'black' : 'none')};
    padding: 5px;
    > input {
        width: ${(props) => (props.click ? '200px' : 0)};
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
