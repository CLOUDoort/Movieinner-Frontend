import styled from '@emotion/styled'

export const SearchBox = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
`
export const SearchContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const SearchListContainer = styled.div`
    display: flex;
    > div {
        display: grid;
    }
`