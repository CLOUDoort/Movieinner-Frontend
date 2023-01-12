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
    width: 400px;
    height: 500px;
    background-color: white;
    top: 65px;
    right: 200px;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.3s;
    color: black;
    padding: 5px;
    > :first-of-type {
        margin: 10px;
    }
`

export const HeaderNotiModalList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    :hover {
        background-color: rgba(128, 128, 128, 0.4);
    }
    > div > span {
        border-radius: 50%;
        object-fit: scale-down;
    }

    > div {
        display: flex;
        > div {
        font-size: 13px;
        display: flex;
        align-items: center;
        > div {
            margin-left: 5px;
        }
    }
    }
    
`
type HeaderNotiProps = {
    number: number
}

export const HeaderNotiNum = styled.div<HeaderNotiProps>`
display: ${(props) => props.number ? 'block' : 'none'};
position: absolute;
background-color: ${(props) => props.number ? "#ff3232" : null} ;
border-radius: 50%;
padding: 1px 10px;
top: 15px;
right: 190px;
`
