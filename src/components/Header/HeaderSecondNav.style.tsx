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
        background-color: ${(props) => (props.click ? 'black' : 'none')};
        color: white;
        border: none;
        outline: none;
        opacity: ${(props) => (props.click ? '1' : 0)};
        margin-left: 10px;
        padding: 5px;
    }
`
export const HeaderNotiBox = styled.div`
    > svg {
        justify-content: center;
        transition: color 0.2s;
        margin-left: -10px;
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
    > span {
        border-radius: 50%;
    }
    >button {font-size: 15px;}
`