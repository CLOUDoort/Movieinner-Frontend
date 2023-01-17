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
        > :first-of-type {
            margin-bottom: 0.625rem;
        }
    }
    > div {
        margin-left: 1.25rem;
        >:first-of-type {
            display: flex;
            > span {
                margin-left: 0.625rem;
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
    padding-right: 0.98rem;
    > span {
        border-radius: 50%;
        margin: 1.25rem;
        object-fit: scale-down;
    }
    > label {
        background-color: #05ce05;
        font-size: 13px;
        padding: 3px 6px;
        width: 5.313rem;
        border-radius: 0.313rem;
        cursor: pointer;
        margin-bottom: 0.313rem;
        margin-top: 0.313rem;
        text-align: center;
    }
    >:last-of-type {
        background-color: red;
    }
`