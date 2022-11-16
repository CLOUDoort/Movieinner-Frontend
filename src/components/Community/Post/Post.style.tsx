import styled from '@emotion/styled'

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
    width: 700px;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 10px;
`
export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    > div {
        margin-right: 10px;
        display: flex;
        > svg {
            cursor: pointer;
        }
    }
    > :first-of-type {
        width: 60px;
    }
    > :last-of-type {
        max-width: 400px;
    }
`

export const PostContents = styled.div`
    padding: 16px 24px;
    width: 700px;
    > :first-of-type {
        padding-bottom: 10px;
    }
`
