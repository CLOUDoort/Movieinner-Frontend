import styled from '@emotion/styled'

export const Header = styled.head`
    display: flex;
    flex-direction: row;
`

export const DivContainer = styled.div`
    text-align: center;
    color: blue;
    font-size: 30px;
`

export const FormContainer = styled.form`
    text-align: center;
    color: black;
    > div > input {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    > div > textarea {
        font-size: 20px;
    }
`
