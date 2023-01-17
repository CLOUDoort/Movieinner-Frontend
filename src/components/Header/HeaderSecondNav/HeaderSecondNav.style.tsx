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
    @media screen and (max-width: 25.63em) {
            display: none;
    }
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