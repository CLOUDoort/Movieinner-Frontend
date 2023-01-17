import styled from '@emotion/styled'

export const SettingPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
    >span {
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
    border-radius: 5px;
    > button {
        padding: 8px 16px;
        font-size: 15px;
        background-color: #03d103;
        border: none;
    }
`
export const SettingPwInput = styled.div`
    margin-bottom: 30px;
    > span {
        margin-right: 10px;
    }
    > input {
        padding: 5px 10px;
        border: none;
    }
`