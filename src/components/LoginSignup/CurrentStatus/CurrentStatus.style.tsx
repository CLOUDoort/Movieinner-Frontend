import styled from '@emotion/styled'

export const CurrentStatusDiv = styled.div`
    display: flex;
    flex-direction: column;
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
    z-index: 100;
    bottom: 120px;
`
export const HorizontalRule = styled.div`
    > hr {
        width: 600px;
        margin-bottom: 85px;
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
