import styled from '@emotion/styled'

export const PostBox = styled.div`
    width: 750px;
    min-width: 750px;
    margin: auto;
    background-color: #545454;
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: 5px;
    overflow: hidden;
`

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 700px 250px;
    row-gap: 50px;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 20px;
    position: relative;
    height: auto;
    overflow-y: auto;
`
export const PostContentArea = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    > div {
        display: flex;
        > svg {
            cursor: pointer;
        }
    }
    > :first-of-type {
        width: 60px;
    }
`

export const PostContents = styled.div`
    padding: 16px 24px;
    width: 700px;
    > :first-of-type {
        padding-bottom: 10px;
    }
`
