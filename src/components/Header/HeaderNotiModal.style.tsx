import styled from '@emotion/styled'

type transitionProps = {
    transition: boolean
}
export const HeaderNotiModalContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`
export const HeaderNotiModalBox = styled.div<transitionProps>`
    position: absolute;
    width: 25%;
    height: 60%;
    background-color: white;
    top: 9%;
    right: 14%;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.5s;
`

export const HeaderNotiModalList = styled.div`
    display: flex;
    
`