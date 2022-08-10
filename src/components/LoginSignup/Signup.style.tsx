import styled from '@emotion/styled'

export const CurrentTextDiv = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    position: absolute;
    z-index: 100;
    bottom: 120px;
`
export const HorizontalRule = styled.div`
    > hr {
        width: 600px;
        margin-bottom: 80px;
        position: relative;
    }
`

export const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    position: absolute;
    bottom: 60px;
`
export const StatusCircleDiv = styled.div`
    background-color: #3434f2;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 25px;
`
export const CircleDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius: 25px;
`

export const SignupContainerDiv = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
`
export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    > div {
        text-align: start;
        margin-bottom: 10px;
    }
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        color: white;
    }
    > button {
        width: 600px;
        margin-top: 20px;
        font-size: 18px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        color: white;
    }
`

export const CurrentStatusDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    position: relative;
`

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    background-color: gray;
    font-size: 15px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    :hover {
        background-color: white;
    }
`
