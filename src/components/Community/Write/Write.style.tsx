import styled from '@emotion/styled'

export const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
`

export const WriteTitle = styled.input`
    background-color: black;
    width: 50rem;
    height: 4rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    color: #fff;
    border: 1px solid #3e3e3ee4;
    border-bottom: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    outline: none;
`
export const WriteEditor = styled.div`
    width: 50rem !important;
    border: none;
    @media screen and (max-width: 53.13em) {
        width: 35rem !important;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem !important;
    }
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 1px;
      height: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
     border-radius: 2px;
      background: black;
    }
`
export const WriteBtn = styled.div`
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 23rem;
    }
    height: 4rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid #3e3e3ee4;
    border-top: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    :last-child {
        background-color: #000000;
        padding: 0.625rem 1.25rem;
    }
    > button {
        border: none;
        padding: 0.3rem 1rem;
        font-size: 1rem;
        :hover {
            background-color: green;
        }
    }
`
