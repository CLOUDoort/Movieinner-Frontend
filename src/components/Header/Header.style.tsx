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
        margin-right: 20px;
    }
`
export const HearderNavFirstBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
`

export const HearderNaveSecondBox = styled.nav`
    display: flex;
    margin-left: 10px;
    align-items: center;
    > * {
        margin-right: 10px;
    }
    > svg {
        justify-content: center;
        transition: color 0.2s;
        margin-left: -10px;
        :hover {
            color: gray;
        }
    }
    > :first-of-type > svg {
        transition: color 0.2s;
        :hover {
            color: gray;
        }
    }
    > :last-child {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        > span {
            border-radius: 50%;
        }
        >button {font-size: 15px;}
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
    align-items: center;
    justify-content: center;
    border-bottom: ${(props) => (props.click ? '1px solid red;' : 'none')};
    background-color: ${(props) => (props.click ? 'black' : 'none')};
    padding: 5px;
    margin-right: ${(props) => (props.click ? '20px' : 0)};
    > input {
        transition: 0.3s width linear !important;
        width: ${(props) => (props.click ? '200px' : 0)};
        background-color: ${(props) => (props.click ? 'black' : 'none')};
        color: white;
        border: none;
        outline: none;
        opacity: ${(props) => (props.click ? '1' : 0)};
        margin-left: 10px;
        padding: 5px;
    }
`
