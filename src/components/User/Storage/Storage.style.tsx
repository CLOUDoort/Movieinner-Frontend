import styled from '@emotion/styled'

export const StorageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StorageThemeContainer = styled.div`
    > p {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
    }
`
export const StorageMovieScroll = styled.div`
    padding-top: 13px;
    padding-bottom: 3px;
    position: relative;
    margin: 0 -24px;
    vertical-align: top;
    font-size: 1.3rem;
    > p {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
    }
    > :first-of-type {
        margin-left: 10px;
    }
`

export const StorageMovieContainer = styled.div`
    width: 800px;
    position: relative;
    overflow: hidden;
    padding: 0 0 1px;
    overflow-x: scroll;
`

export const StorageMovieList = styled.ul`
    display: table;
    margin-top: 10px;
    margin-bottom: 10px;
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
    background-color: white;
    z-index: 2;
    border-spacing: 9px 0;
    border-collapse: separate;
    border-radius: 10px;
    > div {
        height: 100%;
        background-color: #fff;
        width: inherit;
        border-radius: 6px;
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
    }
    > span {
        border-radius: 6px 6px 0 0;
        cursor: pointer;
    }
`

export const StorageMovieTitleBox = styled.div`
    padding: 4px 6px 5px !important;
    white-space: normal;
    display: block;
    > strong {
        max-height: 4.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;

        position: relative;
        z-index: 5;
        color: #242424;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.8rem;
        white-space: normal;
    }
    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;
        position: relative;
        z-index: 5;
        color: #242424;
        color: gray;
        line-height: 1.8rem;
        font-size: 1rem;
        white-space: normal;
        margin-top: 3px !important;
    }
`

export const StorageWatchedContainer = styled.div``
