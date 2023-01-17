import styled from '@emotion/styled'

type SearchContainerType = {
  darktransition: Boolean
}

export const SearchContainer = styled.div<SearchContainerType>`
    width: 100%;
    height: 100vh;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    opacity: ${(props) => props.darktransition ? 1 : 0};
    transition: opacity 1s;
    > div {
      margin-top: 10px;
        margin-bottom: 10px;
        height: auto;
        overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: red;
      height: 10%
    }
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
        margin-top: 0.313rem;
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

export const ScrollDiv = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;