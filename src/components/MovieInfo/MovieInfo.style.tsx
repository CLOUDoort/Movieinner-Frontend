import styled from '@emotion/styled'

export const MovieInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MovieBackdropImgContainer = styled.div`
    width: 800px;
    height: 300px;
    position: relative;
    margin: 20px !important;
    > span {
        border-radius: 10px !important;
        border: 1px solid black !important;
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
    > div {
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const MovieTextOverview = styled.div`
    display: flex;
    > div {
        width: 500px;
        margin-left: 10px;
        margin-right: 10px;
        line-height: 20px;
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

export const HorizontalRule = styled.hr`
    width: 900px;
    height: 3px;
`
