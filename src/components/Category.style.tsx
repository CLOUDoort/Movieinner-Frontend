import styled from '@emotion/styled'

export const CategoryContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

export const CategoryBox = styled.div`
    position: absolute;
    top: 80px;
    left: 300px;
    right: 0;
    bottom: 0;
    background-color: #ff0000;
    width: 300px;
    height: 200px;
    border-radius: 5px;
`

export const CategoryList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 20px;
    margin-top: 15px;
`
