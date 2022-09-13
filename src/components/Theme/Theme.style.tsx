import styled from '@emotion/styled'

export const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
export const ThemeItem = styled.div`
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
