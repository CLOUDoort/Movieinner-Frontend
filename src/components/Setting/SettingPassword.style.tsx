import styled from '@emotion/styled'

export const SettingPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
    @media screen and (max-width: 23.75em) {
        > :first-of-type {
            display: none;
        }
    }
    >span {
        margin-right: 0.625rem;
        width: 7.5rem;
        text-align: center;
    }
    >:nth-child(2) {
        background-color: red;
        font-size: 1rem;
        padding: 3px 6px;
        border-radius: 0.313rem;
        cursor: pointer;
    }
`

export const SettingPwModalContainer = styled.div`
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

export const SettingPwModalBox = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 37.5rem;
    height: 25rem;
    border: 1px solid gray;
    @media screen and (max-width: 40.63em) {
        width: 23rem;
        height: 16rem;
    }
    border-radius: 0.313rem;
    > button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #03d103;
        border: none;
    }
`
export const SettingPwInput = styled.div`
    margin-bottom: 1.875rem;
    > span {
        margin-right: 0.625rem;
    }
    > input {
        padding: 0.313rem 0.625rem;
        border: none;
    }
`