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

export const ThemeSlideContainer = styled.div`
    position: relative;
    > img {
        border-radius: 20px;
    }
    > div {
        position: absolute;
        bottom: 30px;
        left: 100px;
        mix-blend-mode: difference;
        font-size: 20px;
    }
`

export const ThemeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
`
export const ThemeItemContainer = styled.div`
    width: 350px;
    height: 200px;
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
        mix-blend-mode: difference;
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
    padding: 10px;
    text-align: center;
    background-color: #282727;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    > p {
        margin-bottom: 20px;
        font-size: 25px;
    }
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
    > p {
        margin-bottom: 5px;
    }
`

export const ThemeLikeBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 60px;
    cursor: pointer;
    > svg {
        color: #fefefe;
        border-radius: 5px;
    }
`

export const ThemeCloseBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    > svg {
        color: #fefefe;
        border-radius: 5px;
    }
`
