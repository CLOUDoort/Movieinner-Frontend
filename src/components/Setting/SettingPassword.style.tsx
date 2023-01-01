import styled from '@emotion/styled'

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
    min-width: 600px;
    min-height: 400px;
    border: 1px solid gray;
`
export const SettingPwInput = styled.div`
    margin-bottom: 20px;
    > span {
        margin-right: 10px;
    }
    > input {
        padding: 4px 8px;
    }
`