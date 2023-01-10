import styled from '@emotion/styled'

export const HearderFirstNavBox = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 50px;
`

export const HeaderFirstNavTitle = styled.div`
    width: 150px;
    margin-left: 50px;
    flex-shrink: 0;
`

export const HeaderFirstNavList = styled.div`
    display: flex; 
    > button {
        all: unset;
        margin-left: 20px;
        cursor: pointer;
    }
    > * {
        margin-left: 20px;
    }
    >:hover {
        transition: color, 0.2s;
        color: gray;
    }
`