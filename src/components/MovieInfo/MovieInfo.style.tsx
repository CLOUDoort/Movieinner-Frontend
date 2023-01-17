import styled from '@emotion/styled'

export const MovieInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MovieBackdropImgContainer = styled.div`
    width: 50rem;
    height: 300px;
    position: relative;
    margin: 1.25rem !important;
    > span {
        border-radius: 10px !important;
        border: 1px solid black !important;
        cursor: pointer;
    }
`

export const MovieInfoMiddleContainer = styled.div`
    display: flex;
`

export const MovieTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    > div {
        margin-top: 10px;
    }
`

export const MovieTextTitle = styled.div`
    display: flex;
    > p {
        font-weight: bold;
        font-size: large;
    }
    > div {
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const MovieTextOverview = styled.div`
    display: flex;
    > p {
        font-weight: bold;
        font-size: large;
    }
    > div {
        width: 500px;
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const MovieFosterImgContainer = styled.div`
    width: 200px;
    height: 300px;
    position: relative;
    > span {
        border-radius: 10px !important;
        border: 1px solid black !important;
    }
`

export const MovieBtnContainer = styled.div`
    display: flex;
`

type MovieLikeBtnProps = {
    like: boolean
}

export const MovieLikeBtn = styled.div<MovieLikeBtnProps>`
    > svg {
        color: ${(props) => (props.like ? 'red' : 'white')};
        margin-right: 10px;
    }
`

export const HorizontalRule = styled.hr`
    width: 50rem;
    height: 1px;
`

export const MovieActorScroll = styled.div`
    padding-top: 13px;
    padding-bottom: 3px;
    position: relative;
    margin: 0 -24px;
    vertical-align: top;
    font-size: 1.3rem;
    > :first-of-type {
        font-weight: bold;
        margin-left: 1.6rem;
        margin-bottom: 0.5rem;
    @media screen and (max-width: 50em) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 37.5em) {
        font-size: 1rem;
    }
    }
`

export const MovieActorContainer = styled.div`
    width: 43.75rem;
    @media screen and (max-width: 50em) {
        width: 32rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 20rem;
    }
    position: relative;
    overflow: hidden;
    padding: 0 0 1px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 1px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
     border-radius: 2px;
      background: red;
    }
    `

export const MovieActorList = styled.ul`
    display: table;
    margin-top: 10px;
    border-spacing: 9px 0;
    border-collapse: separate;
    table-layout: fixed;
    white-space: nowrap;
    font-size: 0;
    line-height: 0;
    margin-bottom: 0.7rem;
`
export const ActorAreaCard = styled.li`
    width: 145px !important;
    display: table-cell;
    position: relative;
    white-space: normal;
    vertical-align: top;
    z-index: 2;
    border-spacing: 9px 0;
    border-collapse: separate;
    border-radius: 10px;
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
    width: 145px !important;
    height: 170px !important;
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
        cursor: pointer;
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
