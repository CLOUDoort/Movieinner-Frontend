import styled from '@emotion/styled'

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
    padding: 1rem;
    text-align: center;
    background-color: #1b1b1b;
    border-radius: 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.4);
    > p {
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.7rem;
    }
`
export const ThemeModalItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1.875rem;
    padding: 0.5rem;
`

export const ThemeModalItem = styled.div`
    width: 12.5rem;
    height: 16rem;
    @media screen and (max-width: 50em) {
        width: 10rem;
        height: 15rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 7rem;
        height: 12rem;
    }
    position: relative;
    > span {
        object-fit: contain;
        cursor: pointer;
        border-radius: 0.313rem;
    }
`
export const ThemeModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 2.5rem;
    > p {
        margin-bottom: 0.313rem;
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
        border-radius: 0.313rem;
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
        border-radius: 0.313rem;
    }
`
