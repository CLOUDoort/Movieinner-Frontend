import styled from '@emotion/styled'

export const HearderFirstNavBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
    > svg {
        width: 50px;
    }
    @media screen and (min-width: 1000px) {
        > svg {
            display: none;
        }
    }
    @media screen and (max-width: 1000px) {
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
    @media screen and (max-width: 1000px) {
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

export const HeaderMenuModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1001;
`


export const HeaderMenuModalBox = styled.div`
    position: absolute;
    min-width: 150px;
    height: 180px;
    transition: height 1s ease;
    top: 65px;
    left: 23px;
    border-radius: 5px;
    background-color: #2e2e2e;
    color: white;
    > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin-top: 10px;
        > button {
            border: none;
            background-color: #2e2e2e;
            color: white;
        }
        > * {
            margin-top: 10px;
        }
    }
`