import styled from '@emotion/styled'

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 700px 250px;
    row-gap: 50px;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`
export const PostContentArea = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 5px;
`

export const PostCommentArea = styled.div`
    width: 700px;
    border: 1px solid gray;
    height: 250px;
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

export const PostCommentWrite = styled.div``

export const PostCommentList = styled.div``

export const PostModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100;
    background-color: rgba(16, 19, 34, 0.9);
    z-index: 99999;
`

export const PostModalBox = styled.div`
    position: absolute;
    max-width: 700px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: calc(env(safe-area-inset-bottom));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const PostModalTitle = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    background-color: #172036;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    > div {
        width: 50px;
    }
`
export const PostModalModify = styled.ul``
