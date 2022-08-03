import styled from '@emotion/styled'

export const SignupContainerDiv = styled.div`
    height: 490px;
    margin: 20px;
    text-align: center;
    box-shadow: 1px 2px 6px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        height: 70px;
    }
`
export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    > input {
        width: 600px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
    }
    > button {
        width: 600px;
        margin-top: 20px;
        font-size: 20px;
        padding: 8px 16px;
        background-color: black;
        border: none;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
    }
`

export const CurrentStatusDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    position: relative;
`

export const CurrentTextDiv = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    position: absolute;
    margin-bottom: 100px;
`
export const HorizontalRule = styled.div`
    width: 600px;
    position: relative;
`

export const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    position: absolute;
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

export const ProgressBtn = styled.button`
    width: 300px;
    border: none;
    border-radius: 5px;
    background-color: gray;
    font-size: 15px;
    padding: 10px;
`
