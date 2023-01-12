import styled from '@emotion/styled'

export const HearderFirstNavBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
    @media screen and (min-width: 880px) {
        > svg {
            display: none;
        }
    }
    @media screen and (max-width: 880px) {
        > svg {
            position: absolute;
            left: 0px;
        }
        > :first-of-type {
            width: 90px;
            flex-shrink: 0;
        }
    }
`

export const HeaderFirstNavTitle = styled.div`
    width: 120px;
    margin-left: 30px;
    flex-shrink: 0;
    @media screen and (max-width: 700px) {
        margin-left: 15px;
    }
`

export const HeaderFirstNavList = styled.div`
    @media screen and (max-width: 880px) {
        display: none;
    }
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