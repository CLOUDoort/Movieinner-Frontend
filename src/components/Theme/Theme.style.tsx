import styled from '@emotion/styled'

export const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    > p {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
export const ThemeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
`
export const ThemeItemContainer = styled.div`
    width: 450px;
    height: 350px;
    position: relative;
    cursor: pointer;
    > span {
        border-radius: 5px;
    }
    > div {
        position: absolute;
        bottom: 100px;
        left: 30px;
        font-size: 20px;
    }
`

export const ThemeModalBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`

export const ThemeModalContainer = styled.div`
    position: absolute;
    padding: 40px;
    text-align: center;
    background-color: #282727;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    /* background-clip: padding-box; */
`
export const ThemeModalItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 30px;
`

export const ThemeModalItem = styled.div`
    width: 200px;
    height: 270px;
    position: relative;
    > span {
        object-fit: contain;
    }
`
export const ThemeModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
`
export const ThemeCloseBtn = styled.div`
    position: absolute;
    top: 5px;
    right: 15px;
    background-color: transparent;
`
