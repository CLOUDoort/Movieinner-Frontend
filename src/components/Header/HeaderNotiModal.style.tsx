import styled from '@emotion/styled'

export const HeaderNotiModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`

type transitionProps = {
    transition: boolean
}

export const HeaderNotiModalBox = styled.div<transitionProps>`
    position: absolute;
    width: 400px;
    height: 600px;
    background-color: white;
    top: 65px;
    right: 115px;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 1s;
`