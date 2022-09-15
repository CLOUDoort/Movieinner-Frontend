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
    column-gap: 30px;
    row-gap: 30px;
`
export const ThemeItemContainer = styled.div`
    width: 400px;
    height: 300px;
    position: relative;
    margin-bottom: 30px;
    > span {
        cursor: pointer;
        border-radius: 5px;
    }
    > div {
        position: absolute;
        bottom: 30px;
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
    > p {
        margin-bottom: 10px;
        font-size: 25px;
    }
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
        cursor: pointer;
        border-radius: 5px;
    }
`
export const ThemeModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
    margin-top: 5px;
    > p {
        margin-top: 5px;
    }
`
export const ThemeCloseBtn = styled.div`
    position: absolute;
    top: 5px;
    right: 15px;
    background-color: transparent;
    cursor: pointer;
`
