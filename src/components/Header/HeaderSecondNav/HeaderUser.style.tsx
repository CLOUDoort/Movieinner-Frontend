import styled from '@emotion/styled'

type modalProps = {
    modal: boolean
}
export const HeaderNotiBox = styled.div<modalProps>`
    display: flex;
    align-items: center;
    > svg {
        justify-content: center;
        transition: color 0.2s;
        margin-left: -0.625rem;
        color: ${(props) => props.modal ? 'red' : null};
        :hover {
            color: gray;
        }
        @media screen and (max-width: 25.63em) {
            display: none;
        }
    }
`
export const HeaderUserBox = styled.div`
    margin-left: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        > div {margin-left : 0.7rem;}
        > span {
            border-radius: 50%;
        }
    }
    >:first-of-type {
        cursor: pointer;
    }
    > button {
        font-size: 1rem;
        margin-right: 0.625rem;
        border: none;
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 37.5em) {
        > :first-of-type > div {
            display: none;
        }
    }
`

export const HeaderSettingBox = styled.div`
    position: absolute;
    background-color: white;
    min-width: 6.25rem;
    height: 5rem;
    top: 4rem;
    right: 3.5rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        display: flex;
        flex-direction: column;
        > button {
            padding: 0.3rem 0.625rem;
            margin-bottom: 0.3rem;
            border: none;
            background-color: white;
        }
    }
    @media screen and (max-width: 37.5em) {
        top: 4.5rem;
        right: 2rem;
    }
`