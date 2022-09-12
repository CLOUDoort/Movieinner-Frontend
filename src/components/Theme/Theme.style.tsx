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
