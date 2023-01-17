import styled from '@emotion/styled'

export const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    > p {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    }
`

export const ThemeSlideContainer = styled.div`
    position: relative;
    > img {
        border-radius: 1.25rem;
    }
    > div {
        position: absolute;
        bottom: 1.875rem;
        left: 6.25rem;
        mix-blend-mode: difference;
        font-size: 1.25rem;
    }
`

export const ThemeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.875rem;
    @media screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
    }
`
export const ThemeItemContainer = styled.div`
    width: 21rem;
    height: 12rem;
    position: relative;
    margin-bottom: 1.875rem;
    @media screen and (max-width: 50em) {
        width: 18rem;
        height: 10rem;
        > div {
            font-size: 1rem;
        }
    }
    > span {
        cursor: pointer;
        border-radius: 5px;
    }
    > div {
        position: absolute;
        bottom: 1rem;
        left: 1.875rem;
        font-size: 1.25rem;
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
    padding: 0.625rem;
    text-align: center;
    background-color: #282727;
    border-radius: 0.625rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    > p {
        margin-bottom: 1.25rem;
        font-size: 1.563rem;
    }
`
export const ThemeModalItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1.875rem;
`

export const ThemeModalItem = styled.div`
    width: 12.5rem;
    height: 16.875rem;
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
    height: 2.5rem;
    > p {
        margin-bottom: 5px;
    }
`

type ThemeLikeBtnProps = {
    like: boolean
}

export const ThemeLikeBtn = styled.div<ThemeLikeBtnProps>`
    position: absolute;
    top: 0.625rem;
    right: 3.75rem;
    cursor: pointer;
    > svg {
        border-radius: 5px;
        color: ${(props) => (props.like ? 'red' : 'white')};
    }
`
export const ThemeCloseBtn = styled.div`
    position: absolute;
    top: 0.625rem;
    right: 0.9rem;
    cursor: pointer;
    > svg {
        color: #fefefe;
        border-radius: 5px;
    }
`
