import styled from '@emotion/styled'

export const CategoryContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

type CategoryProps = {
    transition: boolean;
}

export const CategoryBox = styled.div<CategoryProps>`
    position: absolute;
    top: 60px;
    left: 250px;
    background-color: #ff0000;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.3s;
`

export const CategoryList = styled.div`
    display: grid;
    column-gap: 3px;
    row-gap: 3px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 20px;
    margin-top: 15px;
    font-size: 17px;
`
