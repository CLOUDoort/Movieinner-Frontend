import styled from '@emotion/styled'

export const CurrentStatusDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    position: relative;
`
export const CurrentTextDiv = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    font-size: 0.938rem;
    position: absolute;
    z-index: 100;
    bottom: 120px;
    > :nth-of-type(1) {
        padding-left: 10px;
    }
    > :nth-of-type(2) {
        padding-left: 0.938rem;
    }
`
export const HorizontalRule = styled.div`
    > hr {
        width: 550px;
        margin-bottom: 75px;
        position: relative;
    }
`

export const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 550px;
    position: absolute;
    bottom: 60px;
`
export const StatusCircleDiv = styled.div`
    background-color: #3434f2;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 25px;
`
export const CircleDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 25px;
`
