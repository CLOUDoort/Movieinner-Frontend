import styled from '@emotion/styled'

export const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WriteTitle = styled.input`
    background-color: #232428;
    width: 725px;
    color: #fff;
    height: 45px;
    border-radius: 2px;
    margin-top: 10px;
    font-size: 13px;
    border: 1px solid #303238;
    padding: 18px 25px;
    outline: none;
`
export const WriteBtn = styled.div`
    width: 720px;
    height: 55px;
    background-color: #232428;
    display: flex;
    justify-content: space-between;
    :last-child {
        background-color: #96f2d7;
        border: none;
        padding: 10px 20px;
    }
`
