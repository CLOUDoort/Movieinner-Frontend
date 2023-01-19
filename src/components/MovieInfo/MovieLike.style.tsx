import styled from '@emotion/styled'


export const MovieBtnContainer = styled.div`
    display: flex;
`

type MovieLikeBtnProps = {
    like: boolean
}

export const MovieLikeBtn = styled.div<MovieLikeBtnProps>`
    margin-top: 1rem;
    > svg {
        color: ${(props) => (props.like ? 'red' : 'white')};
        margin-right: 0.625rem;
    }
`

export const HorizontalRule = styled.hr`
    width: 50rem;
    height: 1px;
    @media screen and (max-width: 53.13em) {
        width: 35rem;
    }
    @media screen and (max-width: 37.5em) {
        width: 20rem;
    }
`

