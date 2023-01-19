import styled from '@emotion/styled'

export const MovieActorScroll = styled.div`
    padding-top: 0.813rem;
    padding-bottom: 3px;
    position: relative;
    margin: 0 -1.5rem;
    vertical-align: top;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    width: 50rem;
    @media screen and (max-width: 53.13em) {
        font-size: 1.1rem;
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        font-size: 1rem;
        width: 23rem;
    }
    > :first-of-type {
        font-weight: bold;
        margin-left: 1.6rem;
        margin-bottom: 0.5rem;
    
    }
`

export const MovieActorContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0 0 1px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 1px;
      height: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
     border-radius: 2px;
      background: red;
    }
    `

export const MovieActorList = styled.ul`
    display: table;
    margin-top: 0.625rem;
    border-spacing: 9px 0;
    border-collapse: separate;
    table-layout: fixed;
    white-space: nowrap;
    font-size: 0;
    line-height: 0;
    margin-bottom: 0.7rem;
`
export const ActorAreaCard = styled.li`
    width: 9.063rem !important;
    display: table-cell;
    position: relative;
    white-space: normal;
    vertical-align: top;
    z-index: 2;
    border-spacing: 0.563rem 0;
    border-collapse: separate;
    border-radius: 0.625rem;
    > div {
        height: 100%;
        width: inherit;
        border-radius: 6px;
        ::before {
            background-color: black;
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

export const ActorImageBox = styled.div`
    display: block;
    position: relative;
    width: 9.063rem !important;
    height: 10.625rem !important;
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
    }
    `

export const ActorTitleBox = styled.div`
    padding: 4px 6px 0.313rem !important;
    white-space: normal;
    display: block;
    > strong {
        max-height: 4.8rem;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;
        position: relative;
        z-index: 5;
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
        color: white;
        line-height: 1.8rem;
        font-size: 1rem;
        white-space: normal;
        margin-top: 3px !important;
    }
`
