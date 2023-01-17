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
    width: 800px;
    flex-direction: column;
    margin-top: 10px;
    > * {
        margin-bottom: 30px;
    }
`

export const SettingDeleteUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
        margin-right: 10px;
        width: 120px;
        text-align: center;
    }
    >:last-of-type {
        background-color: red;
        font-size: 15px;
        padding: 3px 6px;
        border-radius: 5px;
        cursor: pointer;
    }
`

