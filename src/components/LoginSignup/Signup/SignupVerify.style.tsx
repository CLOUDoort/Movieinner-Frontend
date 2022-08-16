import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    width: 700px;
    height: 500px;
    background-color: #907171;
    border-radius: 12px;
    > div > span {
        border-radius: 50%;
        margin-bottom: 20px;
    }
`

export const ContainerTitle = styled.div`
    font-size: 30px;
`

export const ContainerProfile = styled.div`
    > div {
        margin-top: 15px;
    }
`
export const FailText = styled.div`
    > p {
        color: red;
    }
`

export const ContainerText = styled.div`
    > div {
        margin-bottom: 10px;
    }
`

export const ContainerBtn = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-evenly;
    > button {
        background-color: white;
        padding: 8px 16px;
        border: none;
    }
`
