import styled from '@emotion/styled'

type SearchContainerType = {
    darkmode: Boolean
}

export const SearchContainer = styled.div<SearchContainerType>`
    width: 100%;
    height: 100vh;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    opacity: ${(props) => props.darkmode ? 1 : 0};
    transition: opacity 1s;
    > :first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
       > input {
        min-width: 500px;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 8px 16px;
        }
        >svg {
        margin-right: 5px;
        }
    } 
    > :last-of-type {
        margin-bottom: 10px;
        height: auto;
        overflow-y: auto;
    }
    
`
export const SearchListTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const SearchListItem = styled.div`
    min-width: 500px;
    > div {
        display: flex;
        align-items: center;
        margin-top: 5px;
        > span {
            cursor: pointer;
        }
        > div {
            margin-left: 8px;
            font-size: small;
            display: flex;
            flex-direction: column;
            > :first-of-type {
            cursor: pointer;
            }
            > :last-of-type {
                font-size: 9px;
            }
        }
    }
`