import styled from '@emotion/styled'

export const SettingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SettingBox = styled.div`
    display: flex;
    justify-content: center;
    width: 50rem;
    flex-direction: column;
    margin-top: 0.625rem;
    @media screen and (max-width: 23.75em) {
        width: 20rem;
    }
    > * {
        margin-bottom: 1.875rem;
    }
`

export const SettingDeleteUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        margin-right: 0.625rem;
        width: 7.5rem;
        text-align: center;
    }
    >:last-of-type {
        background-color: red;
        font-size: 1rem;
        padding: 3px 6px;
        border-radius: 5px;
        cursor: pointer;
    }
`

