import styled from '@emotion/styled'

export const HeaderMenuModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1001;
`

type HeaderMenuModalProps = {
    height: boolean
}


export const HeaderMenuModalBox = styled.div<HeaderMenuModalProps>`
    position: absolute;
    width: 100%;
    top: 5rem;
    background-color: #000000;
    border-bottom: 1px solid red;
    color: white;
    overflow: hidden;
    max-height: ${(props) => props.height ? '15rem' : 0};
    transition: max-height 0.4s;
    > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        > :hover {
            transition: background-color 0.4s;
            background-color : red;
        }
        > button {
            border: none;
            background-color: #2e2e2e;
            color: white;
        }
        > * {
            padding: 0.3rem;
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
        }
    }
`