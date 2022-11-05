import styled from '@emotion/styled'

export const PostModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.4);
`

export const PostModalContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    bottom: calc(env(safe-area-inset-bottom));
`

export const PostModalBox = styled.div`
    position: relative;
    padding-top: 12px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    background: rgb(0, 0, 0, 0.9);
    flex-direction: column;
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
    animation: fadeInUp 1s;
`

export const PostModalTitle = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px 16px;
    > button {
        background-size: 100% 100%;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
    }
`
export const PostModalContents = styled.ul`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px 40px;
    /* justify-content: center;
    align-items: center; */
    > li {
        display: list-item;
        > button {
            width: 100%;
            padding-top: 11px;
            padding-bottom: 12px;
            padding-right: 4px;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            color: #d4d9e1;
            text-align: left;
            cursor: pointer;
            border: none;
            outline: none;
            background: none;
        }
    }
`
export const PostConfirmModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    > div {
        border: 1px solid gray;
        padding: 30px 50px;
        border-radius: 5px;
        > div {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            > button {
                border: none;
                padding: 8px 16px;
                background-color: white;
            }
        }
    }
`
