import styled from '@emotion/styled'

export const HearderFirstNavBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 3.1rem;
    > svg {
        width: 3.1rem;
    }
    @media screen and (min-width: 69em) {
        > svg {
            display: none;
        }
    }
    @media screen and (max-width: 69em) {
        > svg {
            position: absolute;
            left: 0px;
        }
        > :first-of-type {
            width: 5.6rem;
            flex-shrink: 0;
        }
    }
`

export const HeaderFirstNavTitle = styled.div`
    width: 120px;
    margin-left: 30px;
    flex-shrink: 0;
    @media screen and (max-width: 43.75em) {
        margin-left: 1rem;
    }
`

export const HeaderFirstNavList = styled.div`
    @media screen and (max-width: 69em) {
        display: none;
    }
    display: flex; 
    > button {
        all: unset;
        margin-left: 1.25rem;
        cursor: pointer;
    }
    > * {
        margin-left: 1.25rem;
    }
    >:hover {
        transition: color, 0.2s;
        color: gray;
    }
`