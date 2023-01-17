import styled from '@emotion/styled'

export const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
`
export const WriteTitle = styled.input`
    background-color: #232428;
    width: 45.313rem;
    color: #fff;
    height: 60px;
    border-radius: 2px;
    font-size: 1.25rem;
    border: 1px solid #303238;
    padding: 18px 25px;
    outline: none;
`
export const WriteBtn = styled.div`
    width: 45rem;
    height: 55px;
    background-color: #232428;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    :last-child {
        background-color: #b7cbc5;
        padding: 10px 1.25rem;
    }
    > button {
        font-size: 1.25rem;
    }
`
