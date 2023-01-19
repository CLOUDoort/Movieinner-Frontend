import styled from '@emotion/styled'

export const StorageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StorageThemeContainer = styled.div`
    > p {
        text-align: center;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
        font-weight: bold;
        font-size: 18px;
    }
`
export const StorageMovieScroll = styled.div`
    padding-top: 13px;
    padding-bottom: 3px;
    position: relative;
    margin: 0 -24px;
    font-size: 1.3rem;
    width: 50rem;
    @media screen and ( max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and ( max-width: 41.25em) {
        width: 28.125rem;
    }
    @media screen and ( max-width: 29.38em) {
        width: 20rem;
    }
    > p {
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
        font-weight: bold;
        font-size: 18px;
    }
`

export const StorageMovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: 0 0 1px;
    overflow-x: scroll;
    overflow-y: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: red;
  }
`

export const StorageMovieList = styled.ul`
    display: table;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    border-spacing: 9px 0;
    border-collapse: separate;
    table-layout: fixed;
    white-space: nowrap;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    overflow: scroll;
`

export const StorageMovieAreaCard = styled.li`
    width: 145px !important;
    display: table-cell;
    position: relative;
    white-space: normal;
    vertical-align: top;
    background-color: black;
    z-index: 2;
    border-spacing: 9px 0;
    border-collapse: separate;
    border-radius: 0.625rem;
    > div {
        height: 100%;
        background-color: black;
        width: inherit;
        border-radius: 6px;
        color: white;
        ::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 6px;
            box-shadow: 0 2px 3px 0 rgb(155 168 174 / 8%);
        }
    }
`

export const StorageMovieImgBox = styled.div`
    display: block;
    position: relative;
    width: 145px !important;
    height: 200px !important;
    ::before {
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        content: '';
        border: 1px solid rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    > span {
        border-radius: 6px 6px 0 0;
    }
`

export const StorageMovieTitleBox = styled.div`
    white-space: normal;
    display: block;
    text-align: start;
    padding: 0.625rem;
    margin-top: 0.625rem;
    > strong {
        max-height: 4.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;
        position: relative;
        z-index: 5;
        color: white;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1rem;
        white-space: normal;
        cursor: pointer;
    }
`