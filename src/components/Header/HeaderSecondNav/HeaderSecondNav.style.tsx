import styled from '@emotion/styled'


export const HearderSecondNavBox = styled.nav`
    margin-right: 1.25rem;
    display: flex;
    align-items: center;
    > * {
        margin-right: 0.625rem;
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
    padding: 0.3rem;
    margin-right: ${(props) => (props.click ? '1.25rem' : 0)};
    > :first-of-type {
        transition: color 0.2s;
        :hover {
            color: gray;
        }
    }
    > input {
        transition: 0.3s width linear !important;
        width: ${(props) => (props.click ? '12.5rem' : 0)};
        @media screen and (max-width: 50rem) {
            width: ${(props) => (props.click ? '8em' : 0)};
        }
        @media screen and (max-width: 45rem) {
            width: ${(props) => (props.click ? '5em' : 0)};
        }
        background-color: ${(props) => (props.click ? 'black' : 'none')};
        color: white;
        border: none;
        outline: none;
        opacity: ${(props) => (props.click ? '1' : 0)};
        margin-left: 0.625rem;
        padding: 0.3rem;
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
        margin-left: -0.625rem;
        color: ${(props) => props.modal ? 'red' : null};
        :hover {
            color: gray;
        }
    }
`
export const HeaderUserBox = styled.div`
    margin-left: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        > div {margin-left : 0.7rem;}
        > span {
            border-radius: 50%;
        }
    }
    >:first-of-type {
        cursor: pointer;
    }
    > button {
        font-size: 1rem;
        margin-right: 0.625rem;
        border: none;
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 37.5em) {
        > div > div {
            display: none;
        }
    }
`

export const HeaderSettingBox = styled.div`
    position: absolute;
    background-color: white;
    min-width: 6.25rem;
    height: 5rem;
    top: 4rem;
    right: 3.5rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        display: flex;
        flex-direction: column;
        > button {
            padding: 0.3rem 0.625rem;
            margin-bottom: 0.3rem;
            border: none;
            background-color: white;
        }
    }
`