import styled from '@emotion/styled'

type SearchContainerType = {
  darktransition: Boolean
}

export const SearchContainer = styled.div<SearchContainerType>`
    width: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    background-color: black;
    opacity: ${(props) => props.darktransition ? 1 : 0};
    transition: opacity 1s;
    padding: 2rem;
    &::-webkit-scrollbar {
      width: 6px;
      background: red;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: red;
      height: 10%
    }
`

export const SearchResultBox = styled.div`
    display: flex;
    flex-direction: column;
    >:first-of-type > div > div {
      display: flex;
      align-items: center;
    }
`
export const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 10px;
  @media screen and (max-width: 68.75em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 53.13em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 40.63em) {
    grid-template-columns: 1fr 1fr;
  }
`

type SearchClick = {
  movie: boolean
  actor: boolean
}

export const SearchListTitle = styled.div<SearchClick>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    > div {
      margin-left: 1rem;
      font-weight: bold;
      font-size: 1rem;
    }
    > div > svg {
      margin-left: 0.188rem;
    }
    >:first-of-type > svg {
      color: ${(props) => props.movie ? 'red' : null};
    }
    >:last-of-type > svg {
      color: ${(props) => props.actor ? 'red' : null};
    }
`

export const SearchListItem = styled.div`
    min-width: 14rem;
    max-height: 18rem;
    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        > span {
          cursor: pointer;
        }
        >:last-of-type {
          font-size: 0.8rem;
          width: 9rem;
          height: 8rem;
          margin-top: 0.625rem;
          text-align: center;
          >:first-of-type {
            cursor: pointer;
          }
        }
    }
`

export const SearchGenreTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    > div {
      font-size: 1rem;
      font-weight: bold;
    }
    > svg {
      margin-left: 0.7rem;
    }
`