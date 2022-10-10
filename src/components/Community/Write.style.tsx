import styled from '@emotion/styled'

export const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const WriteTitle = styled.input`
    background-color: #232428;
    width: 725px;
    color: #fff;
    height: 60px;
    border-radius: 2px;
    font-size: 20px;
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
        background-color: #b7cbc5;
        padding: 10px 20px;
    }
    > button {
        font-size: 20px;
    }
`
