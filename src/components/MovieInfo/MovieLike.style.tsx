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
