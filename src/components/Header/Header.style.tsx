import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-bottom: 1px solid red;
    padding-bottom: 15px;
    padding: 15px;
    button {
        margin-right: 20px;
        background-color: black;
        color: white;
        border: none;
    }
    > :last-of-type {
        margin-right: 30px;
    }
`
export const HearderNavFirstBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
`

export const HearderNaveSecondBox = styled.nav`
    display: flex;
    margin-left: 15px;
    align-items: center;
    >:hover {
        transition: color, 0.2s;
        color: gray;
    }
    > div {
        margin-left: 10px;
        > span {
            border-radius: 50%;
        }
    }
`

export const TitleDiv = styled.div`
    width: 150px;
    margin-left: 50px;
    flex-shrink: 0;
`

export const NavDiv = styled.div`
    display: flex; 
    > button {
        all: unset;
        margin-left: 20px;
        cursor: pointer;
    }
    > * {
        margin-left: 20px;
    }
    >:hover {
        transition: color, 0.2s;
        color: gray;
    }
`
type SearchProps = {
    click: boolean
}


export const SearchContainer = styled.div<SearchProps>`
    display: flex;
    box-shadow: ${(props) => (props.click ? '2px 2px 2px 2px red;' : 'none')};
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
