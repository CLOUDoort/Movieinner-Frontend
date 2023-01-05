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
    flex-direction: column;
    /* min-width: 800px; */
    margin-top: 10px;
    > div {
        margin-bottom: 30px;
    }
    >:nth-of-type(2) {
        >:first-of-type {
            ::after {
                margin-left: 10px;
                content: '|';
            }
        }
        >span {
            margin-right: 10px;
        }
        >:last-of-type {
            background-color: red;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`

export const SettingDeleteUser = styled.div`
    > span {
        margin-right: 10px;
    }
    >:first-of-type {
        ::after {
            margin-left: 10px;
            content: '|';
        }
    }
    >:last-of-type {
        background-color: red;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const SettingModifyImage = styled.div`
    display: flex;
    flex-direction: column;
    > span {
        border-radius: 50%;
        margin: 20px;
        object-fit: scale-down;
    }
    > label {
        background-color: #05ce05;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 10px;
        margin-top: 10px;
        text-align: center;
    }
    >:last-of-type {
        background-color: red;
        text-align: center;
    }
`