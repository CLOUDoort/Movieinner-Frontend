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
    top: 4rem;
    left: 15.5rem;
    background-color: #ff0000;
    width: 20rem;
    height: 14.5rem;
    border-radius: 5px;
    opacity: ${(props) => props.transition ? 1 : 0};
    transition: opacity 0.4s;
`

export const CategoryList = styled.div`
    display: grid;
    column-gap: 0.1rem;
    row-gap: 0.1rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 1.3rem;
    margin-top: 1.2rem;
    font-size: 1rem;
`
