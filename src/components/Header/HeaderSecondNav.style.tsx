import styled from '@emotion/styled'


export const HearderSecondNavBox = styled.nav`
    margin-right: 20px;
    display: flex;
    align-items: center;
    > * {
        margin-right: 10px;
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
    > :first-of-type {
        transition: color 0.2s;
        :hover {
            color: gray;
        }
    }
    > input {
        transition: 0.3s width linear !important;
        width: ${(props) => (props.click ? '200px' : 0)};
        @media screen and (max-width: 1100px) {
            width: ${(props) => (props.click ? '150px' : 0)};
        }
        @media screen and (max-width: 630px) {
            width: ${(props) => (props.click ? '100px' : 0)};
        }
        @media screen and (max-width: 570px) {
            width: ${(props) => (props.click ? '50px' : 0)};
        }
        background-color: ${(props) => (props.click ? 'black' : 'none')};
        color: white;
        border: none;
        outline: none;
        opacity: ${(props) => (props.click ? '1' : 0)};
        margin-left: 10px;
        padding: 5px;
    }
`

type modalProps = {
    modal: boolean
}
export const HeaderNotiBox = styled.div<modalProps>`
    display: flex;
    align-items: center;
    > svg {
        justify-content: center;
        transition: color 0.2s;
        margin-left: -10px;
        color: ${(props) => props.modal ? 'red' : null};
        :hover {
            color: gray;
        }
    }
`
export const HeaderUserBox = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        margin-left : 7px;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    > span {
        border-radius: 50%;
        cursor: pointer;
    }
    > button {
        font-size: 15px;
        margin-right: 10px;
        border: none;
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 520px) {
        > div > div {
            display: none;
        }
    }
`