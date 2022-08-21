import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 700px;
    height: 500px;
    background-color: #907171;
    border-radius: 12px;
    > div > span {
        border-radius: 50%;
        margin-bottom: 20px;
    }
`

export const ContainerTitle = styled.div`
    font-size: 30px;
`

export const ContainerProfile = styled.div`
    > div {
        margin-top: 15px;
    }
`
export const FailText = styled.div`
    > p {
        color: red;
    }
`

export const ContainerText = styled.div`
    > div {
        margin-bottom: 10px;
    }
`

export const ContainerBtn = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    > div {
        display: flex;
        justify-content: center;
    }
    > div > button {
        background-color: white;
        padding: 8px 16px;
        border: none;
        margin-left: 10px;
    }
    > div > p {
        font-size: 20px;
        margin-top: 20px;
    }
`
export const VerifyFailText = styled.div`
    > p {
        color: red;
        font-size: 20px;
    }
`
export const LoadingContainer = styled.div`
    margin: 230px auto;
    height: 100px;
    position: relative;
    width: 100px;
    border-radius: 100%;
    :hover :first-child {
        border-color: transparent #e45635 transparent #e45635;
    }
    :hover:first-child,
    :first-child {
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`

export const Loading = styled.div`
    height: 200px;
    position: relative;
    width: 200px;
    border-radius: 100%;
    right: 50px;
    bottom: 45px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    border: 2px solid transparent;
    border-color: transparent #fff transparent #fff;
    -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
    -moz-transform-origin: 50% 50%;
    -o-animation: rotate-loading 1.5s linear 0s infinite normal;
    -o-transform-origin: 50% 50%;
    -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
    -webkit-transform-origin: 50% 50%;
    animation: rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
`
export const LoadingText = styled.div`
    -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
    -o-animation: loading-text-opacity 2s linear 0s infinite normal;
    -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
    animation: loading-text-opacity 2s linear 0s infinite normal;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 45px;
    opacity: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 100px;
`
