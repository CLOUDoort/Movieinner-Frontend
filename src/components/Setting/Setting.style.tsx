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
    > div {
        margin-bottom: 30px;
    }
    >:nth-of-type(2) {
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

export const SettingModifyImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gray;
    padding-right: 15px;
    > span {
        border-radius: 50%;
        margin: 20px;
        object-fit: scale-down;
    }
    > label {
        background-color: #05ce05;
        font-size: 13px;
        padding: 3px 6px;
        width: 85px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 5px;
        margin-top: 5px;
        text-align: center;
    }
    >:last-of-type {
        background-color: red;
    }
`