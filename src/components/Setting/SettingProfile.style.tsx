import styled from '@emotion/styled'

export const SettingProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    > :last-of-type {
        text-align: center;
    }
`

export const SettingProfileInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    @media screen and (max-width: 23.75em) {
        flex-direction: column;
        > div {
            margin-bottom: 10px;
        }
    }
    > div {
        margin-left: 20px;
        >:first-of-type {
            display: flex;
            > span {
                margin-left: 10px;
            }
        }
    }
`

export const SettingModifyImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gray;
    @media screen and (max-width: 23.75em) {
        border: none;
    }
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