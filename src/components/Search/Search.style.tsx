import styled from '@emotion/styled'

export const SearchBox = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SearchContainer = styled.div`
    width: 100%;
    max-width: 700px;
    min-width: 00px;
    max-height: 800px;
    height: 600px;
    background-color: #09365e;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
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