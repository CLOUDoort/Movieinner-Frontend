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
    width: 300px;
    height: 350px;
    background-color: white;
    top: 65px;
    right: 200px;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.3s;
`

export const HeaderNotiModalList = styled.div`
    display: flex;
    
`